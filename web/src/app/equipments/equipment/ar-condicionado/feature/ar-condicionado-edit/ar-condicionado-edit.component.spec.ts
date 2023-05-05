import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArCondicionadoEditComponent } from './ar-condicionado-edit.component';

describe('ArCondicionadoEditComponent', () => {
  let component: ArCondicionadoEditComponent;
  let fixture: ComponentFixture<ArCondicionadoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArCondicionadoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArCondicionadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
