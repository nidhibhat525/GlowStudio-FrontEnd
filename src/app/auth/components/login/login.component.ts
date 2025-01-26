import { Component,NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { UserStorageService } from '../../services/storage/user-storage.service';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DemoNgZorroAntdModule } from '../../../DemoNgZorroAntdModule';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [CommonModule, ReactiveFormsModule, DemoNgZorroAntdModule,NzFormModule,NzInputModule]
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService : AuthService,
    private message : NzMessageService,
    private router : Router
  ){

  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null,[Validators.required]]
    })
  }

  submitForm(){
    this.authService.login(this.loginForm.value).subscribe(
      res=>{
        console.log(res);
        if(res.userId !=null){
          const user = {
            id: res.userId,
            role: res.role
          }
          UserStorageService.saveUser(user);
          UserStorageService.saveToken(res.jwt);

          console.log("User in localStorage:", localStorage.getItem('user'));
       
          if(UserStorageService.isAdminLoggedIn()){
            this.router.navigateByUrl('/admin/dashboard');
            console.log(UserStorageService.isAdminLoggedIn());
          }
          else if(UserStorageService.isCustomerLoggedIn()){
             this.router.navigateByUrl('/customer/treatment');
             console.log(UserStorageService.isCustomerLoggedIn());
          }

        }
      },

      error=>{
        this.message.error(`Bad Credentials`, {nzDuration:5000})
      }
    )
  }
}
