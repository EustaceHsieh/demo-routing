import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { DonDonationComponent } from './don-donation/don-donation.component';

@NgModule({
  declarations: [DonDonationComponent],
  imports: [
    CommonModule,
    DonationRoutingModule
  ]
})
export class DonationModule { }
