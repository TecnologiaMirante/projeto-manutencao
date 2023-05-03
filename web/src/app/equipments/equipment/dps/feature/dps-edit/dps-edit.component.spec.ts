import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpsEditComponent } from './dps-edit.component';

describe('DpsEditComponent', () => {
  let component: DpsEditComponent;
  let fixture: ComponentFixture<DpsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
