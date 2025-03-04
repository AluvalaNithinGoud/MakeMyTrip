import {   Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  standalone: true,

    selector: 'n1-radio-group',
    template: `
    <div cid="" class=" n1-title  flex    space-x-4 ">
      <h5 cid class="mb-0"> </h5>
       &nbsp;

      <div *ngFor="let option of options" cid="" class="border p-5  rounded-lg">
        <input
          cid=""
          type="radio"
          [name]="name"
          [id]="option"
          [value]="option"
          [(ngModel)]="value"
           (change)="onOptionChange(option)"
           class=" cursor-pointer w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 border"

        >
        <label cid="" [for]="option" class="cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option }}</label>
      </div>

      
    </div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1RadioGroupComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule]
})
export class N1RadioGroupComponent{
  @Input() label: string = 'Select an option';
  @Input() options: string[] = [];  
  @Input() name: string = 'radioGroup';
   
   @Output() valueChange = new EventEmitter<string>();

   _value: string = "";   
   get value(): string {
     return this._value;
   }
 
   @Input() set value(val: string) {
     this._value = val;
     this.valueChange.emit(val);
   }
 
   onOptionChange(selectedOption: string): void {
    this.value = selectedOption;
  }
  
}
