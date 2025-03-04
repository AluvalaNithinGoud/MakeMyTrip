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
 
export interface   paymentdetailstype {
  name: string;
  Part: string;
  price: string;
  rest: string;
  Full: string;
  price2: string,
  amount: string,
    // or: string,
    // seats: string,
    
}

@Component({
    standalone: true,

    selector: ' n1-cab-payment-options',
    template: `
<div class=" flex justify-center p-4 ">
<div class="     border w-2/5 p-3  bg-white">
 
 <div  class="p-2 font-bold text-lg text-gray-900 block">{{option.name}}</div>


 <div class="  p-4">
 <div class="flex gap-2    items-center rounded-md ml-4 ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
    
<div class=" " >
<div class=" text-gray-900 font-bold   text-sm ">{{option.   Part }}</div>  
<div class="  items-center  flex justify-between gap-10 ">
<div class=" text-sm    text-gray-900  ">{{option.rest}}</div>
<div class=" text-gray-900 font-bold  text-gray-900  text-lg">{{option.  price2 }}</div>  
</div>
 

</div>
 
</div> 



<div class="  p-4">
 <div class="flex gap-2    items-center rounded-md  ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
    
<div  >
<div class=" text-sm font-bold  text-gray-900   ">{{option.Full}}</div>
 
<div class=" items-center  flex justify-between gap-14">
<div class=" text-gray-900   text-sm ">{{option.  amount }}</div> 
<div class=" text-gray-900 font-bold  text-gray-900  text-lg   ">{{option.  price }}</div>  
  
</div>
</div>
  
 
</div>
</div> 

<div class="flex justify-center p-2">
    <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border focus:outline-none" style="background-color: rgb(109, 157, 247);">
    <div class="text-white"> PAY NOW
</div></button></div>

 
</div>
</div>

    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1CabPaymentOptionsComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  ],
})
export class N1CabPaymentOptionsComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: paymentdetailstype = {
      name: '',
      Part: '',
      price: '',
      rest: '',
       Full: '',
       price2: '',
       amount: '',
        // or: '',
        // seats : '',
         
    };

    ngOnInit() {
        console.log(this.option);
    }
}
