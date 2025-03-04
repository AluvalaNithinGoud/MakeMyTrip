
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface  It_Professionals{
   name: string,
  At: string,
  Check: string,
  // Wyoming: string,
  // email: string,
    // Please: string,
  // Wyoming: string,
  // email: string,
    // Please: string,
  // Wyoming: string,
  // email: string,
   
}






@Component({
  standalone: true,

  selector: 'n1-it-select',
  template: `
    

    <div class="  p-4 w-5/6 ">
<div class="  p-3  border transform   hover  transition duration-500 hover:scale-125 " style="background-color: rgb(247, 233, 217);">
    
<div class="p-2">
<div class="text-gray-900 text-2xl   "> {{option.name}}</div>
<div class="text-gray-900 text-2xl  "> {{option.At}}</div>
</div>
<button type='button' class='py-2.5 px-6 text-sm   border text-gray-900 cursor-pointer font-bold text-center shadow-xs ' style="background-color: rgb(233, 219, 97);">Select</button>

 <div class="  p-3 w-full h-full ">
   <p class="text-base leading-6 text-gray-900  font-normal mb-6">{{option.Check}}</p>
 </div>
 <br>
</div>
</div>

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ItSelectComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1ItSelectComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: It_Professionals = {
     name: '',
    At: '',
    Check:'',
    // Wyoming:'',
    // email:'',
    // Please:'',
    // Wyoming:'',
    // email:'',
     // Please:'',
    // Wyoming:'',
    // email:'',
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
