
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface   fareoptions {
  name: string,
  logo: string,
   base:string,
   sub_base:string ,
   price:string,
  tax:string,
   air_line_tax: string,
    price1:string,
  total_amount:string,
  total_price:string,
  desicription:string,

}






@Component({
  standalone: true,

  selector: 'n1-fare-summary',
  template: `
       
         <div class="bg-white flex justify-center p-6 ">

         <div class=" border w-2/5 p-3 bg-white ">
<div class=" ">
             <div class="font-bold text-gray-900 text-lg block p-2 ">{{option.name}}</div>
             <div class="font-bold text-gray-900 p-2 "> {{option.base}}<div>
             <div class="flex justify-between p-2">
             <div class="text-gray-700    "> {{option.sub_base}}</div>
             <div class="text-gray-500 "> {{option.price}}</div>
             
            </div>

            <hr>
            <div >
            <div class="font-bold text-gray-900 p-2"> {{option.tax}}<div>
            <div class="flex justify-between">
             <div class="text-gray-700 p-2  "> {{option. air_line_tax}}</div>
             <div class="text-gray-500 p-2"> {{option.price1}}</div>
             
            </div>

            <div class="border "><hr></div>

            <div class="flex items-center justify-between p-3">
              <div class="font-bold text-gray-900 text-lg blockp p-3">
                {{option.total_amount}}
              </div>
              <div  class="font-bold text-gray-900 text-lg blockp">
                {{option.total_price}}
              </div>
            </div>
</div>
<div class="p-3 text-sm" style="background-color:rgb(211, 164, 195);">
  {{option.desicription}}
</div>
            
         </div>
         </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1FareSummaryComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class  N1FareSummaryComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: fareoptions = {
    name: '',
    logo: '',
    base:'',
    sub_base: '',
    price:'',
    tax:'',
    air_line_tax: '',
    price1:'',
    total_amount:'',
    total_price:'',
    desicription:'',
  };
  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
}

