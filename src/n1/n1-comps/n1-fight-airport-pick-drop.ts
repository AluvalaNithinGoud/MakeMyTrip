
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1FlightPickupComponent, pickup_cab_options } from "./n1-flight-pickup";
 
export interface   pick_up_options {
  name: string,
  Pre: string,
   Select:string,
   Select_return:string ,
   time:string,
  No:string,
   Exact: string,
  //   price1:string,
  // total_amount:string,
  // total_price:string,
  // desicription:string,

}






@Component({
  standalone: true,

  selector: ' n1-fight-airport-pick-drop ',
  template: `
       
         <div class="bg-white flex justify-center p-6 ">

         <div class=" border w-5/6 p-3 bg-white ">

  <div class="font-bold text-gray-900 text-lg block  ">{{option.name}}</div>  
 <div class=" text-sm text-[#4fd1c5]   "> {{option.Pre}}</div>

<br>

 <div class="font-semibold text-gray-900 text-medium block  ">{{option.Select}}</div>  


 <!-- <div class="flex gap-2">
             <div class="font-bold  text-gray-700    ">  </div>
             <div class="text-gray-500 "> </div>
            </div> -->

            <div class="flex gap-2">

            <div class="  " *ngFor="let  cab_pickup   of   pickup_cab">
   <n1-flight-pickup [option]="   cab_pickup"></n1-flight-pickup>
           </div>
           </div>
             
           <div class="font-semibold text-gray-900 text-medium block  ">{{option.Select_return}}</div>  
           <div class="flex gap-2">

            <div class="  " *ngFor="let  cab_pickup   of   pickup_cab">
   <n1-flight-pickup [option]="   cab_pickup"></n1-flight-pickup>
           </div>
           </div>
           <br>

           <ul class="list-disc p-2  ">
  <li class=" "> {{option.time}}</li>
  <li class=" "> {{option.No}}</li>
</ul>
             
<ul class="list-disc p-2  " style="background-color: rgb(156, 160, 173);">
  <li class=" "> {{option.Exact}}</li>
   
</ul>
            
         </div>
         </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1FlightAirportPickDropComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1FlightPickupComponent]
})
export class  N1FlightAirportPickDropComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: pick_up_options = {
    name: '',
    Pre: '',
    Select:'',
    Select_return: '',
    time:'',
    No:'',
    Exact: '',
    // price1:'',
    // total_amount:'',
    // total_price:'',
    // desicription:'',
  };

  pickup_cab:   pickup_cab_options[] = [
      {
        name:"Pick-up:",
         Mumbai: "Mumbai (10 kms)",
        Drop: "Drop:",
        date: " 14 Feb",
        place: "Terminal 1, Chhatrapati Shivaji Airport, Mumbai",
        Flat: 'Flat ₹370 upto 10 km',
        price: '₹ 370',
        
      },
      
      {
        name:"Pick-up:",
         Mumbai: "Mumbai (10 kms)",
        Drop: "Drop:",
        date: " 14 Feb",
        place: "Terminal 1, Chhatrapati Shivaji Airport, Mumbai",
        Flat: 'Flat ₹370 upto 10 km',
        price: '₹ 370',
        
      },
    ]
  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
}

