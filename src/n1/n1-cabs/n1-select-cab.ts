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

export interface cabdetails {
    img1: string;
    car_name: string;
    or: string;
    rating: string;
    price: string;
    Taxes: string,
    seats: string,
    Inclusions: string,
    policies: string,
     
}

@Component({
    standalone: true,

    selector: 'n1-select-cab',
    template: `
<div class=" flex justify-center p-4 ">
<div class="     border w-5/6 p-3 bg-white">

<div  class="    ">
            <div class="  ">
            <div>
              <img alt="" src="https://jsak.mmtcdn.com/cabs_cdn_dt/image/LighterFunnel_Cabs/Hatchback_2x.png" class="  w-15 h-20" >
            </div>
</div>

  
  
            <div class="flex  items-center  gap-4">
            <div class="font-bold text-gray-900 text-lg block ">{{option.car_name}}</div>
            <div class="text-sm font-bold border text-white" style="background-color: rgb(2, 14, 36);">{{option.rating}}</div>
            </div>
 
 
            <div class="flex items-center justify-between">
           <div class="  text-sm ">{{option.or}}</div>
           <div>
            <div class="font-bold text-gray-900 text-lg block">{{option.price}}</div>
            <div class="text-sm">{{option.Taxes}}</div>
            </div>
            </div>

            <div class="text-sm text-gray-900">{{option.seats}}</div>
 
 <div class="p-3"> <hr></div>

  <div class="flex gap-4 items-center">
  <div class="text-sm ">{{option.Inclusions}}</div>
  <div class="flex justify-between items-center">
  <div class="text-sm ">{{option.policies}}</div>
  
  <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border focus:outline-none" style="background-color: rgb(109, 157, 247);"><div class="text-white"> SELECT CAB
</div></button>
 
</div>
  </div>
</div>


</div>
</div>

    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1SelectCabComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule],
})
export class N1SelectCabComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: cabdetails = {
        img1: '',
        car_name: '',
        or: '',
        rating: '',
        price: '',
        Taxes: '',
        seats: '',
        Inclusions: '',
         policies : '',
        
    };

    ngOnInit() {
        console.log(this.option);
    }
}
