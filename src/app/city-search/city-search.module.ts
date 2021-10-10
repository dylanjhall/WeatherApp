import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CitySearchComponent } from './city-search.component';


@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, CommonModule, NgModule],
  declarations: [CitySearchComponent],
  exports: [CitySearchComponent],
  bootstrap: [CitySearchComponent]
})
export class CitySearchModule {}
