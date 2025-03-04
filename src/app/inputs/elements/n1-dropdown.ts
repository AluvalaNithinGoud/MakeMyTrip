import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,

  selector: 'n1-dropdown',
  styles: [
    `
    select::-ms-expand {
    display: none;

    }
    select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  
    }
    `
  ],
  template: `
    <div cid="" class="n1-card   rounded-md ">
       
      <div cid="" class="n1-content">
        <select style="border:0   "
          cid=""
          class="h-[35px] font-bold text-gray-900 text-xl block w-full outline-0 cursor-pointer transition-all "
          [value]="value"
          
          (change)="onSelectionChange($event)">
          
          <option *ngFor="let item of data" [value]="item.name" class= "absolute mt-2 w-full  border rounded-lg shadow-lg z-10 text-sm">{{ item.name }}
 
   
        </option>
        </select>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1DropdownComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule]
})
export class N1DropdownComponent {
  click() {
    throw new Error('Method not implemented.');
  }
  @Input() data: { id: number; name: string }[] = [];
  @Input() label: string = 'Select an option';

  // @Input() value: string = '';  

  _value: string = "NOT SET";
  get value(): string {
    return this._value;
  }

  @Input() set value(val: string) {
    this._value = val;
    this.valueChange.emit(val);
  }

  @Output() valueChange = new EventEmitter<string>();

  onSelectionChange(event: any): void {
    const selectedValue = event.target.value;
    this.value = selectedValue;
    this.valueChange.emit(this.value);
  }
}
