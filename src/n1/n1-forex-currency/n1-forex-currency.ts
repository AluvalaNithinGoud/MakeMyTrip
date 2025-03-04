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
 
export interface   currency_details  {
  name: string;
  Zero: string;
  img1: string;
   Foreign: string;
  currencies: string,
  Why: string,
  people: string,
  Happy: string,
  Forex: string;
  Know: string;
   
    
}

@Component({
    standalone: true,

    selector: ' n1-forex-currency',
    template: `
<div class="   justify-center p-9  "  style="background-color: rgb(20, 40, 77);">
<div class="       w-full p-3 bg-white rounded-md">

<div>

<div class="   gap-3 flex p-4">
  <div class="gap-3 flex border rounded-md p-4 ">
<div>
   <img class="w-35 h-20" alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/new_bmf_card_714a7ae7ca.png"  >   
  </div>
  
 <div class=" gap-8">
 <div class="font-bold text-lg">{{option.name}}</div>
 <div class=" text-sm">{{option.Zero}}</div>
 </div>
</div>

<div class="gap-3 flex border rounded-md p-4">
<div>
   <img class="w-30 h-20" alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/currency_img_small_8bc249fe6d.png"  >   
  </div>
 <div class="gap-8 ">
 <div class="font-bold text-lg">{{option.Foreign}}</div>
 <div class=" text-sm">{{option.currencies}}</div>
 </div>
</div>
</div>

</div>


 
</div>
 </div>
 <br>
 <br>

 <div class="flex justify-between bg-white p-8 text-gray-900">
<div class="font-bold text-4xl">{{option.Why}}</div>
<div>
<div  class="font-bold text-4xl">{{option.people}}</div>
<div  class="text-medium">{{option.Happy}}</div>
</div>
<div class="  ">
<div  class=" text-medium">{{option.Forex}}</div>
<div>
<img class="w-19 h-12" alt="" src="https://tripmoneycmsimgak.mmtcdn.com/img/bmf_transaprent_2_ee2f21b3a8.png"  >   
</div>
</div>

 
</div>

<br>
<br>
<div class="p-9">
<img class=" rounded-md" alt="" src="https://promos.makemytrip.com/notification/xhdpi/Forex-Adtech-banner-1200x280.jpg"  >   
</div>

 

<div class="font-bold text-4xl text-gray-900 p-6">{{option.Know}}</div>

 
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1ForexCurrencyComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  ],
})
export class N1ForexCurrencyComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: currency_details = {
      name: '',
      Zero: '',
      img1: '',
      Foreign: '',
      currencies: '',
      Why: '',
      people: '',
      Happy : '',
      Forex: '',
      Know: '',
      
    };

      



  


  

    ngOnInit() {
        console.log(this.option);
    }
}
