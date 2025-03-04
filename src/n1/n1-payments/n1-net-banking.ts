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
import { choose_bank, N1ChooseYourBankComponent } from './n1-choose-your-bank';

export interface banking_options {
  
}

@Component({
    standalone: true,

    selector: 'n1-net-banking',
    template: `
        <div class="p-4">
            <div class="w-full  " *ngFor="let banks of choose">
                <n1-choose-your-bank [option]="banks"></n1-choose-your-bank>
            </div>
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1NetBankingComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1ChooseYourBankComponent],
})
export class N1NetBankingComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: banking_options = {};

    choose: choose_bank[] = [
        {
            all_bank: 'ALL BANKS',
            name: 'Net Banking',
            Select: ' 40+ Banks Available',
            Below: ' ',
        },
    ];

    ngOnInit() {
        console.log(this.option);
    }
}
