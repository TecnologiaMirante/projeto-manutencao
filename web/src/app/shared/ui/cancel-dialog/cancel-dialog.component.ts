import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.css']
})
export class CancelDialogComponent {

  @Output() showDialog = new EventEmitter<boolean>();
  @Output() exitEquipment = new EventEmitter<boolean>();
  
  constructor() {}

  cancel() {
    console.log("ok")
    this.showDialog.emit(false);
  }

  exit() {
    this.exitEquipment.emit(true);
  }
}
