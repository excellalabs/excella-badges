import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  dataSource: any = []
  category: Category = {id:0, name:""}
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private categoryService: CategoryService) { console.log("cap")}

  ngOnInit(): void {
    console.log(" getting categories...")
    this.categoryService.getCategories().subscribe(categories => {
      console.log("categories = ",categories)
      this.dataSource = categories
      console.log("received categories = ",this.dataSource)
    })
  }

  deleteCategory(id: number): void {
    console.log("deleting category with id = ",id)
  }

  create(): void {

  }

  update(category: Category): void {

  }

  save(category: Category): void {

  }
}
