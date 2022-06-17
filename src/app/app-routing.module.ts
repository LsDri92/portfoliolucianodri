import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
    {path:'', component: PortfolioComponent },
    {path:'login', component: LoginComponent}
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
