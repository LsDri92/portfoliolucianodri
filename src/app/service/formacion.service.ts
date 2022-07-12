import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formacion } from '../model/formacion.model';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  URL = 'https://floating-hollows-77784.herokuapp.com/api/formacion';

  constructor(private http: HttpClient ) { }

  public getFormacion(): Observable <formacion[]>{
    return this.http.get<formacion[]>(`${this.URL}/read `);
    }
  
    public addFormacion(formacion: formacion):Observable <formacion>{
      return this.http.post<formacion>(`${this.URL}/add`, formacion);
    }
  
    public editFormacion(formacion: formacion):Observable <formacion>{
      return this.http.put<formacion>(`${this.URL}/edit`, formacion);
    }
  
    public deleteFormacion(idForm: number):Observable<void>{
      return this.http.delete<void>(`${this.URL}/delete/${idForm}`);
    }
  }
  

