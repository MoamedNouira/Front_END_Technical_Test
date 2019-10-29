import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlanetsComponent } from './Components/all-planets/all-planets.component';
import { PlanetComponent } from './Components/planet/planet.component';

const routes: Routes = [ 
  { path: '', component: AllPlanetsComponent },
  { path: 'planet/:id',      component: PlanetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
