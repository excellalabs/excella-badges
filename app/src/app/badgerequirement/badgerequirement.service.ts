import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BadgeRequirement, BadgeRequirementDto } from './badgerequirement';

@Injectable({
  providedIn: 'root'
})
export class BadgeRequirementService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getAll(badgeId: number){
    return this.http.get<BadgeRequirement[]>( `${this.API_SERVER}/badge/${badgeId}/requirements` );
  }

  public get(badgeId: number, id: number){
    return this.http.get<BadgeRequirement>( `${this.API_SERVER}/badge/${badgeId}/requirement/${id}` );
  }

  public create(badgeId: number, badgerequirement: BadgeRequirementDto){
    return this.http.post<BadgeRequirement>( `${this.API_SERVER}/badge/${badgeId}/requirement`, badgerequirement);
  }

  public update(badgeId: number, badgerequirement: BadgeRequirementDto){
    return this.http.patch<BadgeRequirement>( `${this.API_SERVER}/badge/${badgeId}/requirement/${badgerequirement.id}`, badgerequirement);
  }

  public delete(badgeId: number, id: number){
    return this.http.delete( `${this.API_SERVER}/badge/${badgeId}/requirement/${id}` );
  }
}
