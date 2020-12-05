import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyCovidTrackerService } from './Services/my-covid-tracker.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-my-covid-tracker',
  templateUrl: 'my-covid-tracker.component.html',
  styleUrls: ['my-covid-tracker.component.scss']
})
export class MyCovidTrackerComponent implements OnInit {
  contriesList$: Observable<any>;
  getAllStatus$: Observable<any>;
  constructor(private covidTrackerSevice: MyCovidTrackerService) { }

  ngOnInit(): void {
    this.contriesList$ = this.covidTrackerSevice.getAllContries();
  }
  getCasesAccordingToCountries(data) {
    if (!!data) {
      this.getAllStatus$ = this.covidTrackerSevice.getStatusByCountry(data.target.value).pipe(map((res: any) => res[res.length - 1]));
    }
  }


}
