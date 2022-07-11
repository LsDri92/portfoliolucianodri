import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './service/interceptor.service';
import { formacion } from './model/formacion.model';
import { AutenticacionService } from './service/autenticacion.service';
import { ExpLaboralService } from './service/exp-laboral.service';
import { FormacionService } from './service/formacion.service';
import { PersonaService } from './service/persona.service';
import { ProyectosService } from './service/proyectos.service';
import { SkillsService } from './service/skills.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    FormacionComponent,
    ExpLaboralComponent,
    SkillsComponent,
    FooterComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent   
  
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  
  ],
  providers: [AutenticacionService, ExpLaboralService, FormacionService, PersonaService, ProyectosService, SkillsService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
