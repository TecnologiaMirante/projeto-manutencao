import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArCondicionadoCreateComponent } from './ar-condicionado-create.component';

describe('ArCondicionadoCreateComponent', () => {
  let component: ArCondicionadoCreateComponent;
  let fixture: ComponentFixture<ArCondicionadoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArCondicionadoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArCondicionadoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
