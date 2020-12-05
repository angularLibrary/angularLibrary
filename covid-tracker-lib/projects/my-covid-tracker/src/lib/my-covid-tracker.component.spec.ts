import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCovidTrackerComponent } from './my-covid-tracker.component';

describe('MyCovidTrackerComponent', () => {
  let component: MyCovidTrackerComponent;
  let fixture: ComponentFixture<MyCovidTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCovidTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCovidTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
