import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InqModule } from './inq/inq.module';
import { DonModule } from './don/don.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'inq', loadChildren: () => InqModule },
      { path: 'don', loadChildren: () => DonModule }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
