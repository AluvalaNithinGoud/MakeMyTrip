import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter,  } from '@angular/core';
import { FormsModule, } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'n1-details-input',
 
  template: `
    <div class="flex flex-col space-y-2">
      <label [for]="name" class="text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ label }}
      </label>
      <input
      [type]="type"
        [id]="name"
        [name]="name"
        [(ngModel)]="value"
        [ngModelOptions]="{ standalone: true }"
        #inputField="ngModel"
        [class.border-red-500]="inputField.invalid && inputField.touched"
        [class.border-gray-300]="!inputField.invalid || !inputField.touched"
        class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
        placeholder="{{ placeholder }}"
        required
        [pattern]="pattern || ''" 
        ar
      />
      <div *ngIf="inputField.invalid && inputField.touched" class="text-sm text-red-500">
        <div *ngIf="inputField.errors?.['required']">This field is required.</div>
        <div *ngIf="inputField.errors?.['pattern']">Invalid input</div>
        <div *ngIf="inputField.errors?.['email']">Invalid email format.</div>
      </div>
    </div>
  `,
 
  imports: [FormsModule, CommonModule],
})
export class N1DetailsInputComponent {
  @Input() label: string = 'First Name';
  @Input() name: string = 'firstName';
  @Input() placeholder: string = 'Enter your first name';
  @Input() pattern?: string | RegExp;  
  @Output() valueChange = new EventEmitter<string>();
  @Input() type?: string; 

  private _value: string = '';
  get value(): string {
    return this._value;
  }
  @Input() set value(val: string) {
    this._value = val;
    this.valueChange.emit(val);
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }
}
