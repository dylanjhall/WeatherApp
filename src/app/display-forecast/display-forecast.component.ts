import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display-forecast',
  templateUrl: './display-forecast.component.html',
  styleUrls: ['./display-forecast.component.css']
})
export class DisplayForecastComponent implements OnInit {
  currentWeather: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(){
    this.httpService.getWeather().subscribe(
      (resp) => {this.currentWeather = resp}, // response
      (error) => {console.log(error);}
      );
  }

}
