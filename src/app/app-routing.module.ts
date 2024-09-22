import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './role.guard';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [

  {path:'login' , component:LoginComponent},
  {path:'admin' , component:AdminComponent , canActivate: [RoleGuard] , data : {role : 'Admin'} },
  {path:'doctor' , component:DoctorComponent , canActivate: [RoleGuard] , data : {role : 'Doctor'} },
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
