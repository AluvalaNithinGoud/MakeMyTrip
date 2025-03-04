
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../n1-comps/n1-dropdown-airport";
   
 

export interface   addoptions{
  name:string,
  firstName: string,
   age: string,
   gender: string,
   Nationality: string,
   berth_preference: string,
   meal_preference: string,
   reservation_type: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-add-travellar',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="     w-5/6  bg-white border p-3 ">

 <div class="font-bold text-gray-900 text-lg block ">{{option.name}}</div>
 
   
 <div class="flex items-center justify-between">
  <div class="  w-full p-1 ">
 <n1-details-input [(value)]="option.firstName" [label]="'Name'" [placeholder]="'Enter Traveller Name'"
    [name]="'firstName'" required></n1-details-input>
</div>
<div class="  w-full p-1 ">
    <n1-details-input [(value)]="option.age " [label]="'Age (in years)'" [placeholder]="'Enter Traveller Name'"
    [name]="'firstName'" required></n1-details-input>
</div>
    <div class="  w-full p-1 "> 
    <div class="p-1"> {{option. gender}}</div> 
<n1-dropdown-airport  [label]="' Title'" [options]="countrycode"   
class="w-40 px-2 py-1 text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>

<div class="  w-full p-1 ">
<div class="p-1"> {{option. Nationality}}</div>   
<n1-dropdown-airport  [label]="' Title'" [options]="nationality"   
class="  w-full px-2 py-1  text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>

 </div>

 <div class="flex">
 
 <div class="  w-full p-1 ">
<div class="p-1"> {{option. berth_preference}}</div>   
<n1-dropdown-airport  [label]="' Title'" [options]="Berth"   
class="  w-full px-2 py-1  text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>

<div class="  w-full p-1 ">
<div class="p-1"> {{option. meal_preference}}</div>   
<n1-dropdown-airport  [label]="' Title'" [options]="meal"   
class="  w-full px-2 py-1  text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>


<div class="  w-full p-1 ">
<div class="p-1"> {{option.reservation_type}}</div>   
<n1-dropdown-airport  [label]="' Title'" [options]="reservation "   
class="  w-full px-2 py-1  text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>


 </div>
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1AddTravellarComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent, N1DropdownAirportComponent]
})
export class N1AddTravellarComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   addoptions = {
    name: '',
    firstName: '',
    age: '',
    gender: '',
    Nationality: '',
    berth_preference: '',
    meal_preference: '',
    reservation_type: '',
     
    
 
     
   };
    

   countrycode: N1DropdownOptions[] = [
     
           {
             id: 1,
             name: ' Male ',
             cityDetails: '',
           },
           {
             id: 2,
             name: ' Female',
             cityDetails: '',
           },
           {
             id: 3,
             name: '  Others',
             cityDetails: '',
           },
           {
             id: 3,
             name: ' ',
             cityDetails: '',
           },
         ];

         nationality: N1DropdownOptions[] = [
     
          {
            id: 1,
            name: '  India ',
            cityDetails: '',
          },
          {
            id: 2,
            name: ' USA',
            cityDetails: '',
          },
          {
            id: 3,
            name: ' Russia',
            cityDetails: '',
          },
          {
            id: 3,
            name: ' UK',
            cityDetails: '',
          },
        ];


        Berth: N1DropdownOptions[] = [
     
          {
            id: 1,
            name: ' No Berth Perference ',
            cityDetails: '',
          },
          {
            id: 1,
            name: '  Upper ',
            cityDetails: '',
          },
          {
            id: 2,
            name: 'Lower',
            cityDetails: '',
          },
          {
            id: 3,
            name: ' Side Lower',
            cityDetails: '',
          },
          {
            id: 3,
            name: ' Side Upper',
            cityDetails: '',
          },
        ];

         meal: N1DropdownOptions[] = [
     
          {
            id: 1,
            name: ' No   Food ',
            cityDetails: '',
          },
          {
            id: 2,
            name: 'Veg',
            cityDetails: '',
          },
          {
            id: 3,
            name: ' Veg(Diabetic)',
            cityDetails: '',
          },
          {
            id: 3,
            name: 'Non Veg(Diabetic)',
            cityDetails: '',
          },
          {
            id: 3,
            name: ' Jain Meal',
            cityDetails: '',
          },
          {
            id: 3,
            name: 'Non Veg ',
            cityDetails: '',
          },
        ];

        reservation: N1DropdownOptions[] = [
     
          {
            id: 1,
            name: ' Full Ticket (full berth)',
            cityDetails: '',
          },
          {
            id: 2,
            name: ' Half Ticket (no berth)',
            cityDetails: '',
          },
          
        ]
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
