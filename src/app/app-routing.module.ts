import { NgModule } from '@angular/core';
import { AdminGuard } from './components/admin/admin.guard';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PatientComponent } from '../app/components/patient/patient.component';
import { DoctorComponent } from '../app/components/doctor/doctor.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'patient', component: PatientComponent, canActivate: [AdminGuard]},
  {path: 'doctor', component: DoctorComponent, canActivate: [AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
