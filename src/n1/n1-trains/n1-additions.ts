
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
   
 

export interface  additionalsdetails{
  name:string,
  Insurance: string,
  would : string,
  yes: string,
  terms: string,
  no: string,
  // discription1: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-additions',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="     w-5/6  bg-white border p-3 ">
   
         <div  class="p-2 font-bold text-lg text-gray-900 block">{{option.name}}</div>

         <div class="flex items-center" >
         <div  class="p-2 font-bold text-gray-900 block">{{option. Insurance}}</div>
         <div  class=" ">{{option.  would}}</div>
</div>

    <div class="  p-4"> 
 <div class="flex gap-2    items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
<div>  
<div class=" flex items-center">
<div class="  text-gray-900 p-2">{{option. yes}}</div>
<div class="text-[#4fd1c5] cursor-pointer ">{{option.   terms }}</div>
</div>
 
</div>
</div>

<div class="flex gap-2      items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
<div>  
  <div class="   ">
<div class="  text-gray-900 p-2">{{option. no}}</div>
 
 
</div>
</div>
</div>


 
 
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1additionsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1additionsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   additionalsdetails = {
    name: '',
    Insurance: '',
    would : '',
    yes: '',
    terms: '',
      no: '',
    //     and: '',
    //   cancellation: '',
    //     and: '',
    
 
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
