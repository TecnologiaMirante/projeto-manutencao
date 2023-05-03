import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-equipment-dialog',
  templateUrl: './delete-equipment-dialog.component.html',
  styleUrls: ['./delete-equipment-dialog.component.css']
})
export class DeleteEquipmentDialogComponent {

  @Output() showDialog = new EventEmitter<boolean>();
  @Output() deleteEquipment = new EventEmitter<boolean>();
  
  constructor() {}

  cancel() {
    this.showDialog.emit(false);
  }

  confirmDelete() {
    this.deleteEquipment.emit(true);
  }

}
