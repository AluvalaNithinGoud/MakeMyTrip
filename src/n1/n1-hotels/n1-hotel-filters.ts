
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1OnwardReturnFilterComponent } from "../n1-comps/n1-onward-return-filter";
import { N1PopularFiltersComponent } from "../n1-comps/n1-popular-filters";
 

export interface  hotelfilters{
  // name: string,
  // stops: string,
  // departure: string,
  // before: string,
  // before1: string,
  // morningtime: string,
  // morningtime1: string,
  // afterNoon: string,
  // afterNoon1: string,
  //  night: string,
  //  night1: string,
  // arrival: string,
  // departure_air:string,
}






@Component({
  standalone: true,

  selector: 'n1-hotel-filter',
  template: `
  <div class="grid justify-items-center bg-white">
       
       <div class="p-3 text-lg font-bold  text-gray-900 ">Suggested For You</div>
         <div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.suggested">
         <n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
         </div>
 

     <div class="p-3 text-lg font-bold  text-gray-900 "> Price Per Night</div>
         <div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.price_per_night">
         <n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
         </div>


         <div class="p-3 text-lg font-bold  text-gray-900 "> Star Category</div>
         <div class="w-full  text-sm " *ngFor="let  onwardreturn  of  option. star_category">
         <n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
         </div>
 

         <div class="p-3 text-lg font-bold  text-gray-900 ">  Super Packages</div>
<div class="w-full  text-sm " *ngFor="let  onwardreturn  of  option.super_packages">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>


<div class="p-3 text-lg font-bold  text-gray-900 ">  User Rating</div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.user_rating">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>

<div class="p-3 text-lg font-bold  text-gray-900 "> Property Type</div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option. property_type">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>


<div class="p-3 text-lg font-bold  text-gray-900 ">Chains</div>
<div class="w-full text-sm " *ngFor="let  onwardreturn  of  option.chains">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>


<div class="p-3 text-lg font-bold  text-gray-900 ">Locality</div>
<div class="p-2  font-bold  text-gray-900 ">Business & Shopping Hubs: </div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.locality">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>


 
<div class="p-2  font-bold  text-gray-900 ">Known for Dining & Shopping: </div>
<div class="w-full  text-sm " *ngFor="let  onwardreturn  of  option.shopping">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>


<div class="p-2  font-bold  text-gray-900 ">Near Transit Hub(s): </div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.transit_hub">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>


<div class="p-2 text-lg font-bold  text-gray-900 ">  Guests Love</div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.guests_love">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>


<div class="p-2 text-lg font-bold  text-gray-900 "> House Rules</div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.house_rules">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>


<div class="p-2 text-lg font-bold  text-gray-900 ">Booking Preference</div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.booking_preference">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>

<div class="p-2 text-lg font-bold  text-gray-900 ">Room Views</div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.room_views">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>
 
<div class="  text-lg font-bold  text-gray-900   ">Room Amenities</div>
<div class="w-full text-sm  " *ngFor="let  onwardreturn  of  option.room_amenities">
<n1-popular-filters [option]="onwardreturn"   class=" "></n1-popular-filters >
</div>
 
</div>
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1HotelFilterComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  N1PopularFiltersComponent]
})
export class N1HotelFilterComponent {
  @Input() label: string = ' ';
 

  @Input() option:   any = {
   };
  

  ngOnInit() {
    console.log(this.option);   
  }
  // @Output() valueChange = new EventEmitter<string>();

  //  _value: string = "";   
  //  get value(): string {
  //    return this._value;
  //  }
 
  //  @Input() set value(val: string) {
  //    this._value = val;
  //    this.valueChange.emit(val);
  //  }
 
  //  onOptionChange(selectedfliter: string): void {
  //   this.value = selectedfliter;
  // }
}
