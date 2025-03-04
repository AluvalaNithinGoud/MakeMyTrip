import {
    Component,
    Input,
    Output,
    EventEmitter,
    forwardRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../n1-comps/n1-dropdown-airport";

export interface  detailsoftraveller {
  name: string;
  pick_up_location: string;
  Traveller: string;
  fullname: string;
  gender: string;
  contact: string,
  email: string,
  number: string,
  proceeding: string,
  Cancellation: string,
  user: string,
    
}

@Component({
    standalone: true,

    selector: ' n1-cab-traveller-details',
    template: `
<div class=" flex justify-center p-4 ">
<div class="     border w-5/6  p-4  bg-white">
 
<div  class=" p-2  font-bold text-lg text-gray-900 block">{{option.Traveller}}</div>

<div  class="  font-bold text-sm text-gray-900 block">{{option.name}}</div>

<div>
 <n1-details-input [(value)]="option.pick_up_location" [label]="' '" [placeholder]="'pick_up_location'"
 [name]="'pick_up_location'" required></n1-details-input>
 </div>
  
 <div  class=" p-2 font-bold text-sm text-gray-900 block">{{option.contact}}</div>

 <div class="flex items-center gap-2 ">
 <div class=" w-full">
 <n1-details-input [(value)]="option.fullname" [label]="'Name'" [placeholder]="'Enter Traveller Name'"
    [name]="'firstName'" required></n1-details-input>
    </div>
    <div class="  w-full p-1 "> 
    <div class="p-1"> {{option. gender}}</div> 
    <n1-dropdown-airport  [label]="' Title'" [options]="genders"   
class="w-full px-2 py-1 text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>


</div>

<div class="flex gap-2 w-full">
<div class="  w-full">
<n1-details-input [(value)]="option.email" [label]="'Email: '" [placeholder]="' Email'" [name]="'email'"
[pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'"></n1-details-input>
</div>
<div class=" w-full">
<n1-details-input [(value)]="option.number" [label]="' Mobile Number '" [placeholder]="' Mobile No '"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
</div>
</div>

</div>
</div>

<div class="flex w-full gap-1 text-sm justify-center">
<div  class="  text-gray-900 block">{{option.proceeding}}</div>
<div  class=" text-[#4fd1c5] cursor-pointer">{{option. Cancellation}}</div>
<div  class=" text-[#4fd1c5] cursor-pointer">{{option. user}}</div>
</div>
 
 

    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1CabTravellerDetailsComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1DetailsInputComponent, N1DropdownAirportComponent],
})
export class N1CabTravellerDetailsComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: detailsoftraveller = {
      
      pick_up_location: '',
      name: '',
      Traveller: '',
      fullname: '',
      gender: '',
      contact: '',
      email: '',
      number : '',
      proceeding: '',
      Cancellation: '',
      user: '',
       
         
    };

     genders: N1DropdownOptions[] = [
         
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
