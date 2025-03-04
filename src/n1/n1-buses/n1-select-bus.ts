
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
   
 

export interface   busdetails{
  name:string,
  org: string,
  date: string,
  price: string,
  Ordinary: string,
  rating: string,
  seats: string,
  policies: string,
  photos: string,
  amenities: string,
  pickup: string,
  reviews: string,
  //     avalible: string,
  //     b_no: string,
   
   
}






@Component({
  standalone: true,

  selector: 'n1-select-bus',
  template: `
        
         <div class=" flex  p-2  ">
         <div class="     w-full  bg-white  rounded-lg border cursor-pointer p-4">

  
    <div class="text-[#4fd1c5] cursor-pointer  font-bold  ">{{option.name}}</div> 

  <div class="flex justify-between   rounded-lg"> 
  <div class="  text-gray-900 cursor-pointer text-lg font-bold  ">{{option.org}}</div>
  <div class="text-gray-900 cursor-pointer text-lg font-bold  ">{{option.date}}</div>
  <div class=" text-gray-900 font-bold cursor-pointer text-lg  ">{{option.price}}</div>
  </div>  
<div class=" ">{{option. Ordinary}}</div>

<div  class="flex justify-between  p-2 rounded-lg items-center"> 
<div  class=" p-1 border rounded-lg text-white font-bold" style="background-color: rgba(139, 194, 211, 0.93);">{{option. rating}}</div>
<div class="text-sm">{{option. seats}}</div>
 
</div>
<div class="p-1"><hr></div>
<div class="flex justify-between items-center P-2">
<div class="flex gap-8 ">
<div class=" text-sm">{{option.policies}}</div>
<div class="text-sm">{{option.photos}}</div>
<div class="text-sm">{{option. amenities }}</div>
<div class="text-sm">{{option.pickup}}</div>
<div class="text-sm">{{option.reviews}}</div>
</div>

<div>
<button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900  block bg-blue-700 border focus:outline-none" style="background-color: rgb(109, 157, 247);"><div class="text-white">SELECT SEATS
</div></button>
</div>
</div>
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1SelectBusComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1SelectBusComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:    busdetails = {
    name: '',
    org: '',
    date: '',
     price: '',
     Ordinary: '',   
     rating: '',
     seats: '',
     policies : '',
     photos: '',   
      amenities: '',
      pickup: '',
      reviews : '',
   };
    
  
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
