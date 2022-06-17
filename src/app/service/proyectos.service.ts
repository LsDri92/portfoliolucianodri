import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://floating-hollows-77784.herokuapp.com/api/proyectos/';

  constructor(private http: HttpClient ) { }

  public getProyectos(): Observable <proyectos>{
    return this.http.get<proyectos>(this.URL+'traer');
  }
}
