import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos: proyectos[]=[];


  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  public getProyectos():void {
this.proyectosService.getProyectos().subscribe({
  next:(Response: proyectos[]) => {
    this.proyectos=Response;
  },
  error:(error:HttpErrorResponse)=>{
    alert(error.message);
  }
})
  }
}
