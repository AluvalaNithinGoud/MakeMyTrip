import {Component,Input,Output,EventEmitter,forwardRef,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface   all_icons_details  {
  img: string;
  icon_name: string;
   
}

@Component({
    standalone: true,

    selector: ' n1-all-icons',
    template: `
<div class="   justify-center   "  >
<div class="       p-3  rounded-md">

 <div class="items-center  ">
 <div>
    <img  class="w-16 h-11" alt="" src={{option.img}} >
    
</div>
<div class="text-sm  ml-2  text-gray-900">{{option.icon_name}}</div>
 </div>
</div>
</div>
 
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() =>  N1AllIconsForexomponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  ],
})
export class N1AllIconsForexomponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

   @Input() option: all_icons_details = {
        img: '',
        icon_name: '',
         
        
      };

      



  


  

    ngOnInit() {
        console.log(this.option);
    }
}
