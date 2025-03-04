
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface   pickup_cab_options {
  name: string,
  Mumbai: string,
   Drop:string,
   date:string ,
   place:string,
  Flat:string,
   price: string,
  
}






@Component({
  standalone: true,

  selector: ' n1-flight-pickup ',
  template: `
       
         <div class="bg-white flex  p-2  ">

         <div class=" border w-full   bg-white shadow-xl rounded-lg">


         <div class="flex items-center gap-3 p-2">
          <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="checked-checkbox">
          <div class="flex items-center gap-2 p-2">
            <div class="text-medium font-semibold text-gray-900"> 
            {{option.name}}
           </div>
           <div class="text-medium text-[#4fd1c5]"> 
            {{option.Mumbai}}
           </div>
           <div class="text-medium   flex  justify-items-end"> 
            {{option.date}}
           </div>
           </div>
          </label>
        </div>

        <div class="flex items-center gap-3 ml-4 ">
        <div class="text-medium  font-semibold  "> {{option.Drop}}</div>
        <div class="text-medium  font-semibold "> {{option.place}}</div>
        </div>
     

        <div class="flex items-center justify-between  p-3">
        <div class="text-medium "> {{option.Flat}}</div>
        <div class="text-medium  font-semibold "> {{option.price}}</div>
        </div>


  


             
            
         </div>
         </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1FlightPickupComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class  N1FlightPickupComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: pickup_cab_options = {
    name: '',
    Mumbai: '',
    Drop:'',
    date: '',
    place:'',
    Flat:'',
    price: '',
     
  };
  ngOnInit() {
    console.log(this.option);  
  }
}

