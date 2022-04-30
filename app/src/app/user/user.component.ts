import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponentDialog } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

const emptyGroup: FormGroup = new FormGroup({
  id: new FormControl(-1),
  firstName: new FormControl(),
  lastName: new FormControl(),
  email: new FormControl(),
  role: new FormControl(),
  action: new FormControl('existingRecord'),
  isEditing: new FormControl(false),
  isNew: new FormControl(false)
})

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;

  //mat pagination
  pageSize = 8;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  //mat form
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'role', 'action'];
  form: FormGroup = new FormGroup({})

  //collections
  records: User[] = []
  filteredRecords: User[] = []

  //provides a quick way to check mode without inspecting records
  isEditing: boolean = false
  isCreating: boolean = false

  //custom filtering
  filterCriteria: string = ""

  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.loadData()
  }

  /**
   * Queries the data from the database
   */
  loadData(){
    this.service.getAll().subscribe(records => {
      this.records = records
      this.filteredRecords = records
      this.buildForm()
    })
  }

  /**
   * Resets the grid actions
   */
  private initialize(){
    this.isCreating = false
    this.isEditing = false
  }
  
  /**
   * Applies the filters
   */
  applyFilter(){
    this.filteredRecords = this.records
    if(this.filterCriteria !== ''){
      this.filteredRecords = this.records.filter(record => {
        return record.firstName?.toLowerCase().includes(this.filterCriteria.toLowerCase()) || 
        record.lastName?.toLowerCase().includes(this.filterCriteria.toLowerCase()) ||
        record.email?.toLowerCase().includes(this.filterCriteria.toLowerCase()) ||
        record.role?.toLowerCase().includes(this.filterCriteria.toLowerCase())
      })
    }
    this.buildForm()
  }

  /**
   * Resets the filter fields
   */
  resetFilters(){
    this.filterCriteria = ''
    this.filteredRecords = this.records
    this.buildForm()
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
        this.filteredRecords.map(
          val => this.fb.group({
            id: new FormControl(val.id),
            firstName: new FormControl(val.firstName),
            lastName: new FormControl(val.lastName),
            email: new FormControl(val.email),
            role: new FormControl(val.role),
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
    this.resetFilters()
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
          this.filterCriteria = ''
          this.filteredRecords = this.records
          this.loadData()
          this.initialize()
        })
      }
    });
  }

  /**
   * Adds a new entry in the group
   */
  create(){
    this.resetFilters()
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
      this.service.update(record).subscribe(result => {
        this.loadData()
        this.initialize()
        this.filterCriteria = ""
      })
    } else {
      this.service.create(record).subscribe(record => {
        element.get('id')?.patchValue(record.id)
        this.loadData()
        this.initialize()
        this.filterCriteria = ""
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
  isValid(user: User){
    // if(user.name === '')
    //   return false
    // if(this.records.find(record => (record.name?.toLocaleLowerCase() === user.name.toLocaleLowerCase() && record.id !== user.id)) !== undefined)
    //   return false 
    return true  
  }

  /**
   * Create the record to save
   * @param element - element to save
   * @returns record to save
   */
  private buildDTO(element: FormGroup): User {
    return new User(
      element.get('id')?.value as number,
      element.get('firstName')?.value as string,
      element.get('lastName')?.value as string,
      element.get('email')?.value as string,
      element.get('role')?.value as string
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
