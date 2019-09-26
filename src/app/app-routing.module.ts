import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StarttripComponent } from './starttrip/starttrip.component';
import { ScanComponent } from './scan/scan.component';
import { StarttripreasonComponent } from './starttripreason/starttripreason.component';
import { IndriveComponent } from './indrive/indrive.component';
import { EndtripComponent } from './endtrip/endtrip.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'starttrip',
    component: StarttripComponent
  },
  {
    path: 'scan',
    component: ScanComponent
  },
  {
    path: 'starttripreason',
    component: StarttripreasonComponent
  },
  {
    path: 'indrive',
    component: IndriveComponent
  },
  {
    path: 'endtrip',
    component: EndtripComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
