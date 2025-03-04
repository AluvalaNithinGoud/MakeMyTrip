
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
  
 

export interface   paymentmodes{
   name: string,
    pay: string,
    cancel: string,
    book: string,
    remaining: string,
    price1: string,
    price2:  string,
  //   price1: string,
  //   support:   string,
  //   price2: string,
  //   price3: string,
  //   price4:   string,
  //    per: string,
  //     yes: string,
  //    no: string,
  //    non: string,
}






@Component({
  standalone: true,

  selector: 'n1-payment-options ',
  template: `
       
         <div class=" flex justify-center   p-5">

         <div class="     w-5/6  bg-white border p-3 ">
           
 <div class="p-4 font-bold text-lg text-gray-900 block">
  {{option.name}}
 </div>

 <div class="flex gap-2   items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
<div>  
  <div class="flex justify-between">
<div class="font-bold text-gray-900 ">{{option. pay}}</div>
<div class="font-bold text-gray-900  ">{{option.price1}}</div>
</div>
<div class=" text-sm">{{option.remaining}}</div>
</div>
</div>

 
<div class="p-3"><hr></div>

<div class="flex gap-2   items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>  
<div>  
  <div class="flex justify-between">
<div class="font-bold text-gray-900 ">{{option.book}}</div>
<div class="font-bold text-gray-900 ">{{option.price2}}</div>
</div>
<div  class=" text-sm">{{option.remaining}}</div>
</div>
</div>

</div>
</div> 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1PaymentOptionsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1PaymentOptionsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   paymentmodes = {
     name: '',
     pay: '',
     cancel: '',
        book: '',
      remaining: '',
      price1  :'',
      price2:'' ,
  //     price1:'',
  //   support:',' , 
  //   price2: '',
  //   price3:'',
  //   price4:'' ,
  // per:'' ,
  // non:'' ,
  // yes:'' ,
  //  no:'' ,
  // yes:'' ,
  // yes:'' ,
  // yes:'' ,
 
     
   };
  

  ngOnInit() {
    console.log(this.option);  
  }   
}
