import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { DisplayCurrentWeatherComponent } from './display-current-weather/display-current-weather.component';
import { NgbModule, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { CitySearchComponent } from './city-search/city-search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
      DisplayCurrentWeatherComponent,
    CitySearchComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
