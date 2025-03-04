import {   Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  standalone: true,

    selector: 'n1-radio',
    template: `
    <div cid="" class=" n1-title  flex items-center   gap-2 ">
      <h5 cid class="mb-0"> </h5>
       &nbsp;

      <div *ngFor="let option of options" cid="" class="  p-1 rounded-lg">
        <input
        class= {{class}}
          cid=""
          type="radio"
          [name]="name"
          [id]="option"
          [value]="option"
          [(ngModel)]="value"
           (change)="onOptionChange(option)"
           class=" cursor-pointer  text-purple-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600  "

        >
        <label cid="" [for]="option" class="cursor-pointer   px-1 text-sm text-gray-900 dark:text-gray-300">{{ option }}</label>
      </div>

      
    </div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1RadioComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule]
})
export class N1RadioComponent{
  @Input() label: string = 'Select an option';
  @Input() options: string[] = [];  
  @Input() name: string = 'radioGroup';
  @Input()  class: string = "";

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
