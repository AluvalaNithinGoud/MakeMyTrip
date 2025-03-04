
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
  
 

export interface    hotel_type_options{
  img: string,
hotel_name: string,
  price: string,
  Per: string,
      city: string,
   
}






@Component({
  standalone: true,

  selector: 'n1-hotel-details',
  template: `
       
         <div class=" flex  p-2   ">

         <div class="     bg-white border  rounded-xl ">

         <div>
    <img  class="w-full  rounded-t-xl" alt="" src={{option.img}} >
</div>    
  
<div class="flex gap-5 p-2">
<div>
      <div class="text-medium font-bold text-gray-900  ">{{option.hotel_name}}</div>
      <div class=" text-sm ">{{option.city}}</div> 
      </div>
      <div>
      <div class=" text-medium font-bold text-gray-900  ">{{option.price}}</div> 
      <div class=" text-sm ">{{option.Per}}</div> 
      </div>
      </div>
 

</div>
</div> 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1HotelDetailsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1HotelDetailsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   hotel_type_options = {
    img: '',
      hotel_name: '',
      price: '',
        Per: '',
        city:'',
 
     
   };
  

  ngOnInit() {
    console.log(this.option);  
  }   
}
