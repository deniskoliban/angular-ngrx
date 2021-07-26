import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedNumberComponent } from './bordered-number.component';

describe('BorderedNumberComponent', () => {
  let component: BorderedNumberComponent;
  let fixture: ComponentFixture<BorderedNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderedNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
