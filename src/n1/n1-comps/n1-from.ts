import {   Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';


@Component({
  standalone: true,

    selector: 'n1-from',
    template: `
     
         <div
                        class="border p-5 rounded-l-lg relative cursor-pointer  hover:shadow-lg   border   hover:bg-sky-500 "
                    >
                        <span class="block mb-1 text-sl">From</span>
                 
                        <div class="dropdown-container ">
                            <n1-dropdown
                                [data]="dropdownOptions"
                                [(value)]="selectedCityName"
                                [label]="' '"
                                (valueChange)="onOptionSelected($event)"
                            ></n1-dropdown>
                        </div>

                        <p
                            *ngIf="selectedOption && selectedOption.cityDetails"
                            class="text-sm text-gray-500 "
                        >
                            <span class="font-medium text-gray-800">{{
                                selectedOption.cityDetails
                            }}</span>
                        </p>
                    </div>
                     

  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1FromComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1DropdownComponent]
})
export class N1FromComponent{
  isDropdownOpen = false;
   
  selectedOption: any = {
      id: 1,
      name: 'Hyderabad',
      cityDetails: 'HYD, Hyderabad Airport India',
  };
  selectedCityName: string = 'Hyderabad';
  dropdownOptions = [
    {
        id: 1,
        name: 'Hyderabad',
        cityDetails: 'HYD, Hyderabad Airport India',
    },
    {
        id: 2,
        name: 'Bangalore',
        cityDetails: 'Blr, Hyderabad Airport India',
    },
    { id: 3, name: 'Mumbai', cityDetails: 'Mum,  Mumbai Airport India' },
    {
        id: 4,
        name: 'Chennai',
        cityDetails: 'Chennai, Hyderabad Airport India',
    },
];

toggleDropdown(): void {
  this.isDropdownOpen = !this.isDropdownOpen;
}


onOptionSelected(value: string): void {
  this.isDropdownOpen = false;
  this.selectedCityName = value;
  this.selectedOption = this.dropdownOptions.find(
      (opt) => opt.name == value        
  );
}

}
