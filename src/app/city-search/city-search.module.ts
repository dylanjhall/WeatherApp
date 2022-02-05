import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CitySearchComponent } from './city-search.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [CitySearchComponent],
  exports: [CitySearchComponent],
})
export class CitySearchModule {}
