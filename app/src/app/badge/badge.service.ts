import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Badge } from './badge';

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

  public create(badge: Badge){
    return this.http.post<Badge>( `${this.API_SERVER}/badge`, badge);
  }

  public update(badge: Badge){
    return this.http.post<Badge>( `${this.API_SERVER}/badge/${badge.id}`, badge);
  }

  public delete(id: number){
    return this.http.delete( `${this.API_SERVER}/badge/${id}` );
  }
}
