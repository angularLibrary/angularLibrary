import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MyCovidTrackerComponent } from './my-covid-tracker.component';



@NgModule({
  declarations: [MyCovidTrackerComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [MyCovidTrackerComponent]
})
export class MyCovidTrackerModule { }
