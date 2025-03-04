
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
    
 

export interface personal_review  {
  name: string,
  img: string,  
   ScienceSoft: string,
   For: string,

    }






@Component({
  standalone: true,

  selector: 'n1-personal-review',
  template: `
        
 
<div class="  flex bg-white p-4 " >
<div class="p-4 w-1/2 gap-2">
<div class="  "> <img alt=" " class="size-40 " src={{option.img}}></div>
<div class=" text-lg  p-2  text-gray-900 font-semibold ">   {{option.name}}</div>
<div class="   p-2  text-gray-900  ">   {{option.ScienceSoft}}</div>
</div>
<div  class=" gap-4">
 <div class=" text-gray-900  p-4">   {{option.For}}</div>
 </div>
</div>

 
 

  
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1PersonalReviewComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,    ]
})
export class N1PersonalReviewComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: personal_review  = {
    name: '',
    img: '',
     ScienceSoft:'',
     For:'',
   };
 
  ngOnInit() {
    console.log(this.option);  
  }   
}
