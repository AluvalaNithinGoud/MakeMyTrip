
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface    Advanced  {
  name: string,
  Software: string,
  
}






@Component({
  standalone: true,

  selector: 'n1-business-tasks',
  template: `
        
 <div class="  items-center bg-white shadow border   "   >
 
 <div class="p-2 border" style="background-color: rgb(117, 53, 235);"></div>
 <br>
 
<div class=" flex  text-lg justify-center font-semibold text-gray-900 p-2 underline">   {{option.name}}
</div>
   <div  class="flex  justify-center  text-medium text-gray-900 p-4   "> {{option.Software}}</div>
</div>
 
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1BusinessTasksComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1BusinessTasksComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Advanced  = {
    name: '',
    Software:'',
    
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
