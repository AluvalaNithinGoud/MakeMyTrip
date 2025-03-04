
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Full_software, N1CollaborationComponent } from "../../n1-software/n1-development/n1-collaboration";
    
 

export interface Delivery  {
  name: string,  
  work: string,
  
  
}






@Component({
  standalone: true,

  selector: 'n1-ensure-successful ',
  template: `
        
    <div class="p-8 "  >
<div class="   bg-white p-4 " >
 
 
   <div  class="   text-xl text-gray-900 p-2 font-semibold"> {{option.name}}</div>
   <div  class="  text-medium text-gray-900  "> {{option.work}}</div>
<br>
<br>
   <div class="items-center flex gap-7 grid grid-cols-2"> 
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
      useExisting: forwardRef(() => N1EnsureSuccessfulComponent),
      multi: true,
    },
  ], 
  imports: [FormsModule, CommonModule, N1CollaborationComponent]
})
export class N1EnsureSuccessfulComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Delivery  = {
    name: '',
    work:'',
     
   };

   out    :    Full_software[] = [
    {    
      name:"Collaboration with your business stakeholders and tech teams",  
      Software:"Check our collaboration model, crafted to support self-managed development, address the needs of your various business stakeholders, and extract the necessary knowledge from your tech teams.",
      img:'https://www.scnsoft.com/icons-for-routing-visitors/with-background/collaboration.svg',   
    },
    {    
      name:"Integrations with legacy applications ",  
      Software:"Before integrating new software with legacy systems, we carefully assess their interdependencies and technical debt. We can refactor or rearchitect critical areas to minimize business disruptions, reduce integration costs, and enable future scalability.",
      img:'https://www.scnsoft.com/icons-for-routing-visitors/with-background/integrations.svg',   
    },
    {    
      name:"Staff augmentation",  
      Software:"We ramp up your team with our best talents (from 0.5 to 150+ FTEs): back-end, front-end, and mobile developers, architects, testing engineers, DevOps engineers, data scientists, and more. You get quick and budget-friendly access to the needed skills.",
      img:'https://www.scnsoft.com/software-development-services/python-devs/service-options-python-devs_staff-augmentation.svg',   
    },
    {    
      name:"Staff augmentation",  
      Software:"We ramp up your team with our best talents (from 0.5 to 150+ FTEs): back-end, front-end, and mobile developers, architects, testing engineers, DevOps engineers, data scientists, and more. You get quick and budget-friendly access to the needed skills.",
      img:'https://www.scnsoft.com/software-development-services/python-devs/service-options-python-devs_staff-augmentation.svg',   
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
