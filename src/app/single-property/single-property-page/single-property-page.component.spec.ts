import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePropertyPageComponent } from './single-property-page.component';

describe('SinglePropertyPageComponent', () => {
  let component: SinglePropertyPageComponent;
  let fixture: ComponentFixture<SinglePropertyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePropertyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
