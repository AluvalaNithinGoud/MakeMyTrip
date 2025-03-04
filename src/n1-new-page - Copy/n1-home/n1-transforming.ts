
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
       
 

export interface      digital_details{
  name:string,
  combine: string,
  img: string,
  
}






@Component({
  standalone: true,

  selector: 'n1-transforming',
  template: `
        
         <div class=" flex justify-center p-4">
         <div class=" w-5/6 p-3  ">
          

         <div class="flex p-3 items-center">

         <div class="  ">
         <div  class="  font-semibold text-3xl text-[#4fd1c5] block ">{{option.name}}</div>
         <br>
         <div  class="    text-gray-900  ">{{option.combine}}</div>
         </div>


         <div>
         <img  class=" size-100 p-3" alt="" src={{option.img}} >
         </div>
         

</div>

</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1TransformingComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1TransformingComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:     digital_details = {
    name: '',
    combine: '',
    img: '',
    
   };
    
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
