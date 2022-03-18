import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getCategories(){
    console.log(" querying: ",`${this.API_SERVER}/category`)
    return this.http.get<Category[]>( `${this.API_SERVER}/category` );
  }
}
