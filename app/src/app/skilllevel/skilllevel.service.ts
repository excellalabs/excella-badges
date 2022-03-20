import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skilllevel } from './skilllevel';

@Injectable({
  providedIn: 'root'
})
export class SkilllevelService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Skilllevel[]>( `${this.API_SERVER}/skilllevel` );
  }

  public create(skilllevel: Skilllevel){
    return this.http.post<any>(`${this.API_SERVER}/skilllevel/`, skilllevel);
  }

  public update(id: number, skilllevel: Skilllevel){
    return this.http.put<any>(`${this.API_SERVER}/skilllevel/${id}`, skilllevel);
  }

  public delete(id: number){
    return this.http.delete(`${this.API_SERVER}/skilllevel/${id}`);
  }
}
