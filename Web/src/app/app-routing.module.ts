import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MunicipalityComponent } from './pages/municipality/municipality.component';
import { RegionComponent } from './pages/region/region.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'municipality', component: MunicipalityComponent },
  { path: 'region', component: RegionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
