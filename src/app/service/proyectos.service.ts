import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://lucianosdri-api.herokuapp.com/api/proyectos';

  constructor(private http: HttpClient ) { }

  public getProyectos(): Observable <proyectos[]>{
  return this.http.get<proyectos[]>(`${this.URL}/read`);
  }

  public addProyectos(proyecto: proyectos):Observable <proyectos>{
    return this.http.post<proyectos>(`${this.URL}/add`, proyecto);
  }

  public editProyectos(proyecto: proyectos):Observable <proyectos>{
    return this.http.put<proyectos>(`${this.URL}/edit`, proyecto);
  }

  public deleteProyectos(idPro: number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/delete/${idPro}`);
  }
}
