import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  static saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);

  }

  static saveUser(user:any):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string{
    return localStorage.getItem(TOKEN);
    
  }

  static getUser(): any{
     return JSON.parse(localStorage.getItem(USER));
  }

  static getUserId(): string{
    const user =this.getUser();
    if(user==null){
      return '';
    }
    return user.id;
  }

  static getRole(): string{
    const user =this.getUser();
    //console.log(user);
    if(user==null){
      return '';
    }
    return user.role;
  }

  static isAdminLoggedIn(): boolean{
    if(this.getToken()===null){
      return false;
    }
    const role:string = this.getRole();
    //console.log(role);
    //console.log(role === 'ADMIN')
    return role === 'ADMIN';
  }

  static isCustomerLoggedIn(): boolean{
    if(this.getToken()===null){
      return false;
    }
    const role:string = this.getRole();
    //console.log(role);
   // console.log(role === 'CUSTOMER')
    return role === 'CUSTOMER';

  }

  static signout(): void{
     window.localStorage.removeItem(TOKEN);
     window.localStorage.removeItem(USER); 
  }
}
