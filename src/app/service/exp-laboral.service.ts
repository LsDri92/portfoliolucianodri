import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exp_laboral } from '../model/exp-laboral.model';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralService {

  URL = 'https://lucianosdri-api.herokuapp.com/api/explaboral';

  constructor(private http: HttpClient ) {  }

  public getExp_laboral(): Observable <exp_laboral[]>{
    return this.http.get<exp_laboral[]>(`${this.URL}/read`);
  }

  public addExpe(exp_laboral: exp_laboral):Observable <exp_laboral>{
    return this.http.post<exp_laboral>(`${this.URL}/add`, exp_laboral);
  }

  public editExpe(exp_laboral: exp_laboral):Observable <exp_laboral>{
    return this.http.put<exp_laboral>(`${this.URL}/edit`, exp_laboral);
  }

  public deleteExpe(idExp: number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/delete/${idExp}`);
  }



}

