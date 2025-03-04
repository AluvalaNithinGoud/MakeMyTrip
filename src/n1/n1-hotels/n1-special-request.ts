
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { filteroptions, N1PopularFiltersComponent } from "../n1-comps/n1-popular-filters";
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
 
 

export interface  requestoptions{
   name: string,
   desicription: string,
   common: string,
   anyother: string,
   firstName: string,
  
 
}






@Component({
  standalone: true,

  selector: 'n1-special-request',
  template: `
       
         <div class=" flex justify-center   p-5">

         <div class="     w-5/6  bg-white border p-3 ">
         <div class=" p-3">
          <div class="font-bold text-gray-900 text-lg block ">{{option.name}}</div>
          <div class="   text-[#e53e3e]  text-sm">{{option.desicription}}</div>
         </div>
    


<div class="flex   gap-6">
<div class="flex   " *ngFor="let   filters of popular">
  <n1-popular-filters [option]="filters" class="  "  ></n1-popular-filters >
  
</div>
</div>
<div class="flex   gap-6">
<div class="flex   " *ngFor="let   filters of popular2">
  <n1-popular-filters [option]="filters" class="  "  ></n1-popular-filters >
</div>
</div> 
  
<div class="font-bold text-gray-900 text-lg block p-2 ">{{option.anyother}}</div>
 
  <n1-details-input [(value)]="option.firstName" [label]="' '" [placeholder]="' First&Middle name'"
    [name]="'firstName'" required class=" "></n1-details-input>

</div> 
</div>
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1SpecialRequestComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1PopularFiltersComponent, N1DetailsInputComponent]
})
export class N1SpecialRequestComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   requestoptions = {
     name: '',
     desicription: '',
      common: '',
      anyother: '',
     firstName: '',
   
     
   };
  

  ngOnInit() {
    console.log(this.option);  
  }  
       popular :    filteroptions [] = [
           {
             name:" ",
              nonstop:"Smoking room ",
              price:"  ",
           },
           {
             name:" ",
              nonstop:" Late check-in",
              price:"  ",
           },
           {
             name:" ",
              nonstop:"Early check-in",
              price:" ",
           },
          ]
           popular2 :    filteroptions [] = [
           {
             name:" ",
              nonstop:" Room on a high floor",
              price:" ",
           },
           {
             name:" ",
              nonstop:" Large bed",
              price:"  ",
           },
           {
             name:" ",
              nonstop:"Twin beds ",
              price:"  ",
           },
          ]
}
