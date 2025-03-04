
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
    
 

export interface   overview{
  img:string,
  Powering : string,
  In : string,
  
  
}






@Component({
  standalone: true,

  selector: 'n1-discription',
  template: `
        
         <div class="  p-4 flex justify-center">
         <div class="   w-5/6  p-4 ">
        
         <div class="flex  gap-5 items-center">
         <div class="w-full   ">
                                <img
                                    class=" w-full  "
                                    src=  {{option.img}} 
                                    alt=""
                                />
                            </div>
 
                            <div class=" p-3 ">
                            <div class="  font-bold text-2xl text-gray-900  block ">{{option.Powering}}</div>
                            <br>
                            <div class="   text-gray-900  block ">{{option. In}}</div>
                            </div> 
                            
                            </div>

                            
</div>
</div>
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1DiscriptionComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1DiscriptionComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   overview = {
    img: '',
    Powering : '',
    In : '',
    
 
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
