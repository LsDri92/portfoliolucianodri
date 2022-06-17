import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exp_laboral } from '../model/exp-laboral.model';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralService {

  URL = 'https://floating-hollows-77784.herokuapp.com/api/explaboral/';

  constructor(private http: HttpClient ) {  }

  public getExp_laboral(): Observable <exp_laboral>{
    return this.http.get<exp_laboral>(this.URL+'traer');
  }
}
