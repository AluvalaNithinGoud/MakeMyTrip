
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { estimations, N1ApproximateCostComponent } from './n1-approximate-cost';
   
 

export interface Optimal_pace  {
  name: string,  
   
  img: string,  
  Scrum: string,
  Software: string,
  img1: string,  
  Best: string,
  any: string,
  }






@Component({
  standalone: true,

  selector: 'n1-choosing-an-optimal ',
  template: `

  <br>
        <div class=" text-lg  p-2  text-gray-900 font-semibold ">   {{option.name}}</div>

    <div class="p-4  "  >
<div class="   bg-white p-4 " >
 
 
 

<div class="flex gap-3 justify-between">
<div class="p-4  gap-2">
<div class="  "> <img alt=" " class="size-40 " src={{option.img}}></div>
</div>
<div  class="p-4 gap-4">
<div class=" text-lg  p-2  text-gray-900 font-semibold ">   {{option.Scrum}}</div>
<div class="   p-2  text-gray-900  ">   {{option.Software}}</div>
<div class="  w-full"> <img alt=" " class=" " src={{option.img1}}></div>
<div class="flex gap-2 p-3">
<div class=" text-[#4fd1c5] ">   {{option.Best}}</div>
<div class=" text-gray-900  ">   {{option.any}}</div>

</div>
</div>

</div>

</div>
</div>

  
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1ChoosingAnOptimalComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,    ]
})
export class N1ChoosingAnOptimalComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Optimal_pace  = {
    name: '',
    
    img: '',
    Scrum:'',
    Software:'',
    img1: '',
    Best:'',
    any:'',
   };
 
  ngOnInit() {
    console.log(this.option);  
  }   
}
