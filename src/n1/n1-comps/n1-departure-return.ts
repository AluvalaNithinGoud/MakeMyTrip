import { Component, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import "@danielmoncada/angular-datetime-picker/assets/style/picker.min.css";
import { CommonModule } from '@angular/common';
 
@Component({
  standalone: true,
  selector: 'n1-departure-return',
  template: `
    <div class=" ">
  <span
    (click)="hiddenInput.click()"
    class="cursor-pointer text-gray-900 font-bold mb-1 text-sl block  flex items-center"
  >
    Departure-Return:
    {{  value?.[0] | date: 'MM/dd/yyyy' }} - {{  value?.[1] | date: 'MM/dd/yyyy' }}
  </span>
  <input
    #hiddenInput
    [owlDateTimeTrigger]="dt10"
    [owlDateTime]="dt10"
    [selectMode]="'range'"
    (dateTimeChange)="updateSelectedDates($event)"
    class="hidden"
  />
  <owl-date-time #dt10 [pickerType]="'calendar'"></owl-date-time>
</div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1DepartureReturnComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, OwlDateTimeModule, OwlNativeDateTimeModule,   ]
})
export class N1DepartureReturnComponent {
  @Input() point: string = "";
  @Input() value: Date[] | null = null;
  @Output() valueChange = new EventEmitter<Date[]>();

  updateSelectedDates(event: any): void {
    this. value = event.value || [];
    this.valueChange.emit(this. value ?? []);
  }

  // ControlValueAccessor methods
  writeValue(value: Date[] | null): void {
    this. value = value;
  }
  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }
  registerOnTouched(fn: any): void {}
}
