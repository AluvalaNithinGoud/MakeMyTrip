
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';
import { N1JourneyTimeComponent } from "./n1-journey-time";
import { N1CompanyLogo } from "./n1-company-logo";
import { N1TimingsComponent } from "./n1-timings";

export interface  cancellationoptions {
  name: string,
  logo: string,
  destination:string,
  penalty:string,
  penalty_1:string,
  penalty_2:string,
  penalty_3:string,
  cancel_ist:string,
  now:string,
  canceldate1: string,
  canceltime1: string,
  canceldate2: string,
  canceltime2: string,
  canceldate3: string,
  canceltime3: string,
}
 

 



@Component({
  standalone: true,

  selector: 'n1-cancellation',
  template: `
     
     <div class="bg-white flex justify-center   ">
     <div class=" border w-5/6    " style="background-color:rgb(243, 247, 248);">
      <div class="font-bold text-gray-900 text-lg block p-3 -mt-2">  {{option.name}}</div>
     

      <div class="flex p-3">
        <div class="">
        <n1-company-logo [label]="" [logo]="option.logo"></n1-company-logo>
</div>
        <div class="font-bold text-gray-600 text-lg block  "> 
          {{option.destination}}</div>
      </div>
      <div class="flex justify-between p-4">
        <div class="">
        {{option.penalty}}
        </div>
        <div class="font-bold text-gray-900 text-lg">
        {{option.penalty_1}}
        </div>
        <div  class="font-bold text-gray-900 text-lg">
        {{option.penalty_2}}
        </div>
        <div class="font-bold text-gray-900 text-lg">
        {{option.penalty_3}}
        </div>
        
        
        
      </div>
     <div class="flex justify-between p-2  ">
      {{option.cancel_ist}}
      {{option.now}}

      <div class="flex-wrap ml-5  ">
        <div class="font-bold text-gray-600">
      {{option.canceldate1}}
</div>
      <div  class="text-sm">
      {{option.canceltime1}}
</div>
</div>

<div class="flex-wrap ml-5 ">
<div class="font-bold text-gray-600">
      {{option.canceldate2}}
</div>
      <div  class="text-sm">
      {{option.canceltime2}}
</div>
      </div>

      <div class="flex-wrap ml-5">
      <div class="font-bold text-gray-600">
      {{option.canceldate3}}
</div>
      <div class="text-sm">
      {{option.canceltime3}}
</div>
      </div>

     </div>
</div>
  </div>
    
  
      
     
         

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1CancellationComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1JourneyTimeComponent, N1CompanyLogo, N1TimingsComponent]
})
export class N1CancellationComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: cancellationoptions = { 
    name: '', 
    logo:'', 
    destination:'',
     penalty:'',
      penalty_1:'',
      penalty_2:'',
      penalty_3:'',
      cancel_ist: '',
      now: '',
      canceldate1:  '',
      canceltime1:  '',
      canceldate2:  '',
      canceltime2:  '',
      canceldate3:  '',
      canceltime3:  '',
    };
  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
}
