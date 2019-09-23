import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesFiltersComponent } from './properties-filters.component';

describe('PropertiesFiltersComponent', () => {
  let component: PropertiesFiltersComponent;
  let fixture: ComponentFixture<PropertiesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
