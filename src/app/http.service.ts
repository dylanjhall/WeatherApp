import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInfo } from './response-interfaces/response-interfaces';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

private baseUrl = 'http://api.weatherapi.com/v1/current.json';
private query: string = 'N9J 3S4&aqi=no';
constructor(private http: HttpClient) { }

public getWeather(wkey : string ) : Observable<WeatherInfo> {
  let url = this.buildUrl(this.baseUrl, wkey);
	return this.http.get<WeatherInfo>(url);
}

buildUrl (baseUrl : string, key: string)  {
  return baseUrl + '?key=' + key + '&q=' + this.query;
}

}

