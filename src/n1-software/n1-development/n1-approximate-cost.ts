
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface    estimations  {
  name: string,
  Software: string,
  img: string,
}






@Component({
  standalone: true,

  selector: 'n1-approximate-cost',

  template: `
        
 <div class="  items-center bg-white shadow border   "   >
 
  <br>
 <div class=" flex  justify-center "> <img alt=" " class=" size-14 " src={{option.img}}>
</div>

<div class=" flex  text-lg justify-center font-semibold text-gray-900 p-2 underline">   {{option.name}}
</div>
   <div  class="flex  justify-center  text-medium text-gray-900 p-4   "> {{option.Software}}</div>
</div>
 
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1ApproximateCostComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1ApproximateCostComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: estimations  = {
    name: '',
    Software:'',
    img:'',
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
