
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface      offices_country{
   United: string,
  Technologies: string,
  Capitol: string,
  Wyoming: string,
  email: string,
   
}






@Component({
  standalone: true,

  selector: 'n1-office-location',
  template: `
        
 
      
<div class=" text-gray-900  text-xl font-bold p-1"> {{option.United}}</div>
<div class="text-[#4fd1c5]  text-lg  "> {{option.Technologies}}</div>
<div class="    "> {{option.Capitol}}</div>
<div class="    "> {{option.Wyoming}}</div>
<div class=" text-gray-900 "> {{option.email}}</div>

 

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1OfficeLocationComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1OfficeLocationComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:      offices_country = {
     United: '',
    Technologies: '',
    Capitol:'',
    Wyoming:'',
    email:'',
   
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
