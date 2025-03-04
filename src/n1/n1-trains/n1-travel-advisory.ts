
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
   
 

export interface   advisorysdetails{
  name:string,
  health : string,
  know : string,
  proceeding : string,
  Cancellation: string,
  user: string,
  // discription1: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-travel-advisory',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="     w-5/6  bg-white border p-3 ">
   
         <div  class="p-2 font-bold text-lg text-gray-900 block">{{option.name}}</div>
         
         <div class="flex gap-3  border p-4 items-center">
         <div  class="   text-gray-900 block">{{option. health}}</div>
         <div  class=" text-[#4fd1c5] cursor-pointer text-sm font-bold">{{option.  know}}</div>
</div>
 
<div class="flex w-full gap-1  text-sm ">
<div  class="  text-gray-900 block">{{option.proceeding}}</div>
<div  class=" text-[#4fd1c5] cursor-pointer">{{option. Cancellation}}</div>

</div>
<div  class="  text-sm text-[#4fd1c5] cursor-pointer">{{option. user}}</div>
 
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1TravelAdvisoryComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1TravelAdvisoryComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   advisorysdetails = {
    name: '',
    health : '',
    know : '',
    proceeding : '',
    Cancellation: '',
       user: '',
    //     and: '',
    //   cancellation: '',
    //     and: '',
    
 
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
