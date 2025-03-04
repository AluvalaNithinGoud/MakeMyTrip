import {   Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 
 

@Component({
  standalone: true,

    selector: 'n1-swap-button',
    template: `
               <!-- Swap Button -->
               <div
                        class="swap-button flex items-center justify-center my-4 cursor-pointer"
                        (click)="swapCities()"
                    >
                        <span
                            class="material-symbols-outlined text-4xl text-blue-600 hover:text-blue-800"
                        >
                            swap_horizontal_circle
                        </span>
                    </div>

  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1SwapButtonComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, ]
})
export class N1SwapButtonComponent{


  
  isDropdownOpen = false;
  isToDropdownOpen = false;
  selectedOption: any = {
      id: 1,
      name: 'Hyderabad',
      cityDetails: 'HYD, Hyderabad Airport India',
  };
  selectedToOption: any = {
      id: 1,
      name: 'Mumbai',
      airportDetails: 'Mum,  Mumbai Airport India',
  };

  selectedCityName: string = 'Hyderabad';
  selectedToCityName: string = '  Mumbai';

   
  
  

  swapCities() {
      const temp = this.selectedCityName;
      this.selectedCityName = this.selectedToCityName;
      this.selectedToCityName = temp;
  }
  
}
