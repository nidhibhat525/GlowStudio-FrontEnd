import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.scss'
})
export class UpdateServiceComponent {
  updateServiceForm: FormGroup
  id: any;
   

  constructor(private fb:FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService,
    private activatedRoute : ActivatedRoute
  ){

    this.updateServiceForm = this.fb.group(
      {
        type:['', Validators.required],
        serviceName:['',Validators.required],
        price:['',Validators.required]
      }
    );
    this.getServiceById();
    
  }
  
    
  
  submitForm(){
        this.adminService.updateService(this.id, this.updateServiceForm.value).subscribe(res=>{
          this.message.success(`Room updated successfully`,{nzDuration:5000});
          this.router.navigateByUrl("/admin/dashboard");
        },
         error=>{
          this.message.error(`${error.error}`,{nzDuration:5000});
         }   
      )
  }
  getServiceById(){
    this.id= this.activatedRoute.snapshot.params['id'];
    this.adminService.getServiceById(this.id).subscribe(res=>{
       this.updateServiceForm.patchValue(res);
    },
    error=>{
      this.message.error(`${error.error}`,{nzDuration:5000})
    }
  )
  }
}
