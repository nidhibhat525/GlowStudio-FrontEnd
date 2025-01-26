import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../../auth/services/storage/user-storage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  postServiceDetails(serviceDto:any):Observable<any> {
     return this.http.post(
      BASIC_URL+ "api/admin/services",
       serviceDto,
       {headers:this.createAuthorizationHeader()}
      );
  }

  getService(pageNo:number):Observable<any> {
    return this.http.get(
     BASIC_URL+ `api/admin/service/${pageNo}`,
      {headers:this.createAuthorizationHeader()}
     );
 }

  getServiceById(id:number): Observable<any> {
     return this.http.get(BASIC_URL + `api/admin/services/${id}`,
      {headers:this.createAuthorizationHeader()}
     );
  }

  updateService(id:number, serviceDto:any):Observable<any> {
    return this.http.put(
     BASIC_URL+ `api/admin/services/${id}`,
      serviceDto,
      {headers:this.createAuthorizationHeader()}
     );
 }
 
 deleteService(roomId:number): Observable<any> {
  return this.http.delete(BASIC_URL + `api/admin/services/${roomId}`,
   {headers:this.createAuthorizationHeader()}
  );
}

getBookings(pageNo:number):Observable<any> {
  return this.http.get(
   BASIC_URL+ `api/admin/bookings/${pageNo}`,
    {headers:this.createAuthorizationHeader()}
   );
}

changeBookingStatus(bookingId:number, status:string):Observable<any> {
  return this.http.get(
   BASIC_URL+ `api/admin/bookings/${bookingId}/${status}`,
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


