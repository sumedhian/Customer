import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from 'src/HomeApp/HomeApp.MasterPageComponent';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/HomeApp/HomeApp.HomeComponent';
import { HomeRoutes } from './HomeApp.Routing';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule , 
    FormsModule,
    RouterModule.forRoot(HomeRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
