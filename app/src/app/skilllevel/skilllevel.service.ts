import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skilllevel, SkilllevelDto } from './skilllevel';

@Injectable({
  providedIn: 'root'
})
export class SkilllevelService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Skilllevel[]>( `${this.API_SERVER}/skilllevel` );
  }

  public get(id: number){
    return this.http.get<Skilllevel>( `${this.API_SERVER}/skilllevel/${id}` );
  }

  public create(skilllevel: SkilllevelDto){
    return this.http.post<Skilllevel>( `${this.API_SERVER}/skilllevel`, skilllevel);
  }

  public update(skilllevel: SkilllevelDto){
    return this.http.patch<Skilllevel>( `${this.API_SERVER}/skilllevel/${skilllevel.id}`, skilllevel);
  }

  public delete(id: number){
    return this.http.delete( `${this.API_SERVER}/skilllevel/${id}` );
  }
}
