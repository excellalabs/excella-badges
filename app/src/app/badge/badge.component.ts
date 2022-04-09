import { Component, OnInit, ViewChild } from '@angular/core';
import { Badge } from './badge';
import { BadgeService } from './badge.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { DialogComponentDialog } from '../dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-Badge',
  templateUrl: './Badge.component.html',
  styleUrls: ['./Badge.component.scss']
})
export class BadgeComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'action'];
  form: FormGroup = new FormGroup({})
  selectedIndex: number = -1
  Badges: Badge[] = []
  newBadge:Badge = {id: -1, name: ''} as Badge

  constructor(
    private BadgeService: BadgeService,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.form = this._formBuilder.group({
      rows: this._formBuilder.array([])
    });

    this.BadgeService.getAll().subscribe(levels => {
      console.log("received ",levels)
      this.form = this.fb.group({
        rows: this.fb.array(levels.map(val => this.fb.group({
          id: new FormControl(val.id),
          name: new FormControl({value: val.name, disabled: true}),
          action: new FormControl('existingRecord'),
          isEditing: new FormControl(false),
          isNew: new FormControl(false)
        })
        )) //end of fb array
      }); // end of form group cretation
      this.dataSource = new MatTableDataSource((this.form.get('rows') as FormArray).controls);
    })
  }

  cancel(index: number){
    this.selectedIndex = -1
    const rows:FormArray = this.form.get('rows') as FormArray
    if(rows.at(index)?.get('isNew')?.value){
      this.dataSource = new MatTableDataSource<any>();
      this.loadData()
    } else {
      rows.at(index)?.get('isEditing')?.patchValue(false)
      rows.at(index)?.get('name')?.disable()
    }
  }

  getActive(index: number): string {
    if(index === this.selectedIndex)
      return "active"
    else
      return "inactive"
  }

  checkActivate(index: number): void {
    const rows:FormArray = this.form.get('rows') as FormArray
    const isNew = rows.at(index)?.get('isNew')?.value
    const isEditing = rows.at(index)?.get('isEditing')?.value
    if(!isNew && !isEditing && this.selectedIndex==-1){
      this.edit(index)
    }
  }

  edit(index: number){
    const rows:FormArray = this.form.get('rows') as FormArray
    rows.at(index).get('isEditing')?.patchValue(true)
    rows.at(index).get('name')?.enable()
    this.selectedIndex = index
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentDialog, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const rows:FormArray = this.form.get('rows') as FormArray
        rows.at(this.selectedIndex).get('isEditing')?.patchValue(false)
        const id = rows.at(this.selectedIndex).get('id')?.value
        this.BadgeService.delete(id).subscribe(result => {
          this.dataSource = new MatTableDataSource<any>();
          this.loadData()
        })
      }
      this.selectedIndex = -1
    });
  }

  delete(index: number): void {
    this.selectedIndex = index
    this.openDialog()
  }

  create(){
    const rows:FormArray = this.form.get('rows') as FormArray
    rows.push(new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      action: new FormControl('existingRecord'),
      isEditing: new FormControl(false),
      isNew: new FormControl(true)
    }))
    this.selectedIndex = rows.length-1
    this.dataSource = new MatTableDataSource((rows).controls);
  }

  update(index: number): void {
    this.selectedIndex = -1
    const rows:FormArray = this.form.get('rows') as FormArray
    rows.at(index).get('isEditing')?.patchValue(false)
    rows.at(index).get('isNew')?.patchValue(false)
    rows.at(index).get('name')?.disable()
    const record = this.buildRecord(index)
    if(record.id){
      this.BadgeService.update(record).subscribe()
    } else {
      this.BadgeService.create(record).subscribe(record => {
        rows.at(index).get('id')?.patchValue(record.id)
      })
    }

  }

  isDisabled(index: number): boolean {
    return (this.selectedIndex >=0 && index !== this.selectedIndex) ? true : false
  }

  isEditing(index: number): boolean {
    const rows:FormArray = this.form.get('rows') as FormArray
    return rows.at(index).get('isEditing')?.value || rows.at(index).get('isNew')?.value
  }

  buildRecord(index: number): Badge {
    const rows: FormArray = this.form.get('rows') as FormArray
    const row = rows.at(index) as FormGroup
    return new Badge(
      row.get('id')?.value as number,
      row.get('name')?.value as string
    )
  }
}
