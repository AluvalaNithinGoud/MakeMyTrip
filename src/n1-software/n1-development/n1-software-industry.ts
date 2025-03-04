
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Industry, N1SpecificProcessesComponent } from "./n1-specific-processes";
 
 

export interface  challenges {
  name: string,  
  keep: string,
  
  
}






@Component({
  standalone: true,

  selector: 'n1-software-industry',
  template: `
        
    <div class="p-8 "  >
<div class="   bg-white p-4"   >
 
 
   <div  class="   text-xl text-gray-900 p-2 font-semibold"> {{option.name}}</div>
   <div  class="  text-medium text-gray-900  "> {{option.keep}}</div>
<br>
<br>
   <div  class=" items-center flex grid grid-cols-4 gap-8  " > 
<div class="  " *ngFor="let    Specific       of  Support">
  <n1-specific-processes [option]="Specific  "></n1-specific-processes>
</div>
</div>
   </div>
</div>
 
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1SoftwareIndustryComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1SpecificProcessesComponent]
})
export class N1SoftwareIndustryComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: challenges = {
    name: '',
    keep:'',
     
   };

    Support   :    Industry[] = [
      {    
        name:"Healthcare",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/healthcare-1.svg",     
      },
      {    
        name:"Banking",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/bank.svg",     
      },
      {    
        name:"Insurance",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/insurance-yellow.svg",     
      },
      {    
        name:"Lending",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/loan-red.svg",     
      },
      {    
        name:"Investment",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/investment-blue.svg",     
      },
      {    
        name:"Retail",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/retail-red.svg",     
      },
      {    
        name:"Manufacturing",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/manufacturing-green.svg",     
      },
      {    
        name:"Proffessional services",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/professional-services-yellow.svg",     
      },
      {    
        name:"Oil and Gas",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/oil-and-gas-red.svg",     
      },
      {    
        name:"Telecoms",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/telecom-yellow.svg",     
      },
      {    
        name:"Logistics and Transportaion",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/transportation.svg",     
      },
      {    
        name:"Engineering ",  
         img:"https://www.scnsoft.com/icons-tritone/with-space/construction-green.svg",     
      },
      
    ]
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
