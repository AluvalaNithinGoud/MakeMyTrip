
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownAirportComponent, N1DropdownOptions } from '../n1-comps/n1-dropdown-airport';
import { N1RadioComponent } from '../../app/inputs/elements/n1-radio';
import { N1DepartureReturnComponent } from '../n1-comps/n1-departure-return';
  
         
 

export interface    icons{
  img:string,
  img1:string,
  img2:string,
  img3:string,
  img4:string,
  img5:string,
  img6:string,
  img7:string,
  img8:string,
  
  Flights: string,
  Hotels: string,
  Homestays: string,
  Buses: string,
  Trains: string,
  Packages: string,
  Cabs: string,
  Insurance: string,
  Curreny: string,
 
  
}






@Component({
  standalone: true,

  selector: 'n1-icons-tabs',
  template: `
        
        

        <div class=" flex justify-center rounded-lg">

<div class="   w-full p-3   ">

   
<div class="flex  p-2 rounded-lg w-5/6  bg-white  gap-9">
        <button 
          class=" text-center text-sm font-medium  transition duration-300"
          [ngClass]="activeTab === 'onward' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Flights')">
          <div class=" ">
          <img class=" w-16 h-11 " src={{option.img}} alt="image description">
          <div class="text-medium text-gray-900    ">{{option.Flights}}</div>
</div>
        </button>
        <button 
          class=" text-center text-sm font-medium   transition duration-300"
          [ngClass]="activeTab === 'return' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Hotels')">
          <div class=" ">
           <img class=" w-16 h-11 " src={{option.img1}} alt="image description">
           <div class="text-medium text-gray-900    ">{{option.Hotels}}</div>

</div>
        </button>
        <button 
          class="  text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'heloo' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Homestays')">
          <div class=" ">
           <img class=" w-16 h-11 " src={{option.img2}} alt="image description">
           <div class="text-medium text-gray-900    ">{{option.Homestays}}</div>
</div>
        </button>

        <button 
          class="   text-center text-sm font-medium  transition duration-300"
          [ngClass]="activeTab === 'onward' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Packages')">
          <div class=" ">
           <img class=" w-16 h-11 " src={{option.img3}} alt="image description">
           <div class="text-medium text-gray-900    ">{{option.Packages}}</div>

</div>
        </button>
        <button 
          class=" text-center text-sm font-medium   transition duration-300"
          [ngClass]="activeTab === 'return' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Trains')">
          <div class=" ">
           <img class=" w-16 h-11 " src={{option.img4}} alt="image description">
           <div class="text-medium text-gray-900    ">{{option.Trains}}</div>

</div>
        </button>
        <button 
          class="  text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'heloo' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Buses')">
          <div class=" ">
           <img class=" w-16 h-11 " src={{option.img5}} alt="image description">
           <div class="text-medium text-gray-900    ">{{option.Buses}}</div>

</div>
        </button>

        <button 
          class=" text-center text-sm font-medium  transition duration-300"
          [ngClass]="activeTab === 'onward' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Cabs')">
          <div class=" ">
           <img class=" w-16 h-11" src={{option.img6}} alt="image description">
           <div class="text-medium text-gray-900    ">{{option.Cabs}}</div>

</div>
        </button>
        <button 
          class="  text-center text-sm font-medium   transition duration-300"
          [ngClass]="activeTab === 'return' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Curreny')">
          <div class=" ">
           <img class=" w-16 h-11 " src={{option.img7}} alt="image description">
           <div class="text-medium text-gray-900    ">{{option.Curreny}}</div>

</div>
        </button>
        <button 
          class=" text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'heloo' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Insurance')">
          <div class=" ">
           <img class=" w-16 h-11 " src={{option.img8}} alt="image description">
           <div class="text-medium text-gray-900    ">{{option.Insurance}}</div>

</div>
        </button>
      </div>
      






      <div class="p-4  rounded-md mt-4">
      
        <div *ngIf="activeTab === 'Flights'">

        <div class="w-full bg-white p-4 rounded-lg   justify-center  " > 
   
  
  
<div class=" ">
<n1-radio [options]="flyOptions" [(value)]="selectedFlyOption" [name]="'flyOptions'"
  [label]="'Gender Selection'" class=" "></n1-radio>
</div>

<div class="w-5/6 relative cursor p-2    rounded-lg flex w-full bg-white ">

  <div class="w-1/2   rounded-l-lg  border">
    <n1-dropdown-airport point="From :" [options]="fromDropdownOptions" [selected]="selectedFrom"
     class=" font-bold text-gray-900 text-xl block w-full outline-0 cursor-pointer transition-all p-1  "></n1-dropdown-airport>
  </div>

 
  <div class="w-1/2   border">
    <n1-dropdown-airport point="To :" [options]="toDropdownOptions" [selected]="selectedTo" class="     
    font-bold text-gray-900 text-xl block w-full outline-0 cursor-pointer transition-all p-1  "></n1-dropdown-airport>
  </div>

  <div class=" w-1/3 relative border p-2    ">
    <n1-departure-return [(value)]="selectedDepartureReturnDates" (valueChange)="onDatesChange($event)">
    </n1-departure-return>
  </div>

  <div class=" w-1/4 border p-2    ">
    <n1-dropdown-airport point="Travellers :" [options]="seatsbooking" [selected]="seatNumbers" 
    class="p-1 font-bold text-gray-900 text-medium block w-full outline-0 cursor-pointer transition-all "></n1-dropdown-airport>
  </div>

  <div class="w-1/2 border p-2 rounded-r-lg    ">
    <n1-dropdown-airport point=" class :" [options]="classbooking" [selected]="classes" class="p-1 font-bold text-gray-900 text-medium block w-full outline-0 cursor-pointer transition-all   "></n1-dropdown-airport>
  </div>

  </div>

  <div class=" ">
    <n1-radio [options]="genderOptions" [(value)]="selectedGender" [name]="'gender'"
      [label]="'Gender Selection'" class=" "> </n1-radio>
  </div>

 
</div>



        </div>

        <div *ngIf="activeTab === 'Hotels'">
         
        <div class="w-full bg-white p-4 rounded-lg   justify-center  " > 
   
  
   
 <div class=" ">
 <n1-radio [options]="upto" [(value)]="selectedFlyOption" [name]="'upto'"
   [label]="'Gender Selection'" class=" "></n1-radio>
 </div>
 
 <div class="w-5/6  relative cursor p-2    rounded-lg flex w-full bg-white ">
 
   <div class="w-1/2   rounded-l-lg  border">
     <n1-dropdown-airport point="From :" [options]="HotelDropdownOptions" [selected]="selectedFrom"
      class=" font-bold text-gray-900 text-xl block w-full outline-0 cursor-pointer transition-all p-1  "></n1-dropdown-airport>
   </div>
 
  
  
 
   <div class=" w-1/3 relative border p-2    ">
     <n1-departure-return [(value)]="selectedDepartureReturnDates" (valueChange)="onDatesChange($event)">
     </n1-departure-return>
   </div>
 
   <div class=" w-1/4 border p-2    ">
     <n1-dropdown-airport point="Rooms :" [options]="Rooms" [selected]="seatNumbers" 
     class="p-1 font-bold text-gray-900 text-medium block w-full outline-0 cursor-pointer transition-all "></n1-dropdown-airport>
   </div>
 
   <div class="w-1/2 border p-2 rounded-r-lg    ">
     <n1-dropdown-airport point=" Guests :" [options]="Guests" [selected]="classes" class="p-1 font-bold text-gray-900 text-medium block w-full outline-0 cursor-pointer transition-all   "></n1-dropdown-airport>
   </div>
 
   </div>
 
   
 
 </div>
 



       </div>
      
        <div *ngIf="activeTab === 'Homestays'">
        
       </div> 

         <div *ngIf="activeTab === 'Packages'">

        </div>

          <div *ngIf="activeTab === 'Trains'">
 
            </div>

       <div *ngIf="activeTab === 'Buses'">

       </div> 

       <div *ngIf="activeTab === 'Cabs'">

        </div>

       <div *ngIf="activeTab === 'Curreny'">
 
           </div>

           <div *ngIf="activeTab === 'Insurance'">

            </div> 

        </div>
</div>


 
 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1IconsTabsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DropdownAirportComponent, N1RadioComponent, N1DepartureReturnComponent]
})
export class N1IconsTabsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:      icons = {
    img: '',
    img1:'',
    img2:'',
    img3:'',
    img4:'',
    img5:'',
    img6:'',
    img7:'',
    img8:'',
    Flights: '',
    Hotels: '',
    Homestays:'',
    Buses:'',
    Trains:'',
    Cabs:'',
    Packages: '',
    Curreny: '',
    Insurance:'',
     
   };
 fromDropdownOptions: N1DropdownOptions[] = [
    {
      id: 1,
      name: 'Hyderabad',
      cityDetails: 'HYD, Hyderabad Airport India',
    },
    {
      id: 2,
      name: 'Bangalore',
      cityDetails: 'Blr, Blr Airport India',
    },
    { id: 3, name: 'Mumbai', cityDetails: 'Mum,  Mumbai Airport India' },
    {
      id: 4,
      name: 'Chennai',
      cityDetails: 'Chennai, Chennai Airport India',
    },
  ];

  toDropdownOptions: N1DropdownOptions[] = [
    {
      id: 1,
      name: 'Hyderabad',
      cityDetails: 'HYD, Hyderabad Airport India',
    },
    {
      id: 2,
      name: 'Bangalore',
      cityDetails: 'Blr, Blr Airport India',
    },
    { id: 3, name: 'Mumbai', cityDetails: 'Mum,  Mumbai Airport India' },
    {
      id: 4,
      name: 'Chennai',
      cityDetails: 'Chennai, Chennai Airport India',
    },
  ];

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
  classbooking: N1DropdownOptions[] = [

    {
      id: 1,
      name: 'Economy',
      cityDetails: '',
    },
    {
      id: 2,
      name: 'Premium Economy',
      cityDetails: '',
    },
    {
      id: 3,
      name: ' Business',
      cityDetails: '',
    },
    {
      id: 3,
      name: 'First Class',
      cityDetails: '',
    },


  ];

  genderOptions = [
    'Regular',
    'Student',
    '  Senior Citizen',
    'Armed Forces',
    'Doctor and Nurses',
  ];

  flyOptions = [
    'One Way',
    'Round Trip',
    'Multi City',
    
  ];





   HotelDropdownOptions: N1DropdownOptions[] = [
    {
      id: 1,
      name: 'Hyderabad',
      cityDetails: 'HYD, Hyderabad Airport India',
    },
    {
      id: 2,
      name: 'Bangalore',
      cityDetails: 'Blr, Blr Airport India',
    },
    { id: 3, name: 'Mumbai', cityDetails: 'Mum,  Mumbai Airport India' },
    {
      id: 4,
      name: 'Chennai',
      cityDetails: 'Chennai, Chennai Airport India',
    },
  ];

 

  Rooms: N1DropdownOptions[] = [

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
  Guests: N1DropdownOptions[] = [

    {
      id: 1,
      name: ' 1',
      cityDetails: '',
    },
    {
      id: 2,
      name: ' 2',
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


  ];

  

   upto = [
    'Upto 4 Rooms',
    'Group Deals',
   
    
  ];




  selectedFlyOption: string = "";
  selectedFrom = this.fromDropdownOptions[1];
  selectedTo = this.toDropdownOptions[3];
  seatNumbers = this.seatsbooking[1]
  classes = this.classbooking[1]
  selectedGender = this.genderOptions[0]

  selectedDepartureReturnDates: Date[] | null = null;

  onDatesChange(selectedDates: Date[]): void {
    this.selectedDepartureReturnDates = selectedDates;
  }



   activeTab: string = 'Flights';

   setActiveTab(tab: string): void {
     this.activeTab = tab;
   }

   

  ngOnInit() {
    console.log(this.option);  
  }   
}
