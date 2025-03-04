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

export interface  specialdetails {
  name: string;
  Roof: string;
  price: string;
  Car: string;
  //   Only: string;
  //   Waiting: string,
    // reviews: string,
    // or: string,
    // seats: string,
    
}

@Component({
    standalone: true,

    selector: '  n1-cab-special-req',
    template: `
<div class=" flex justify-center p-4 ">
<div class="     border w-5/6    bg-white">
 
<div  class="p-2 font-bold text-lg text-gray-900 block">{{option.name}}</div>


 <div class="  p-4">
 <div class="flex gap-2 border  items-center rounded-md  w-3/5">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
    
  <div class=" p-2  ">
<div class="font-bold text-gray-900  ">{{option.Roof}}</div>
<div class="flex items-center gap-8">
<div class=" text-sm  ">{{option.Car}}</div>
<div class=" text-gray-900  font-bold text-lg ">{{option.  price }}</div>
</div>
</div>

 
 

</div>

</div>

</div>
</div>

    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1SpecialReqComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule],
})
export class N1SpecialReqComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: specialdetails = {
      name: '',
      Roof: '',
      price: '',
      Car: '',
      // Kms: '',
      // Waiting: '',
        // reviews: '',
        // or: '',
        // seats : '',
         
    };

    ngOnInit() {
        console.log(this.option);
    }
}
