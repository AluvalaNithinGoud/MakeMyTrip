
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
      
 

export interface     securedetails{
  Secure:string,
  Powered: string,
  terms: string,
  Loss: string,
  flat: string,
  Accidental:string,
  upto:string,
  hosp:string,
  upto2:string,
}






@Component({
  standalone: true,

  selector: 'n1-bus-secure',
  template: `
        
         <div class=" flex justify-center p-4">
         <div class="   border w-5/6 p-3 bg-white">

         <div class=" flex items-center justify-between p-3">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="ms-2 text-lg p-2 ">

    <div class="  text-lg font-bold  text-gray-900  ">  {{option.Secure}}</div>
     <div class="  text-lg  "> {{option. Powered}}</div>
     <div class="  text-sm text-[#4fd1c5] "> {{option.  terms}}</div>
    </label>
<div class="gap-2 flex">
    <div class="border rounded-md p-2 ">
      <div class="p-4">
<div class=" text-gray-900   font-bold ">{{option.Loss}}</div>
<div class="  text-sm">{{option.flat}}</div>
</div>
</div>

<div class="border rounded-md p-2 ">
      <div class="p-4">
<div class=" text-gray-900   font-bold ">{{option.Accidental}}</div>
<div class="  text-sm">{{option.upto}}</div>
</div>
</div>

<div class="border rounded-md p-2 ">
      <div class="p-4">
<div class=" text-gray-900   font-bold ">{{option.hosp}}</div>
<div class="  text-sm">{{option.upto2}}</div>
</div>
</div>

</div>

</div> 
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1BusSecureComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1BusSecureComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:     securedetails = {
    Secure: '',
    Powered: '',
    terms: '',
    Loss: '',
    flat: '',   
    Accidental:'',
    upto:'',
    hosp:'',
    upto2:'',
   };
    
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
