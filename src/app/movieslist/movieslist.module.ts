import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovieslistPage } from './movieslist.page';
import { MovieslistitemComponent } from './movieslistitem/movieslistitem.component';

const routes: Routes = [
  {
    path: '',
    component: MovieslistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MovieslistPage, MovieslistitemComponent]
})
export class MovieslistPageModule {}
