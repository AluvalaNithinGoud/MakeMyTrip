
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
   
 

export interface    pricedetails{
  num:string,
 price: string,
 tatkal: string,
 train_num: string,
 free: string,
 updated: string,
   
   
   
}






@Component({
  standalone: true,

  selector: 'n1-price-details',
  template: `
        
         <div class=" flex justify-center    ">
         <div class="        bg-white border rounded-md p-3 ">

<div class="flex justify-between w-full items-center p-2">
<div class="  font-bold   text-gray-900 block">{{option.num}}</div>
<div class=" p-1 font-bold  text-[#e53e3e]   block" style="background-color: rgb(231, 206, 159);">{{option.tatkal}}</div>
<div class="  font-bold   text-gray-900 block">{{option. price}}</div>
 
</div>
<div >
<div class="  font-bold text-[#e53e3e] p-1 ">{{option.train_num}}</div>
<div class="   text-sm p-1">{{option.free}}</div>
<div class="   text-sm p-1">{{option.updated}}</div>

</div>
  
  
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1PriceDetailsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1PriceDetailsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   pricedetails = {
    num: '',
    price: '',
    tatkal: '',
    train_num: '',
    free: '', 
    updated: '',
    
     
    
 
     
   };
    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
