
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
       
 

export interface  Technology_details{
  Digital:string,
   
}






@Component({
  standalone: true,

  selector: 'n1-technologies',
  template: `
        
        <div class="  flex justify-center border w-20 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700  py-1 px-1 rounded-xl text-gray-900  block ">
 
                         
                     
                        {{ option.Digital }}
               
         </div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1TechnologiesComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1TechnologiesComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:  Technology_details  = {
    Digital: '',
   
   };
    
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
