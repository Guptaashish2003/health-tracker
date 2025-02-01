import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './dropdown.html',
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() options: { id: number | string; type?: number|string  }[] = [];
  @Input() placeholder: string|number = '';

  selectedValue: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.selectedValue = value || '';  // Set default value to empty string if null/undefined
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelectionChange(value: string | Event) {
  if (typeof value === 'string') {
    // ✅ When called via ngModelChange, value is directly passed
    this.selectedValue = value;
  } else {
    // ✅ When called via (change) event
    const target = (value.target as HTMLSelectElement);
    this.selectedValue = target.value;
  }

  this.onChange(this.selectedValue); // Sync with form control
}

}
