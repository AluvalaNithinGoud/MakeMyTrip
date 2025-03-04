
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface   protection_options {
  name: string,
  Get: string,
   Note:string,
   price:string ,
  

}






@Component({
  standalone: true,

  selector: 'n1-fight-delay-protection ',
  template: `
       
         <div class="bg-white flex justify-center p-6 ">

         <div class=" border w-5/6 p-3 bg-white ">

        <div class="font-bold text-gray-900 text-lg block p-2 ">{{option.name}}</div>  
<hr>

<div class=" text-gray-900 text-medium block p-2 ">{{option.Get}}</div>  
<div class="flex gap-2 items-center justify-between">
<div class=" text-gray-900 text-medium block p-2 ">{{option.Note}}</div>  
<div class="flex gap-2 items-center">
             <div class="font-bold  text-gray-700    "> {{option.price}}</div>
             <div class="p-1 flex items-center">
              <button type="Button" class="items-center py-2 px-3 ms-2 font-bold text-gray-900 block bg-blue-700 border rounded-full focus:outline-none"  >
              <div class=" ">  +ADD </div></button></div>
            </div>
</div>
          


             
            
         </div>
         </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1FlightDelayProtectionComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class  N1FlightDelayProtectionComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: protection_options = {
    name: '',
    Get: '',
    Note:'',
    price: '',
    
    
  };
  ngOnInit() {
    console.log(this.option);   
  }
}

