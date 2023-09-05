import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { TourdetailsComponent } from './tourdetails/tourdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path : '',
    redirectTo : 'overview',
    pathMatch : 'full',
  },
  {
    path : 'overview',
    component : OverviewComponent,
  },
  {
    path : 'tourdetails',
    component : TourdetailsComponent,
  },
  {
    path : 'home',
    component : HomeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
