
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface  contents {
   name: string,
  Why: string,
  Service: string,
  Projects: string,
  Software: string,
  faq: string,
  Development: string,
  Tech: string,
  // Service: string,
  
}






@Component({
  standalone: true,

  selector: 'n1-table-of-content ',
  template: `
    

   
<div class="  "    >
<div  class=" text-xl text-gray-900 p-2 font-semibold"> {{option.name}}</div>
<br>
<div class="border-l p-2">
<div>{{option.Why}}</div>
<br>
<div>{{option.Service}}</div>
<br>
<div>{{option.Projects}}</div>
<br>
<div>{{option.Software}}</div>
<br>
<div>{{option.faq}}</div>
<br>
<div>{{option.Development}}</div>
<br>
<div>{{option.Tech}}</div>
<br>
</div>

</div>

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1TableOfContentComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1TableOfContentComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: contents = {
    name: '',
    Why: '',
    Service:'',
    Projects: '',
    Software: '',
    faq:'',
    Development: '',
    Tech: '',
    // Service:'',
     
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
