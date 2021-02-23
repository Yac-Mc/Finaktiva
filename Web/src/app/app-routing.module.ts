import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MunicipalityComponent } from './pages/municipality/municipality.component';
import { DepartmentComponent } from './pages/department/department.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'municipality', component: MunicipalityComponent },
  { path: 'department', component: DepartmentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
