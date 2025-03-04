
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../n1-comps/n1-dropdown-airport";
   
 

export interface     travellers{
  firstName:string,
  age: string,
  gender: string,
  Traveller: string,
  Seat: string,
   
   
   
}






@Component({
  standalone: true,

  selector: 'n1-bus-traveller-details',
  template: `
        
         <div class=" flex justify-center   p-5  ">
         <div class="   border w-5/6 p-3 bg-white">

  <div class="font-bold text-gray-900 text-lg block p-2">{{option.Traveller}}</div>
         <div class="flex items-center gap-9">
         <div class=" text-gray-900  font-bold block ">{{option.Seat}}</div>

 <n1-details-input [(value)]="option.firstName" [label]="'Name'" [placeholder]="'Enter Traveller Name'"
    [name]="'firstName'" required></n1-details-input>

    <n1-details-input [(value)]="option.age " [label]="'Age (in years)'" [placeholder]="'Enter Traveller Name'"
    [name]="'firstName'" required></n1-details-input>

    <div>
    <div class="p-1"> {{option. gender}}</div> 
<n1-dropdown-airport  [label]="' Title'" [options]="countrycode"   
class="w-40 px-2 py-1 text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>
</div>
  
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1BusTravellerDetailsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent, N1DropdownAirportComponent]
})
export class N1BusTravellerDetailsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:    travellers = {
    firstName: '',
    age: '',
    gender: '',
    Traveller: '',
    Seat: '',   
    
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
  
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
