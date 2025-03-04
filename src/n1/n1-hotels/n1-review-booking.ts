
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 

export interface  bookingreviewoptions{
  hotel_name: string,
  friendly: string,
  address: string,
  img1: string,
  checkin: string,
  day: string,
  date:  string,
 year: string,
  time:   string,
  checkout: string,
  day1: string,
  date1:  string,
 year1: string,
  time1:   string,
  night: string,
  adult: string,
  room: string,
  deluxe: string,
  free:string,
  meals:string,
   discount:string,
   free_cancellation: string,
   bar: string,
   imp:  string,
   passport: string,
   pets: string,
   Unmarriedc: string,
  local:string,
   
}






@Component({
  standalone: true,

  selector: 'n1-review-booking',
  template: `
       
         <div class=" flex justify-center   p-5">

         <div class="     w-5/6  bg-white border p-3 ">
         
         <div class="flex">
         <div>
          <div class="p-2 font-bold text-lg text-gray-900 block">{{option.hotel_name }}</div>
          <div class="p-2">{{ option.friendly}}</div>
          <div class="p-2">{{ option.address}}</div> 
        </div>

        
        
<div class="justify-end"> <img
                               class="h-10 w-17 rounded-lg"
                                        src="{{ option.img1 }} "
                                        alt="">
                                      </div>                          
</div>
<div class="p-2"><hr></div>
<div class="flex  gap-14   items-center  ml-2 ">
<div >
<div class=" text-sm  "> {{option.checkin}}</div>
<div class="flex items-center text-gray-900 ">
<div class=" text-sm mt-1"  > {{option.  day}}</div>
<div class="font-bold text-lg text-gray-900 block"> {{option.date}}</div>
<div  class=" text-sm mt-1"> {{option. year}}</div>
</div>
<div  class="text-gray-900   "> {{option. time}}</div>
</div>

<div class="border text-sm rounded-md px-2"> {{option.night}}</div>
<div>
<div class=" text-sm  "> {{option.checkout}}</div>
<div class="flex items-center text-gray-900 ">
<div class=" text-sm mt-1"> {{option.  day1}}</div>
<div class="font-bold text-lg text-gray-900 block"> {{option.date1}}</div>
<div  class=" text-sm mt-1"> {{option. year1}}</div>
</div>
<div class="text-gray-900"> {{option. time1}}</div>
</div>
 
<div class="flex text-gray-900">
  <div>{{option.night}}</div>
  <div>{{option. adult}}</div>
  <div>{{option. room}}</div>
</div>
</div>

<div class="p-3"><hr></div>

<div  class="p-3"> 
  <div class="font-bold text-lg text-gray-900 block">{{option.deluxe}}</div>
  <div>{{option.adult}}</div>
</div>
<div class="p-2">
<div class="p-1">{{option.free}}</div>
<div class="p-1">{{option.meals }}</div>
<div class="p-1">{{option. discount}}</div>
<div class="p-1 text-[#4fd1c5] font-bold">{{option.  free_cancellation}}</div>

<!-- <div class="border text-sm rounded-md px-5 w-60 justify-center">{{option.bar}}</div> -->

<div class="p-3"><hr></div>
</div> 
 
 
         </div>
         
         </div>
         <div class="w-5/6  bg-white border p-3 ">
          <div class="font-bold text-lg text-gray-900 block p-3">{{option.imp}}</div>
          <div class="  p-1 ">{{option. passport}}</div>
          <div class="  p-1 ">{{option. pets}}</div>
          <div class="  p-1 ">{{option. Unmarriedc}}</div>
          <div class="  p-1 ">{{option. local}}</div>
         </div>
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ReviewBookingComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1ReviewBookingComponent {
  @Input() label: string = ' ';
 

  @Input() option:  bookingreviewoptions = {
    hotel_name: '',
    friendly: '',
    address: '',
    img1: '',
      checkin: '',
      day:'',
  date:'' ,
 year:'',
  time:',' , 
  checkout: '',
      day1:'',
  date1:'' ,
 year1:'',
  time1:','  ,
  night: '',
  adult: '',
  room: '',
  deluxe: '',
  free:'',
   meals:'',
    discount:'',
    free_cancellation : '',
        bar: '',
        imp: '',
        passport: '',
        pets: '',
        Unmarriedc: '',
       local:'',
     
   };
  

  ngOnInit() {
    console.log(this.option);  
  }
  
}
