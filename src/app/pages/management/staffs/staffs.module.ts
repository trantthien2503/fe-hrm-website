import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffsComponent } from './staffs.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';

const routes: Routes = [{ path: '', component: StaffsComponent }];

@NgModule({
  declarations: [StaffsComponent, AddStaffComponent, EditStaffComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgZorroAntModule,
    NgxCsvParserModule
  ],
  exports: [RouterModule],
})
export class StaffsModule {}
