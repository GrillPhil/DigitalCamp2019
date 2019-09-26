import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StarttripComponent } from './starttrip/starttrip.component';
import { ScanComponent } from './scan/scan.component';
import { StarttripreasonComponent } from './starttripreason/starttripreason.component';
import { IndriveComponent } from './indrive/indrive.component';
import { EndtripComponent } from './endtrip/endtrip.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StarttripComponent,
    ScanComponent,
    StarttripreasonComponent,
    IndriveComponent,
    EndtripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
