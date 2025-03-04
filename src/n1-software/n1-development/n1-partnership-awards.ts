
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface  awards{
   name: string,
  Quality: string,
  certified: string,
  full: string,
  leading: string,
   
}






@Component({
  standalone: true,

  selector: 'n1-partnership-awards ',
  template: `
    <br>
    <br>
    <div class=" text-gray-900  p-2 text-2xl   "> {{option.name}}</div>
    <div class=" flex justify-center ">
    <br>
     
    <div class="   ">
 <div class="not-prose overflow-auto rounded-lg      p-5">
  <div class="  dark:bg-gray-800">
    <div class="flex overflow-x-auto h-22   gap-5 items-center ">
      <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20  rounded-full" src="https://www.designrush.com/uploads/users/customer-2/image_1505931862_e2896044118462ae451d87076f16ce6d.jpeg"> 
        </div>
      </div>
      <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20 rounded-full" src="https://www.designrush.com/uploads/users/customer-2/image_1505933398_89e4fc7c1c80e08185ad5e943c46f771.png"> 
        </div>
      </div>
      <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-16 rounded-full" src="https://www.designrush.com/uploads/users/customer-2/image_1505933355_8f62f6c907fb830b0b6c93c58dc1b98f.png">
         </div>
      </div>
      <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20  rounded-full" src="https://www.designrush.com/uploads/users/customer-2/image_1505932289_77391d55bacd2bf59fd1117c3c8483ad.png">
         </div>
      </div>
      <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20  rounded-full" src="https://www.designrush.com/uploads/users/customer-12/image_1532370547_K2BS8iYkjQHBA8JhHKuArTd5ptOTR3DzNlFvIaft.png">
         </div>
      </div>
      <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20  rounded-full" src="https://www.designrush.com/uploads/users/customer-12/image_1532370597_fxvyDE7rRXPffHwfK04VsV3Fxr8YGOlSNmmfQ7mH.png">
         </div>

      </div>
      <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20  rounded-full" src="https://media.designrush.com/tinymce_images/763804/conversions/amazon-logo-content.jpg">
         </div>
      </div> <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20   rounded-full" src="https://www.designrush.com/uploads/users/customer-2/image_1505934001_8ff6cf56ca5e987e83ea7db311bd57e5.png">
         </div>
      </div> <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20   rounded-full" src="https://media.designrush.com/tinymce_images/763809/conversions/starbucks-logo-content.jpg">
         </div>
      </div> <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20   rounded-full" src="https://www.designrush.com/uploads/users/customer-12/image_1532370578_0mRzJtSfsuLaBrBZZwcyUdSRtyvmHmndLQ2iFIZO.png">
         </div>
      </div> <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20   rounded-full" src="https://media.designrush.com/tinymce_images/763811/conversions/UPS-logo-content.jpg">
         </div>
      </div> <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20   rounded-full" src="https://media.designrush.com/tinymce_images/763811/conversions/UPS-logo-content.jpg">
         </div>
      </div> <div class="flex-none px-3 py-6 first:pl-6 last:pr-6">
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="h-17 w-20  rounded-full" src="https://media.designrush.com/tinymce_images/763813/conversions/NBC-logo-content.jpg">
         </div>
      </div>
    </div>
  </div>
</div>
<br>
 <div class="text-gray-900 text-medium p-1  "> {{option.Quality}}</div>
<div class="text-gray-900 text-medium   p-1  "> {{option.certified}}</div>
<div class="text-gray-900 text-medium  p-1   "> {{option.full}}</div>
<div class="text-gray-900 text-medium  p-1   "> {{option.leading}}</div>

</div>       
</div> 
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1PartnershipAwardsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1PartnershipAwardsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:  awards = {
     name: '',
    Quality: '',
    certified:'',
    full:'',
    leading:'',
    

   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
