
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
      
 

export interface     offersdetails{
  name:string,
  price: string,
  pre: string,
  offers: string,
  mega: string,
  upto:string,
  pass:string,
  travel_pass:string,
  coupon:string,
  apply:string,
}






@Component({
  standalone: true,

  selector: 'n1-bus-mydeal',
  template: `
        
         <div class=" flex justify-center p-4">
         <div class="   border w-2/5   bg-white">

         <div class="p-4" style="background-color: rgb(188, 205, 235);">
         <div class=" flex items-center justify-between  ">
          <div class=" text-lg font-bold  text-gray-900  ">{{option.name}}</div>
          <div class="  text-lg font-bold  text-gray-900  ">{{option.price}}</div>
         </div>
         <div>{{option.pre}}</div>
</div>
<div class="  text-lg font-bold  text-gray-900  p-2">{{option.offers}}</div>


         <div class=" flex items-center  gap-3 p-3">
    <input   id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="      ">

    <div class="    font-bold  text-gray-900  ">  {{option.mega}}</div>
     <div class="  text-sm  "> {{option. upto}}</div>
    </label>
</div>


<div class=" flex items-center  gap-3 p-3">
    <input   id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="      ">

    <div class="    font-bold  text-gray-900  ">  {{option.pass}}</div>
     <div class="  text-sm  "> {{option. travel_pass}}</div>
    </label>
</div>
<div class="p-2  ">
<n1-details-input [(value)]="option. coupon" [label]="' Enter Coupon Code: '" [placeholder]="' '" [name]="' '"
    [pattern]="' '" required [type]="'text'"></n1-details-input>
    
</div>
<div class="text-sm text-[#4fd1c5] font-bold p-2">{{option.apply}}</div>

</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1BusMydealComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent]
})
export class N1BusMydealComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:     offersdetails = {
    name: '',
    price: '',
    pre: '',
    offers: '',
    mega: '',   
    upto:'',
    pass:'',
    travel_pass:'',
    coupon:'',
    apply:'',
   };
    
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
