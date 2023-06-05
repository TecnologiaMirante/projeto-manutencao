import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptorEditComponent } from './receptor-edit.component';

describe('ReceptorEditComponent', () => {
  let component: ReceptorEditComponent;
  let fixture: ComponentFixture<ReceptorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
