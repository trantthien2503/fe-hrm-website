import { Component, OnInit } from '@angular/core';
import { StaffsService } from 'src/app/services/staffs.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
  public staffs: Array<any> = [];
  constructor(
    private staffsService: StaffsService
  ) { }

  ngOnInit() {
    this.staffsService.getAllStaffs().subscribe((response: any)=>{
      if(response){
        if(response.data){
          this.staffs = response.data;
        }
      }
    }, error =>{
      console.log('error', error);

    })
  }

  generateFamale(number: any){
    if(number == '0' || number == 0)
      return 'male';
    else return 'female';
  }

}
