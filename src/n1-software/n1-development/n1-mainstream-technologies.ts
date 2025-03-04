
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Advanced, N1BusinessTasksComponent } from "./n1-business-tasks";
  
 

export interface  We_work  {
  name: string,  
  work: string,
  
  
}






@Component({
  standalone: true,

  selector: 'n1-mainstream-technologies',
  template: `
        
    <div class="p-8 "  >
<div class="   bg-white p-4"   >
 
 
   <div  class="   text-xl text-gray-900 p-2 font-semibold"> {{option.name}}</div>
   <div  class="  text-medium text-gray-900  "> {{option.work}}</div>
<br>
<br>
   <div  class=" items-center flex grid grid-cols-3 gap-8  " > 
   <div class="  " *ngFor="let     for        of  for_Advanced">
  <n1-business-tasks [option]="for   "></n1-business-tasks>
</div>
</div>
 
   </div>
</div>
 
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1MainstreamTechnologiesComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1BusinessTasksComponent]
})
export class N1MainstreamTechnologiesComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: We_work  = {
    name: '',
    work:'',
     
   };

    for_Advanced    :    Advanced[] = [
      {    
        name:"Artificial intelligence ",  
        Software:"Software capable of drawing insights and triggering actions based on historical and real-time data processing.",
             
      },
      {    
        name:"Data science ",  
        Software:"Software that can find sophisticated patterns in data and continuously learn to deliver more accurate results.",     
      },
      {    
        name:"Big data",  
        Software:"Scalable software that aggregates and processes huge volumes of data with high velocity.",     
      },
      {    
        name:"Computer vision ",  
        Software:"Software to recognize patterns and classify objects in digital images and videos.",     
      },
      {    
        name:"Blockchain",  
        Software:"Software with decentralized and highly secure data storage enabling direct peer-to-peer transactions.",     
      },
      {    
        name:"Internet of Things",  
        Software:"Software that allows for fast processing and mining of data captured by physical objects.",     
      },
      {    
        name:"Augmented reality",  
        Software:"Software capable of laying virtual objects over real surroundings.",     
      },
      {    
        name:"Virtual reality ",  
        Software:"Software that creates fictional environment with 3D objects and realistic acoustics.",     
      },
      
      
    ]
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
