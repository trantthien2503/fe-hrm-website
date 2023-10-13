import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgZorroAntModule,
  ],
  exports: [RouterModule],
})
export class DashboardModule { }
