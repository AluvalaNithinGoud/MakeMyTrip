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
import { bank_options, N1SelectBankComponent } from './n1-select-bank';
import { N1SelectTenureComponent, Tenure_options } from './n1-select-tenure';
import {
    credit_debit_options,
    N1CreditDebitComponent,
} from './n1-credit-debit';
import { choose_bank, N1ChooseYourBankComponent } from './n1-choose-your-bank';

export interface emi_options {
    all_bank: string;
    name: string;
    Select: string;
    Below: string;
   
}

@Component({
    standalone: true,

    selector: 'n1-emi',
    template: `
        <div class="bg-white flex justify-center p-6 ">
            <div class=" border w-5/6 p-3 bg-white ">
                <div class="font-bold text-gray-900 text-lg block ">
                    {{ option.name }}
                </div>

                <hr />
                <br />

                <div class="w-full  " *ngFor="let banks of choose">
                    <n1-choose-your-bank [option]="banks"></n1-choose-your-bank>
                </div>

                <div class="w-full  " *ngFor="let interst of Tenure">
                    <n1-select-tenure [option]="interst"></n1-select-tenure>
                </div>

                <div class="w-full  " *ngFor="let debit of credit">
                    <n1-credit-debit [option]="debit"></n1-credit-debit>
                </div>
            </div>
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1EmiComponent),
            multi: true,
        },
    ],
    imports: [
        FormsModule,
        CommonModule,
        N1SelectBankComponent,
        N1SelectTenureComponent,
        N1CreditDebitComponent,
        N1ChooseYourBankComponent,
    ],
})
export class N1EmiComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: emi_options = {
        all_bank: '',
        name: '',
        Select: '',
        Below: '',
    };

    credit: credit_debit_options[] = [
        {
            name: 'Credit & Debit Cards',
            img1: 'https://imgak.mmtcdn.com/payment-ui-service/images/payment/card_paymode.png',
            Enter: 'Enter card details',
            We: ' We support all major domestic & international cards',
            card_number: '',
            enter_cvv: '',
        },
    ];

    Tenure: Tenure_options[] = [
        {
            name: ' Select Tenure',
        },
    ];

    choose: choose_bank[] = [
        {
            all_bank: 'ALL BANKS',
            name: ' ',
            Select: 'Select your bank',
            Below: ' Below is the list of banks and their starting interest rates',
        },
    ];

    ngOnInit() {
        console.log(this.option);
    }
}
