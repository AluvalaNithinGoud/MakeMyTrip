
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1JourneyTimeComponent } from "./n1-journey-time";
import { N1CompanyLogo } from "./n1-company-logo";
import { N1TimingsComponent } from "./n1-timings";

export interface addonoptions {
  name: string,
  logo: string,
  subname: string,
  Zero_cancel: string,
  coupon: string,
  get_refund: string,
  in_case: string,
  terms: string,
  price: string,
}






@Component({
  standalone: true,

  selector: 'n1-add-ons',
  template: `
      
      <div class="bg-white flex justify-center ">
    <div class="   w-5/6  bg-white">
     <div class="flex gap-2 p-2">  
      
     <div class="text-gray-900 text-lg">{{option.name}}</div>
     <div class="text-lg">
      {{option.subname}}
</div>
     </div>

     <div class="bg-white border  w-full    rounded-md p-4  ">
    
      <label class="block cursor-pointer rounded-md   items-center gap-3">
      <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
      <div class="-mt-9  ">
      <div class="    flex items-center gap-2 p-2  ml-4">
        <div class="font-bold text-gray-900 text-lg block  ">
        {{option.Zero_cancel}}
</div>
<div class="font-bold  text-gray-900" style="background-color:rgb(34, 143, 170);">
  {{option.coupon}}
</div>
      </div>


      <div class="flex items-center gap-3">
      <div class="text-sm text-#243c5a" >
        {{option.get_refund}}
      </div>
      <div>{{option.in_case}}</div>
      <div>
        {{option.terms}}
      </div>
      <div class="font-bold  text-gray-900 text-lg ml-9">{{option.price}}</div>
</div>
</div>
</label>
</div>
</div>
</div>
         

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1AddOnsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1JourneyTimeComponent, N1CompanyLogo, N1TimingsComponent]
})
export class N1AddOnsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: addonoptions = {
    name: '',
    logo: '',
    subname: '',
    Zero_cancel: '',
    coupon: '',
    get_refund: '',
    in_case: '',
    terms: '',
    price: '',
  };
  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
}
