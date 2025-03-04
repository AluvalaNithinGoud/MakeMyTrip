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
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
 
export interface   primary_travellers  {
  name: string;
  Card: string;
  Forex: string;
  // img1: string;
  // img2: string,
  get: string,
  In: string;
  Select: string;
  Adds: string;
  Pan: string;
  cash: string;
    apply: string,
    For: string,
    Delivery: string
    Air: string;
    Important: string,
    After: string,
    Your: string;
    total_price: string;
    taxes: string;
    number: string,
    email: string,
    pan_number: string
    fullname: string;
    pincode: string,
    house_no: string, 
    line_2: string,
    understand: string,
    agree: string
  //   Secures: string;
  //   Medicals: string,
  //   Coverage: string, 
    
}

@Component({
    standalone: true,

    selector: ' n1-forex-travellers-details',
    template: `
<div class="   justify-center p-9  bg-white"  >
<div class="       w-full p-3  rounded-md">

<div class="flex gap-7 justify-between">

<div class=" ">
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
<br>
<div class="p-2"style="background-color: rgb(241, 242, 245);">{{option.get}}</div>

<div class="p-9">
<img class=" w-80 h-50" alt="" src="https://jsak.mmtcdn.com/tripmoney/apps/bmf-onboarding/_next/static/media/bmf_card_img.69d57e5f.png"  >   
</div>
</div>

<div class=" w-2/5 ">

<div class="flex">
<div class="text-lg font-bold text-gray-900">{{option.In}}</div>
<div class="text-lg  ">{{option.Select}}</div>
</div>
<br>
<div  class=" p-8 bg-white rounded-lg shadow-xl"  >
<div class="text-medium font-bold text-gray-900 text-lg p-2">{{option.Adds}}</div>


<div class="gap-3 "  > 
<div class=" ">
<n1-details-input [(value)]="option.number" [label]="' '" [placeholder]="' Phn Number'"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
</div>
 
<n1-details-input [(value)]="option.email" [label]="' '" [placeholder]="'Enter your email'" [name]="'email'"
    [pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'"></n1-details-input>
</div>
  
        <div class="p-4"><hr></div>   




<div style="background-color: rgb(197, 203, 221);" class="p-4">
        <div class="text-medium font-bold text-gray-900 p-2 text-lg " >{{option.Pan}}</div>
        <div class=" "> 
        <div class="  "> 
        <n1-details-input [(value)]="option.pan_number" [label]="'PAN NUMBER'" [placeholder]="'PAN NUMBER'"
        [name]="'firstName'" required></n1-details-input>
        </div> 
        <div class="  "> 
        <n1-details-input [(value)]="option.fullname" [label]="' Name'" [placeholder]="'NAME (AS PER PAN CARD)'"
        [name]="'firstName'" required></n1-details-input>
        </div> 

        <div  class="text-sm p-2">{{option.For}}</div>
        </div>
</div>
        <div class="p-4"><hr></div>   
        <div  class="  p-2"> 
        <div  class=" font-bold text-gray-900 text-xl  ">{{option.Delivery }}</div>
        <div class="  p-2 "> 
        <n1-details-input [(value)]="option.pincode" [label]="'PIN CODE'" [placeholder]="'PIN CODE'"
        [name]="'firstName'" required></n1-details-input>
        </div>
        <div class="  p-2 "> 
        <n1-details-input [(value)]="option. house_no" [label]="'HOUSE.NO '" [placeholder]="' FLAT/HOUSE.NO,STREET,AREA'"
        [name]="'firstName'" required></n1-details-input>
        </div>
        <div class=" p-2  "> 
        <n1-details-input [(value)]="option.line_2" [label]="' LINE 2 ADDRESS(OPTIONAL)'" [placeholder]="' FLAT/HOUSE.NO,STREET,AREA'"
        [name]="'firstName'" required></n1-details-input>
        </div>

        </div>

        <div class="p-4"><hr></div>   
        <div  class="  p-2"> 
        <div  class=" font-bold text-gray-900   ">{{option.Important}}</div>
        
  <div  class="  text-sm p-2">{{option.After }}</div>
  <div  class="  text-sm p-2">{{option.Your }}</div>
        </div>
        <div
                                            class="flex items-center gap-3 p-2 rounded-lg" style="background-color: rgb(245, 233, 242);"
                                        >
                                            <input
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label for="checked-checkbox"
                                                ><div
                                                    class=" text-sm text-gray-900"
                                                >
                                                    {{ option.understand }}
                                                </div>
                                            </label>
                                        </div>

                                        <div
                                            class="flex items-center gap-3 p-2"
                                        >
                                            <input
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label for="checked-checkbox"
                                                ><div
                                                    class=" text-sm text-gray-900"
                                                >
                                                    {{ option.agree }}
                                                </div>
                                            </label>
                                        </div>



        <div class="p-4"><hr></div>   
        <div  class="  p-2 flex justify-between"> 
            <div>
        <div  class=" font-bold text-gray-900  text-lg">{{option.total_price}}</div>
         <div  class="  text-sm ">{{option.taxes }}</div>
</div>
<div class="flex   p-2">
    <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border focus:outline-none" style="background-color: rgb(9, 12, 19);"><div class="text-white">
          REVIEW & PAY</div>
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
            useExisting: forwardRef(() => N1ForexTravellersDetailsComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  N1DetailsInputComponent],
})
export class N1ForexTravellersDetailsComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: primary_travellers = {
      name: '',
      Card: '',
      Forex: '',
      get : '',
      In: '',
      Select: '',
      Adds: '',
      Pan: '',
      cash: '',
      apply: '',
      For: '',
      Delivery: '',
        Air: '',
        Important: '',
        After: '',
        Your: '',
      total_price: '',
      taxes: '',
      number: '',
      email: '',
      pan_number: '',
        fullname: '',
      pincode: '',
      house_no: '',
      line_2: '',
      understand: '',
      agree: '',
      //   Secures: '',
      //   Medicals: '',
      // Coverage: '',
    };

       

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


  
   

   
   

    ngOnInit() {
        console.log(this.option);
    }
}
