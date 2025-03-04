
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from './n1-details-input';
 
export interface  promooptions {
  name: string,
  subname:string,
  firstName:string,
  
}






@Component({
  standalone: true,

  selector: 'n1-promo-code',
  template: `
       
         <div class="bg-white flex justify-center p-6">

         <div class=" border  w-2/5 p-3 bg-white">
           <div class="flex items-center ">
            <div class="font-bold text-gray-900 text-lg block">
              {{option.name}}
            </div >
            <div  class=" text-gray-900 text-lg block">  {{option.name}}</div>
           </div>

           <div class="p-2">
            <n1-details-input [(value)]="option.firstName" [label]="' '" [placeholder]="'Enter Promo Code Here'"
    [name]="'firstName'"  ></n1-details-input>
<div>

<div class=" mt-5  ">
 <button type="Button" class="text-sm"   >
  VIEW ALL COUPONS</button>  
</div>
         </div>
         </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1PromoCodeComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent  ]
})
export class  N1PromoCodeComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: promooptions = {
    name: '',
    subname:'',
    firstName:'',
    
  };
  ngOnInit() {
    console.log(this.option);   
  }
}
