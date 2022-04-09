import { Component, OnInit, ViewChild } from '@angular/core';
import { Skill, SkillDto } from './skill';
import { SkillService } from './skill.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { DialogComponentDialog } from '../dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Capability } from '../capability/capability';
import { Skilllevel } from '../skilllevel/skilllevel';
import { CapabilityService } from '../capability/capability.service';
import { SkilllevelService } from '../skilllevel/skilllevel.service';
import { NgMaterialModule } from '../ng-material/ng-material.module';

const emptyGroup: FormGroup = new FormGroup({
  id: new FormControl(-1),
  name: new FormControl(),
  capability: new FormControl(),
  skilllevel:new FormControl(),
  action: new FormControl('existingRecord'),
  isEditing: new FormControl(false),
  isNew: new FormControl(false)
})

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'capability', 'action'];
  form: FormGroup = new FormGroup({})
  selectedIndex: number = -1
  records: Skill[] = []
  capabilities: Capability[] = []
  skilllevels: Skilllevel[] = []
  selectedElement: FormGroup = emptyGroup
  selectedEntry:Skill = {id: -1, name: ''} as Skill

  updatedCapability: Capability = new Capability()
  updatedSkillevel: Skilllevel = new Skilllevel()

  constructor(
    private service: SkillService,
    private capabilityService: CapabilityService,
    private skilllevelService: SkilllevelService,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getRelatedData()
    this.buildForm()
  }

  private initialize(){
    this.selectedElement = emptyGroup
    this.selectedEntry = {id: -1, name: ''} as Skill
    this.updatedCapability = new Capability()
  }

  /**
   * Calls the service to get the list of all capabilities and all skills
   */
  private getRelatedData(){
    this.capabilityService.getAll().subscribe((caps: Capability[]) => {
      this.capabilities = caps;
    })
    this.skilllevelService.getAll().subscribe((skilllevels: Skilllevel[]) => {
      this.skilllevels = skilllevels;
    })
  }

  /**
   * Builds the form group and form controls
   */
  private buildForm(){
    this.dataSource = new MatTableDataSource<any>();

    this.form = this._formBuilder.group({
      rows: this._formBuilder.array([])
    });

    this.service.getAll().subscribe(records => {
      this.records = records
      console.log(this.records)
      this.form = this.fb.group({
        rows: this.fb.array(
          records.map(
            val => this.fb.group({
              id: new FormControl(val.id),
              name: new FormControl(val.name),
              capability: new FormControl(val.capability),
              // skilllevel:new FormControl(val.skilllevel),
              action: new FormControl('existingRecord'),
              isEditing: new FormControl(false),
              isNew: new FormControl(false)
            })
        )) //end of fb array
      }); // end of form group cretation
      this.dataSource = new MatTableDataSource((this.form.get('rows') as FormArray).controls);
    })
  }

  edit(element: FormGroup){
    this.storeEntry(element)
    this.selectedElement = element
    this.selectedElement.get('isEditing')?.patchValue(true)
    // this.selectedElement.get('name')?.enable()
  }

  /**
   * Saves the values of the record in order to revert if cancelled
   * @param element - Current record being edited
   */
  private storeEntry(element: FormGroup){
    this.selectedEntry.id = element.get('id')?.value
    this.selectedEntry.name = element.get('name')?.value
    this.selectedEntry.capability = element.get('capability')?.value
    // this.selectedEntry.skilllevel = element.get('skilllevel')?.value
  }

  /**
   * Used to restore the values from a cancelled edit
   */
  private restoreEntry(){
    this.selectedElement.get('name')?.setValue(this.selectedEntry.name)
    this.selectedElement.get('capability')?.setValue(this.selectedEntry.capability)
    // this.selectedElement.get('skilllevel')?.setValue(this.selectedEntry.skilllevel)
  }

  isNew(): boolean {
    return this.selectedElement.get('isNew')?.value
  }

  isEditing(): boolean {
    return this.selectedElement.get('isEditing')?.value
  }

  isCurrent(element: FormGroup): boolean {
    return this.selectedElement.get('id') ? this.selectedElement.get('id')?.value === element.get('id')?.value : false
  }

  getCurrentCapability(element: FormGroup): number {
    return element.get('capability') ? element.get('capability')?.value.id : -1
  }

  cancel(){
    if(this.isNew()){
      this.selectedElement.get('isNew')?.patchValue(false)
      this.buildForm()
    }
    if(this.isEditing()){
      this.selectedElement.get('isEditing')?.patchValue(false)
      this.restoreEntry()
    }
    this.initialize()
  }

  /**
   * Deletes an record
   * @param element - record to be deleted
   */
  delete(element: FormGroup): void {
    this.selectedElement = element
    this.openDialog()
  }

  /**
   * Opens a dialog asking if user is sure they wish to delete
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentDialog, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const id = this.selectedElement.get('id')?.value
        this.selectedElement.get('isEditing')?.patchValue(false)
        this.service.delete(id).subscribe(result => {
          this.buildForm()
        })
      }
    });
  }

  /**
   * Adds a new entry in the group
   */
  create(){
    const rows:FormArray = this.form.get('rows') as FormArray
    // const newSkill = {
    //   id: new FormControl(0),
    //   name: new FormControl(),
    //   capability: new FormControl(),
    //   skilllevel: new FormControl(),
    //   action: new FormControl('existingRecord'),
    //   isEditing: new FormControl(false),
    //   isNew: new FormControl(true)
    // }
    // this.selectedElement = new FormGroup(newSkill)

    let newGroup = emptyGroup
    newGroup.get('id')?.setValue(0)
    this.selectedElement = newGroup
    rows.push(this.selectedElement)
    this.dataSource = new MatTableDataSource((rows).controls);
  }

  /**
   * Called after create or edit and changes are made
   * @param element - the record being updated
   */
  update(element: FormGroup, index: number){
    element.get('isEditing')?.patchValue(false)
    element.get('isNew')?.patchValue(false)
    element.get('name')?.disable()
    // element.get('capability')?.setValue(this.updatedCapability)
    console.log("element = ",element)
    // console.log("selectedElement = ",this.selectedElement)

    
    const record = this.buildDTO(element)
    
    if(record.id){
      console.log("updating with entry = ",record)
      this.service.update(record).subscribe(result => {
        // const rows:FormArray = this.form.get('rows') as FormArray
        // element = this.selectedElement
        // console.log(element)
        // this.buildForm()
        //simply get the values from selectedElement and apply to this element
        // console.log(element)
        this.initialize()
      })
    } else {
      this.service.create(record).subscribe(record => {
        element.get('id')?.patchValue(record.id)
        this.buildForm()
        this.initialize()
      })
    }
  }

  /**
   * Called in markup to determine if record is the one being edited
   * @param element - record in question
   * @returns boolean
   */
  isEditingRecordUI(element: FormGroup): boolean {
    return this.isEditing() && (this.isCurrent(element))
  }

  /**
   * Called in markup to determine if record is disabled from editing
   * @param element - record in question
   * @returns boolean
   */
  isDisabledUI(element: FormGroup): boolean {
    //record is disabled if isEditing or isNew and !this.isCurrent
    return (this.isEditing() || this.isNew()) && !this.isCurrent(element)
  }

  /**
   * Create the record to save
   * @param element - element to save
   * @returns record to save
   */
  private buildDTO(element: FormGroup): SkillDto {
    return new SkillDto(
      element.get('id')?.value as number,
      element.get('name')?.value as string,
      element.get('capability')?.value.id as number
      // element.get('skilllevel')?.value.id as number
    )
  }

  /**
   * Gets the name of the CSS class
   * @param element - element in question
   * @returns name of the css class to apply
   */
  getClassUI(element: FormGroup): string {
    return (this.isCurrent(element)) ? "active" : "inactive"
  }

  /**
   * Activates record for editing for not already editing a record
   * @param element - the element in question
   */
  checkActivateUI(element: FormGroup): void {
    if(!this.isEditing()){
      this.edit(element)
    }
  }

  /**
   * Gets the name of the capability for this record
   * @param element - element in question
   * @returns the name of the current capability
   */
  getCapabilityUI(element: FormGroup): string{
    return element.get('capability')?.value.name
  }

  getSelectedCapability(element: FormGroup){
    return element.get('capability')?.value.id
  }

  getCapability(element: FormGroup): Capability {
    return element.get('capability')?.value
  }

  // getSkilllevelUI(element: FormGroup): string{
  //   return element.get('skilllevel')?.value.name
  // }

  // getSelectedSkilllevel(element: FormGroup){
  //   return element.get('skilllevel')?.value.id
  // }

}
