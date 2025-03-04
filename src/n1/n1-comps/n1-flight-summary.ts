
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface   summaryoptions {
  name: string,
  departure: string,
   return:string,
   date:string ,
   date2:string,
 

}






@Component({
  standalone: true,

  selector: 'n1-flight-summary',
  template: `
       
         <div class="bg-white flex justify-center p-6 ">

         <div class=" border w-5/6 p-3 bg-white ">

         <div class="font-bold text-gray-900 text-lg block p-2 ">{{option.name}}</div>

 
              <div class="p-2 ">  <div>
             <div class="flex gap-2">
             <div class="font-bold  text-gray-700    "> {{option.departure}}</div>
             <div class="text-gray-500 "> {{option.date}}</div>
            </div>
            <div class="flex gap-2">
             <div class="font-bold  text-gray-700    "> {{option.return}}</div>
             <div class="text-gray-500 "> {{option.date2}}</div>
            </div>


             
            
         </div>
         </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1FlightSummaryComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class  N1FlightSummaryComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: summaryoptions = {
    name: '',
    departure: '',
    return:'',
    date: '',
    date2:'',
    
  };
  ngOnInit() {
    console.log(this.option);   
  }
}

