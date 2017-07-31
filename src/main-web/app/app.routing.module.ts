import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

// let's talk about pathMatch: full and prefix
const appRoutes:Routes = <Routes>[
  {
    path: '',
    component: HomeComponent,
  },
  {path: 'experiment', loadChildren: './experiment/experiment.module#ExperimentModule'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
