import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NonNullableFormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() isRegister = new EventEmitter();
  @Output() isLoginSuccess = new EventEmitter();

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });


  constructor(
    private fb: NonNullableFormBuilder,
    private userService: UserService,
    private nzNotificationService: NzNotificationService
    ) { }

  ngOnInit() {
  }

  goToRegister(){
    this.isRegister.emit(true);
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      let data = {
        email: this.validateForm.value.email,
        password: this.validateForm.value.password
      }
      this.userService.loginUser(data).subscribe((response: any)=>{
        if(response){
          if(response.data == false) return;
          if(response.user){
            this.nzNotificationService.success(
              'Đăng nhập thành công',
              'Bạn đã đăng nhập thành công',
              { nzPlacement: 'top' }
            );
            this.isLoginSuccess.emit({
              isLogin: true,
              user: response.user
            });
          }
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
