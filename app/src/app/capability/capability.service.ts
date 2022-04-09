import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capability } from './capability';

@Injectable({
  providedIn: 'root'
})
export class CapabilityService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Capability[]>( `${this.API_SERVER}/capability` );
  }

  public get(id: number){
    return this.http.get<Capability>( `${this.API_SERVER}/capability/${id}` );
  }

  public create(capability: Capability){
    return this.http.post<Capability>( `${this.API_SERVER}/capability`, capability);
  }

  public update(capability: Capability){
    return this.http.post<Capability>( `${this.API_SERVER}/capability/${capability.id}`, capability);
  }

  public delete(id: number){
    return this.http.delete( `${this.API_SERVER}/capability/${id}` );
  }
}
