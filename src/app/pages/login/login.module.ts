import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';

const routes: Routes = [{ path: '', component: LoginComponent }];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgZorroAntModule,
  ],
  exports: [RouterModule],
})
export class LoginModule { }
