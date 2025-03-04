
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
    
 

export interface   case_options{
  img:string,
  name : string,
  An : string,
  Learn : string,
   Case: string,
   
   
}






@Component({
  standalone: true,

  selector: 'n1-case-study',
  template: `
           <!-- <div class="  font-bold text-3xl text-gray-900  block  -mt-8">{{option.Case}}</div>  -->
           <br>
         <div class="  transition duration-150 ease-in-out  ">
         <div class="    bg-white border  rounded-lg  ">
        

         <div class=" ">
                                <img
                                    class=" w-full  rounded-lg"
                                    src="{{ option.img }}"
                                    alt=""
                                />
                            </div>

                            <div class="justify-center">               
  <div class="p-4 gap-4">           
       <div class="  font-bold text-lg text-gray-900  block ">{{option.name}}</div>  
       <br>                   
       <div class=" p-  text-gray-900  block ">{{option.An}}</div>  
</div>
<br>
<div class=" p-2 text-lg text-gray-900  block ">{{option.Learn}}</div>  
</div>
</div>
</div>
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1CaseStudyComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1CaseStudyComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   case_options = {
    img: '',
    name : '',
    An : '',
    Learn  : '',
    Case: '',
    
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
