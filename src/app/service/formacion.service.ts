import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formacion } from '../model/formacion.model';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  URL = 'https://floating-hollows-77784.herokuapp.com/api/formacion/';

  constructor(private http: HttpClient ) { }

  public getFormacion(id: number): Observable <formacion>{
    return this.http.get<formacion>(this.URL+'traer/'+id);
  }
}
