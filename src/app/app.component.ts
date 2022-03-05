import { Component } from '@angular/core';
import { HttpService } from '../app/services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WeatherApp';
  currentWeather: any;
  /**
   *
   */
  constructor(private httpService: HttpService) {}
}
