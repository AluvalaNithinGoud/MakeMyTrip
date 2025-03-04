
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1OfficeLocationComponent, offices_country } from "./n1-office-location";
 
         
 

export interface      our_offices{
  img:string,
  Our: string,
  America: string,
  Pacific: string,
  Middle: string,
  img1: string,
  img2: string,
  
}






@Component({
  standalone: true,

  selector: 'n1-our_office',
  template: `
        
        

        <div class="bg-gray-50 flex justify-center p-6 ">

<div class="   w-full p-3   ">

<div  class=" p-2 text-gray-900 text-2xl  font-bold ">{{option.Our}}</div>
  <br>
  <br>

<div class="flex border-b  gap-9">
        <button 
          class=" p-2 py-2 text-center text-sm font-medium  transition duration-300"
          [ngClass]="activeTab === 'onward' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('onward')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.America}}</div>
          <img class="  " src={{option.img}} alt="image description">
</div>
        </button>
        <button 
          class="p-2 py-2 text-center text-sm font-medium   transition duration-300"
          [ngClass]="activeTab === 'return' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('return')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.Pacific}}</div>
          <img class="  " src={{option.img1}} alt="image description">
</div>
        </button>
        <button 
          class=" p-2 py-2 text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'heloo' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('heloo')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.Middle}}</div>
          <img class="  " src={{option.img2}} alt="image description">
</div>
        </button>
      </div>
      
      <div class="p-4  rounded-md mt-4">
      
        <div *ngIf="activeTab === 'onward'">


        <div class="flex gap-8">
        <div class="   " *ngFor="let countiress  of location">
  <n1-office-location [option]="countiress"></n1-office-location>
</div>
</div>
        </div>




        <div *ngIf="activeTab === 'return'">
        <div class="flex grid grid-cols-3 gap-4">
        <div class="   " *ngFor="let countiress  of Asia">
  <n1-office-location [option]="countiress"></n1-office-location>
</div>
</div>
        </div>


        <div *ngIf="activeTab === 'heloo'">
        <div class="flex gap-8">
        <div class="   " *ngFor="let countiress  of east">
  <n1-office-location [option]="countiress"></n1-office-location>
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
      useExisting: forwardRef(() =>  N1OurOfficeComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1OfficeLocationComponent]
})
export class N1OurOfficeComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:      our_offices = {
    img: '',
    Our: '',
    America: '',
    Pacific:'',
    Middle:'',
    img1:'',
    img2:'',
    
   };

   activeTab: string = 'onward';

   setActiveTab(tab: string): void {
     this.activeTab = tab;
   }

   location :   offices_country[] = [
       {    
          United:"United States",
         Technologies:"KCS Technologies Inc",
         Capitol:'1603 Capitol Ave. Suite #310,Cheyenne,',
         Wyoming:'Wyoming - 820010',
         email:'info@kcs-tech.com',
         
       },
       {    
        United:"USA",
       Technologies:"Relevant Solution",
       Capitol:'Suite #310, 1603 Capitol Ave, Cheyenne,',
       Wyoming:'Wyoming - 820010',
       email:'info@kcs-tech.com',
       
     },
     ]

     Asia :   offices_country[] = [
      {    
         United:"India",
        Technologies:"Kapil technologies Pvt Ltd",
        Capitol:'Kapil Kavuri Hub, Nanakramguda, Gachibowli,',
        Wyoming:'Hyderabad',
        email:'info@kapiltech.com',
        
      },
      {    
       United:"Thailand",
      Technologies:"Kapil Technologies Pte Ltd",
      Capitol:'#13-01, 105 Cecil Street,',
      Wyoming:'The Octagon - 069534',
      email:'info@kapiltech.com',
      
    },
    {    
      United:"Sri Lanka",
     Technologies:"Kapil Technologies Pte Ltd",
     Capitol:'#13-01, 105 Cecil Street,',
     Wyoming:'The Octagon - 069534',
     email:'info@kapiltech.com',
     
   },
   {    
    United:"Fiji",
   Technologies:"Kapil Technologies Pte Ltd",
   Capitol:'#13-01, 105 Cecil Street,',
   Wyoming:'The Octagon - 069534',
   email:'info@kapiltech.com',
   
 },
 {    
  United:"Indonesia",
 Technologies:"Kapil Technologies Pte Ltd",
 Capitol:'#13-01, 105 Cecil Street,',
 Wyoming:'The Octagon - 069534',
 email:'info@kapiltech.com',
 
},
{    
  United:"Combodia",
 Technologies:"Kapil Technologies Pte Ltd",
 Capitol:'#13-01, 105 Cecil Street,',
 Wyoming:'The Octagon - 069534',
 email:'info@kapiltech.com',
 
},
{    
  United:"Combodia",
 Technologies:"Kapil Technologies Pte Ltd",
 Capitol:'#13-01, 105 Cecil Street,',
 Wyoming:'The Octagon - 069534',
 email:'info@kapiltech.com',
 
},
    ]
       

     east :   offices_country[] = [
      {    
         United:"Egypt",
        Technologies:"c/o Info Blendtec",
        Capitol:'OP90 Business Complex, Office 339, Southern',
        Wyoming:'Teseen St., Zone 3',
        email:'info@kcs-tech.com',
        
      },
    ]

  ngOnInit() {
    console.log(this.option);  
  }   
}
