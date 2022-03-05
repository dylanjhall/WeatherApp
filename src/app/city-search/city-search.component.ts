import { Component } from '@angular/core';
import { from, Observable, of, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { HttpService } from '../services/http/http.service';
import {
  WeatherInfo,
  CityLocation,
} from '../response-interfaces/response-interfaces';

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styles: [
    `
      .form-control {
        width: 300px;
      }
    `,
  ],
})
export class CitySearchComponent {
  public model: any;
  public location!: CityLocation[];

  constructor(private httpService: HttpService) {}

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((r) => this.getCity()),
      map((term) =>
        term.length < 2 ? [] : this.handleArryOfLocationData(term)
      ) // TODO: investigate slice amount   //
    );

  handleArryOfLocationData(term: string): string[] {
    let cities = [this.location[0].name];
    return cities
      .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
      .slice(0, 10);
    // return [""];
  }

  getCity() {
    // TODO have to change httpservice to take url
    // const weatherInfo$ =   this.httpService.getWeather('c19fda244ae14731aa532946210710') ; // TODo  hide westher key
    //  weatherInfo$.subscribe(  w => {
    //   console.log(w.location);
    //   this.location = [w.location] ;
    //  });
  }
}
