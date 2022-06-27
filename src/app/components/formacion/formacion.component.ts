import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { formacion } from 'src/app/model/formacion.model';
import { FormacionService } from 'src/app/service/formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  
  public formacion: formacion[] = [];

  constructor(private formacionService: FormacionService) { }

  ngOnInit(): void {
    this.getFormacion();
  }

 
  public getFormacion():void {
    this.formacionService.getFormacion().subscribe({
      next:(Response: formacion[]) => {
        this.formacion=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      }
    }
    