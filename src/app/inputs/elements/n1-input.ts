import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from '../base/n1-abstract-input';

@Component({
    standalone: true,
    selector: 'n1-input',
    template: `
        <div>
        <label [attr.for]="cid" class="mb-[12px] font-medium block">
        {{ label + asterix }}
                </label>
            <!-- <label [attr.for]="cid">{{ label + asterix }}</label> -->
            <!-- <input 
                [id]="cid"
                [name]="cid"
                [type]="type"
                [placeholder]="placeholder"
                [readonly]="inputReadonly"
                [required]="inputRequired"
                (blur)="onBlur.next()"
                (focus)="onFocus.next()"
                [(ngModel)]="value"
                [disabled]="disabled"
                > -->
                <input class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" 
                [id]="cid"
                [name]="cid"
                [type]="type"
                [placeholder]="placeholder"
                [readonly]="inputReadonly"
                [required]="inputRequired"
                (blur)="onBlur.next()"
                (focus)="onFocus.next()"
                [(ngModel)]="value"
                [disabled]="disabled"
                >

        </div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1InputComponent),
            multi: true,
        },
    ],
    imports: [FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class N1InputComponent extends AbstractInputComponent {
    @Input()
    label: string = '';

    get asterix(): string {
        return this.inputRequired ? ' *' : '';
    }
}