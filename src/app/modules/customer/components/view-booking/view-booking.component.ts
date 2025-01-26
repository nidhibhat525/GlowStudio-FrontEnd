import { Component } from '@angular/core';
import { CustomerService } from '../../salonservice/customer.service';
import { error } from 'console';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.scss'
})
export class ViewBookingComponent {

  currentPage:any = 1;
  total:any;
  bookings:any;

  constructor(private customerService:CustomerService,
    private message : NzMessageService,
    private router : Router,
    private modalService : NzModalService
  ){
    this.getBookings();
  }
  getBookings(){
    this.customerService.getMyBookings(this.currentPage-1).subscribe(res=>{
    console.log(res);
    this.bookings=res.bookingDtoList;
    this.total = res.totalPages*5;
    },
    error=>{
      this.message.error(`${error.error}`,{nzDuration:5000});
    }
  )
  }

  pageIndexChange(value:any){
     this.currentPage=value;
     this.getBookings();
  }

  showConfirm(serviceId:number){
    this.modalService.confirm({
      nzTitle: 'confirm',
      nzContent: 'Do you want to cancel your booking?',
      nzOkText: 'Yes',
      nzCancelText: 'No',
      nzOnOk:()=>this.deleteBooking(serviceId)

    });
  }

  deleteBooking(serviceId:number){
     this.customerService.deleteBooking(serviceId).subscribe(res=>{
      this.message.success(`Booking canceled successfully`,{nzDuration:5000});
      this.getBookings();
     },
     error=>{
      this.message.error(`${error.error}`, {nzDuration:5000});
     }
    )
  }
}
