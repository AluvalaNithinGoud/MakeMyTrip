
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1RadioComponent } from "../../app/inputs/elements/n1-radio";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../n1-comps/n1-dropdown-airport";
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
import { filteroptions, N1PopularFiltersComponent } from "../n1-comps/n1-popular-filters";
import { N1HotelFilterComponent } from "./n1-hotel-filters";
 

export interface  guestdataoptions{
   name: string,
   myself: string,
   someone: string,
   title: string,
   firstName: string,
   lastname: string,
   email:  string,
   number: string,
   countrycode:   string,
   enter: string,
 
}






@Component({
  standalone: true,

  selector: 'n1-guest-details',
  template: `
       
         <div class=" flex justify-center   p-5">

         <div class="     w-5/6  bg-white border p-3 ">
         <div class="font-bold text-gray-900 text-lg block p-3 ">{{option.name}}</div>
         <!-- <div class="mt-5">
  <n1-radio  [(value)]="option.selectedGender" [name]="'gender'"
    [label]="'Gender Selection'"></n1-radio>
</div> -->
         
<div class="flex items-center gap-4 p-2">
  <div class="flex gap-2">
         <label class="block cursor-pointer rounded-md   items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>    
<div class="font-bold text-gray-900 ">{{option.myself}}</div>
</div>

<div  class="flex gap-2">
<label class="block cursor-pointer rounded-md   items-center gap-3">
    <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />

</label>    
<div class="font-bold text-gray-900 ">{{option.someone}}</div>
</div>
</div>

  
 
<div class="gap-5 flex items-center p-4">
<div>
<div class="p-1"> {{option.title}}</div>
<n1-dropdown-airport  [label]="' Title'" [options]="countrycode"   
class=" w-full px-2 py-1 text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>
<div class=" ">
<n1-details-input [(value)]="option.firstName" [label]="'FirstName '" [placeholder]="'FirstName'"
[name]="'firstName'" required></n1-details-input>
</div>
<div class=" ">
<n1-details-input [(value)]="option.lastname" [label]="'LastName'" [placeholder]="'Last name'"
    [name]="'lastName'" required [type]="'text'"></n1-details-input>
</div>
</div>

<div class="gap-5 flex items-center p-4">
<div>
 
<n1-details-input [(value)]="option.email" [label]="'Email: '" [placeholder]="' Email'" [name]="'email'"
[pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'"></n1-details-input>
</div>
<div class=" ">
<div class="p-1"> {{option.countrycode}}</div>
<n1-dropdown-airport  [label]="'Country code'" [options]=" code"   
class=" w-40 px-2 py-1 text-sm   rounded-lg  text-gray-900 block border outline-0 p-1 cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>
<div class=" ">
<n1-details-input [(value)]="option.number" [label]="' Mobile No:'" [placeholder]="' Mobile No '"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
</div>
</div> 

<div class="   ">
<div class="flex " *ngFor="let   filters of popular">
  <n1-popular-filters [option]="filters" class=" "  ></n1-popular-filters >
  <!-- <div>{{option.enter}}</div> -->
</div>
  
</div>

  
  

</div> 
</div>
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1GuestDetailsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1RadioComponent, N1DropdownAirportComponent, N1DetailsInputComponent, N1PopularFiltersComponent, N1HotelFilterComponent]
})
export class N1GuestDetailsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   guestdataoptions = {
     name: '',
     myself: '',
     someone: '',
     title: '',
     firstName: '',
     lastname:'',
     email:'' ,
     number:'',
   countrycode:',' , 
   enter: '',
 
     
   };
  

  ngOnInit() {
    console.log(this.option);  
  }

  countrycode: N1DropdownOptions[] = [
  
        {
          id: 1,
          name: 'Mr ',
          cityDetails: '',
        },
        {
          id: 2,
          name: ' Mrs',
          cityDetails: '',
        },
        {
          id: 3,
          name: ' Ms',
          cityDetails: '',
        },
        {
          id: 3,
          name: ' ',
          cityDetails: '',
        },
      ]

         code: N1DropdownOptions[] = [
        {
          id: 1,
          name: 'India (+91)',
          cityDetails: '',
        },
        {
          id: 2,
          name: ' India (+91) ',
          cityDetails: '',
        },
        {
          id: 3,
          name: ' India (+91)',
          cityDetails: '',
        },
        {
          id: 3,
          name: ' India (+91)',
          cityDetails: '',
        },
      ]
      selectedcode= this.countrycode[0]
     
          popular :    filteroptions [] = [
           {
             name:" ",
              nonstop:"Enter GST Details",
              price:"  ",
           },
          //  {
          //    name:" ",
          //     nonstop:" ",
          //     price:"  ",
          //  },
          //  {
          //    name:" ",
          //     nonstop:" ",
          //     price:" ",
          //  },
          //  {
          //    name:" ",
          //     nonstop:"  ",
          //     price:" ",
          //  },
          //  {
          //    name:" ",
          //     nonstop:"  ",
          //     price:"  ",
          //  },
          //  {
          //    name:" ",
          //     nonstop:" ",
          //     price:"  ",
          //  },
          ]
}
