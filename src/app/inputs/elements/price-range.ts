import {   Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  standalone: true,

    selector: 'n1-radio',
    template: `
     <div>
        <div>
  <label class="flex items-center justify-center  mb-[20px] md:mb-[25px]">
    <div>
      <div class="flex justify-between items-center ">
        <div class="flex items-center">
          <div class="airline-info-wrapper flex items-center gap-4">
            <span class="airline-logo" style="background-image: url('https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=19');"></span>
            <span class="font-bold text-black">IndiGo</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="flex items-center text-xs text-gray-500 font-bold">
            <span
              class="otp-icon bg-no-repeat"
              style="background-image: url('https://imgak.mmtcdn.com/flights/assets/media/dt/common/otp/otp_icon.png');"
            ></span>
            80% on time
          </span>
          <div class="otp-tooltip hidden bg-teal-500 p-2 rounded-md">
            <p class="text-white font-bold text-sm mb-2">This flight is almost always on time!</p>
            <p class="text-white text-xs mb-3">Data from the past 15 days shows that this flight almost always runs on schedule.</p>
            <p class="text-xs text-gray-200">We still recommend checking the latest flight status with the airline directly on the day of travel.</p>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-start mt-5">
        <div class="flex justify-between w-full text-sm">
          <div class="flex flex-col items-start">
            <p class="mb-1">01:10</p>
            <p>Mumbai</p>
          </div>
          <div class="flex flex-col items-center">
            <p>2h 10m</p>
            <div class="relative w-full">
              <div class="h-1 border-t-4 border-teal-500"></div>
            </div>
            <p class="text-gray-500">Non stop</p>
          </div>
          <div class="flex flex-col items-end">
            <p class="mb-1">03:20</p>
            <p>New Delhi</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="text-right">
            <p class="text-lg font-bold text-black">₹5,362</p>
            <p class="text-xs text-gray-500">per adult</p>
          </div>
          <input type="radio" class="hidden" />
          <span class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
          </span>
        </div>
      </div>
    </div>
  </label>
</div>

          </div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PriceRangeComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule]
})
export class  PriceRangeComponent{
  
  
}
