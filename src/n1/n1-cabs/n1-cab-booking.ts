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

export interface bookingdetails {
    img1: string;
    outstation: string;
    destination: string;
    date: string;
    car_name: string;
    rating: string,
    reviews: string,
    or: string,
    seats: string,
    
}

@Component({
    standalone: true,

    selector: 'n1-cab-booking',
    template: `
<div class=" flex justify-center p-4 ">
<div class="     border w-5/6   bg-white">

<div class="p-2"style="background-color: rgb(203, 213, 231);">
<div class="text-sm p-1">{{option.outstation}}</div>
<div class=" font-bold text-gray-900 block p-2">{{option.destination}}</div>
<div class=" font-bold text-gray-900 block p-2">{{option.date}}</div>
</div>

<div class="p-3">
<div class="flex gap-3  " >
<div class="font-bold text-gray-900 text-lg block">{{option.car_name}}</div>
<div class="text-sm font-bold border text-white" style="background-color: rgb(14, 30, 61);">{{option.rating}}</div>
<div class="  text-gray-900  ">{{option.reviews}}</div>
</div>

<div class="flex justify-between p-1  ">
<div class="  text-gray-900  ">{{option.or}}</div>
<div>
 <img alt="" src="https://jsak.mmtcdn.com/cabs_cdn_dt/image/LighterFunnel_Cabs/Hatchback_2x.png" class="  w-15 h-20" >
            </div>
</div>

<div class="  text-gray-900 p-1">{{option.seats}}</div>
</div>



</div>
</div>

    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1CabBookingComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule],
})
export class N1CabBookingComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: bookingdetails = {
        img1: '',
        outstation: '',
        destination: '',
        date: '',
        car_name: '',
        rating: '',
        reviews: '',
        or: '',
        seats : '',
         
    };

    ngOnInit() {
        console.log(this.option);
    }
}
