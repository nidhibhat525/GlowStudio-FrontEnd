import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';
import { DemoNgZorroAntdModule } from '../../../DemoNgZorroAntdModule';
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone:true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [CommonModule, ReactiveFormsModule, DemoNgZorroAntdModule,NzFormModule,NzInputModule]
    
})
export class RegisterComponent {
   
  registerForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private authService: AuthService,
    private message : NzMessageService,
    private router : Router
  ){

  }
  ngOnInit(){
    this.registerForm = this.fb.group({
      email:[null, [Validators.email, Validators.required]],
      name:[null, Validators.required],
      password:[null, Validators.required]
    })
  }

  submitForm(){
    console.log('Register form values:', this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
        res=>{
          if(res.id!=null){
            this.message.success("Signup Successful", {nzDuration:5000});
            this.router.navigateByUrl("/");
          }
          else{
            this.message.error(`${res.message}`,{nzDuration:5000});
          }
        }
      )
  }
}
