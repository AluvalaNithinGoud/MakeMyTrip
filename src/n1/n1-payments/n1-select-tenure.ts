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
import { N1DetailsInputComponent } from '../n1-comps/n1-details-input';
import {
    N1DropdownAirportComponent,
    N1DropdownOptions,
} from '../n1-comps/n1-dropdown-airport';
import { bank_options, N1SelectBankComponent } from './n1-select-bank';
import {
    interest_options,
    N1MonthlyInterestComponent,
} from './n1-monthly-interest';

export interface Tenure_options {
    name: string;
}

@Component({
    standalone: true,

    selector: 'n1-select-tenure',
    template: `
        <div class="font-bold text-gray-900 text-lg block p-4">
            {{ option.name }}
        </div>

        <br />

        <div
            class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50"
        >
            <div class="px-4">
                <div
                    class="relative     overflow-hidden bg-white ring-1 shadow-lg ring-gray-900/5 dark:bg-gray-800"
                >
                    <div
                        class="flex h-80 flex-col divide-y divide-gray-200 overflow-auto dark:divide-gray-200/5"
                    >
                        <div
                            class="w-full  "
                            *ngFor="let Monthly_interst of monthly"
                        >
                            <n1-monthly-interest
                                [option]="Monthly_interst"
                            ></n1-monthly-interest>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1SelectTenureComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1MonthlyInterestComponent],
})
export class N1SelectTenureComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: Tenure_options = {
        name: '',
    };

    monthly: interest_options[] = [
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
        {
            months: '3 months x 12539.78',
            price: '36638.0',
            Incl: 'Incl. 796.67 interest @13.0%.',
            Total: 'Total payable',
        },
    ];

    ngOnInit() {
        console.log(this.option);
    }
}
