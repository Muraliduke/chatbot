import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsummaryComponent } from './hospitalsummary.component';

describe('HospitalsummaryComponent', () => {
  let component: HospitalsummaryComponent;
  let fixture: ComponentFixture<HospitalsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
