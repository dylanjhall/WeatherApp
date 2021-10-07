import { Component, OnInit } from '@angular/core';

import { Config, ConfigService } from '../config/config.service';
import { HttpService } from '../http.service';


declare module WeatherInfo {

  export interface Location {
      name: string;
      region: string;
      country: string;
      lat: number;
      lon: number;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
  }

  export interface Condition {
      text: string;
      icon: string;
      code: number;
  }

  export interface Current {
      last_updated_epoch: number;
      last_updated: string;
      temp_c: number;
      temp_f: number;
      is_day: number;
      condition: Condition;
      wind_mph: number;
      wind_kph: number;
      wind_degree: number;
      wind_dir: string;
      pressure_mb: number;
      pressure_in: number;
      precip_mm: number;
      precip_in: number;
      humidity: number;
      cloud: number;
      feelslike_c: number;
      feelslike_f: number;
      vis_km: number;
      vis_miles: number;
      uv: number;
      gust_mph: number;
      gust_kph: number;
  }

  export interface RootObject {
      location: Location;
      current: Current;
  }

}




@Component({
  selector: 'app-display-forecast',
  templateUrl: './display-forecast.component.html',
  styleUrls: ['./display-forecast.component.css']
})
export class DisplayForecastComponent implements OnInit {
  currentWeather: any;
  location!: WeatherInfo.Location;
  current!: WeatherInfo.Current;
  condition!: WeatherInfo.Condition;
  rootObject!: WeatherInfo.RootObject;
  config: Config | undefined ;
  weatherKey: string = '';

  public city: string = '';
  public temperature: string = '';



  constructor(private httpService: HttpService, private  configService:  ConfigService) { }

  ngOnInit(){

    this.configService.getConfig().subscribe(
      (resp)=> {
         this.weatherKey = resp.weatherKey;
         this.callWeatherService();
      }
    );


  }

  callWeatherService(){
    this.httpService.getWeather(this.weatherKey).subscribe(
      (resp) => {
        this.currentWeather = resp;
        console.log(resp);
      }, // response
      (error) => {console.log(error);}
      );
  }

}
