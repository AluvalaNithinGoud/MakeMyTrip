import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';

  



@Component({
    standalone: true,

    selector: 'n1-timings',
    template: `
     <div class=" items-center  "> 
      <div class="font-bold text-gray-900 text-lg block">
      <span>{{value}}</span>
</div>
      <div>
     <span class="mt-">{{label}}</span>

     </div>
         

  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1TimingsComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  ]
})
export class N1TimingsComponent{
  @Input() label:  any = ' ';
  @Input()   value:  string  = '';

}
