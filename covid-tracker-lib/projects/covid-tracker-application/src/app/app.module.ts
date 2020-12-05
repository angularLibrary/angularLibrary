import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCovidTrackerModule } from 'projects/my-covid-tracker/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCovidTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
