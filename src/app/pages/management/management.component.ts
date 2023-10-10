import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  public menus: Array<any> = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      childs: [
        {
          title: 'Welcome',
          icon: '',
          router: '/welcome'
        }
      ]
    },
    {
      title: 'Quản trị',
      icon: 'form',
      childs: [
        {
          title: 'Danh sách nhân viên',
          icon: '',
          router: '/management/staffs'
        }
      ]
    },
  ]

  public title: string = 'Danh sách nhân viên';
  public isCollapsed = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  chooseItemMenu(title: string){
    this.title = title;
  }

  logout(){
    const stringUser = localStorage.getItem('user')
    if(stringUser){
      localStorage.removeItem('user');
    }
    this.router.navigateByUrl('login')
  }
}
