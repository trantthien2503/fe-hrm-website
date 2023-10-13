import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'staffs',
        loadChildren: () =>
          import('./staffs/staffs.module').then((m) => m.StaffsModule),
      },

    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManagementComponent]
})
export class ManagementModule { }
