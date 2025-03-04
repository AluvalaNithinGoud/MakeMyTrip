
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';
import { N1JourneyTimeComponent } from "./n1-journey-time";
import { N1CompanyLogo } from "./n1-company-logo";
import { N1TimingsComponent } from "./n1-timings";

export interface bookingoptions {
  booking_date: string,
  time: string,
  name: string,
  logo: string,
  start_place: string,
  end_place: string,
  destination: string,
  flightnum: string,
  airbus: string,
  start_time: string,
  from_airportname: string,
  end_time: string,
  to_airportname: string,
  travel_time: string,
  cabinbaggage: string,
  Checkinbaggage: string,
  cabinbaggage_details: string,
  checkbaggage_details: string,
  conditions: string,
  refund: string,
  economy: string,
  eco: string,
  
}
 

 



@Component({
  standalone: true,

  selector: 'n1-complete-booking',
  template: `
     
       
      <div class="bg-white flex justify-center p-4">
    <div class=" border w-5/6 p-3 bg-white">
     <div> 
      <div class=" flex font-bold text-gray-900 text-lg block gap-10  ">
       {{option.destination}}
      
</div>
<div class="flex justify-end text-sm    ">
       {{option.refund}}
       </div>
       <div class="flex   p-3 gap-3 -mt-5">
        <div class="font-bold text-gray-900 " style="background-color:rgb(182, 150, 179);">
       {{option.booking_date}}
</div>
       <div class="text-gray-600">
       {{option.time}}
</div>
       </div>
       <div class="flex p-2 gap-4 items-center  ">
        <div class="text-gray-900">
       <n1-company-logo [label]="option.name" [logo]="option.logo"></n1-company-logo>
</div>
       {{option.flightnum}}
       <div class="rounded-full border   text-sm font-bold text-gray-900 px-1.5 ms-2">
       {{option.airbus}}
       </div>
       </div>

       <div  class="flex justify-end text-sm    " > 
        {{option.economy}}
        <div class="font-bold text-gray-900  ">
          {{option.eco}}
        </div>
       </div>
        <div class="blue ml-4 p-4 mr-4 bg-gray mb-3" style="background-color:rgb(243, 247, 248);">
       <div class=" p-2 flex gap-1 items-center -mt-5">
       <n1-timings [label]="" [value]="option.start_time"></n1-timings>
       <div class="font-bold text-gray-900">
       {{option.start_place}}
</div>
<div class=" text-gray-600">
  {{option.from_airportname}}
</div>
       </div>
       <div class="ml-14 ">
      {{option.travel_time}}
       </div>
       <div class=" p-2  flex gap-1 items-center">
       <n1-timings [label]="" [value]="option.end_time"></n1-timings>
       <div class="font-bold text-gray-900">
       {{option.end_place}}
       </div>
       <div class=" text-gray-600">
       {{option.to_airportname}}
</div>
       </div>
      <hr>
       <div class="flex p-4 gap-8">
        <div class="flex text-gray-900">
        <n1-company-logo [label]="" [logo]="option.logo"></n1-company-logo>
        <div class="font-bold " >
        {{option.cabinbaggage}}
</div>
        {{option.cabinbaggage_details}}
        </div>
        <div class="flex text-gray-900">
        <n1-company-logo [label]="" [logo]="option.logo"></n1-company-logo>
        <div class="font-bold " >
        {{option.Checkinbaggage}}
</div>
        {{option.checkbaggage_details}}
</div>
       </div>
</div>

<div class="  border items-center py-1.5 px-1.5 flex  " style="background-color:rgb(236, 245, 247);">
  <div>
    <n1-company-logo [label]="" [logo]="option.logo"></n1-company-logo>
  </div>
  <div class=" font-bold  text-sm flex justify-center">
  {{option.conditions}}
</div>
</div>

      <!-- {{option.time}}
      {{option.start_place}}
      {{option.from_airportname}}
      {{option.to_airportname}}
      {{option.end_place}}   -->
 
     </div>
    <div>
    
    
</div>
    </div>
</div>
  
      
     
         

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1CompleteBookingComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1JourneyTimeComponent, N1CompanyLogo, N1TimingsComponent]
})
export class N1CompleteBookingComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: bookingoptions = { name: '', start_place: '', end_place: '', booking_date: '', time: '', destination: '', logo: '', flightnum: '', airbus: '', start_time: '', from_airportname: '', end_time: '', to_airportname: '', travel_time: '', cabinbaggage: '', Checkinbaggage: '', cabinbaggage_details: '', checkbaggage_details: '', conditions: '', refund: '', economy: '', eco: '',  };
  ngOnInit() {
    console.log(this.option);   
  }
}
