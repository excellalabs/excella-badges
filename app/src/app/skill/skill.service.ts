import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill, SkillDto } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Skill[]>( `${this.API_SERVER}/skill` );
  }

  public get(id: number){
    return this.http.get<Skill>( `${this.API_SERVER}/skill/${id}` );
  }

  public create(skill: SkillDto){
    return this.http.post<Skill>( `${this.API_SERVER}/skill`, skill);
  }

  public update(skill: SkillDto){
    return this.http.patch<Skill>( `${this.API_SERVER}/skill/${skill.id}`, skill);
  }

  public delete(id: number){
    return this.http.delete( `${this.API_SERVER}/skill/${id}` );
  }
}
