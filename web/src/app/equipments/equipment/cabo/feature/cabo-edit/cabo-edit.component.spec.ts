import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboEditComponent } from './cabo-edit.component';

describe('CaboEditComponent', () => {
  let component: CaboEditComponent;
  let fixture: ComponentFixture<CaboEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaboEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaboEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
