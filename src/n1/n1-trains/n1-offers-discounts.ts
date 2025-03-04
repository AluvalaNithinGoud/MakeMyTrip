
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
   
 

export interface  discontdetails{
  name:string,
  welcome: string,
  Get : string,
  coupon: string,
  firstName: string,
   
   
}






@Component({
  standalone: true,

  selector: 'n1-offers-discounts',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="     w-5/6  bg-white border p-3 ">

 <div  class="p-2 font-bold text-lg text-gray-900 block">{{option.name}}</div>


 <div class="  p-4">
 <div class="flex gap-2 border  items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
<div>  
  <div class=" p-2  ">
<div class="font-bold text-gray-900 p-2">{{option.welcome}}</div>
<div class=" text-gray-900 text-sm ">{{option.  Get }}</div>
</div>
 
</div>
</div>
</div>


<div class="  p-4">
<div class="flex gap-2 border  items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
<div class="">
<div class="font-bold text-gray-900  ">{{option. coupon}}</div>  
  <div class=" p-2  flex justify-between items-center ">

<n1-details-input [(value)]="option.firstName" [label]="' '" [placeholder]="' First&Middle name'"
[name]="'firstName'" required></n1-details-input>
 
<div class=" "><button type="Button" class="items-center py-2 px-2 ms-2 font-bold rounded-md text-white-900 text-lg block bg-blue-700 border focus:outline-none" style="background-color: rgb(109, 157, 247);"><div class="text-white"> APPLY
</div></button></div>
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
      useExisting: forwardRef(() =>  N1OfferDiscountsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent]
})
export class N1OfferDiscountsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   discontdetails = {
    name: '',
    welcome: '',
    Get : '',
    coupon: '',
    firstName: '',
     
    
 
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
