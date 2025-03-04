import {
    Component,
    Input,
    Output,
    EventEmitter,
    forwardRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface   big_currency  {
  country_name: string;
  amount: string;
   
}

@Component({
    standalone: true,

    selector: ' n1-country-checkbox-forex',
    template: `
<div class="   justify-center   "  >
<div class="       p-3  rounded-md">

 <div>
 <div class="flex items-center mb-4 border rounded-lg w-20 bg-white">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300  "> 
        <div class="font-bold text-gray-900">{{option.country_name}}</div>
        <div class="font-bold text-gray-900">{{option.amount}}</div>

    </label>
</div>
 </div>
</div>
</div>
 
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1CountryCheckboxForexomponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  ],
})
export class N1CountryCheckboxForexomponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

   @Input() option: big_currency = {
        country_name: '',
        amount: '',
         
        
      };

      



  


  

    ngOnInit() {
        console.log(this.option);
    }
}
