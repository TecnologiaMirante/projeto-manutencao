import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDropdown2Component } from './input-dropdown2.component';

describe('InputDropdown2Component', () => {
  let component: InputDropdown2Component;
  let fixture: ComponentFixture<InputDropdown2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDropdown2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDropdown2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
