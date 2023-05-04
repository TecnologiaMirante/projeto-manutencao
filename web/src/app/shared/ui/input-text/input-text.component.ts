import { Component, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() control!: FormControl;
  @Input() controlName!: FormControlName;
  @Input() title!: string;
  @Input() placeholder: string = "XXXXX";
}
