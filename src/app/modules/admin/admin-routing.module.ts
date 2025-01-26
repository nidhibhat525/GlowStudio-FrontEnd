import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'service', component: ServiceTypeComponent },
  { path: 'services/:id/edit', component: UpdateServiceComponent },
  { path: 'bookings', component: BookingsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
