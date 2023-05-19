import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinadorEditComponent } from './combinador-edit.component';

describe('CombinadorEditComponent', () => {
  let component: CombinadorEditComponent;
  let fixture: ComponentFixture<CombinadorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinadorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
