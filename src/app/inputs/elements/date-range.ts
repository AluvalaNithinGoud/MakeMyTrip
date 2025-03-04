import {   Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import "@danielmoncada/angular-datetime-picker/assets/style/picker.min.css";

@Component({
  standalone: true,

    selector: 'date-range',
    template: `
                  <div class="w-1/3 relative border p-2 hover:bg-gray-100 hover:shadow-lg">
    <span
        (click)="hiddenInput.click()"
        class="cursor-pointer text-gray-900 font-bold mb-1 text-sl block h-[45px] flex items-center"
    >Departure-Return
        {{ selectedDates ? (selectedDates[0] | date: 'MM/dd/yyyy') + ' - ' + (selectedDates[1] | date: 'MM/dd/yyyy') : ' ' }}
    </span>
    <!-- Hidden input to associate with the date picker -->
    <input
        #hiddenInput
        [owlDateTimeTrigger]="dt10"
        [owlDateTime]="dt10"
        [selectMode]="'range'"
        (dateTimeChange)="updateSelectedDates($event)"
        class="hidden"
    />
    <owl-date-time #dt10></owl-date-time>
</div>

  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() =>   DateRangeComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, OwlDateTimeModule, OwlNativeDateTimeModule]
})
export class  DateRangeComponent{
  
  
  selectedDates: Date[] | null = null;

  updateSelectedDates(event: any): void {
    this.selectedDates = event.value;
  }
}
