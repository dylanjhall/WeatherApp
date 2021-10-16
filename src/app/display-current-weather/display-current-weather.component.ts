import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Config, ConfigService } from '../config/config.service';
import { HttpService } from '../http.service';
import { WeatherInfo, Current, Condition } from '../response-interfaces/response-interfaces';


@Component({
  selector: 'app-display-forecast',
  templateUrl: './display-current-weather.component.html',
  styleUrls: ['./display-current-weather.component.css']
})
export class DisplayCurrentWeatherComponent implements OnInit {
  currentWeather!:  Observable< WeatherInfo>;
  location!: Location;
  current!: Current;
  condition!: Condition;

  config: Config | undefined ;
  weatherKey: string = '';

  public city: string = '';
  public temperature: number = 0;



  constructor(private httpService: HttpService, private  configService:  ConfigService) { }

  ngOnInit(){

    this.configService.getConfig().subscribe(
      (resp)=> {
         this.weatherKey = resp.weatherKey;
      }
    );

  }

  callWeatherService = () =>{
   this.currentWeather =  this.httpService.getWeather(this.weatherKey);
  }

  OnWeatherClick  = () => {
    this.callWeatherService();
    this.currentWeather.subscribe(
      (resp) => {
        console.log(resp);
        this.populateWeather(resp);
      },
      (error) => {console.log(error);}
      );
  };

  populateWeather(weatherResponse : WeatherInfo){
    this.city = weatherResponse.location.name;
    this.temperature = weatherResponse.current.temp_c;
  }


}
