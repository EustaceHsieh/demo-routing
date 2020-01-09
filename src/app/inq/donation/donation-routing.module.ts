import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InqDonationComponent } from './inq-donation/inq-donation.component';
import { InqCollectionComponent } from '../collection/inq-collection/inq-collection.component';


const routes: Routes = [
  { path: 'inqDonation', component: InqDonationComponent },
  { path: 'inqCollection', component: InqCollectionComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
