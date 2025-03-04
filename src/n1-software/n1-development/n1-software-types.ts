
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface    software_types {
  Portfolio: string,
  Along: string,
  img: string,
  Business: string,
  erp: string,
  Project: string,
   
}






@Component({
  standalone: true,

  selector: 'n1-software-types',
  template: `
        <br>
        <br>
    <!-- <div  class=" text-xl text-gray-900 ">{{option.Portfolio}}</div>
    <div  class="  ">{{option.Along}}</div>   -->
 
    <br>
    <div class=" ">
<div class="  p-6   items-center" style="background-color: rgb(221, 235, 236);"  >
<br>

<div class=" flex  justify-center "> <img alt=" " class=" size-9 " src={{option.img}}>
</div>
<br>
<div  class="flex  justify-center  text-lg text-gray-900 font-semibold">{{option.Business}}</div>
<br>
<div  class="  ">{{option.erp}}</div>  
<div  class="  ">{{option.Project}}</div>  
<br>
<div class=" flex justify-end"><button type="Button" class="items-center py-2 px-10 ms-2 text-white-900 text-lg block bg-blue-700 focus:outline-none"><div class="text-gray-900">  See More --> </div></button></div>
<br>
   </div>
 

   </div>

           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1SoftwareTypesComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1SoftwareTypesComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: software_types = {
    Portfolio: '',
    Along: '',
    img:'',
    Business: '',
    erp: '',
    Project:'',
   
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
