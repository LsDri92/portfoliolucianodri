import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona: persona = new persona("", "", "", "", "", "", "");
  public editPersona: persona | undefined;
  isLogged = false;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data })
    console.log(this.persona);

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getPersona(): void {
    this.personaService.getPersona().subscribe({
      next: (Response: persona) => {
        this.persona = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }


  public onOpenModal(mode: string, persona?: persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPersonaModal')
    } else if (mode === 'edit') {
      this.editPersona = persona;
      button.setAttribute('data-target', '#editPersonaModal')
    }
    container?.appendChild(button);
    button.click();
  }

  public onEditPersona(persona: persona) {
    this.editPersona = persona;
    document.getElementById('add-persona-form')?.click();
    this.personaService.editPersona(persona).subscribe({
      next: (response: persona) => {
        console.log(response);
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
