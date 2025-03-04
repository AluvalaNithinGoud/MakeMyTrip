
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1PayNowComponent, paynowoptions } from "../n1-hotels/n1-pay-now";
 
export interface   plant_options {
  name: string,
  img: string,
   Note:string,
   price:string ,
   price1:string ,
   price2:string ,
   price3:string ,
 }






@Component({
  standalone: true,

  selector: 'n1-flght-help',
  template: `
       
         <div class="bg-white flex justify-center p-6 ">

         <div class=" border w-5/6 p-3 bg-white ">


         <div class="flex gap-2  ">

         <div>
          <img alt="" class="w-30 h-20 " src={{option.img}}>
        </div>
<div>
        <div class="font-bold text-gray-900 text-lg block p-2 ">{{option.name}}</div> 
        <div class="   text-gray-900 text-medium block  ">{{option.Note}}</div> 
<br>
        <div class="flex gap-2  ">
        <div class="font-bold text-sm text-gray-700 border rounded-md p-2  "style="background-color: rgb(156, 160, 173);"> {{option.price}}</div>
        <div class="font-bold text-sm text-gray-700 border rounded-md p-2  "style="background-color: rgb(156, 160, 173);"> {{option.price1}}</div>
        <div class="font-bold text-sm text-gray-700 border rounded-md p-2  "style="background-color: rgb(156, 160, 173);"> {{option.price2}}</div>
        <div class="font-bold text-sm text-gray-700 border rounded-md p-2  "style="background-color: rgb(156, 160, 173);"> {{option.price3}}</div>

        </div>
</div>
        </div>  
 

 
             
            
         </div>
         </div>

         <div class="w-full  " *ngFor="let   pay  of  paynow">
  <n1-pay-now [option]="   pay"></n1-pay-now >
</div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1FlightHelpComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1PayNowComponent]
})
export class  N1FlightHelpComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: plant_options = {
    name: '',
    img: '',
    Note:'',
    price: '',
    price1: '',
    price2: '',
    price3: '',
    
    
  };

   paynow :   paynowoptions [] = [
      {
         discription:"I understand and agree with the",
         user:" Fare Rules , the Privacy Policy ,  the User Agreement",
          and:"and",
          cancellation :  " Terms of Service of MakeMyTrip",
           button :  "PROCEED TO PAY",
      },
    ]
  ngOnInit() {
    console.log(this.option);   
  }
}

