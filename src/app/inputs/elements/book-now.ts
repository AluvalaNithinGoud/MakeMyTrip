import { Component, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'book-now',
  template: `
    <div class="w-3/4 mx-auto p-4 bg-white shadow-lg rounded-md">
      <div>
        <span>MORE FARE OPTIONS </span> available for your round trip.
      </div>
      <div class="flex border-b">
        <button 
          class="flex-1 py-2 text-center text-sm font-medium border-b-2 transition duration-300"
          [ngClass]="activeTab === 'onward' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('onward')">
          ONWARD
        </button>
        <button 
          class="flex-1 py-2 text-center text-sm font-medium border-b-2 transition duration-300"
          [ngClass]="activeTab === 'return' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('return')">
          RETURN
        </button>
      </div>
      
      <div class="p-4 bg-gray-50 rounded-md mt-4">
      
        <div *ngIf="activeTab === 'onward'">
          <div>
        <p class="text-sm text-gray-700"> Mumbai → New Delhi
        IndiGo · Sat, 15 Feb 25 · Departure at 00:50 - Arrival at 06:25</p>
</div>
          <div className="  ">
  <input type="radio" id={id}
    className="
      appearance-none
      w-4 h-4 border-2 border-blue-500 rounded-full flex  
    "
  />
  <label htmlFor={id}>
    <div class="w-1/3 flex-wrap border text-sm"> 
     <span> $ 5,576 </span>per adult
     <div> 
     <span class=" ">SAVER</span>
     </div>
     <div class="  flex-wrap"> 

      <div class=" mt-3"> 
     <span class="font-bold ">Baggage </span>
     </div>
     <div class="flex mt-3"> 
     <span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="16px" height="16px"><path fill="#bae0bd" d="M7.5 0.5A7 7 0 1 0 7.5 14.5A7 7 0 1 0 7.5 0.5Z"/><path fill="#5e9c76" d="M7.5,1C11.1,1,14,3.9,14,7.5S11.1,14,7.5,14S1,11.1,1,7.5S3.9,1,7.5,1 M7.5,0C3.4,0,0,3.4,0,7.5 S3.4,15,7.5,15S15,11.6,15,7.5S11.6,0,7.5,0L7.5,0z"/><path fill="#5e9c76" d="M6.3 10.5L3.7 7.9 4.4 7.2 6.3 9.1 11.2 4.3 11.9 5z"/></svg></span>
       <span>7 kgs cabin baggage</span>
     </div>
     <div class="flex ">
     <span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="16px" height="16px"><path fill="#bae0bd" d="M7.5 0.5A7 7 0 1 0 7.5 14.5A7 7 0 1 0 7.5 0.5Z"/><path fill="#5e9c76" d="M7.5,1C11.1,1,14,3.9,14,7.5S11.1,14,7.5,14S1,11.1,1,7.5S3.9,1,7.5,1 M7.5,0C3.4,0,0,3.4,0,7.5 S3.4,15,7.5,15S15,11.6,15,7.5S11.6,0,7.5,0L7.5,0z"/><path fill="#5e9c76" d="M6.3 10.5L3.7 7.9 4.4 7.2 6.3 9.1 11.2 4.3 11.9 5z"/></svg></span>
  
     <span>15 kgs check-in baggage</span>
     </div>

     <div class=" mt-3"> 
     <span class="font-bold ">Flexibility</span>
     </div>
     <div class="flex mt-3"> 
     <span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="16px" height="16px"><path fill="#bae0bd" d="M7.5 0.5A7 7 0 1 0 7.5 14.5A7 7 0 1 0 7.5 0.5Z"/><path fill="#5e9c76" d="M7.5,1C11.1,1,14,3.9,14,7.5S11.1,14,7.5,14S1,11.1,1,7.5S3.9,1,7.5,1 M7.5,0C3.4,0,0,3.4,0,7.5 S3.4,15,7.5,15S15,11.6,15,7.5S11.6,0,7.5,0L7.5,0z"/><path fill="#5e9c76" d="M6.3 10.5L3.7 7.9 4.4 7.2 6.3 9.1 11.2 4.3 11.9 5z"/></svg></span>
       <span> Cancellation fee starts at $ 3,400 (upto 4 dats before Departure)</span>
     </div>
     <div class="flex ">
     <span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="16px" height="16px"><path fill="#bae0bd" d="M7.5 0.5A7 7 0 1 0 7.5 14.5A7 7 0 1 0 7.5 0.5Z"/><path fill="#5e9c76" d="M7.5,1C11.1,1,14,3.9,14,7.5S11.1,14,7.5,14S1,11.1,1,7.5S3.9,1,7.5,1 M7.5,0C3.4,0,0,3.4,0,7.5 S3.4,15,7.5,15S15,11.6,15,7.5S11.6,0,7.5,0L7.5,0z"/><path fill="#5e9c76" d="M6.3 10.5L3.7 7.9 4.4 7.2 6.3 9.1 11.2 4.3 11.9 5z"/></svg></span>
  
     <span>Cancellation fee starts at $ 3,400 (upto 4 dats before Departure)</span>
     </div>

     
     <div class=" mt-3"> 
     <span class="font-bold "> Seats,Meals & More</span>
     </div>
     <div class="flex mt-1 ">
     <span>Chargable Seats</span>
     </div>
     <div class="flex mt-1 ">
     <span>Chargable Meals</span>
     </div>
     </div>
     
    </div>
  </label>
</div>

        </div>




        <div *ngIf="activeTab === 'return'">
          <p class="text-sm text-gray-700">Return content goes here...</p>
        </div>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BookNowComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule],
})
export class BookNowComponent {
  activeTab: string = 'onward';

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
