import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShowLogin = true;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    let stringUser = localStorage.getItem('user')
    if(stringUser){
      this.router.navigateByUrl('/management')
    }
  }

  isRegister(event: any){
    if (event){
      this.isShowLogin = false;
    }
  }

  isLogin(event: any){
    if (event){
      this.isShowLogin = true;
    }
  }

  isLoginSuccess(event: any){
    if(event.isLogin == true && event.user){
      const stringUser = JSON.stringify(event.user);
      localStorage.setItem('user', stringUser);
      this.router.navigateByUrl('/management')
    }
  }
}
