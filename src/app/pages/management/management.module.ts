import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ManagementComponent]
})
export class ManagementModule { }
