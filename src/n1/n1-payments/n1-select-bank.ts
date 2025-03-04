
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface    bank_options {
  Bank_name: string,
  img1: string,
   percentage:string,
   
 

}






@Component({
  standalone: true,

  selector: 'n1-select-bank',
  template: `
       
        

        

         
<hr>
         <div class="flex items-center gap-4 p-4">
         <input type="radio" id="option-indigo" name="flight-option" class="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500" value="Payment Options">
          <img class="size-12 rounded-full" src={{option.img1}}>
          <div class="text-sm font-medium text-gray-900 dark:text-gray-200">{{option.Bank_name}} </div>
           
          <div class="flex justify-end">
           
          <div>  {{option.percentage}}</div>
          </div>
        </div>


         
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1SelectBankComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class  N1SelectBankComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: bank_options = {
    Bank_name: '',
    img1: '',
    percentage:'',
     
  };

   
  ngOnInit() {
    console.log(this.option);   
  }
}

