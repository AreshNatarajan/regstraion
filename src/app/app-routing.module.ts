import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo:'/', pathMatch:'full'},
  {path: 'login', component: LoginComponentComponent},
  {path: 'register',component:RegistrationComponentComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
