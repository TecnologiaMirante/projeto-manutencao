import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipmentDialogComponent } from './delete-equipment-dialog.component';

describe('DeleteEquipmentDialogComponent', () => {
  let component: DeleteEquipmentDialogComponent;
  let fixture: ComponentFixture<DeleteEquipmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEquipmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEquipmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
