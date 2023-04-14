import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsItemComponent } from './equipments-item.component';

describe('EquipmentsItemComponent', () => {
  let component: EquipmentsItemComponent;
  let fixture: ComponentFixture<EquipmentsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
