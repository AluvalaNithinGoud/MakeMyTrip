
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface  Corporation {
  ScienceSoft: string,
  Three: string,
  img: string,
  button: string,
}






@Component({
  standalone: true,

  selector: 'n1-usa-corporation',
  template: `
    

    <div class="    p-6 "  >
<div class="  p-3 flex items-center" style="background-color: rgb(221, 235, 236);"  >
  <div class="p-4">
<div  class=" p-2   text-lg text-gray-900 ">{{option.ScienceSoft}}</div>
 <div  class=" p-2 text-gray-900">{{option.Three}}</div>
 <div class="p-4">
  <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 text-lg block bg-blue-700   focus:outline-none" >
     <div class="text-gray-900"> {{option.button}}
 </div></button></div>
 </div>
 <div>
 <img alt=" ." class=" p-2  " src={{option.img}}>
</div>

</div>
</div>

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1UsaCorporationComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1UsaCorporationComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Corporation = {
    ScienceSoft: '',
    Three: '',
    img:'',
    button:'', 
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
