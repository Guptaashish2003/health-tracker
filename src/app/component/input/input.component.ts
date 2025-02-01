import { CommonModule } from "@angular/common";
import { Component, forwardRef, Input } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "input-btn",
  templateUrl: "./input.html",
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() required: boolean = false;

  value: string = '';
  isDisabled: boolean = false;

  private onChangeFn: (value: string) => void = () => {}; // Store reference to callback

  onInputChange(event: Event) { 
    const target = event.target as HTMLInputElement; // ✅ Correctly cast to HTMLInputElement
    this.value = target.value;
    this.onChangeFn(this.value); // ✅ Pass only string value
  }

  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChangeFn = fn; // ✅ Store callback function properly
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
