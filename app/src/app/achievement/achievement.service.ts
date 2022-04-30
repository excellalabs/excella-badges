import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Achievement, AchievementDto } from './achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Achievement[]>( `${this.API_SERVER}/achievements` );
  }

  public get(id: number){
    return this.http.get<Achievement>( `${this.API_SERVER}/achievement/${id}` );
  }

  public create(achievement: AchievementDto){
    return this.http.post<Achievement>( `${this.API_SERVER}/achievement`, achievement);
  }

  public update(achievement: AchievementDto){
    return this.http.patch<Achievement>( `${this.API_SERVER}/achievement/${achievement.id}`, achievement);
  }

  public delete(id: number){
    return this.http.delete( `${this.API_SERVER}/achievement/${id}` );
  }
}
