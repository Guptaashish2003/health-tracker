import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  templateUrl: './button.html',
})
export class CustomButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Default: 'button'
  @Input() label: string = 'Click Me';
  @Input() disabled: boolean = false;
  @Input() customClass: string = ''; // Allows additional styling
  @Output() buttonClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }
}
