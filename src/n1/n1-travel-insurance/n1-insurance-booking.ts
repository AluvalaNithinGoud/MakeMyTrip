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
import { countries, N1CountryCheckboxComponent } from "./n1-country-checkbox";
import { N1DepartureReturnComponent } from "../n1-comps/n1-departure-return";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../n1-comps/n1-dropdown-airport";
 
export interface   insurancedetails  {
  name: string;
  Offered: string;
  img1: string;
  img2: string;
  license: string;
  img3: string,
  travel: string,
  policies: string,
  Destination: string,
  You: string;
  Popular: string;
  amount_1: string;
  Claims: string;
  support: string;
    Customer: string,
    Min: string,
    Medical: string
    people: string;
    covered: string,
    Cover: string,
    Bringing: string;
    Instant: string;
    Health: string;
    What: string,
    Insurance: string,
    Quick: string
    Digital: string;
    img5: string,
    Benefits: string, 
    We: string,
    img6: string,
    Offers: string
    Secures: string;
    Medicals: string,
    Coverage: string, 
    
}

@Component({
    standalone: true,

    selector: ' n1-insurance-booking',
    template: `
<div class="   justify-center p-9  "  style="background-color: rgb(20, 40, 77);">
<div class="       w-full p-3 bg-white rounded-md">

<div class="flex gap-5">
<div class="p-4">
<div class="font-bold text-gray-900 text-4xl block ">{{option.name}}</div>

<div class="flex gap-2 items-center p-2">
  <div class="font-bold text-sm text-gray-900">{{option.Offered}}</div>
  <div>
   <img class="w-8 h-7" alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/Reliance_General_insur_nce_1_ff7e996e13.png"  >   
  </div>
  <div>
   <img class="w-15 h-7" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6zus-jfD2n5EgcT_oBC6bp9yE0ZQVUT8TA&s"  >   
  </div>
</div>
<div class="text-sm text-gray-900">{{option.license}}</div>

<br>
 
 

<div class="flex gap-8 items-center p-">
  <div>
   <img class="w-14 h-15" alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/Luggage_Shield_a9baed13b4.svg"  >   
  </div>
  <div class=" ">
  <div class="font-bold text-lg text-gray-900">{{option.travel}}</div>
  <div class="text-sm text-gray-900">{{option.policies}}</div>
</div>
</div>
</div>



<div class=" w-full p-3  bg-white rounded-lg shadow-xl "  > 
<div class="font-bold text-gray-900 text-xl block">{{option.Destination}} </div>
<div class="  text-gray-900 text-sm block">{{option. You}} </div>
<br>
<div>
<div class="text-sm font-bold"> {{option.Popular}}</div>
<div class="flex">
<div class="   " *ngFor="let      selectcountry of   checkbox">
 <n1-country-checkbox [option]=" selectcountry"></n1-country-checkbox>
  </div>
</div>
<div class="flex">
<div class="w-full relative border p-2  ">
    <n1-departure-return point="Travel Date :" [(value)]="selectedDepartureReturnDates" (valueChange)="onDatesChange($event)">
    </n1-departure-return>
  </div>

  <div class=" w-full border p-2    ">
    <n1-dropdown-airport point="Travellers :" [options]="seatsbooking" [selected]="seatNumbers" 
    class=" font-bold text-gray-900 text-sm block w-full outline-0 cursor-pointer transition-all    "></n1-dropdown-airport>
  </div>


  <div class=" w-1/2 border p-2     ">
    <n1-dropdown-airport point="Select Age :" [options]="selectage" [selected]=" age"  [label]="'select age'"
    class=" font-bold text-gray-900 text-sm block w-full  outline-0 cursor-pointer  "></n1-dropdown-airport>
  </div>
 
</div>

 
  <div class="p-3 flex justify-center">
    <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border rounded-full  focus:outline-none" style="background-color: rgb(98, 146, 235);">
      <div class="text-white">VIEW PLANS</div>
</button>
</div>

</div>
</div>



</div>
</div>

<br>  
<br>
<br>
<div class=" border w-full p-5 bg-white rounded-md  "> 
  <div class="p-6 flex justify-between text-gray-900">
<div>  
<div class="font-bold text-gray-900 text-xl block">{{option.amount_1}} </div>
<div class="text-sm"> {{option.Claims}}</div>
</div>

<div>  
<div class="font-bold text-gray-900 text-xl block">{{option.support}} </div>
<div class="text-sm"> {{option.Customer}}</div>
</div>

<div>  
<div class="font-bold text-gray-900 text-xl block">{{option.Min}} </div>
<div class="text-sm"> {{option.Medical}}</div>
</div>

<div>  
<div class="font-bold text-gray-900 text-xl block">{{option.amount_1}} </div>
<div class="text-sm"> {{option.Claims}}</div>
</div>
</div>
</div>
</div>

<div  class=" w-full p-3 bg-white rounded-md justify-center p-9 ">
  <div class="flex gap-4 ">
  <div>
<div class="font-bold text-gray-900 text-4xl block   ">{{option.Cover}}</div>
<br>
<br>
<div class="  text-gray-900 text-sm block   ">{{option.Bringing }}</div>
</div>
 <div class="p-4 w-full ">
 <div class="flex gap-8   ">
 <div class="   bg-white rounded-lg shadow-xl "  >
  <div class="p-5 flex">
  {{option.Instant}}
</div>
</div>
<div class="bg-white rounded-lg shadow-xl ">
 <div class="p-5 flex">{{option.Health}}</div> 
</div>
</div>
<div class="flex p-5 gap-8">
<div class="   bg-white rounded-lg shadow-xl "  >
  <div class="p-5 flex">
  {{option.Instant}}
</div>
</div>
<div class="bg-white rounded-lg shadow-xl ">
 <div class="p-5 flex">{{option.Health}}</div> 
</div> 
</div>
</div>
</div>
<br>
<br>
<div class="font-bold text-gray-900 text-4xl block   ">{{option.What}}</div>
<br>
<br>
<div class="p-5" style="background-color: rgb(239, 242, 247);">
<div class="font-bold text-gray-900 text-lg block   ">{{option.Insurance}}</div>

<div class="flex justify-between items-center">
<div class="p-4 gap-4 flex text-gray-900 text-md  ">
<div>{{option.Quick}}</div>
<div>{{option.Digital}}</div>
</div>

<div>
<img class=" " alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/Luggage_Shield_a9baed13b4.svg"  >   

</div>
</div>

<div class="flex gap-2 items-center   ">
  <div class="font-bold text-sm text-gray-900">{{option.Offered}}</div>
  <div>
   <img class="w-18 h-9" alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/Reliance_General_insur_nce_1_ff7e996e13.png"  >   
  </div>
</div>

</div>
<br>
<br>
<br>
<br>
<div class="font-bold text-gray-900 text-4xl block   ">{{option.Benefits}}</div>
<div class="  text-gray-900 text-md block   ">{{option.We}}</div>

<div class="flex gap-2 items-center justify-between p-2 items-center">
   <div>
   <img class=" " alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/Group_1000005310_d8e97b7910.svg"  >
   <div class="font-bold text-xl text-gray-900 p-2">{{option.Medicals}}</div>
   <div class="  text-md  ">{{option.Offers}}</div>
   
  </div>
  <div>
   <img class=" " alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/Group_26536_843c9df066.svg"  > 
   <div class="font-bold text-xl text-gray-900 p-2">{{option.Coverage}}</div>
   <div class=" text-md  ">{{option.Secures}}</div>
  
  </div>
</div>
<!-- <div class="font-bold">{{ selectedDepartureReturnDates?.[0] | date: 'MM/dd/yyyy' }}</div> -TO- <div class="font-bold">{{ selectedDepartureReturnDates?.[1] | date: 'MM/dd/yyyy' }}</div> -->
</div>
 

    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1InsuranceBookingComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1CountryCheckboxComponent, N1DepartureReturnComponent, N1DropdownAirportComponent],
})
export class N1InsuranceBookingComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: insurancedetails = {
      name: '',
      Offered: '',
      img1: '',
      img2: '',
      license: '',
      img3: '',
      travel: '',
      policies: '',
      Destination : '',
      You: '',
      Popular: '',
      amount_1: '',
      Claims: '',
      support: '',
      Customer: '',
      Min: '',
      Medical: '',
        people: '',
      covered: '',
      Cover: '',
      Bringing: '',
      Instant: '',
      Health: '',
      What: '',
      Insurance: '',
      Quick: '',
        Digital: '',
      img5: '',
      Benefits: '',
      We: '',
      img6: '',
      Offers: '',
        Secures: '',
        Medicals: '',
      Coverage: '',
    };

     checkbox  :      countries [] = [
        {    
          country_name:"India",     
           img1:"https://tripmoneycmsimgak.mmtcdn.com/img/Thailand_e0981480d2.png?im=Resize=(80)",
           
        },
        {    
          country_name:"UAE",     
           img1:"https://tripmoneycmsimgak.mmtcdn.com/img/UAE_67de3d2155.png?im=Resize=(80)",
           
        },

        {    
          country_name:"china",     
           img1:"https://tripmoneycmsimgak.mmtcdn.com/img/Thailand_e0981480d2.png?im=Resize=(80)",
           
        },
        {    
          country_name:"USAK",     
           img1:"https://tripmoneycmsimgak.mmtcdn.com/img/USA_45e303dba3.png?im=Resize=(80)",
           
        },
        {    
          country_name:"Thailand",     
           img1:"https://tripmoneycmsimgak.mmtcdn.com/img/Thailand_e0981480d2.png?im=Resize=(80)",
           
        },
      ]

// depature
      selectedDepartureReturnDates: Date[] | null = null;

  onDatesChange(selectedDates: Date[]): void {
    this.selectedDepartureReturnDates = selectedDates;
  }


 seatsbooking: N1DropdownOptions[] = [

    {
      id: 1,
      name: '1',
      cityDetails: '',
    },
    {
      id: 2,
      name: '2',
      cityDetails: '',
    },
    {
      id: 3,
      name: '3',
      cityDetails: '',
    },
    {
      id: 3,
      name: '4',
      cityDetails: '',
    },
    {
      id: 3,
      name: '5',
      cityDetails: '',
    },

  ];

  seatNumbers = this.seatsbooking[1]



  selectage: N1DropdownOptions[] = [

    {
      id: 1,
      name: '0-10yrs',
      cityDetails: '',
    },
    {
      id: 2,
      name: '10-20yrs',
      cityDetails: '',
    },
    {
      id: 3,
      name: '20-30yrs',
      cityDetails: '',
    },
    {
      id: 3,
      name: '30-40yrs',
      cityDetails: '',
    },
    {
      id: 3,
      name: '40-50yrs',
      cityDetails: '',
    },

  ];

  age = this.selectage[1]


    ngOnInit() {
        console.log(this.option);
    }
}
