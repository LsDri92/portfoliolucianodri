import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email= '';
  password= '';

  form:FormGroup
  constructor(private formBuilder:FormBuilder,  private authService: AuthService) {
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
    })
   }

   Login(){
    this.authService.login(this.email, this.password);
   }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onEnviar(event:Event){
   
  }
}
