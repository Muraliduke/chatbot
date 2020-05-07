import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincewiseComponent } from './provincewise.component';

describe('ProvincewiseComponent', () => {
  let component: ProvincewiseComponent;
  let fixture: ComponentFixture<ProvincewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
