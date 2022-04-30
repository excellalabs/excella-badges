import { Component, OnInit, ViewChild } from '@angular/core';
import { BadgeRequirement, BadgeRequirementDto } from './badgerequirement';
import { BadgeRequirementService } from './badgerequirement.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponentDialog } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

//component specific
import { Badge } from '../badge/badge';
import { BadgeService } from '../badge/badge.service';

const emptyGroup: FormGroup = new FormGroup({
  id: new FormControl(-1),
  name: new FormControl(),
  description: new FormControl(),
  badge: new FormControl(),
  action: new FormControl('existingRecord'),
  isEditing: new FormControl(false),
  isNew: new FormControl(false)
})

@Component({
  selector: 'app-badgerequirement',
  templateUrl: './badgerequirement.component.html',
  styleUrls: ['./badgerequirement.component.scss']
})
export class BadgeRequirementComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;

  //mat pagination
  pageSize = 8;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  //mat form
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'description', 'action'];
  form: FormGroup = new FormGroup({})

  //collections
  records: BadgeRequirement[] = []
  badges: Badge[] = []
  selectedBadge: Badge = {}
  // filteredRecords: BadgeRequirement[] = []
  // badges: Capability[] = []
  // skilllevels: Skilllevel[] = []

  //provides a quick way to check mode without inspecting records
  isEditing: boolean = false
  isCreating: boolean = false

  //custom filtering
  // filterCriteria: string = ""
  // filterCapability: Capability = new Capability()
  // filterSkilllevel: Skilllevel = new Skilllevel()

  constructor(
    private service: BadgeRequirementService,
    private badgeService: BadgeService,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getRelatedData()
    // this.loadData()
  }

  /**
   * Queries the data from the database
   */
  // loadData(){
  //   this.service.getAll().subscribe(records => {
  //     this.records = records
  //     // this.filteredRecords = records
  //     this.buildForm()
  //   })
  // }

  /**
   * Resets the grid actions
   */
  private initialize(){
    this.loadData()
    this.isCreating = false
    this.isEditing = false
  }
  
  /**
   * Applies the filters
   */
  // applyFilter(){
  //   this.filteredRecords = this.records
  //   let filterText = ''
  //   if(this.filterCriteria !== ''){
  //     filterText = this.filterCriteria
  //     this.filteredRecords = this.records.filter(record => record.name?.toLowerCase().includes(filterText.toLowerCase()))
  //   }else if(this.filterCapability.id){
  //     this.filteredRecords = this.records.filter(record => record.capability?.id === this.filterCapability.id)
  //   }else if(this.filterSkilllevel.id){
  //     this.filteredRecords = this.records.filter(record => record.skilllevel?.id === this.filterSkilllevel.id)
  //   }
  //   this.buildForm()
  // }

  /**
   * Resets the filter fields
   */
  // resetFilters(){
  //   this.filterCriteria = ''
  //   this.filterCapability = new Capability()
  //   this.filterSkilllevel = new Skilllevel()
  //   this.filteredRecords = this.records
  //   this.buildForm()
  // }

  /**
   * Calls the service to get the list of all capabilities and all skills
   */
  private getRelatedData(){
    this.badgeService.getAll().subscribe((badges: Badge[]) => {
      this.badges = badges;
      
    })
  }

  loadData(): void {
    console.log("here")
    this.service.getAll(this.selectedBadge.id as number).subscribe(records => {
      this.records = records
      this.buildForm()
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

    this.form = this.fb.group({
      rows: this.fb.array(
        this.records.map(
          val => this.fb.group({
            id: new FormControl(val.id),
            name: new FormControl(val.name),
            description: new FormControl(val.description),
            action: new FormControl('existingRecord'),
            isEditing: new FormControl(false),
            isNew: new FormControl(false)
          })
      ))
    });
    this.dataSource = new MatTableDataSource((this.form.get('rows') as FormArray).controls);
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Edits an element
   * @param element 
   */
  edit(element: FormGroup){
    this.isEditing = true
    element.get('isEditing')?.patchValue(true)
  }

  /**
   * Determines if element in question is being edited or added
   * @param element
   * @returns 
   */
  isCurrent(element: FormGroup): boolean {
    return element.get('isEditing')?.value || element.get('isNew')?.value
  }

  /**
   * Cancels an add/edit
   */
  cancel(){
    // this.resetFilters()
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
        this.service.delete(this.selectedBadge.id as number, id).subscribe(result => {
          this.initialize()
        })
      }
    });
  }

  /**
   * Adds a new entry in the group
   */
  create(){
    // this.resetFilters()
    this.isCreating = true
    const rows:FormArray = this.form.get('rows') as FormArray
    let newGroup = emptyGroup
    newGroup.get('id')?.setValue(0)
    newGroup.get('isNew')?.setValue(true)
    rows.push(newGroup)

    var pageNumber = Math.ceil(this.records.length/this.paginator.pageSize-1)
    this.paginator.pageIndex = pageNumber;

    this.paginator.page.next({      
        pageIndex: pageNumber,
        pageSize: this.paginator.pageSize,
        length: this.paginator.length
    });

    this.dataSource = new MatTableDataSource((rows).controls);
    this.dataSource.paginator = this.paginator;
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
      this.service.update(this.selectedBadge.id as number, record).subscribe(result => {
        this.initialize()
        // this.filterCriteria = ""
      })
    } else {
      this.service.create(this.selectedBadge.id as number, record).subscribe(record => {
        element.get('id')?.patchValue(record.id)
        this.initialize()
        // this.filterCriteria = ""
      })
    }
    }else{
      alert("Error found. Please check entry")
    }
  }

  /**
   * Validates that there are no duplicates
   * @param skill 
   * @returns 
   */
  isValid(badgerequirement: BadgeRequirementDto){
    if(badgerequirement.name === '')
      return false
    if(this.records.find(record => (record.name?.toLocaleLowerCase() === badgerequirement.name.toLocaleLowerCase() && record.id !== badgerequirement.id)) !== undefined)
      return false 
    return true  
  }

  /**
   * Create the record to save
   * @param element - element to save
   * @returns record to save
   */
  private buildDTO(element: FormGroup): BadgeRequirementDto {
    return new BadgeRequirementDto(
      element.get('id')?.value as number,
      element.get('name')?.value as string,
      element.get('description')?.value as string,
      this.selectedBadge.id as number
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
