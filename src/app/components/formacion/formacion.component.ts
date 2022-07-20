import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formacion } from 'src/app/model/formacion.model';
import { FormacionService } from 'src/app/service/formacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {


  public formacion: formacion[] = [];
  public editFormacion: formacion | undefined;
  public deleteFormacion: formacion | undefined;
  isLogged = false;
  
  constructor(private formacionService: FormacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getFormacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  public getFormacion(): void {
    this.formacionService.getFormacion().subscribe({
      next: (Response: formacion[]) => {
        this.formacion = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: string, formacion?: formacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addFormacionModal')
    } else if (mode === 'delete') {
      this.deleteFormacion = formacion;
      button.setAttribute('data-target', '#deleteFormacionModal')
    } else if (mode === 'edit') {
      this.editFormacion = formacion;
      button.setAttribute('data-target', '#editFormacionModal')
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddFormacion(addForm: NgForm) {
    document.getElementById('add-formacion-form')?.click();
    this.formacionService.addFormacion(addForm.value).subscribe({
      next: (response: formacion) => {
        console.log(response);
        this.getFormacion();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onEditFormacion(formacion: formacion) {
    this.editFormacion = formacion;
    document.getElementById('add-formacion-form')?.click();
    this.formacionService.editFormacion(formacion).subscribe({
      next: (response: formacion) => {
        console.log(response);
        this.getFormacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public onDeleteFormacion(idForm: number): void {

    this.formacionService.deleteFormacion(idForm).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getFormacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
