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
import { N1OnwardReturnFilterComponent } from '../n1-comps/n1-onward-return-filter';
import { N1PopularFiltersComponent } from '../n1-comps/n1-popular-filters';

export interface popularoptions {
    name: string;
    mmt: string;
    sponsored: string;
    hotelname: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    areaname: string;
    distance: string;
    restaurant: string;
    free_cancellation: string;
    book: string;
    discount: string;
    convenient: string;
    offer: string;
    very_good: string;
    hotel_rating: string;
    emi: string;
    actual_price: string;
    real_price: string;
    // offer:string,
    // very_good:string,
}

@Component({
    standalone: true,

    selector: 'n1-popular-hotel',
    template: `
        <div class="bg-white   justify-center p-6">
            <div class="font-bold text-gray-900 text-lg block p-3  ">
                {{ option.name }}
            </div>

            <div class=" border w-5/6 p-3 bg-white  cursor-pointer ">
                <div class="flex  ">
                    <div class="  gap-1">
                        <div class="   ">
                            <div class="p-2">
                                <img
                                    class="h-30 w-60 rounded-lg"
                                    src="{{ option.img1 }}"
                                    alt=""
                                />
                            </div>
                            <div class="flex gap-2 p-2 ">
                                <div>
                                    <img
                                        class="h-10  w-17 rounded-lg"
                                        src="{{ option.img2 }}"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        class="h-10 w-17 rounded-lg"
                                        src=" {{ option.img3 }} "
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        class="h-10 w-17 rounded-lg"
                                        src="{{ option.img4 }}"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        class="h-10 w-17 rounded-lg"
                                        src="{{ option.img5 }} "
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 -mt-3">
                        <div class="flex">
                            <div class="p-2 font-bold text-gray-900 block  text-[#ffffff]"
                             style="background-color:rgb(38, 80, 143) ;">
                                {{ option.mmt }}
                            </div>
                            <div class="p-2 font-bold text-gray-900 block">
                                {{ option.sponsored }}
                            </div>
                        </div>
                        <div class="p-2 font-bold text-lg text-gray-900 block">
                            {{ option.hotelname }}
                        </div>
                        <div class="flex text-gray-900 p-1">
                            <div class=" text-[#4fd1c5]" >{{ option.areaname }}</div>
                            <div>{{ option.distance }}</div>
                        </div>

                        <div class="  text-sm  p-2">{{ option.restaurant }}</div>

                        <div class=" flex justify-between">
                            <div class=" text-[#4fd1c5]   p-1">
                                {{ option.free_cancellation }}
                            </div>
                           
                        </div>
                        <div class="  text-[#4fd1c5]  p-1">{{ option.book }}</div>
                        <div class="  text-[#4fd1c5]  p-1">{{ option.discount }}</div>
                        <div class="  text-[#e53e3e]  p-2">{{ option.convenient }}</div>
                    </div>
                    <div class="    ">
                                <div class=" ">{{ option.emi }}</div>
                                <div class=" ">{{ option.actual_price }}</div>
                                <div class=" ">{{ option.real_price }}</div>
                            </div>
                    <!-- <div dir="ltr" class=" flex-wrap grid justify-items-end     ">
<div class="flex justify-end    ">
<div  class="   "> {{option.very_good}}</div>
<div  class=" "> {{option.hotel_rating}}</div>
</div>
 
</div> -->
                </div>

                <div>
                    <div
                        class="p-2 -mb-2"
                        style="background-color:rgb(191, 224, 240);"
                    >
                        {{ option.offer }}
                    </div>
                </div>
            </div>
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1PopularHotelComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule],
})
export class N1PopularHotelComponent {
    @Input() label: string = ' ';

    @Input() option: popularoptions = {
        name: '',
        mmt: '',
        sponsored: '',
        hotelname: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
        areaname: '',
        distance: '',
        restaurant: '',
        free_cancellation: '',
        book: '',
        discount: '',
        convenient: '',
        offer: '',
        very_good: '',
        hotel_rating: '',
        emi: '',
        actual_price: '',
        real_price: '',
        //   canceltime3:  '',
    };

    ngOnInit() {
        console.log(this.option);
    }
}
