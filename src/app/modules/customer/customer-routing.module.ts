import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'treatment', component: TreatmentComponent },
  { path: 'booking', component: ViewBookingComponent },
  { path: 'details', component: DetailsComponent }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
