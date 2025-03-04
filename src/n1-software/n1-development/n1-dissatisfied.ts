
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
    
 

export interface  Current_IT   {
  name: string,
    ScienceSoft: string,
    button: string,

    }






@Component({
  standalone: true,

  selector: 'n1-dissatisfied',
  template: `
        
 <br>

<div class="    bg-white p-4  shadow-lg" >
 <div class=" text-lg  p-2  text-gray-900 font-semibold ">   {{option.name}}</div>
<div class="p-4  gap-2 flex">
 <div class="   p-2  text-gray-900  ">   {{option.ScienceSoft}}</div>
 <div class="p-1  "><button type="Button" class="items-center py-1.5 px-4 ms-2 font-semibold text-white block bg-blue-700 border focus:outline-none" style="background-color: rgb(73, 84, 136);">
 <div>{{option.button}}</div></button></div> </div>
</div>
<div  class=" gap-4 ">
 
</div>

<br>
 


  
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1DissatisfiedComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,    ]
})
export class N1DissatisfiedComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Current_IT  = {
    name: '',
      ScienceSoft:'',
      button:'',
   };
 
  ngOnInit() {
    console.log(this.option);  
  }   
}
