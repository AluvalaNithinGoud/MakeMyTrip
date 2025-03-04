import {   Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';


@Component({
  standalone: true,

    selector: 'n1-to',
    template: `
            <!-- To Section -->
            <div
                        class="border p-5 rounded-l-lg hover:bg-sky-500 relative cursor-pointer"
                    >
                        <span class="block mb-1 text-sl">To</span>
                        
                        <div class="dropdown-container">
                            <n1-dropdown
                                [data]="toDropdownOptions"
                                [(value)]="selectedToCityName"
                                [label]="'   '"
                                (valueChange)="onToOptionSelected($event)"
                            ></n1-dropdown>
                        </div>

                        <p
                            *ngIf="
                                selectedToOption &&
                                selectedToOption.airportDetails
                            "
                            class="text-sm text-gray-500"
                        >
                            <span class="font-medium text-gray-800">
                                {{ selectedToOption.airportDetails }}</span
                            >
                        </p>
                    </div>
        
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1ToComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1DropdownComponent]
})
export class N1ToComponent{
  
  isToDropdownOpen = false;

  selectedToOption: any = {
    id: 1,
    name: 'Mumbai',
    airportDetails: 'Mum,  Mumbai Airport India',
};

selectedToCityName: string = '  Mumbai';

toDropdownOptions = [
  {
      id: 1,
      name: 'Hyderabad',
      airportDetails: 'Rajiv Gandhi International Airport',
  },
  {
      id: 2,
      name: 'Mumbai',
      airportDetails: 'Mum, Hyderabad Airport India',
  },
  {
      id: 3,
      name: 'Bangalore',
      airportDetails: 'BNG, Hyderabad Airport India',
  },
  {
      id: 4,
      name: 'Delhi',
      airportDetails: 'DEL, Hyderabad Airport India',
  },
  {
      id: 5,
      name: 'Chennai',
      airportDetails: 'CHE, Hyderabad Airport India',
  },
];

toggleToDropdown(): void {
  this.isToDropdownOpen = !this.isToDropdownOpen;
}


onToOptionSelected(value: string): void {
  this.isToDropdownOpen = false;
  this.selectedToCityName = value;
  this.selectedToOption = this.toDropdownOptions.find(
      (opt) => opt.name == value
  ) as any;
}
}
