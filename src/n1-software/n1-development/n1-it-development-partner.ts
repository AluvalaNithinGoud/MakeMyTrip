
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface  It_Partners{
   name: string,
  members: string,
  people: string,
  img1: string,
  img2: string,
    img3: string,
  years: string,
  projects: string,
    in: string,
  software: string,
  successfully: string,
   offices: string,
   // email: string,
}






@Component({
  standalone: true,

  selector: 'n1-it-development-partner',
  template: `
    <br>
    <br>
    <div class="text-[#4fd1c5] p-2 text-2xl   "> {{option.name}}</div>
    <br>
<div class="flex gap-3">

    <div class=" grid grid col-3 row-3 gap-3 ">
    <div class=" flex gap-3 ">
    <div class="p-5   w-1/6 " style="background-color: rgb(247, 233, 217);">
<div class="text-gray-900 text-xl flex justify-center   "> {{option.members}}</div>
<div class="text-gray-900 text-lg flex justify-center "> {{option.people}}</div>
</div>

<div class="p-5   w-1/6 " style="background-color: rgb(247, 233, 217);">
<div class="text-gray-900 text-xl flex justify-center   "> {{option.members}}</div>
<div class="text-gray-900 text-lg flex justify-center "> {{option.people}}</div>
</div>
</div>

<div class=" flex gap-3 ">
    <div class="p-5   w-1/6 " style="background-color: rgb(247, 233, 217);">
<div class="text-gray-900 text-xl flex justify-center   "> {{option.members}}</div>
<div class="text-gray-900 text-lg flex justify-center "> {{option.people}}</div>
</div>

<div class="p-5   w-1/6 " style="background-color: rgb(247, 233, 217);">
<div class="text-gray-900 text-xl flex justify-center   "> {{option.members}}</div>
<div class="text-gray-900 text-lg flex justify-center "> {{option.people}}</div>
</div>
 
</div>
<div class=" flex gap-3 ">

<div class="  w-1/6"  >
<div><img alt="" class="flex justify-center   " src={{option.img1}}></div>
 </div>

 <div class="  w-1/6"  >
<div><img alt="" class="flex justify-center   " src={{option.img2}}></div>
 </div>
 
 </div>
  
</div>
  
<div>
  <!-- <img alt="" class="  " src={{option.img3}}> -->
</div>

</div>

<br>
<br>
<div class=" flex justify-center p-4 items-center gap-4  ">
<div class=" border-r-2 p-3">
         <div  class=" p-2 text-[#243c5a] font-semibold text-3xl    ">{{option.years}}</div>
         <div  class="  text-lg   ">{{option.software}}</div>
</div>

         <div class="p-3 border-r-2">
         <div  class=" p-2 text-[#243c5a] font-semibold text-3xl      ">{{option.projects}}</div>
         <div  class="  text-lg   ">{{option.successfully}}</div>
         </div>

         <div class="p-3 border-r-2"> 
         <div  class=" p-2 text-[#243c5a] font-semibold text-3xl   ">{{option.in}}</div>
         <div  class=" text-lg   ">{{option.offices}}</div>
         </div>
          </div>
 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ItDevelopmentPartnerComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1ItDevelopmentPartnerComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: It_Partners = {
     name: '',
    members: '',
    people:'',
    img1:'',
    img2:'',
    img3:'',
    years:'',
    projects:'',
     in:'',
    software:'',
    successfully:'',
        offices:'',
    // email:'',

   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
