import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { UserTemplateComponent } from './user-template/user-template.component';

const routes: Routes = [{path:"login", component:LoginComponent},
{path:"admin", component:AdminTemplateComponent},{
  path:"user",component:UserTemplateComponent},

{path:"", redirectTo: "/login", pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
