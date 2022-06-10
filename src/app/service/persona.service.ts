import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://floating-hollows-77784.herokuapp.com/api/persona/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable <persona>{
    return this.http.get<persona>(this.URL+ 'traer');
  }
}
