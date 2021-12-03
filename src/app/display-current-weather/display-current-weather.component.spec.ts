/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Other imports

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HttpService } from '../services/http/http.service';

import { DisplayCurrentWeatherComponent } from './display-current-weather.component';

describe('DisplayForecastComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: DisplayCurrentWeatherComponent;
  let fixture: ComponentFixture<DisplayCurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCurrentWeatherComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
