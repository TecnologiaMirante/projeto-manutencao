import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParabolicaEditComponent } from './parabolica-edit.component';

describe('ParabolicaEditComponent', () => {
  let component: ParabolicaEditComponent;
  let fixture: ComponentFixture<ParabolicaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParabolicaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParabolicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
