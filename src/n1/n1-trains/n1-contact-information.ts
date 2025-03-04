
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
   
 

export interface     contactdetails{
  name:string,
  update: string,
  email: string,
  number: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-contact-information',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="     w-5/6  bg-white border p-3 ">

<div class="p-4 gap-1 flex items-center">
<div class=" font-bold text-lg text-gray-900 block">{{option.name}}</div>
<div class="text-sm"> {{option.update}}</div>

</div>
         
<div class="flex gap-2 w-full">
<div class="  w-full">
<n1-details-input [(value)]="option.email" [label]="'Email: '" [placeholder]="' Email'" [name]="'email'"
[pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'"></n1-details-input>
</div>
<div class=" w-full">
<n1-details-input [(value)]="option.number" [label]="' Mobile Number '" [placeholder]="' Mobile No '"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
</div>
</div>


</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ContactInformationComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent]
})
export class N1ContactInformationComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   contactdetails = {
    name: '',
    update: '',
    email: '',
    number: '',
     
 
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
