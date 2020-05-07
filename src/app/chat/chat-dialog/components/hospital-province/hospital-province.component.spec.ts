import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalProvinceComponent } from './hospital-province.component';

describe('HospitalProvinceComponent', () => {
  let component: HospitalProvinceComponent;
  let fixture: ComponentFixture<HospitalProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
