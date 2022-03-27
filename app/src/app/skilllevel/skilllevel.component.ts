import { Component, OnInit, ViewChild } from '@angular/core';
import { Skilllevel } from './skilllevel';
import { SkilllevelService } from './skilllevel.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { DialogComponentDialog } from '../dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-skilllevel',
  templateUrl: './skilllevel.component.html',
  styleUrls: ['./skilllevel.component.scss']
})
export class SkilllevelComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'action'];
  skillform: FormGroup = new FormGroup({})
  selectedIndex: number = -1
  skilllevels: Skilllevel[] = []
  newSkilllevel:Skilllevel = {id: -1, name: ''} as Skilllevel

  constructor(
    private skilllevelService: SkilllevelService,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.skillform = this._formBuilder.group({
      rows: this._formBuilder.array([])
    });

    this.skilllevelService.getAll().subscribe(levels => {
      console.log("received ",levels)
      this.skillform = this.fb.group({
        rows: this.fb.array(levels.map(val => this.fb.group({
          id: new FormControl(val.id),
          name: new FormControl({value: val.name, disabled: true}),
          action: new FormControl('existingRecord'),
          isEditing: new FormControl(false),
          isNew: new FormControl(false)
        })
        )) //end of fb array
      }); // end of form group cretation
      this.dataSource = new MatTableDataSource((this.skillform.get('rows') as FormArray).controls);
    })
  }

  cancel(index: number){
    this.selectedIndex = -1
    const rows:FormArray = this.skillform.get('rows') as FormArray
    if(rows.at(index)?.get('isNew')?.value){
      this.dataSource = new MatTableDataSource<any>();
      this.loadData()
    } else {
      rows.at(index)?.get('isEditing')?.patchValue(false)
      rows.at(index)?.get('name')?.disable()
    }
  }

  edit(index: number){
    const rows:FormArray = this.skillform.get('rows') as FormArray
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
        const rows:FormArray = this.skillform.get('rows') as FormArray
        rows.at(this.selectedIndex).get('isEditing')?.patchValue(false)
        const id = rows.at(this.selectedIndex).get('id')?.value
        this.skilllevelService.delete(id).subscribe(result => {
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
    const rows:FormArray = this.skillform.get('rows') as FormArray
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
    const rows:FormArray = this.skillform.get('rows') as FormArray
    rows.at(index).get('isEditing')?.patchValue(false)
    rows.at(index).get('isNew')?.patchValue(false)
    rows.at(index).get('name')?.disable()
    const skilllevel = this.buildSkilllevel(index)
    if(skilllevel.id){
      this.skilllevelService.update(skilllevel).subscribe(skillevel => {

      })
    } else {
      this.skilllevelService.create(skilllevel).subscribe(skillevel => {
        rows.at(index).get('id')?.patchValue(skillevel.id)
      })
    }

  }

  isDisabled(index: number): boolean {
    return (this.selectedIndex >=0 && index !== this.selectedIndex) ? true : false
  }

  isEditing(index: number): boolean {
    const rows:FormArray = this.skillform.get('rows') as FormArray
    return rows.at(index).get('isEditing')?.value || rows.at(index).get('isNew')?.value
  }

  buildSkilllevel(index: number): Skilllevel {
    const rows: FormArray = this.skillform.get('rows') as FormArray
    const row = rows.at(index) as FormGroup
    return new Skilllevel(
      row.get('id')?.value as number,
      row.get('name')?.value as string
    )
  }
}
