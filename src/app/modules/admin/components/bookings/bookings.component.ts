  import { Component } from '@angular/core';
  import { AdminService } from '../../admin-services/admin.service';
  import { NzMessageService } from 'ng-zorro-antd/message';
  import { NzPaginationModule } from 'ng-zorro-antd/pagination';
  import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  import { NzTagModule } from 'ng-zorro-antd/tag';

  @Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrl: './bookings.component.scss',
    
  })
  export class BookingsComponent {

    currentPage=1;
    total:any;
    bookings:any;

    constructor(private adminService: AdminService,
      private message: NzMessageService
    ){
        this.getBookings();
    }

    getBookings(){
      this.adminService.getBookings(this.currentPage-1).subscribe(res=>{
        console.log(res);
        this.bookings=res.bookingDtoList;
        this.total = res.totalPages*5;

      })
    }
    pageIndexChange(value:any){
      this.currentPage = value;
      this.getBookings();
    }

    changeBookingStatus(bookingId:number, status:string){
        this.adminService.changeBookingStatus(bookingId,status).subscribe(res=>{
          console.log(status)
         this.message.success(`Booking status updated successfully`, {nzDuration:5000});
         this.getBookings();
        },
        error=>{
          this.message.error(`${error.error}`,{nzDuration:5000});
        }
      )
    }
  }
