import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { TimePipe } from './time.pipe';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StarttripComponent,
    ScanComponent,
    StarttripreasonComponent,
    IndriveComponent,
    EndtripComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatListModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
