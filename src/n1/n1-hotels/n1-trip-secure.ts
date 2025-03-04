
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { filteroptions, N1PopularFiltersComponent } from "../n1-comps/n1-popular-filters";
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
 
 

export interface  secureoptions{
   name: string,
   desicription: string,
   enjoy: string,
   loss: string,
    medical: string,
    refund: string,
    personal:  string,
    price1: string,
    support:   string,
    price2: string,
    price3: string,
    price4:   string,
     per: string,
      yes: string,
     no: string,
     non: string,
}






@Component({
  standalone: true,

  selector: 'n1-trip-secure ',
  template: `
       
         <div class=" flex justify-center   p-5">

         <div class="     w-5/6  bg-white border p-3 ">
           
<div class="p-4  text-gray-900  rounded-md "style="background-color: rgb(204, 177, 203); ">
  {{option.desicription}}
</div>

<div class="p-3">
<div class="p-1 font-bold text-lg text-gray-900 block">
  {{option.name}}
  </div>
  <div class=" font-bold text-gray-900 block">
  {{option. enjoy}}
  </div>
</div>

<div class="p-3  rounded-md" style="background-color: rgb(176, 229, 236); ">
  <div class="flex justify-between">
<div class=" p-1 font-bold   text-gray-900 block">
  {{option.loss}}
  </div>
  <div class=" p-1     text-gray-900 block">
  {{option.price1}}
  </div>
</div>
<div class="flex justify-between">
<div class=" p-1 font-bold   text-gray-900 block">
  {{option.medical }}
  </div>
  <div class=" p-1    text-gray-900 block">
  {{option. support}}
  </div>
</div>
<div class="flex justify-between">
<div class=" p-1 font-bold   text-gray-900 block">
  {{option. refund }}
  </div>
  <div class=" p-1    text-gray-900 block">
  {{option.  price2}}
  </div>
</div>
<div class="flex justify-between">
<div class=" p-1 font-bold   text-gray-900 block">
  {{option.  personal }}
  </div>
  <div class=" p-1     text-gray-900 block">
  {{option.  price3}}
  </div>
</div>
</div>


<div class="p-4">
<div class="flex  items-center">
  <div class="font-bold text-lg text-gray-900 block">{{option.price4}}</div>
  <div> {{option.per}}</div>
</div>
 
  <div> {{option.non}}</div> 
  </div>


  <div class="flex gap-2 border items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>    
<div class="font-bold text-gray-900 ">{{option. yes}}</div>
</div>

<div class="flex gap-2 border items-center rounded-md ">
         <label class="block cursor-pointer rounded-md p-2  items-center gap-3">
    
         <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5  text-blue-600 border-gray-300 focus:ring-blue-500" />
 
</label>    
<div class="font-bold text-gray-900 ">{{option. no}}</div>
</div>
</div>
</div> 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1TripSecureComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1TripSecureComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   secureoptions = {
     name: '',
     desicription: '',
     enjoy: '',
       loss: '',
      medical: '',
      refund  :'',
      personal:'' ,
      price1:'',
    support:',' , 
    price2: '',
    price3:'',
    price4:'' ,
  per:'' ,
  non:'' ,
  yes:'' ,
   no:'' ,
  
 
     
   };
  

  ngOnInit() {
    console.log(this.option);  
  }   
}
