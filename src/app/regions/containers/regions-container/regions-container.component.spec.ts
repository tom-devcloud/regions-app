import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsContainerComponent } from './regions-container.component';

describe('RegionsContainerComponent', () => {
  let component: RegionsContainerComponent;
  let fixture: ComponentFixture<RegionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
