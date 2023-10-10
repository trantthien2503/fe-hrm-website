import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffsComponent } from './staffs.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';

const routes: Routes = [{ path: '', component: StaffsComponent }];

@NgModule({
  declarations: [StaffsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgZorroAntModule,
  ],
  exports: [RouterModule],
})
export class StaffsModule {}
