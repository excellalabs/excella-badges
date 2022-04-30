import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Badge, BadgeDto } from './badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Badge[]>( `${this.API_SERVER}/badge` );
  }

  public get(id: number){
    return this.http.get<Badge>( `${this.API_SERVER}/badge/${id}` );
  }

  public create(badge: BadgeDto){
    console.log("sending badge = ",badge)
    return this.http.post<Badge>( `${this.API_SERVER}/badge`, badge);
  }

  public update(badge: BadgeDto){
    console.log("updating with record = ",badge)
    return this.http.patch<Badge>( `${this.API_SERVER}/badge/${badge.id}`, badge);
  }

  public delete(id: number){
    return this.http.delete( `${this.API_SERVER}/badge/${id}` );
  }
}
