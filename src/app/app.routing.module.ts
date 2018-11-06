import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperimentComponent } from './experiment/experiment.component';
import { AboutComponent } from './about/about.component';


// let's talk about pathMatch: full and prefix
const appRoutes: Routes = <Routes>[
  {
    path: '',
    component: ExperimentComponent
  },
  {path: 'experiment', loadChildren: './experiment/experiment.module#ExperimentModule'},
  // {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
