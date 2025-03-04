
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
   
 

export interface     accountdetails{
  name:string,
  username: string,
  required: string,
  discription: string,
  irtc_username: string,
  Password: string,
  discription1: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-account-details',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="     w-5/6  bg-white border p-3 ">


         <div class="p-2 font-bold text-lg text-gray-900 block">{{option.name}}</div>

 <div class="flex p-3 gap-2">
  <div class="  font-bold text-gray-900 block">{{option.username}}</div>
  <div class="text-[#4fd1c5]">{{option.required}}</div>
 </div>
 <div class="p-2 text-sm" style="background-color: rgb(236, 189, 101);">{{option.discription}}</div>
   
 <div>
 <n1-details-input [(value)]="option.irtc_username" [label]="' '" [placeholder]="' First&Middle name'"
 [name]="'firstName'" required></n1-details-input>
 </div>
<div class="p-2">
 <div class="  font-bold text-gray-900 block">{{option.Password}}</div>
 <div class="  ">{{option. discription1}}</div>
</div>

 <div class="p-2">
<button type="Button" class=""  >
  <div class=" text-[#4fd1c5] font-bold">Get New Password
</div>
  </button>
</div>


</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1AccountDetailsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1DetailsInputComponent]
})
export class N1AccountDetailsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   accountdetails = {
    name: '',
    username: '',
    required: '',
      discription: '',
      irtc_username: '',
      Password: '',
      discription1: '',
    
 
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
