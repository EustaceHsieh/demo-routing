import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationModule } from './donation/donation.module';
import { InqCollectionComponent } from './collection/inq-collection/inq-collection.component';

@NgModule({
  declarations: [InqCollectionComponent],
  imports: [
    CommonModule,
    DonationModule
  ]
})
export class InqModule { }
