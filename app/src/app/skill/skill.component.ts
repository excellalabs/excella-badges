import { Component, OnInit, ViewChild } from '@angular/core';
import { Skill, SkillDto } from './skill';
import { SkillService } from './skill.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponentDialog } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Capability } from '../capability/capability';
import { Skilllevel } from '../skilllevel/skilllevel';
import { CapabilityService } from '../capability/capability.service';
import { SkilllevelService } from '../skilllevel/skilllevel.service';

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
  displayedColumns: string[] = ['name', 'capability', 'skilllevel', 'action'];
  form: FormGroup = new FormGroup({})

  //collections
  records: Skill[] = []
  capabilities: Capability[] = []
  skilllevels: Skilllevel[] = []

  //provides a quick way to check mode without inspecting records
  isEditing: boolean = false
  isCreating: boolean = false

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
    this.isCreating = false
    this.isEditing = false
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
              skilllevel:new FormControl(val.skilllevel),
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
    this.isEditing = true
    element.get('isEditing')?.patchValue(true)
  }

  isCurrent(element: FormGroup): boolean {
    return element.get('isEditing')?.value || element.get('isNew')?.value
  }

  cancel(){
    this.buildForm()
    this.initialize()
  }

  /**
   * Deletes an record
   * @param element - record to be deleted
   */
  delete(element: FormGroup): void {
    this.openDialog(element)
  }

  /**
   * Opens a dialog asking if user is sure they wish to delete
   */
  openDialog(element: FormGroup): void {
    const dialogRef = this.dialog.open(DialogComponentDialog, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const id = element.get('id')?.value
        element.get('isEditing')?.patchValue(false)
        this.service.delete(id).subscribe(result => {
          this.buildForm()
          this.initialize()
        })
      }
    });
  }

  /**
   * Adds a new entry in the group
   */
  create(){
    this.isCreating = true
    const rows:FormArray = this.form.get('rows') as FormArray
    let newGroup = emptyGroup
    newGroup.get('id')?.setValue(0)
    newGroup.get('isNew')?.setValue(true)
    rows.push(newGroup)
    this.dataSource = new MatTableDataSource((rows).controls);
  }

  /**
   * Called after create or edit and changes are made
   * @param element - the record being updated
   */
  update(element: FormGroup){
    const record = this.buildDTO(element)
    if(this.isValid(record)){
      element.get('isEditing')?.patchValue(false)
      element.get('isNew')?.patchValue(false)
    if(record.id){
      this.service.update(record).subscribe(result => {
        this.initialize()
      })
    } else {
      this.service.create(record).subscribe(record => {
        element.get('id')?.patchValue(record.id)
        this.buildForm()
        this.initialize()
      })
    }
    }else{
      alert("Error found. Please check entry")
    }
  }

  isValid(skill: SkillDto){
    if(skill.name === '')
      return false
    if(this.records.find(record => (record.name?.toLocaleLowerCase() === skill.name.toLocaleLowerCase() && record.id !== skill.id)) !== undefined)
      return false 
    return true  
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
      element.get('capability')?.value.id as number,
      element.get('skilllevel')?.value.id as number
    )
  }

  //Called from markup
  //---------------------------------------
    /**
   * Called in markup to determine if record is the one being edited
   * @param element - record in question
   * @returns boolean
   */
     isEditingRecordUI(element: FormGroup): boolean {
      return this.isEditing && (this.isCurrent(element))
    }
  
    /**
     * Called in markup to determine if record is disabled from editing
     * @param element - record in question
     * @returns boolean
     */
    isDisabledUI(element: FormGroup): boolean {
      //record is disabled if isEditing or isNew and !this.isCurrent
      return (this.isEditing || this.isCreating) && !this.isCurrent(element)
    }

  /**
   * Gets the name of the CSS class
   * @param element - element in question
   * @returns name of the css class to apply
   */
  getClassUI(element: FormGroup): string {
    return (this.isCurrent(element)) ? "active" : "inactive"
  }

}
