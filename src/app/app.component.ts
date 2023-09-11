import { Component } from '@angular/core';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fe-hrm-website';
  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((response) =>{
      if(response){
        console.log('this.employeesService.getEmployees() \n', response);

      }
    })
  }
}
