
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
      
 

export interface     pricetotal{
  name:string,
  Base: string,
  price: string,
  discounts: string,
  price1: string,
  amount:string,
  price2:string,
  final:string,
  proceeding:string,
 
}






@Component({
  standalone: true,

  selector: 'n1-bus-price-details',
  template: `
        
         <div class=" flex justify-center p-4">
         <div class="   border w-2/5  p-4 bg-white rounded-md">
         <div class=" text-lg font-bold  text-gray-900  ">{{option.name}}</div>
          
         <div class=" flex items-center justify-between p-2 ">
          <div class=" text-sm   text-gray-900  ">{{option.Base}}</div>
          <div class="  text-sm font-bold  text-gray-900  ">{{option.price}}</div>
         </div>

         <div class=" flex items-center justify-between p-2 ">
          <div class=" text-sm   text-gray-900  ">{{option.discounts}}</div>
          <div class="  text-sm font-bold  text-gray-900  ">{{option.price1}}</div>
         </div>
         <div><hr> </div>
 
         <div class=" flex items-center justify-between p-2 ">
          <div class=" text-sm   text-gray-900  ">{{option.amount}}</div>
          <div class="  text-lg font-bold  text-gray-900  ">{{option.price2}}</div>
         </div>
 
         <div class="  text-sm  text-gray-900  ">{{option.final}}</div>

         <div class="flex justify-center  p-2">
          <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border focus:outline-none" style="background-color: rgb(109, 157, 247);"><div class="text-white"> CONTINUE
</div></button></div>

<div class="flex w-full gap-1 text-sm ">
<div  class="  text-gray-900 block">{{option.proceeding}}</div>
 
 
  
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1BusPriceDetailsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1BusPriceDetailsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:     pricetotal = {
    name: '',
    Base: '',
    price: '',
    discounts: '',
    price1: '',   
    amount:'',
    price2:'',
    final:'',
    proceeding:'',
     
     
   };
    
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
