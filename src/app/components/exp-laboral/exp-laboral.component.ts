import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { exp_laboral } from 'src/app/model/exp-laboral.model';
import { ExpLaboralService } from 'src/app/service/exp-laboral.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent implements OnInit {

  public exp_laboral: exp_laboral[] = [];
  public editExpe: exp_laboral | undefined;
  public deleteExpe: exp_laboral | undefined;

  constructor(private explaboralService: ExpLaboralService) { }

  ngOnInit(): void {
    this.getExperiencia();
  }

  public getExperiencia(): void {
    this.explaboralService.getExp_laboral().subscribe({
      next: (Response: exp_laboral[]) => {
        this.exp_laboral = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: string, exp_laboral?: exp_laboral): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExpeModal')
    } else if (mode === 'delete') {
      this.deleteExpe = exp_laboral;
      button.setAttribute('data-target', '#deleteExpeModal')
    } else if (mode === 'edit') {
      this.editExpe = exp_laboral;
      button.setAttribute('data-target', '#editExpeModal')
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddExperiencia(addForm: NgForm) {
    document.getElementById('add-experiencia-form')?.click();
    this.explaboralService.addExpe(addForm.value).subscribe({
      next: (response: exp_laboral) => {
        console.log(response);
        this.getExperiencia();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onEditExperiencia(exp_laboral: exp_laboral) {
    this.editExpe = exp_laboral;
    document.getElementById('add-experiencia-form')?.click();
    this.explaboralService.editExpe(exp_laboral).subscribe({
      next: (response: exp_laboral) => {
        console.log(response);
        this.getExperiencia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public onDeleteExperiencia(idExpe: number): void {

    this.explaboralService.deleteExpe(idExpe).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getExperiencia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}



