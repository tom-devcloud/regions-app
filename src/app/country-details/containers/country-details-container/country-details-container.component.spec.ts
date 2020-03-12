import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsContainerComponent } from './country-details-container.component';

describe('CountryDetailsContainerComponent', () => {
  let component: CountryDetailsContainerComponent;
  let fixture: ComponentFixture<CountryDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
