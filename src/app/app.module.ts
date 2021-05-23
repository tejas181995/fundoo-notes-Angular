import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';



 

@NgModule({
  declarations: [
    AppComponent,
    AppLogoComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
   // HttpClient
   HttpClientModule,
   MatSidenavModule,
   MatToolbarModule,
   MatListModule,
   MatTooltipModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
