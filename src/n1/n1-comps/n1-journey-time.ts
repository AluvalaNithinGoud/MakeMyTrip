import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';

  



@Component({
    standalone: true,

    selector: 'n1-journey-time',
    template: `
     <div class="flex  items-center space-x-2"> 
      <div>
      <span>{{value}}</span>
      <div>
     <span class="mt-">{{label}}</span>

     </div>
         

  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1JourneyTimeComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, ]
})
export class N1JourneyTimeComponent{
  @Input() label: string = ' ';
  @Input()   value:  string  = '';

}
