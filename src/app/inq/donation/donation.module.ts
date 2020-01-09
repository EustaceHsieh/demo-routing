import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';

import { InqDonationComponent } from './inq-donation/inq-donation.component';

@NgModule({
  declarations: [InqDonationComponent],
  imports: [
    CommonModule,
    DonationRoutingModule
  ]
})
export class DonationModule { }
