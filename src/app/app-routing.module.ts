import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home.component';


const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {path : 'home', component: HomeComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
