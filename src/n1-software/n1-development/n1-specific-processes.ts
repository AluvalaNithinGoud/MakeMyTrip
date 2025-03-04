
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface    Industry {
  name: string,
   img: string,
  
}






@Component({
  standalone: true,

  selector: 'n1-specific-processes',
  template: `
        
  
<div class="  items-center bg-white shadow  "   >
<div class=" flex  justify-center "> <img alt=" " class=" w-14 h-13" src={{option.img}}>
</div>
   <div  class="flex  justify-center  text-medium text-gray-900 p-2 font-semibold"> {{option.name}}</div>
</div>
 
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1SpecificProcessesComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1SpecificProcessesComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Industry = {
    name: '',
     img:'',
    
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
