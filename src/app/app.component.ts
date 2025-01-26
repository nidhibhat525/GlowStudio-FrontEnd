import { Component } from '@angular/core';
//import { RegisterComponent } from './auth/components/register/register.component';
import { Router, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserStorageService } from './auth/services/storage/user-storage.service';
//import { LoginComponent } from './auth/components/login/login.component';

@Component({
  selector: 'app-root',
  //standalone:true,
  //imports:[RouterOutlet,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'GlowWeb';
  isCollapsed = false;

  isCustomerLoggedIn:boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn:boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router: Router){

  }
  

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event.constructor.name=== "NavigationEnd"){
        this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      }
    }

    )
  }

  logout(){
    UserStorageService.signout();
    this.router.navigateByUrl('/');
  }

  
  
}
