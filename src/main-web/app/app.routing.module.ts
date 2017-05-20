import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExperimentComponent } from './experiment/experiment.component';

// let's talk about pathMatch: full and prefix
const appRoutes:Routes = <Routes>[
  {
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: 'experiment', component: ExperimentComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
