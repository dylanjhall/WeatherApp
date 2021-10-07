import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

private url = 'http://api.weatherapi.com/v1/current.json?key=c19fda244ae14731aa532946210710&q=N9J 3S4&aqi=no';

constructor(private http: HttpClient) { }

public getWeather() {
	return this.http.get(this.url);
}

}

