
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownAirportComponent, N1DropdownOptions } from "../n1-comps/n1-dropdown-airport";
  
 

export interface   Travellersoptions{
  name:string,
  drbt: string,
  departs: string,
  num: string,
  time: string,
  date: string,
      place: string,
      destination_time: string,
      time2: string,
      date2: string,
      place2: string,
      status: string,
      avalible: string,
      b_no: string,
  Updated : string,
  boarding_station: string,
  
}






@Component({
  standalone: true,

  selector: 'n1-select-travellers',
  template: `
        <div class="p-2 font-bold text-lg text-white block w-full"
        style="background-color:rgb(1, 3, 5) ;">{{option.name}}</div>
         <div class=" flex justify-center   p-5">
         <div class="     w-5/6  bg-white border p-3 ">


         <div  class="flex  justify-between items-center ">

          <div class="p-2">
          <div class="p-2 font-bold text-lg text-gray-900 block ">{{option.drbt}}</div>
          <div class="flex  gap-4">
          <div>{{option.num}}</div>
          <div>{{option.departs}}</div>
         </div>
          </div>

          <div>
          <div class="flex  p-2  ">
          <div class="font-bold text-lg text-gray-900 block ">{{option. time}}</div>
          <div class="text-lg">{{option.date}}</div>
         </div>
         <div class="text-sm">{{option. place}}</div>
          </div>

          <div>{{option.destination_time}}</div>

          <div>
          <div class="flex  p-2  ">
          <div class="font-bold text-lg text-gray-900 block ">{{option. time2}}</div>
          <div class="text-lg">{{option.date2}}</div>
         </div>
         <div  class="text-sm">{{option. place2}}</div>
          </div>


</div>
<div  class="flex gap-6">
<div class="">
<div class="font-bold p-2 text-gray-900 block ">{{option.status}}</div>
<div class="  border rounded-md">
  <div  class="flex gap-4 ">
<div  class="font-bold  p-3">{{option.b_no}}</div>
<div class="p-3"> {{option.avalible}}</div>
</div>
<div>
  <div class="text-sm p-2"> {{option.Updated}}</div>
</div>
</div>

 
</div>

<div class="p-3"> 
  <div  class="font-bold  p-3">{{option.boarding_station}}</div>

  <div class="  w-full p-1 ">
    <n1-dropdown-airport  [label]="'Country code'" [options]="countrycode" [selected]="selectedcode"  
     class=" w-full px-2 py-1 text-sm   rounded-lg  text-gray-900 block border outline-0 p-1 cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>

</div>

</div>
</div>

</div> 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1SelectTravellersComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DropdownAirportComponent]
})
export class N1SelectTravellersComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   Travellersoptions = {
    name: '',
    drbt: '',
      num: '',
      departs: '',
      time: '',
       date: '',
      place: '',
      destination_time: '',
       time2 : '',
       date2: '',
        place2: '',
        status: '',
        b_no: '',
         avalible: '',
         Updated: '',
         boarding_station: '',
     
 
     
   };
    
        countrycode: N1DropdownOptions[] = [
    
          {
            id: 1,
            name: ' New Delhi (NDLS) 4:20 PM, (03 Feb) ',
            cityDetails: '',
          },
          {
            id: 2,
            name: ' ',
            cityDetails: '',
          },
          {
            id: 3,
            name: ' ',
            cityDetails: '',
          },
          {
            id: 3,
            name: ' ',
            cityDetails: '',
          },
      
      
        ];
        selectedcode= this.countrycode[0]

  ngOnInit() {
    console.log(this.option);  
  }   
}
