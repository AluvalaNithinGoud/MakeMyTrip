
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';
import { N1JourneyTimeComponent } from "./n1-journey-time";
import { N1CompanyLogo } from "./n1-company-logo";
import { N1TimingsComponent } from "./n1-timings";








@Component({
  standalone: true,

  selector: 'n1-imp-information',
  template: `
      <div class="bg-white  flex p-4 justify-center">
        <div class="border w-5/6 p-3 bg-white  ">

          <div class="  "> 
           
        <div class="font-bold text-gray-900 text-lg block p-2">Important Information</div>
        <div class="flex items-center ml-4 ">
<div>      
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
        "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/> </svg>  
              </div>
        <div class="font-bold text-gray-900 p-1 ">Check travel guidelines and baggage information below:</div>
</div>
        <ul class="text-sm text-gray-900 p-1 list-disc ml-8">
          <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If violated, airline may levy extra charges.</li>
</ul>


<div class=" p-4  "> 
<div class="flex items-center ">
<div> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
        "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/> </svg>  
              </div>
        <div class="font-bold text-gray-900  block p-1">Unaccompanied Minors Travelling:</div>
</div>
        <ul class=" text-sm text-gray-900 p-1 list-disc ml-4">
          <li>An unaccompanied minor usually refers to a child traveling without an adult aged 18 or older. </li> 
           <li>Please check with the airline for their rules and regulations regarding unaccompanied minors, as these can differ between airlines.</li>
           </ul>
         </div>
        </div>
      </div>
       
         

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1ImpInformationComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,]
})
export class N1ImpInformationComponent {

}
