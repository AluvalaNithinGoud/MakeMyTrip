import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';

export interface N1DropdownOptions {
    id: number,
    name: string,
    cityDetails: string
}



@Component({
    standalone: true,

    selector: 'n1-dropdown-airport',
    template: `
     
         <div
                        class="       "
                    >
                        <span class=" text-sm">{{point}}</span>


                        <div cid="" class="n1-content">
                            <select   style="border:0"
                           
                            class= {{class}}
                            [value]="_selected.name"
                            
                            (change)="onSelectionChange($event)">
                            
                            <option *ngFor="let item of options" [value]="item.name" class= "absolute mt-2   rounded-lg shadow-lg z-10 text-sm">{{ item.name }}
                    
                             </option>
                            </select>
                        </div>
                         
                        <!-- <div class="dropdown-container ">
                            <n1-dropdown
                                [data]="options"
                                [(value)]="_selected.name"
                                [label]="' '"
                                (valueChange)="onOptionSelected($event)"
                            ></n1-dropdown>
                        </div> -->

                        <p
                            *ngIf="_selected && _selected.cityDetails"
                            class="text-sm text-gray-500 "
                        >
                            <span class="font-medium text-gray-800">{{
                                _selected.cityDetails
                            }}</span>
                        </p>
                    </div>
                     

  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1DropdownAirportComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1DropdownComponent]
})
export class N1DropdownAirportComponent {

    private notInititated = { id: 1, name: " ", cityDetails: " ",  };
    
    @Input() point: string = "";
    @Input() options: N1DropdownOptions[] = [];
    @Input() name: string = "";
    @Input() label: string = "";
    @Input()  class: string = "";
     
     


    _selected: N1DropdownOptions = this.notInititated;
    get selected(): N1DropdownOptions {
        return this._selected;
    }

    @Input() set selected(val: N1DropdownOptions) {
        this._selected = val;
        this.selectedChange.emit(val);
    }
    @Output() selectedChange = new EventEmitter<N1DropdownOptions>();

    onOptionChange(val: N1DropdownOptions): void {
        debugger
        this.selected = val;
    }
 
    isDropdownOpen = false;


    toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    onSelectionChange(event: any): void {
        const selectedValue = event.target.value;
        this.onOptionSelected(selectedValue);
        // this.valueChange.emit(this.value);
      }

    onOptionSelected(value: string): void {
        this.isDropdownOpen = false;
        let item = this.options.find(
            (opt) => opt.name == value
        );
        if (item)
            this.selected = item;
        else
            this.selected = this.notInititated;
    }

}
