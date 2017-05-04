import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes:Routes = <Routes>[
  {
    path: '',
    children: [
      {path: '', component: HomeComponent}
    ]
  },
  {path: '**', redirectTo: ''} // exceptional urls redirected to default url
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
