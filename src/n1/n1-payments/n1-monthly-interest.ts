
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface   interest_options {
  months: string,
  price: string,
   Incl:string,
   Total:string,
 

}






@Component({
  standalone: true,

  selector: 'n1-monthly-interest',
  template: `
       
        

        

         
<hr>

<div class="   items-center p-2 ">

        <div class="flex justify-between   items-center  ">
        <div  class="flex    items-center  gap-4">
         <input type="radio" id="option-indigo" name="flight-option" class="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 mt-4" value="Payment Options">
         <div class="text-lg font-semibold text-gray-900 dark:text-gray-200">{{option.months }} </div>
         </div>
             <div>
           <div  class="text-lg font-semibold text-gray-900 dark:text-gray-200">  {{option.price}}</div>
           </div>         
        </div>  
        <div  class="flex  justify-between  items-center ml-9  ">
          <div class="text-sm  text-gray-900  ">{{option.Incl }} </div>
          <div >  {{option.Total}}</div>
         </div>
         </div>    
           

         
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1MonthlyInterestComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class  N1MonthlyInterestComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: interest_options = {
    months: '',
    price: '',
    Incl:'',
    Total:'',
  };

   
  ngOnInit() {
    console.log(this.option);   
  }
}

