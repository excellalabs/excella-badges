import { Component, OnInit, ViewChild } from '@angular/core';
import { BadgeType } from './badgetype';
import { BadgeTypeService } from './badgetype.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { DialogComponentDialog } from '../dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-badgetype',
  templateUrl: './badgetype.component.html',
  styleUrls: ['./badgetype.component.scss']
})
export class BadgeTypeComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'action'];
  form: FormGroup = new FormGroup({})
  selectedIndex: number = -1
  badgetypes: BadgeType[] = []
  newBadgeType:BadgeType = {id: -1, name: ''} as BadgeType

  constructor(
    private badgeTypeService: BadgeTypeService,
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

    this.badgeTypeService.getAll().subscribe(levels => {
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
        this.badgeTypeService.delete(id).subscribe(result => {
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
      this.badgeTypeService.update(record).subscribe()
    } else {
      this.badgeTypeService.create(record).subscribe(record => {
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

  buildRecord(index: number): BadgeType {
    const rows: FormArray = this.form.get('rows') as FormArray
    const row = rows.at(index) as FormGroup
    return new BadgeType(
      row.get('id')?.value as number,
      row.get('name')?.value as string
    )
  }
}
