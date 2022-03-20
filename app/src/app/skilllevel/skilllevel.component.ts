import { Component, OnInit } from '@angular/core';
import { Skilllevel } from './skilllevel';
import { SkilllevelService } from './skilllevel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillLevel } from '../../../../api/src/skilllevel/skilllevel';

@Component({
  selector: 'app-skilllevel',
  templateUrl: './skilllevel.component.html',
  styleUrls: ['./skilllevel.component.scss']
})
export class SkilllevelComponent implements OnInit {
  
  form: FormGroup = new FormGroup({})
  dataSource: any = []
  skilllevel: Skilllevel = {} as SkillLevel
  displayedColumns: string[] = ['id', 'name', 'actions'];
  isEditing: boolean = false

  constructor(private skilllevelService: SkilllevelService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.skilllevelService.getAll().subscribe(skilllevels => {
      this.dataSource = skilllevels
      this.form = this.buildForm(skilllevels)
      console.log(this.form)
    })

  }

  buildForm(data: SkillLevel[]): FormGroup {
    return this.fb.group([{
      id: data[0].id,
      name: [data[0], [Validators.required, Validators.minLength(10)]]
    }])
  }

  delete(id: number): void {
    this.skilllevelService.delete(id).subscribe(result => {
      console.log("delete result = ",result)
    })
  }

  edit(param: any): void{
    //change form status to editing
    this.isEditing = true
  }

  create(): void {
    this.skilllevelService.create(this.skilllevel).subscribe(skilllevel => {
      console.log("create result = ",skilllevel)
    })
  }

  update(param: any): void {
    console.log("param = ",param)
    // id: number, skilllevel: Skilllevel
    // this.skilllevelService.update(id, skilllevel).subscribe(skilllevel => {
    //   console.log("updated result = ",skilllevel)
    // })
  }
}
