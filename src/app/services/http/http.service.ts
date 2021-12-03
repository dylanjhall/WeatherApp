import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http: HttpClient) { }

public getWeather(url: string ) : Observable<any> {

	return this.http.get<any>(url);
}

public get(url: string, options: {}){

}

}

