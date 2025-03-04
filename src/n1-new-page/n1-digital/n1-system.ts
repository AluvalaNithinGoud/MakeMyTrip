
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DiscriptionComponent, overview } from '../n1-home/n1-discription';
       
 

export interface      system_details{
  name:string,
  combine: string,
  img: string,
  Seamlessly: string,
}






@Component({
  standalone: true,

  selector: 'n1-system',
  template: `
        
         <div class=" flex justify-center p-4 ">
         <div class=" w-5/6 p-3  ">
          

         <div class="flex p-3 items-center">

         <div class="  ">
         <div  class="  font-semibold text-3xl text-[#4fd1c5] block ">{{option.name}}</div>
         <br>
         <div  class="   text-xl   text-gray-900   block ">{{option.Seamlessly}}</div>

         <br>
         <div  class="    text-gray-900  ">{{option.combine}}</div>
         </div>


         <div>
         <img  class="  p-3" alt="" src={{option.img}} >
         </div>
         

</div>



</div>
</div>
 
 

 
         
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1SystemComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,N1DiscriptionComponent ]
})
export class N1SystemComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:      system_details = {
    name: '',
    combine: '',
    img: '',
    Seamlessly: '',
   };
    

   
     
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
