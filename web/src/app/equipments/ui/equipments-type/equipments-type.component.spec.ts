import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsTypeComponent } from './equipments-type.component';

describe('EquipmentsTypeComponent', () => {
  let component: EquipmentsTypeComponent;
  let fixture: ComponentFixture<EquipmentsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
