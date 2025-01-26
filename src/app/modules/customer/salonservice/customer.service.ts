import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../../auth/services/storage/user-storage.service';

const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getService(pageNo:number):Observable<any> {
    return this.http.get(
     BASIC_URL+ `api/customer/treatment/${pageNo}`,
      {headers:this.createAuthorizationHeader()}
     );
  }

  bookService(bookingDto:any):Observable<any> {
    return this.http.post(
     BASIC_URL+ `api/customer/book`, bookingDto,
      {headers:this.createAuthorizationHeader()}
     );
  }

  getMyBookings(pageNo:number):Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(
     BASIC_URL+ `api/customer/booking/${userId}/${pageNo}`,
      {headers:this.createAuthorizationHeader()}
     );
  }

  deleteBooking(serviceId:number): Observable<any> {
    return this.http.delete(BASIC_URL + `api/customer/booking/${serviceId}`,
      {headers:this.createAuthorizationHeader()}

    );
  }

  createAuthorizationHeader(){
    let authHeader: HttpHeaders= new HttpHeaders;
    return authHeader.set(
      'Authorization',
      'Bearer ' +UserStorageService.getToken()
    )
}
}
