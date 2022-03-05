/* tslint:disable:no-unused-variable */
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
// Other imports

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('Service: Http', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule],
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
