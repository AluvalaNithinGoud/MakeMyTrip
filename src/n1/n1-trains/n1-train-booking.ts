
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1PriceDetailsComponent, pricedetails } from "./n1-price-details";
import { classdetails, N1FirstClassComponent } from "./n1-first-class";
   
 

export interface   traindetails{
  name:string,
  destination_time: string,
  arrival_time: string,
  time: string,
  destination: string,
  num: string,
      place: string,
      view: string,
      nearby: string,
   
   
}






@Component({
  standalone: true,

  selector: 'n1-train-booking',
  template: `
        
         <div class=" flex   p-5">
         <div class="     w-full  bg-white border p-3 cursor-pointer ">

 <div class="flex justify-between ">
 <div class="font-bold text-gray-900 text-lg block ">{{option.name}}</div>
 <div class="font-bold text-gray-900  block ">{{option.time}}</div>
 <div>{{option.arrival_time}}</div>
 <div class="font-bold text-gray-900   block ">{{option.destination_time}}</div>
 </div>

 <div class="flex justify-between  ">
 <div class="    ">{{option.num}}</div>
 <div class="  text-gray-900  block ">{{option.place}}</div>
 <div class="text-[#4fd1c5] cursor-pointer text-sm font-bold">{{option.view}}</div>
 <div class="  text-gray-900   block ">{{option.destination}}</div>
 </div>
  
 <div class=" flex gap-2  ">
 <div class="w-full " *ngFor="let   trainprices  of   price">
                <n1-price-details [option]="trainprices"></n1-price-details>
                </div>
 </div>

<div>
<div class="text-[#4fd1c5] cursor-pointer text-sm font-bold p-2">{{option.nearby}}</div>
<div class="w-full  " *ngFor="let   class  of   first">
  <n1-first-class [option]="    class"></n1-first-class>
  </div>
</div>


</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1TrainBookingComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1PriceDetailsComponent, N1FirstClassComponent]
})
export class N1TrainBookingComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   traindetails = {
    name: '',
    destination_time: '',
    arrival_time: '',
    time: '',
    destination: '',   
      place: '',
       view: '',
       num : '',
       nearby: '',   
      
   };
    
   price  :    pricedetails [] = [
       {
         num:"2A",
          price :" ₹ 437",
          tatkal :"TATKAL",
         train_num :  "TQWL 38",
         free:  " Free Cancellation",
         updated:  "Updated 4 hrs ago",
       },
       {
        num:"2A",
         price :" ₹ 437",
         tatkal :"TATKAL",
        train_num :  "TQWL 38",
        free:  " Free Cancellation",
        updated:  "Updated 4 hrs ago",
      },
      {
        num:"2A",
         price :" ₹ 437",
         tatkal :"TATKAL",
        train_num :  "TQWL 38",
        free:  " Free Cancellation",
        updated:  "Updated 4 hrs ago",
      },
      {
        num:"2A",
         price :" ₹ 437",
         tatkal :"TATKAL",
        train_num :  "TQWL 38",
        free:  " Free Cancellation",
        updated:  "Updated 4 hrs ago",
      },
     ]

      first  :    classdetails [] = [
         {
           name:"FirstClassAC",
             date :" 4th Feb, Monday",     
           train_num :  "GNWL 7",
           free:  "Free Cancellation",
            book:  " Book @₹1837",
         },
         {
          name:" ",
            date :" 5th Feb, Tuesday",     
          train_num :  "GNWL 7",
          free:  "Free Cancellation",
           book:  " Book @₹1837",
        },
        {
          name:" ",
            date :" 6th Feb, Wednesday",     
          train_num :  "GNWL 10",
          free:  "Free Cancellation",
           book:  " Book @₹1837",
        },
        {
          name:" ",
            date :" 7th Feb, Thursday",     
          train_num :  "GNWL 18",
          free:  "Free Cancellation",
           book:  " Book @₹1837",
        },
        {
          name:" ",
            date :" 8th Feb, Friday",     
          train_num :  "GNWL 7",
          free:  "Free Cancellation",
           book:  " Book @₹1837",
        },
        {
          name:" ",
            date :" 9th Feb, Saturday",     
          train_num :  "GNWL 13",
          free:  "Free Cancellation",
           book:  " Book @₹1837",
        },
        

       ]
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
