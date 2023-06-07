import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stations1Component } from './stations1.component';

describe('Stations1Component', () => {
  let component: Stations1Component;
  let fixture: ComponentFixture<Stations1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stations1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stations1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
