
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 import { Full_software, N1CollaborationComponent } from './n1-collaboration';
  
 

export interface Collaboration_Scenarios  {
  name: string,  
  work: string,
  
  
}






@Component({
  standalone: true,

  selector: 'n1-scenarios',
  template: `
        
    <div class="p-8 "  >
<div class="   bg-white p-4 w-5/6" >
 
 
   <div  class="   text-xl text-gray-900 p-2 font-semibold"> {{option.name}}</div>
   <div  class="  text-medium text-gray-900  "> {{option.work}}</div>
<br>
<br>
   <div  class=" items-center flex gap-7 " > 
   <div class="  " *ngFor="let      Your  of   out ">
  <n1-collaborations  [option]=" Your  "></n1-collaborations >
</div>
</div>
 
   </div>
</div>
 
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1ScenariosComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  N1CollaborationComponent]
})
export class N1ScenariosComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Collaboration_Scenarios  = {
    name: '',
    work:'',
     
   };

   out    :    Full_software[] = [
    {    
      name:"Full software development outsourcing ",  
      Software:"We assemble fully managed development teams to implement software projects end to end. Our team takes 100% responsibility for project planning, collaboration, and risk management. You get top-quality software promptly and at a 1.5–2.5x lower cost.",
      img:'https://www.scnsoft.com/software-development-services/software-development/cro/outsourcing.svg',   
    },
    {    
      name:"Dedicated teams ",  
      Software:"We compose dedicated teams with all necessary competencies to take over particular tasks (e.g., coding, QA, integration). With a high-performing team focused solely on your project, you can efficiently address skill gaps and speed up development.",
      img:'https://www.scnsoft.com/software-development-services/software-development/service_team-augmentation.svg',   
    },
    {    
      name:"Staff augmentation",  
      Software:"We ramp up your team with our best talents (from 0.5 to 150+ FTEs): back-end, front-end, and mobile developers, architects, testing engineers, DevOps engineers, data scientists, and more. You get quick and budget-friendly access to the needed skills.",
      img:'https://www.scnsoft.com/software-development-services/python-devs/service-options-python-devs_staff-augmentation.svg',   
    },
  ]
  ngOnInit() {
    console.log(this.option);  
  }   
}
