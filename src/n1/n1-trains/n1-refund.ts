
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
   
 

export interface   refundoptions{
  name:string,
  just: string,
  zero: string,
  refund: string,
   change: string,
   
   
}






@Component({
  standalone: true,

  selector: 'n1-refund',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="     w-5/6  bg-white border p-3 ">

 
 
  <div class="p-3">
<div class="font-bold text-gray-900 text-lg block "> {{option.name}}</div>
<div class=" text-gray-900 "> {{option.just}}</div>
  </div>
  <div>

  
     
  <div class="flex gap-2 border  items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
<div>  
  <div class=" p-2  ">
<div class="font-bold text-gray-900 ">{{option.  zero}}</div>
<div class="font-bold text-gray-900  ">{{option. refund}}</div>
</div>
 
</div>
</div>
</div>

<div class="flex gap-2 border  items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
<div>  
  <div class="  p-2 ">
<div class="font-bold text-gray-900 ">{{option.  zero}}</div>
<div class="font-bold text-gray-900  ">{{option. refund}}</div>
</div>
 
</div>
</div>
 <div>{{option.change}}</div>

 <div class="p-2">
<button type="Button" class=""  >
  <div class=" text-[#4fd1c5]">Terms & Conditions
</div>
  </button>
</div>


</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1RefundComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1RefundComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   refundoptions = {
    name: '',
    just: '',
      zero: '',
      refund: '',
      change: '',
     
 
     
   };
    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
