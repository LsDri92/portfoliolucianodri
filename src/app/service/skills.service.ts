import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = 'https://floating-hollows-77784.herokuapp.com/api/skills';

  constructor(private http: HttpClient ) { }

  public getSkills(): Observable <skills[]>{
    return this.http.get<skills[]>(`${this.URL}/read `);
    }
  
    public addSkills(skills: skills):Observable <skills>{
      return this.http.post<skills>(`${this.URL}/add`, skills);
    }
  
    public editSkills(skills: skills):Observable <skills>{
      return this.http.put<skills>(`${this.URL} /edit`, skills);
    }
  
    public deleteSkills(skillsId: number):Observable<void>{
      return this.http.delete<void>(`${this.URL} /delete/${skillsId}`);
    }
  }
  

