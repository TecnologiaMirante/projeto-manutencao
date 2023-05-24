import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorreEditComponent } from './torre-edit.component';

describe('TorreEditComponent', () => {
  let component: TorreEditComponent;
  let fixture: ComponentFixture<TorreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorreEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
