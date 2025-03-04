
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { awards, N1PartnershipAwardsComponent } from "./n1-partnership-awards";
 
 

export interface  trusted{
   
}






@Component({
  standalone: true,

  selector: 'n1-trusted-by-many',
  template: `
    <br>
    <br>
    
<div class="  " *ngFor="let    our    of our_partnership">
  <n1-partnership-awards [option]="our"></n1-partnership-awards>
</div>

        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1TrustedByManyComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1PartnershipAwardsComponent]
})
export class N1TrustedByManyComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:  trusted = {
    

   };
 our_partnership :    awards[] = [
    {    
       name:"We are trusted by global market leaders",  
        Quality:" ",     
       certified:" ",      
       full:" ",  
       leading:" ",     
          
    },
  ]
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
