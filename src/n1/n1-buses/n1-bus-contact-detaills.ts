
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
     
 

export interface     contactbusdetails{
  number:string,
  email: string,
  company: string,
  com_Number: string,
  Contact: string,
  send:string,
   
   
}






@Component({
  standalone: true,

  selector: 'n1-bus-contact-details ',
  template: `
        
         <div class=" flex justify-center p-4 ">
         <div class="     border w-5/6 p-3 bg-white">

         <div class="flex gap-2 p-3 items-center">
<div class="font-bold text-gray-900 text-lg block ">{{option.Contact}}</div>
<div class=" text-gray-900   ">{{option. send}}</div>
</div>

         <div class="flex items-center  gap-3 -mt-2 p-2">
<n1-details-input [(value)]="option.number" [label]="' Mobile No:'" [placeholder]="' Mobile No '"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
 
  <n1-details-input [(value)]="option.email" [label]="'Email: '" [placeholder]="' Email'" [name]="'email'"
    [pattern]="'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'" required [type]="'text'"></n1-details-input>
</div>

<div class="p-2"><hr></div>

<div class="  ">
<div class="flex items-center p-3">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="ms-2 text-lg font-bold  text-gray-900 dark:text-gray-300">
     Enter GST  details (Optional)</label>
</div> 
<div class="flex items-center gap-3">
 
 <n1-details-input [(value)]="option.com_Number" [label]="'Registered Company Number: '" [placeholder]="'Company Num '" [name]="'Company Name'"
 [pattern]="' '" required [type]="'text'"></n1-details-input>
 
  <n1-details-input [(value)]="option.company" [label]="'Registered Company Name: '" [placeholder]="'Registration No'" [name]="'Registration No'"
    [pattern]="' '" required [type]="'text'"></n1-details-input>
</div>
</div>

</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1BusContactDetailsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent]
})
export class N1BusContactDetailsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:    contactbusdetails = {
    number: '',
    email: '',
    company: '',
    com_Number: '',
    Contact: '',   
     send:'',
   };
    
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
