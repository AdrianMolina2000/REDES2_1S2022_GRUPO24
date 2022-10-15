import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { EconomicDevComponent } from './components/economic-dev/economic-dev.component';
import { AdministratorsComponent } from './components/administrators/administrators.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { PublicFuntionComponent } from './components/public-funtion/public-funtion.component'
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EconomicDevComponent,
    AdministratorsComponent,
    DevelopersComponent,
    PublicFuntionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
