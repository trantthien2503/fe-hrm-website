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
      this.routerLoginSucess()
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
      this.routerLoginSucess()
    }
  }

  routerLoginSucess(){
    this.router.navigateByUrl('/management/dashboard')
  }
}
