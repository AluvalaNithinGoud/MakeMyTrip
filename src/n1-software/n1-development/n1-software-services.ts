
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface      software{
   name: string,
  At: string,
  Please: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-software-services',
  template: `
        <div class="   p-4 ">
<div class="       w- full   ">

 
  
<div class="text-[#4fd1c5] text-3xl font-semibold p-1 flex justify-center"> {{option.name}}</div>
<div class="  border-3 border-indigo-200 border-y-indigo-500 ">
<div class=" text-medium flex justify-center p-5"> {{option.At}}</div>
<div class=" text-medium flex justify-center  "> {{option.Please}}</div>
</div>
 
</div>
</div>

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1SoftwareServicesComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1SoftwareServicesComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:      software = {
     name: '',
    At: '',
    Please:'',
    
   
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
