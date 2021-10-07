import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
  weatherKey:string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    /**
     *
     */
    //  inject the HttpClient service as a dependency of an application class, as shown in the following
    constructor(private http:HttpClient) {

    }

    configUrl = 'assets/config.json';

    getConfig(){
        return this.http.get<Config>(this.configUrl);
    }
}
