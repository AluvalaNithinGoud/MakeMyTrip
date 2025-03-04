
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { estimations, N1ApproximateCostComponent } from './n1-approximate-cost';
   
 

export interface Project_Delivery  {
  name: string,  
  work: string,
  Here: string,
   
   }






@Component({
  standalone: true,

  selector: ' n1-successful-project ',
  template: `
        
    <div class="p-8 justify-center"  >
<div class="   bg-white p-4 " >
 
 
   <div  class="   text-xl text-gray-900 p-2 font-semibold"> {{option.name}}</div>
   <div  class="  text-medium text-gray-900  "> {{option.work}}</div>
   <br>
   <div  class="  text-medium text-gray-900  "> {{option.Here}}</div>

<br>
<br>
   <div  class=" items-center flex gap-7  grid grid-cols-2 " > 
   <div class="  " *ngFor="let      Development   of  Services ">
  <n1-approximate-cost  [option]=" Development   "></n1-approximate-cost >
</div>
</div>
 

 

</div>
</div>

  
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1SuccessfulProjectComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1ApproximateCostComponent  ]
})
export class N1SuccessfulProjectComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Project_Delivery  = {
    name: '',
    work:'',
    Here:'',
    
   };

    
Services     :    estimations [] = [
    {    
      name:"Quality controls",  
      Software:"Check the controls behind our ISO 9001-certified management system and explore software quality and project health KPIs we use. We also describe quality controls specific to each SDLC stage.",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/qa.svg',   
    },
    {    
      name:"Scoping",  
      Software:"Discover our requirements engineering, feasibility assessment, and scope mapping practices. The page also explains our approach to Agile scope change management and scope creep control.",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/scope.svg',   
    },
    {    
      name:"Resource allocation",  
      Software:"Explore our approach to composing an optimal development team and understand the difference in resource assignment processes for full outsourcing and team augmentation models.",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/role-based.svg',   
    },
    {    
      name:"Cost estimation",  
      Software:"Learn the factors ScienceSoft’s teams consider to estimate costs and check our sample top-down and bottom-up estimates. The page also outlines our cost optimization best practices.",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/cost.svg',   
    },
    {    
      name:"Risk management",  
      Software:"Visit the page to understand major software development risk factors and explore our risk control and mitigation activities across various SDLC stages.",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/risk-management.svg',   
    },
    {    
      name:"Change management",  
      Software:"Explore ScienceSoft’s change request management process from submission to implementation and learn our practices to effectively handle changes.",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/options.svg',   
    },
    {    
      name:"Documentation",  
      Software:"Check our software documentation best practices and see examples of documents we deliver across various development stages.",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/documents.svg',   
    },
    {    
      name:"Reporting",  
      Software:"Explore metrics we use to evaluate cooperation efficiency, our progress reporting tools, and sample project reports..",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/report.svg',   
    },
    {    
      name:"Post-launch software warranty",  
      Software:"Check what is usually covered and what is not covered by our after-launch software warranty and learn its typical period.",
      img:'https://www.scnsoft.com/icons-linear-gradient/yellow/automation.svg',   
    },
    
 ]

  ngOnInit() {
    console.log(this.option);  
  }   
}
