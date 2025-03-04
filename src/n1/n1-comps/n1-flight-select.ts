import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 import { N1CompanyLogo } from "./n1-company-logo";
import { N1TimingsComponent } from "./n1-timings";
import { N1PriceComponent } from "./n1-price-component";
import { N1JourneyTimeComponent } from "./n1-journey-time";

export interface Detailsoptions {
  from:string,
   to:string,
  name: string,
  logo: string,
  start_time: string,
  end_time: string,
  amount: string,
}

@Component({
  standalone: true,
  selector: 'n1-flight-select',
  template: `
    <div class="bg-white border  w-full    rounded-md p-4  ">
      <label class="block cursor-pointer rounded-md flex items-center">
        <div class="w-full">
          <!-- Flight Logo -->
          <div class="-mt-5 mb-4 me-3 p-2">
            <n1-company-logo [label]="'Free Meal'" [logo]="option.logo"></n1-company-logo>
          </div>
          <!-- Flight Details -->
          <n1-company-logo [label]="option.name" [logo]="option.logo"></n1-company-logo>
          <div class="flex space-x-3 p-2 justify-between">
            <n1-timings [label]="option.from" [value]="option.start_time"></n1-timings>
            <n1-journey-time [label]="'Non stop'" [value]="'2 h 33 m'"></n1-journey-time>
            <n1-timings [label]="option.to" [value]="option.end_time"></n1-timings>
            <n1-price-component [label]="'Price'" [value]="'₹' + option.amount"></n1-price-component>
            <input type="radio" id="option-indigo" name="flight-option" [value]="option.name" class="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
          </div>
        </div>
      </label>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1FlightSelect),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1CompanyLogo, N1TimingsComponent, N1PriceComponent, N1JourneyTimeComponent],
})
export class N1FlightSelect {
  @Input() option: Detailsoptions = { name: '', logo: '', start_time: '', end_time: '', amount: '' , from:'', to: '',};
  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
}
