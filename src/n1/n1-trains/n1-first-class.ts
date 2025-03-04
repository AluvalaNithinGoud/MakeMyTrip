
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1PriceDetailsComponent, pricedetails } from "./n1-price-details";
   
 

export interface   classdetails{
  name:string,
  date: string,
  train_num: string,
  free: string,
  book: string,
  // num: string,
  //     place: string,
  //     view: string,
  //     nearby: string,
  //     date2: string,
  //     place2: string,
  //     status: string,
  //     avalible: string,
  //     b_no: string,
   
   
}






@Component({
  standalone: true,

  selector: 'n1-first-class',
  template: `
        
         <div class=" flex    ">
         <div class="     w-full  bg-white   cursor-pointer ">

  
  <div class="text-[#4fd1c5] cursor-pointer text-lg font-bold p-2">{{option.name}}</div>
  <div class="flex justify-between border p-1 rounded-lg">
  <div class="  text-gray-900 cursor-pointer text-lg font-bold p-1">{{option.date}}</div>
  <div class=" text-[#e53e3e]  cursor-pointer text-lg font-bold p-1">{{option.train_num}}</div>
  <div class="  cursor-pointer text-lg p-1">{{option.free}}</div>
  <div class="text-[#4fd1c5] cursor-pointer text-lg font-bold p-1">{{option.book}}</div>
  </div>


</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1FirstClassComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1FirstClassComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   classdetails = {
    name: '',
     date: '',
     train_num: '',
     free: '',
    book: '',   
    //   place: '',
    //    view: '',
    //    num : '',
    //    nearby: '',   
      // place: '',
      //  view: '',
      //  num : '',
   };
    
  
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
