import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaustorEditComponent } from './exaustor-edit.component';

describe('ExaustorEditComponent', () => {
  let component: ExaustorEditComponent;
  let fixture: ComponentFixture<ExaustorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaustorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaustorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
