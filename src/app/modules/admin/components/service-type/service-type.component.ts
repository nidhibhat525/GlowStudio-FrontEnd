import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-service-type',
  standalone:true,
  templateUrl: './service-type.component.html',
  styleUrl: './service-type.component.scss',
  imports:[CommonModule, NzFormModule, ReactiveFormsModule]
})
export class ServiceTypeComponent {

  serviceTypeForm: FormGroup

  constructor(private fb:FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService
  ){

    this.serviceTypeForm = this.fb.group(
      {
        type:['', Validators.required],
        serviceName:['',Validators.required],
        price:['',Validators.required]
      }
    )

  }

  submitForm(){
         this.adminService.postServiceDetails(this.serviceTypeForm.value).subscribe(res=>{
          console.log(this.serviceTypeForm.value)
            this.message.success(
              'Service Added Successfully', {nzDuration:5000}
            );
            this.router.navigateByUrl('/admin/dashboard')
         },
         error=>{
          this.message.error(
            `${error.error}`,{nzDuration:5000}
          )
         }
        )
  }

}
