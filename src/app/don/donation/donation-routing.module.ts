import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonDonationComponent } from './don-donation/don-donation.component';

const routes: Routes = [{ path: 'donDonation', component: DonDonationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
