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
import { big_currency, N1CountryCheckboxForexomponent } from "./n1-country-checkbox-forex";
import { amount, N1ForeignCurrencyComponent } from "./n1-foreign-currency";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../n1-comps/n1-dropdown-airport";
import { N1DepartureReturnComponent } from "../n1-comps/n1-departure-return";
 
export interface   card_details  {
  name: string;
  Card: string;
  Forex: string;
  // img1: string;
  // img2: string;
  Delivery: string;
  location: string,
  Order: string,
  time: string,
  get: string,
  In: string;
  Select: string;
  Currency: string;
  Offers: string;
  cash: string;
    apply: string,
    Cashback: string,
    Enter: string
    Air: string;
    Add: string,
    Start: string,
    End: string;
    total_price: string;
    taxes: string;
   
 
}

@Component({
    standalone: true,

    selector: ' n1-get-multi-currency',
    template: `
<div class="   justify-center p-9  bg-white"  >
<div class="       w-full p-3  rounded-md">

<div class="flex gap-7">

<div class="p-5">
<div class="text-5xl font-semibold text-gray-900">{{option.name}}</div>
<br>
<div class="text-5xl font-semibold text-gray-900  ">{{option.Card}}</div>
<br>
<div class=" flex items-center">
<div  class=" text-medium">{{option.Forex}}</div>
<div>
<img class="w-17 h-9" alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/bmf_transaprent_2_ee2f21b3a8.png"  >   
</div>
<div>
<img class="w-14 h-6" alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/yesbank_white_bg_a2a95fcb65.png"  >   
</div>
</div>
<br>
<div class="flex gap-2">
<div class="text-lg">{{option.Delivery}}</div>
<div class="text-lg text-[#4fd1c5]">{{option.location}}</div>
<div class="text-lg ">{{option.Order}}</div>
<div class="text-lg text-[#e53e3e]">{{option.time}}</div>
</div>
<br>
<div class="p-2"style="background-color: rgb(241, 242, 245);">{{option.get}}</div>
</div>

<div class=" w-2/5">

<div class="flex">
<div class="text-lg font-bold text-gray-900">{{option.In}}</div>
<div class="text-lg  ">{{option.Currency}}</div>
</div>
<br>
<div  class=" p-8 bg-white rounded-lg shadow-xl"  >
<div class="text-medium font-bold text-gray-900 p-2">{{option.Currency}}</div>


<div class="flex"  > 
<div class="w-full flex" *ngFor="let  select_box of  checkbox_name">
<n1-country-checkbox-forex [option]="select_box"></n1-country-checkbox-forex></div>
</div>
<div class="flex"   > 
<div class="w-full flex" *ngFor="let  select_box of  checkbox_name">
<n1-country-checkbox-forex [option]="select_box"></n1-country-checkbox-forex></div>
</div>

<div class="p-2"><hr></div>
<div class="w-full  " *ngFor="let     dollor of  foregin">
     <n1-foreign-currency [option]=" dollor "></n1-foreign-currency>
        </div>

        <div class="p-4"><hr></div>   
        <div class="text-medium font-bold text-gray-900 p-2">{{option.Offers}}</div>
        <div class="border rounded-lg"> 
        <div class="p-2 flex justify-between"> 
        <div class="font-bold text-gray-900 "> {{option.cash}}</div> 
        <div class="font-bold text-gray-900 "> {{option.apply}}</div>
        </div>   
        <div  class="text-sm p-2">{{option.Cashback}}</div>
        </div>

        <div class="p-4"><hr></div>   
        <div  class="  p-2"> 
        <div  class=" font-bold text-gray-900  ">{{option.Enter }}</div>
        <div  class="   ">{{option.Air }}</div>

        <div class="w-full border p-2 rounded-r-lg  hover:shadow-lg  ">
    <n1-dropdown-airport   [options]="countries" [selected]="selectcountry" 
    class="  font-bold text-gray-900   block w-full outline-0 cursor-pointer transition-all    "></n1-dropdown-airport>
  </div>
        </div>

        <div class="p-4"><hr></div>   
        <div  class="  p-2"> 
        <div  class=" font-bold text-gray-900  ">{{option.Add}}</div>
        <div class="w-full relative border p-2  ">
    <n1-departure-return point="Travel Date :" [(value)]="selectedDepartureReturnDates" (valueChange)="onDatesChange($event)">
    </n1-departure-return>
  </div>
  <div  class="  text-sm ">{{option.Start }}</div>
  <div  class="  text-sm p-2">{{option.End }}</div>

        </div>

        <div class="p-4"><hr></div>   
        <div  class="  p-2 flex justify-between"> 
            <div>
        <div  class=" font-bold text-gray-900  text-lg">{{option.total_price}}</div>
         <div  class="  text-sm ">{{option.taxes }}</div>
</div>
<div class="flex   p-2">
    <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border focus:outline-none" style="background-color: rgb(9, 12, 19);"><div class="text-white">
         COUNTINUE </div>
</button></div>
        </div>
         



</div>
 
</div>

</div>
</div>
</div>
 
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1GetMultiCurrencyComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1CountryCheckboxForexomponent, N1ForeignCurrencyComponent, N1DropdownAirportComponent, N1DepartureReturnComponent],
})
export class N1GetMultiCurrencyComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: card_details = {
      name: '',
      Card: '',
      Forex: '',
      Delivery: '',
      location: '',
      Order: '',
      time: '',
      get : '',
      In: '',
      Select: '',
      Currency: '',
      Offers: '',
      cash: '',
      apply: '',
      Cashback: '',
      Enter: '',
        Air: '',
      Add: '',
      Start: '',
      End: '',
      total_price: '',
      taxes: '',
    
    };

      checkbox_name  :    big_currency[] = [
          {    
            country_name:" USA",     
             amount :  "23.8823 INR",
          },

          {    
            country_name:" USA",     
             amount :  "23.8823 INR",
          },
          {    
            country_name:" USA",     
             amount :  "23.8823 INR",
          },
        ]

 foregin  :  amount[] = [
    {    
      Amount:"Amount in Foreign Currency",     
       Dollar :  "US Dollar (USD)",
       Exchange:  " Exchange Rate INR 87.1797",
       number:" ",
       Rupees:"Amount in Rupees:",
       inr:" INR 0",     
       Get :  "Get this net effective rate after cashback",
       Upto:  "Upto",
       know:" Know More",
        total:"INR 84.273",
     

    },
  ]


  
  countries: N1DropdownOptions[] = [

    {
      id: 1,
      name: 'United States of America (USA),  ',
      cityDetails: '',
    },
    {
      id: 2,
      name: 'United Arab Emirates',
      cityDetails: '',
    },
    {
      id: 3,
      name: 'Thailand',
      cityDetails: '',
    },
    {
      id: 3,
      name: 'Singapore',
      cityDetails: '',
    },
    {
      id: 3,
      name: 'France',
      cityDetails: '',
    },

  ];

  // depature
  selectedDepartureReturnDates: Date[] | null = null;

  onDatesChange(selectedDates: Date[]): void {
    this.selectedDepartureReturnDates = selectedDates;
  }


   selectcountry = this.countries[1]

    ngOnInit() {
        console.log(this.option);
    }
}
