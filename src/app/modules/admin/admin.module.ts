import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';

//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AdminComponent,
    UpdateServiceComponent,
    BookingsComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    ServiceTypeComponent,
    NzIconModule,
    NzAvatarModule,
    NzCardModule,
    NzSkeletonModule,
    NzPaginationModule,
    NzTableModule,
    NzTagModule
  ]
})
export class AdminModule { }
