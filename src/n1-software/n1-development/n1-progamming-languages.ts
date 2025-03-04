
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface    programming {
  
   img: string,
   

}






@Component({
  standalone: true,

  selector: 'n1-progamming-languages',
  template: `
        
  
 
   
<div class="  p-2 border-r"> <img alt=" " class=" w-14 h-13" src={{option.img}}></div>
 
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1ProgrammingLanguagesComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1ProgrammingLanguagesComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: programming = {
   
     img:'',
    
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
