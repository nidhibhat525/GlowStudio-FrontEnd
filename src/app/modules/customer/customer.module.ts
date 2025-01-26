import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
//import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [
    CustomerComponent,
    TreatmentComponent,
    ViewBookingComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzModalModule,
    NzIconModule,
    NzAvatarModule,
    NzCardModule,
    NzSkeletonModule,
    NzPaginationModule,
    NzInputModule,
    NzDatePickerModule,
    NzAutocompleteModule,
    NzTableModule,
    NzTagModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerModule { }
