
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../../n1/n1-comps/n1-details-input";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../../n1/n1-comps/n1-dropdown-airport";
import { N1PayNowComponent, paynowoptions } from "../../n1/n1-hotels/n1-pay-now";
import { connect, N1ConnectWithUsComponent } from "./n1-connect-with-us";
         
 

export interface      contact_us{
  img:string,
  Contact: string,
  Tell: string,
  company: string,
  Name: string,
  email: string,
  number: string,
  Industry: string,
   tell:string,
  // combine: string,
  // img: string,
  // Seamlessly: string,
}






@Component({
  standalone: true,

  selector: 'n1-contact-us',
  template: `
        
        <img class=" w-full h-80" src={{option.img}} alt="image description">
        <div class="flex  gap-4">

        <div class="  ">

<div class="  shadow   p-3 bg-white ">

<div  class=" p-2 text-gray-900 text-lg  font-bold ">{{option.Contact}}</div>
<div  class="   text-gray-900  ">{{option.Tell}}</div>

 
<br>
<div class="flex justify-between items-center gap-3">
  <n1-details-input [(value)]="option.Name" [label]="' '" [placeholder]="'FULL NAME'"
    [name]="'firstName'" required class="w-full"></n1-details-input>

  <n1-details-input [(value)]="option.company" [label]="' '" [placeholder]="'Company Name'"
    [name]="'lastName'" required [type]="'text'" class="w-full"></n1-details-input>
    </div>
    <br>
    <div class="flex justify-between items-center gap-3">
    <n1-details-input [(value)]="option.email" [label]="' '" [placeholder]="'Enter your email'" [name]="'email'"
    [pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'" class="w-full"  ></n1-details-input>

  <n1-details-input [(value)]="option.company" [label]="' '" [placeholder]="'Job Title'"
    [name]="'lastName'" required [type]="'text'" class="w-full"></n1-details-input>
    </div>
    <br>

    <div class="flex justify-between items-center gap-3">
    <n1-dropdown-airport  [label]="' Title'" [options]="nationality"   
    class="  w-full px-2 py-1  text-sm   rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>


    <div class=" flex items-center w-full gap-2">
    <div class=" ">
<n1-dropdown-airport  [label]="'Country code'" [options]=" code"   
class=" w-24 px-1 py-1 text-sm  mt-2 rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
</div>
<div class=" w-full">
<n1-details-input [(value)]="option.number" [label]="' '" [placeholder]="' Mobile No '"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield   "></n1-details-input>
</div> 
    </div>
    </div> 
    <br>
    <div class="flex justify-between items-center gap-3">
  <n1-details-input [(value)]="option.Industry" [label]="' '" [placeholder]="'Niche Industry'"
    [name]="'firstName'" required class="w-full"></n1-details-input>

    <n1-dropdown-airport  [label]="' Title'" [options]="Hear"   
    class="  w-full px-2 py-1  text-sm mt-2  rounded-lg  text-gray-900 block border outline-0   cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"></n1-dropdown-airport>
    </div>
    <br>
<div >
    <n1-details-input [(value)]="option.tell" [label]="' '" [placeholder]="'Please tell us how can we help you'"
    [name]="'firstName'" required class="w-full"></n1-details-input>
</div>
<br>
 
<div class="w-full   " *ngFor="let   pay  of  paynow">
  <n1-pay-now [option]="   pay" ></n1-pay-now >
</div>
</div>
</div>

 <div class="w-1/2 ">
<div class="   " *ngFor="let  our  of With_us">
  <n1-connect-with-us [option]="our"></n1-connect-with-us>
</div>
</div>


 </div>
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ContactUsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent, N1DropdownAirportComponent, N1PayNowComponent, N1ConnectWithUsComponent]
})
export class N1ContactUsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:      contact_us = {
    img: '',
    Contact: '',
    Tell: '',
    Name:'',
    company:'',
    email:'',
    number:'',
    Industry: '',
     tell: '',
    
   };
With_us :   connect[] = [
    {    
       Connect:"Connect with Us",
      To:"To ensure we meet your needs effectively, we value any specific details you can share about your unique requirements or challenges.",
      no1:'+1 6099345788',
      no2:'+91 8889992186',
      email:'info@kcs-tech.com',
      address:"Kapil Kavuri Hub, Nanakramguda, Gachibowli, Hyderabad",
      We:"We typically respond within one business day. Your satisfaction is our top priority.",
       
    },
    
  ]
   paynow :   paynowoptions [] = [
         {
            discription:"By submitting this form, you acknowledge that Kapil Technologies may use your personal information for marketing communications as outlined in its privacy policy.*",
            user:" ",
             and:" ",
             cancellation :  " ",
              button :  " submit",
         },
       ]

     nationality: N1DropdownOptions[] = [
      
        {
        id: 1,
        name: ' select country   ',
        cityDetails: '',
      },
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
          selectedcode= this. code[0]
          
           Hear: N1DropdownOptions[] = [
            {
              id: 1,
              name: 'How did u hear about Us',
              cityDetails: '',
            },
            {
              id: 2,
              name: ' Media Aritcle ',
              cityDetails: '',
            },
            {
              id: 3,
              name: ' partner connect',
              cityDetails: '',
            },
            {
              id: 3,
              name: ' Social Media Post',
              cityDetails: '',
            },
          ]
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
