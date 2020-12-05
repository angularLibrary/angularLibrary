import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyCovidTrackerService {

  constructor(private http: HttpClient) { }
  getAllContries() {
    return this.http.get('https://api.covid19api.com/countries');
  }
  getStatusByCountry(country) {
    return this.http.get(`https://api.covid19api.com/total/country/${country}`);
  }
}
