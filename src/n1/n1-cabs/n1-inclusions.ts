import {
    Component,
    Input,
    Output,
    EventEmitter,
    forwardRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export interface inclusionsdetails {
  Inclusions: string;
  View: string;
  State: string;
  Kms: string;
    Only: string;
    Waiting: string,
  
    
}

@Component({
    standalone: true,

    selector: '  n1-inclusions ',
    template: `
<div class=" flex justify-center p-4 ">
<div class="     border w-5/6  p-3 bg-white">

  <div class="flex justify-between p-2" >
<div class="font-bold text-gray-900 block text-lg  ">{{option.Inclusions}}</div>
<div class=" font-bold  text-[#4fd1c5] ">{{option.View}}</div>
</div>
<div class=" p-2">
<div class="  text-gray-900  text-sm p-1 ">{{option.State}}</div>
<div class="text-gray-900  text-sm p-1 ">{{option.Only}}</div>
<div class="text-gray-900  text-sm p-1  ">{{option.Kms}}</div>
<div class=" text-gray-900  text-sm p-1">{{option.Waiting}}</div>
</div>


</div>
</div>

    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1InclusionsComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule],
})
export class N1InclusionsComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: inclusionsdetails = {
      Inclusions: '',
      View: '',
      State: '',
      Only: '',
      Kms: '',
      Waiting: '',
        
         
    };

    ngOnInit() {
        console.log(this.option);
    }
}
