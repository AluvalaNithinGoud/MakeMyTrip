
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
  
 

export interface   paynowoptions{
  discription: string,
  user: string,
  cancellation: string,
      and: string,
      button: string,
}






@Component({
  standalone: true,

  selector: 'n1-pay-now',
  template: `
       
         <div class=" flex   ">

         <div class="     w-5/6  bg-white  ">
           
  <div>
  <div class="flex items-center">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 
      <div class="flex text-sm gap-2">
      <div>{{option.discription}}</div>
      <div class="text-[#4fd1c5]">{{option.user}}</div>
      <div>{{option. and}}</div>
      <div class="text-[#4fd1c5]">{{option.cancellation}}</div>
</div>
    </label>
</div>

<div class="p-4">
<button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 text-lg block bg-blue-700  border   focus:outline-none     " style="background-color: rgb(109, 157, 247);">
  <div class="text-white"> {{option.button}}
</div>
  </button>
</div>
  </div>


</div>
</div> 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1PayNowComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1PayNowComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   paynowoptions = {
    discription: '',
      user: '',
      cancellation: '',
        and: '',
        button: '',
 
     
   };
  

  ngOnInit() {
    console.log(this.option);  
  }   
}
