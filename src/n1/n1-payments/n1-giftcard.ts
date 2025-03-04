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
 
export interface giftcard_options {
    Gift: string,
    Add: string,
    card_number: string,
     Digit:string,
     Or:string ,
     link:string,
     Copy: string,
     ePay:string ,
     card:string ,
     epay_number:string ,
     Once:string ,
    //  img5:string ,
    //  img6:string ,
    //  img7:string ,
    //  img8:string ,
    //  Meet:string,
    //  people: string,
    //  Find:string ,
    //  Our:string,
    //  enter_cvv: string,
    
}

@Component({
    standalone: true,

    selector: 'n1-giftcard',
    template: `
 <div class="bg-white flex justify-center p-6 ">

<div class=" border w-5/6 p-3 bg-white ">

<div class="font-bold text-gray-900 text-xl block p-2 ">{{option.Gift}}</div>
<hr> 
<br>
<div class=" border p-3 bg-white ">
<div class="font-bold text-gray-900   block p-2 ">{{option.Add}}</div>

<div>
<n1-details-input [(value)]="option.card_number" [label]="' '" [placeholder]="'ENTER 16-DIGIT NUMBER'"
    [name]="' CARD NUMBER'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield w-5/6  "></n1-details-input>
</div>
<div>
<n1-details-input [(value)]="option.Digit" [label]="' '" [placeholder]="'ENTER 6-DIGIT GC PIN'"
    [name]="' CARD NUMBER'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield w-5/6  "></n1-details-input>
</div>

</div>

<div class=" border p-3 bg-white ">
<div class="font-bold text-gray-900   block   ">{{option.Or}}</div>
<div class=" text-sm text-gray-900   block   ">{{option.Copy }}</div>

<div>
<div class="  ">
                            <n1-details-input
                                [(value)]="option.link"
                                [label]="''"
                                [placeholder]="'PASTE OR ENTER LINK'"
                                [name]="'firstName'"
                                required
                            ></n1-details-input>
                        </div>
</div>
</div>

<div class=" border p-3 bg-white ">
<div class="font-bold text-gray-900   block   ">{{option.ePay}}</div>
 
<div>
<div class="  "><n1-details-input [(value)]="option.card " [label]="' '" [placeholder]="'ENTER 16-DIGIT NUMBER'"
    [name]="' CARD NUMBER'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield w-5/6  "></n1-details-input>
                        </div>

                        <div class="  "><n1-details-input [(value)]="option.epay_number " [label]="' '" [placeholder]="'Epay Linked Mobile Number'"
    [name]="' CARD NUMBER'" [pattern]="'^[0-9]{10}$'" required [type]="'number'"
    class="-moz-appearance: textfield w-5/6  "></n1-details-input>
                        </div>
</div>
</div>

<div class=" text-gray-900 text-sm block p-2 ">{{option.Once}}</div>
<br>

<div class=" justify-center flex w-full">
  <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 text-lg block bg-blue-700 border focus:outline-none" style="background-color: rgb(109, 157, 247);">
    <div class="text-white"> SEND OTP AND VERIFY
</div></button></div>

</div>     
  </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1GiftcardComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1DetailsInputComponent],
})
export class N1GiftcardComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: giftcard_options = {
        Gift: '',
        Add: '',
        card_number:'',
        Digit:'',
        Or: '',
        link:'',
        Copy: '',
        ePay:'',
        card:'',
        epay_number:'',
        Once:'',
        // img5:'',
        // img6:'',
        // img7:'',
        // img8:'',
        
        //   Meet: '',
        // people:'',
        // Find: '',
        //   Our: '',
        // card_number:'',
        // enter_cvv: '',

    };

   

    ngOnInit() {
        console.log(this.option);
    }
}
