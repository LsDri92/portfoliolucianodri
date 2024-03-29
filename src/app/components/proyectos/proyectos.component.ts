import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos: proyectos[] = [];
  public editProyectos: proyectos | undefined;
  public deleteProyectos: proyectos | undefined;
  isLogged = false;

  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getProyectos(): void {
    this.proyectosService.getProyectos().subscribe({
      next: (Response: proyectos[]) => {
        this.proyectos = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: string, proyectos?: proyectos): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProyectosModal')
    } else if (mode === 'delete') {
      this.deleteProyectos = proyectos;
      button.setAttribute('data-target', '#deleteProyectosModal')
    } else if (mode === 'edit') {
      this.editProyectos = proyectos;
      button.setAttribute('data-target', '#editProyectosModal')
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddProyecto(addForm: NgForm) {
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.addProyectos(addForm.value).subscribe({
      next: (response: proyectos) => {
        console.log(response);
        this.getProyectos();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onEditProyecto(proyectos: proyectos) {
    this.editProyectos = proyectos;
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.editProyectos(proyectos).subscribe({
      next: (response: proyectos) => {
        console.log(response);
        this.getProyectos();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public onDeleteProyecto(idPro: number): void {

    this.proyectosService.deleteProyectos(idPro).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProyectos();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
