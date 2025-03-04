
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../n1-comps/n1-dropdown-airport";
 
export interface    credit_debit_options {
  name: string,
  img1: string,
   Enter:string,
   We:string ,
   card_number:string,
   enter_cvv: string,
  

}






@Component({
  standalone: true,

  selector: 'n1-credit-debit',
  template: `
       
         <div class="bg-white flex justify-center p-6 ">

         <div class=" border w-5/6 p-3 bg-white ">

         <div class="font-bold text-gray-900 text-lg block p-2 ">{{option.name}}</div>

 <hr>

  
             <div class="flex gap-2 p-4 items-center">
             <div class="   ">
             <img  class="w-18 h-10 " alt="" src={{option.img1}} >
             </div> 
             <div class="   ">
             <div class="text-gray-900 text-lg font-semibold"> {{option.Enter}}</div> 
             <div class="text-gray-900 text-medium  "> {{option.We}}</div> 
             </div>
             </div>
 

             <div class="    flex justify-center ">
             <n1-details-input [(value)]="option.card_number" [label]="' '" [placeholder]="'ENTER CARD NUMBER'"
    [name]="' CARD NUMBER'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield w-5/6  "></n1-details-input>
    </div>
              

    <div class="    flex justify-center items-center gap-3 p-4 ">
    <div class="  w-full p-1 ">
 <n1-dropdown-airport  [label]="' Title'" [options]="months"   
class="  w-full px-2 py-1  text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>

<div class="  w-full p-1 ">
 <n1-dropdown-airport  [label]="' Title'" [options]="years"   
class="  w-full px-2 py-1  text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>
<div class="  w-full p-1 ">
<n1-details-input [(value)]="option. enter_cvv" [label]="' '" [placeholder]="'ENTER CVV'"
    [name]="' CARD NUMBER'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield w-5/6  "></n1-details-input>
    </div>

    </div>

    <div class="p-2  justify-center flex w-full">
  <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 text-lg block bg-blue-700 border focus:outline-none" style="background-color: rgb(109, 157, 247);">
    <div class="text-white"> PAY NOW
</div></button></div> 
 
 

 
 
         </div>
         </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1CreditDebitComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent, N1DropdownAirportComponent]
})
export class  N1CreditDebitComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: credit_debit_options = {
    name: '',
    img1: '',
    Enter:'',
    We: '',
    card_number:'',
    enter_cvv: '',
     
  };

  months: N1DropdownOptions[] = [
       
            {
              id: 1,
              name: ' 1   ',
              cityDetails: '',
            },
            {
              id: 2,
              name: ' 2 ',
              cityDetails: '',
            },
            {
              id: 3,
              name: ' 3 ',
              cityDetails: '',
            },
            {
              id: 4,
              name: ' 4 ',
              cityDetails: '',
            },
            {
              id: 5,
              name: '  5  ',
              cityDetails: '',
            },
            {
              id: 6,
              name: ' 6 ',
              cityDetails: '',
            },
            {
              id: 7,
              name: ' 7 ',
              cityDetails: '',
            },
            {
              id: 8,
              name: ' 8 ',
              cityDetails: '',
            },{
              id: 9,
              name: ' 9   ',
              cityDetails: '',
            },
            {
              id: 10,
              name: ' 10 ',
              cityDetails: '',
            },
            {
              id: 11,
              name: ' 11 ',
              cityDetails: '',
            },
            {
              id: 12,
              name: ' 12 ',
              cityDetails: '',
            },


          ];
          years: N1DropdownOptions[] = [
       
            {
              id: 1,
              name: ' 2025   ',
              cityDetails: '',
            },
            {
              id: 2,
              name: ' 2026 ',
              cityDetails: '',
            },
            {
              id: 3,
              name: ' 2027 ',
              cityDetails: '',
            },
            {
              id: 4,
              name: ' 2028 ',
              cityDetails: '',
            },
            {
              id: 5,
              name: '  2029  ',
              cityDetails: '',
            },
            {
              id: 6,
              name: ' 2030 ',
              cityDetails: '',
            },
            {
              id: 7,
              name: ' 2031 ',
              cityDetails: '',
            },
            {
              id: 8,
              name: ' 2032 ',
              cityDetails: '',
            },{
              id: 9,
              name: ' 2033   ',
              cityDetails: '',
            },
            {
              id: 10,
              name: ' 2034 ',
              cityDetails: '',
            },
            {
              id: 11,
              name: ' 2035 ',
              cityDetails: '',
            },
            {
              id: 12,
              name: ' 2036 ',
              cityDetails: '',
            },


          ];

  ngOnInit() {
    console.log(this.option);   
  }
}

