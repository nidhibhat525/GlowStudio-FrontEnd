import { Component,NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomerService } from '../../salonservice/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserStorageService } from '../../../../auth/services/storage/user-storage.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DemoNgZorroAntdModule } from '../../../../DemoNgZorroAntdModule';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrl: './treatment.component.scss'
})
export class TreatmentComponent {

  currentPage =1;
  service = [];
  total:any;
  loading=false;

  constructor(private customerService: CustomerService,
    private message : NzMessageService,
    private modalService :NzModalService

  ){
      this.getService();
  }

  getService(){
    this.customerService.getService(this.currentPage-1).subscribe(res=>{
      console.log(res);
      this.service=res.serviceDtoList
      this.total=res.totalPages *1;
    })
  }

  pageIndexChange(value:any){
this.currentPage= value;
this.getService();
  }

  isVisibleMiddle=false;
  date:Date[] = [];
  bookingDate: Date;
  
  id :number;
  
  onChange(result:Date){
    //console.log(result.length)
     
        this.bookingDate = result;
        console.log('Selected Booking Date:', this.bookingDate);
      
  }

  handleCancelMiddle(){
    this.isVisibleMiddle = false;
  }

  handleOkMiddle():void{
    if (!this.bookingDate) {
      this.message.error('Please select a date before submitting.', { nzDuration: 3000 });
      return;
    }
const obj={
  userId :UserStorageService.getUserId(),
  serviceId: this.id,
  bookingDate: this.bookingDate
}
this.customerService.bookService(obj).subscribe(res=>{
this.message.success(`Request is successfully submitted`,{nzDuration:5000});
this.isVisibleMiddle=false;
},
  error=>{
    this.message.error(`${error.error}`, {nzDuration:5000})
  }
)
  }

  showModalMiddle(id:number){
      this.id =id;
      //console.log(this.id);
      this.isVisibleMiddle=true;
      //console.log(this.date)

  }

  



}
