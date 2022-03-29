import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BadgeType } from './badgetype';

@Injectable({
  providedIn: 'root'
})
export class BadgeTypeService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<BadgeType[]>( `${this.API_SERVER}/badgetype` );
  }

  public get(id: number){
    return this.http.get<BadgeType>( `${this.API_SERVER}/badgetype/${id}` );
  }

  public create(badgetype: BadgeType){
    return this.http.post<BadgeType>( `${this.API_SERVER}/badgetype`, badgetype);
  }

  public update(badgetype: BadgeType){
    return this.http.post<BadgeType>( `${this.API_SERVER}/badgetype/${badgetype.id}`, badgetype);
  }

  public delete(id: number){
    return this.http.delete( `${this.API_SERVER}/badgetype/${id}` );
  }
}
