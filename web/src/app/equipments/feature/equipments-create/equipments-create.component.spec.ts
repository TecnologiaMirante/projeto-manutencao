import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsCreateComponent } from './equipments-create.component';

describe('EquipmentsCreateComponent', () => {
  let component: EquipmentsCreateComponent;
  let fixture: ComponentFixture<EquipmentsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
