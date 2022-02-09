import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Config, ConfigService } from '../config/config.service';
import { HttpService } from '../services/http/http.service';
import { WeatherInfo, Current, Condition, CityLocation } from '../response-interfaces/response-interfaces';



@Component({
  selector: 'app-display-current-weather',
  templateUrl: './display-current-weather.component.html',
  styleUrls: ['./display-current-weather.component.css']
})

export class DisplayCurrentWeatherComponent implements OnInit {
  currentWeather$!:  Observable< WeatherInfo>;
  public location!: CityLocation;
  public current!:  Current;
  public condition!: Condition;
  // private weatherResponses : WeatherInfo[] = [];
  // private weatherResponse! : WeatherInfo;


  config: Config | undefined ;
  weatherKey: string = '';

  public city: string = 'Windsor';
  public temperature: number = 0;



  constructor(private httpService: HttpService, private  configService:  ConfigService) {

   }

  ngOnInit(){

    this.configService.getConfig().subscribe(
      (resp)=> {
         this.weatherKey = resp.weatherKey;
      }
    );

  }

  onGetCurrentWeather(){
    let url = 'http://api.weatherapi.com/v1/current.json?key=c19fda244ae14731aa532946210710&q=Windsor&aqi=no'
    let resp  = this.httpService.getCurrentConditions(url);
    resp.subscribe(
      (res: WeatherInfo) => {
        this.current = res.current;
        this.condition = res.current.condition;
        this.location = res.location;
        console.log(res.current);
      }
    )
  }


}
