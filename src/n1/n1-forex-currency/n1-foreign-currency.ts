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
 import { N1DetailsInputComponent } from "../n1-comps/n1-details-input";
 
export interface   amount  {
  Amount: string;
  Dollar: string;
  Exchange: string;
  number: string;
  Rupees: string;
  inr: string;
  Get: string;
    Upto: string,
    know: string,
    total: string,
    
}

@Component({
    standalone: true,

    selector: ' n1-foreign-currency',
    template: `
<div class="   justify-center   bg-white"  >
<div class="       w-full    rounded-md">

<div class=" ">
<div class="font-bold text-medium text-gray-900 "  >{{option.Amount}}</div>
<br>
<div class="border " style="background-color: rgb(204, 209, 223);">
<div class="font-bold text-medium text-gray-900  "  >{{option.Dollar}}</div>
<div class="  text-sm   "  >{{option.Exchange}}</div>
<div class="p-5">
<n1-details-input [(value)]="option.number" [label]="' '" [placeholder]="' Enter Amount'"
    [name]="'mobilenumber'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield  "></n1-details-input>
</div>

<div class="flex justify-between">
<div>{{option.Rupees}}</div>
<div> {{option.inr}}</div>

</div>
<div class="   ">
<div class="border p-2 bg-white">
<div class="flex justify-between">
<div class="text-sm">{{option.Get}}</div>
<div> {{option.Upto}}</div>
</div>

<div class="flex justify-between">
<div>{{option.know}}</div>
<div class="font-bold text-lg"> {{option.total}}</div>
</div>
</div>
</div>
</div>

</div>
 
</div>
</div>
 
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1ForeignCurrencyComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1DetailsInputComponent],
})
export class N1ForeignCurrencyComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: amount = {
      Amount: '',
      Dollar: '',
      Exchange: '',
      number: '',
      Rupees: '',
      inr: '',
      Get: '',
      Upto: '',
      know: '',
      total: '',
      
    };

       



  


  

    ngOnInit() {
        console.log(this.option);
    }
}
