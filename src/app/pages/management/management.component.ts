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
          title: 'Tổng quan',
          icon: '',
          router: '/management/dashboard'
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

  public title: string = 'Tổng quan';
  public isCollapsed = false;
  public user: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const stringUser = localStorage.getItem('user')
    if(stringUser){
      this.user = JSON.parse(stringUser);
    }

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
