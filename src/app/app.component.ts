import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';
  currentWeather: any;
  /**
   *
   */
  constructor(private httpService: HttpService) {


  }

  ngOnInit(){
    this.httpService.getWeather().subscribe(
      (resp) => {this.currentWeather = resp}, // response
      (error) => {console.log(error);}
      );
  }

}
