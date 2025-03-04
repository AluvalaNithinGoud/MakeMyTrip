
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "./n1-details-input";
import { N1DropdownAirportComponent, N1DropdownOptions } from "./n1-dropdown-airport";
 
export interface   travellersoptions {
  name: string,
  logo: string,
  audlt:string,
  conditions:string,
  context:string,
  adult_1:string,
  firstName:string,
  lastname:string,
  number:string,
  email: string,
   
  // canceldate2: string,
  // canceltime2: string,
  // canceldate3: string,
  // canceltime3: string,
}
 
 
 

 



@Component({
  standalone: true,

  selector: 'n1-travellers-details',
  template: `
   <div class="bg-white   justify-center p-6">

<div class=" border w-5/6 p-3 bg-white   ">
<div>
<div class="font-bold text-gray-900 text-lg block p-3">
  {{option.name}}
</div>
<div class="flex items-center">
  <div class="mt-1">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
  </div>
  <div class="font-bold text-gray-900 p-3  block">
 {{option.audlt}}
</div>
</div>
<div class="flex  gap-2  "  style="background-color:rgb(211, 164, 195);">
<div class="text-sm font-bold ">
  {{option.conditions}}
</div>
<div class="text-sm ">
  {{option.context}}
</div>
</div>
</div>

<!-- <div class="border  bg-white ">
  <div class="font-bold text-gray-900 text-lg block p-3">{{option.adult_1}}</div>
</div> -->
</div>
<div class="border  bg-white  w-5/6 p-2 bg-white   ">
  <div class="font-bold text-gray-900 text-lg block p-1">{{option.adult_1}}</div>


  <div class="flex justify-between gap-6">
  <n1-details-input [(value)]="option.firstName" [label]="' '" [placeholder]="' First&Middle name'"
    [name]="'firstName'" required></n1-details-input>

  <n1-details-input [(value)]="option.lastname" [label]="' '" [placeholder]="'  Last name'"
    [name]="'lastName'" required [type]="'text'"></n1-details-input>

  <n1-details-input [(value)]="option.number" [label]="' '" [placeholder]="' Mobile No '"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
 
</div>
<div class="flex items-center justify-between gap-6 p-2">
<div class="w-1/3 mt-5">
    <n1-dropdown-airport  [label]="'Country code'" [options]="countrycode" [selected]="selectedcode"  
     class=" w-full px-2 py-1 text-sm   rounded-lg  text-gray-900 block border outline-0 p-1 cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>

<n1-details-input [(value)]="option.number" [label]="' Mobile No:'" [placeholder]="' Mobile No '"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
 
  <n1-details-input [(value)]="option.email" [label]="'Email: '" [placeholder]="' Email'" [name]="'email'"
    [pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'"></n1-details-input>

    
</div>
 

<div class="flex items-center p-5">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    I require wheelchair (Optional)</label>
</div>

<div class="flex items-center p-3  " style="background-color:rgb(157, 199, 216);">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300  ">
    Add these travellers to My Traveller List. You won’t have to fill traveller info on your next visit.</label>
</div>



<div class="  ">
<div class="font-bold text-gray-900 text-lg block mt-2">Booking details will be sent to</div>
 <div class="flex items-center justify-between -mt-2">
<div class="w-1/3 mt-6 p-1 ">
    <n1-dropdown-airport  [label]="'Country code'" [options]="countrycode" [selected]="selectedcode"  
     class=" w-full px-2 py-1 text-sm   rounded-lg  text-gray-900 block border outline-0 p-1 cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>

<n1-details-input [(value)]="option.number" [label]="' Mobile No:'" [placeholder]="' Mobile No '"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
 
  <n1-details-input [(value)]="option.email" [label]="'Email: '" [placeholder]="' Email'" [name]="'email'"
    [pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'"></n1-details-input>
</div>
</div>


<div class="  ">
<div class="flex items-center p-3">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="ms-2 text-lg font-bold  text-gray-900 dark:text-gray-300">
    I have a GST number (Optional)</label>
</div> 
<div class="flex items-center gap-3">
 
 <n1-details-input [(value)]="option.email" [label]="'Company Name: '" [placeholder]="'Company Name'" [name]="'Company Name'"
 [pattern]="' '" required [type]="'text'"></n1-details-input>
 
  <n1-details-input [(value)]="option.email" [label]="'Registration No: '" [placeholder]="'Registration No'" [name]="'Registration No'"
    [pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'"></n1-details-input>
</div>
</div>


</div>

</div>
<div class=" flex items-center justify-between w-5/6 p-3  bg-white mt-4">
      <div class="text-lg font-bold  text-gray-900 p-5   "> Still unsure about this trip? Lock this price!</div>
      <div class="  justify-end  ">
 <button type="Button" class="    items-center py-1.5 px-1.5 ms-2 font-bold text-white-900 text-lg block bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
 Lock Price</button>  
</div>
</div>
     

<div class="  mt-4 mb-4 ">
 <button type="Button" class="items-center py-2 px-4 ms-2 font-bold text-white-900 text-lg block bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style="background-color:rgb(150, 207, 230);">
 CONTINUE</button>  
</div>
         
<div class=" flex items-center justify-between w-5/6 p-3  bg-white mb-4">
      <div class="text-lg font-bold  text-gray-900 p-5"> Seats & Meals      </div>
       
</div>
 
<div class=" flex items-center justify-between w-5/6 p-3 bg-white mb-4">
      <div class="text-lg font-bold  text-gray-900 p-5">Add ons      </div>  
</div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1TravellersDetailsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent, N1DropdownAirportComponent]
})
export class N1TravellersDetailsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: travellersoptions = { 
    name: '', 
    logo:'', 
    audlt:'',
    conditions:'',
    context:'',
    adult_1:'',
    firstName:'',
    lastname: '',
    number: '',
    email:  '',
   
    //   canceltime1:  '',
    //   canceldate2:  '',
    //   canceltime2:  '',
    //   canceldate3:  '',
    //   canceltime3:  '',
    };

    countrycode: N1DropdownOptions[] = [

      {
        id: 1,
        name: 'India(91) ',
        cityDetails: '',
      },
      {
        id: 2,
        name: 'Afghanisthan(93)',
        cityDetails: '',
      },
      {
        id: 3,
        name: 'Ageria(213)',
        cityDetails: '',
      },
      {
        id: 3,
        name: 'Ageria(213)',
        cityDetails: '',
      },
  
  
    ];
    selectedcode= this.countrycode[0]
  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
}
