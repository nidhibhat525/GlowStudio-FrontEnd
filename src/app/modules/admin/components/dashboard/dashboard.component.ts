import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DemoNgZorroAntdModule } from '../../../../DemoNgZorroAntdModule';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceTypeComponent } from '../service-type/service-type.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { RouterModule } from '@angular/router';
import { error } from 'console';
import { NzModalService } from 'ng-zorro-antd/modal';

//import { DemoNgZorroAntdModule } from '../../../DemoNgZorroAntdModule';


@Component({
  selector: 'app-dashboard',
  standalone:true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports:[DemoNgZorroAntdModule, 
    NzIconModule, NzAvatarModule,NzCardModule,
    NzSkeletonModule,CommonModule,ServiceTypeComponent,
    NzPaginationModule,RouterModule]
})


export class DashboardComponent {
  isCollapsed = false;

  currentPage =1;
  service = [];
  total:any;
  loading=false;

  constructor(private adminService: AdminService,
    private message : NzMessageService,
    private modalService :NzModalService

  ){
      this.getService();
  }

  getService(){
    this.adminService.getService(this.currentPage-1).subscribe(res=>{
      console.log(res);
      this.service=res.serviceDtoList
      //console.log(res.serviceDto)
      this.total=res.totalPages *1;
    })
  }

  pageIndexChange(value:any){
this.currentPage= value;
this.getService();
  }

  showConfirm(roomId:number){
      this.modalService.confirm({
      nzTitle:'confirm',
      nzContent:'Do you want to delete this service?',
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
      nzOnOk: ()=>this.deleteService(roomId)
      });
  }

  deleteService(roomId:number){
    this.adminService.deleteService(roomId).subscribe(res=>{
    this.message.success(`Service deleted successfully`, {nzDuration:5000});
    this.getService();
    },
    error=>{
      this.message.error(`${error.error}`,{nzDuration:5000});
    }
  )
  }
}
