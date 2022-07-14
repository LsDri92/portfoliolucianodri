import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'https://floating-hollows-77784.herokuapp.com/api'

  token: any;
 
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.httpClient.post(this.uri + '/login', {email: email, password: password}).subscribe((resp: any) => {
      this.router.navigate(['portfolio']);
      sessionStorage.setItem('accesstoken', resp.token);
    })
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return(sessionStorage.getItem('token') !== null);
  }

}
