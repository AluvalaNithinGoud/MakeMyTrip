
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DiscriptionComponent, overview } from '../n1-home/n1-discription';
import { N1SystemComponent, system_details } from './n1-system';
       
 

export interface      solution{
  // name:string,
  // combine: string,
  // img: string,
  // Seamlessly: string,
}






@Component({
  standalone: true,

  selector: 'n1-overview',
  template: `
        
 
 
<div class="  p-4  ">
  <div class="   " *ngFor="let  company  of    Powering">
    <n1-discription [option]="   company"></n1-discription>
  </div>
  </div>

 <div class="w-full  " *ngFor="let   digital   of    integration">
  <n1-system [option]="digital"></n1-system>
</div>
 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1OverviewComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,N1DiscriptionComponent,N1SystemComponent ]
})
export class N1OverviewComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:      solution = {
    // name: '',
    // combine: '',
    // img: '',
    // Seamlessly: '',
   };

   integration  :     system_details [] = [
       {
         name:"  ",
         Seamlessly :"Realize a Fast-paced Digital Transformation for Your Enterprise with Our Holistic Consulting Services for Google Cloud Solutions",
         combine:"We combine technology with innovation, creativity, and strategy to solve complex business problems and help you go beyond regular transactions and create memorable experiences.",
         img :"https://www.kapiltech.com/static/media/Sample3rd_img.7ef76028ed8e6b0e955e.png",     
        
       },
     ]
    

   
     Powering  : overview [] = [
       {
         Powering:"A full-featured call-center solution",
         In:"Kapil Technologies, powered by Customer Advance, powers the full range of contact center processes, including customer contacts, call center operations and call routing and queuing, all to provide robust business office outsourcing for outstanding customer care.Kapil Technologies, powered by Customer Advance, powers the full range of contact center processes, including customer contacts, call center operations and call routing and queuing, all to provide robust business office outsourcing for outstanding customer care.",
          img :"https://www.kapiltech.com/static/media/Sameple2nd_img.9888908ffd67911cb63b.png",     
        },
      ]
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
