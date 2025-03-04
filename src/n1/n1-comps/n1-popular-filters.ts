
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export interface filteroptions {
  name: string,
  nonstop: string,
  price: string,
  // logo: string,
  // desicription:string,
  // checkin:string ,
  //     symbol: string,
  //     bag_service: string,
  //     Equal:string,
  //     amount:string,
}






@Component({
  standalone: true,

  selector: 'n1-popular-filters',
  template: `
       
         <div class="flex justify-center  ">

         <div class="  w-1/4    bg-white   p-1  ">
          <div class="">
 <div class="text-lg font-bold  text-gray-900 ">
            {{option.name}}  
</div>
            <div class="flex items-center  justify-between  ">
              <div class=" flex gap-2">
          <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
<div class="w-40">
{{option.nonstop}}
</div>
        </div> 
<div  class="p-2 -mt-1 flex   justify-between">
 
<div >{{option.price}}</div>
</div>
            </div>
</div>

         </div>
         </div>
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1PopularFiltersComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,]
})
export class N1PopularFiltersComponent {
  @Input() label: string = ' ';
 

  @Input() option: filteroptions = {
    name: '',
    nonstop: '',
    price: '',
    // logo: '',
    // desicription:'',
    // checkin: '',
    //   symbol: '',
    //   bag_service: '',
    //   Equal: '',
    //   amount: '',
  };
  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
  @Output() valueChange = new EventEmitter<string>();

   _value: string = "";   
   get value(): string {
     return this._value;
   }
 
   @Input() set value(val: string) {
     this._value = val;
     this.valueChange.emit(val);
   }
 
   onOptionChange(selectedfliter: string): void {
    this.value = selectedfliter;
  }
}
