import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: LoginComponent},
    {path:'portfolio', component: PortfolioComponent, canActivate:[GuardGuard]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
     ],
     
    exports: [RouterModule,
    ],
}  
)
export class AppRoutingModule { }
