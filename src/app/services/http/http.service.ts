import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityLocation, WeatherInfo } from 'src/app/response-interfaces/response-interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http: HttpClient) { }

public getWeather(url: string ) : Observable<any> {

	return this.http.get<any>(url);
}

public getCurrentConditions(url: string): Observable<WeatherInfo>{
  return this.http.get<WeatherInfo>(url);
}

public getLocatiion(url: string, options: {}){
  return this.http.get<CityLocation>(url);// TODO: fix naming collision
}

}

