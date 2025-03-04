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

export interface Upi_options {
    name: string;
    img1: string;
    img2: string;
    img3: string;
    Open: string;
    Approve: string;
    Scan: string;
    img4: string;
    Pay: string;
    img5: string;
    or: string;
    upi_id: string;
    img6: string;
    Enter: string;
    apps: string;
    img7: string;
    img8: string;
    img9: string;
    img10: string;
    img11: string;
 }

@Component({
    standalone: true,

    selector: 'n1-upi-options',
    template: `
        <div class="bg-white flex justify-center p-6 ">
            <div class=" border w-5/6 p-3 bg-white ">
                <div class="font-bold text-gray-900 text-lg block p-2 ">
                    {{ option.name }}
                </div>

                <hr />

                <div class="flex gap-2 p-4 items-center">
                    <div class="   ">
                        <img
                            class="w-18 h-10 "
                            alt=""
                            src="{{ option.img4 }}"
                        />
                    </div>
                    <div class="text-gray-900 text-lg font-semibold">
                        {{ option.Pay }}
                    </div>
                </div>

                <div class="p-2 ">
                    <div class="flex gap-2 p-4 items-center">
                        <div class="border p-2 rounded-xl  ">
                            <img
                                class="w-18 h-14 "
                                alt=""
                                src="{{ option.img1 }}"
                            />
                            <hr />
                            <div class="text-gray-500 text-sm font-semibold">
                                {{ option.Open }}
                            </div>
                        </div>
                        <div class="border p-2 rounded-xl">
                            <img
                                class="w-18 h-14 "
                                alt=""
                                src="{{ option.img2 }}"
                            />
                            <hr />
                            <div class="text-gray-500 text-sm font-semibold  ">
                                {{ option.Scan }}
                            </div>
                        </div>
                        <div class="border p-2 rounded-xl">
                            <img
                                class="w-18 h-14  "
                                alt=""
                                src="{{ option.img3 }}"
                            />
                            <hr />
                            <div class="text-gray-500 text-sm font-semibold">
                                {{ option.Approve }}
                            </div>
                        </div>

                        <div class=" ml-9  ">
                            <img class="   " alt="" src="{{ option.img5 }}" />
                        </div>
                    </div>

                    <div class=" justify-center flex">
                        <div
                            class="text-gray-900 text-lg font-semibold    p-2 "
                        >
                            {{ option.or }}
                        </div>
                    </div>

                    <div>
                        <div class="flex gap-2 p-4 items-center">
                            <div class="   ">
                                <img
                                    class="w-18 h-10 "
                                    alt=""
                                    src="{{ option.img6 }}"
                                />
                            </div>
                            <div class="text-gray-900 text-lg font-semibold">
                                {{ option.Enter }}
                            </div>
                        </div>

                        <div class="p-5 ">
                            <n1-details-input
                                [(value)]="option.upi_id"
                                [label]="''"
                                [placeholder]="'UPI ID'"
                                [name]="'firstName'"
                                required
                            ></n1-details-input>
                        </div>
                        <div class="p-4  justify-center flex">
                            <button
                                type="Button"
                                class="items-center py-2 px-10 ms-2 font-bold text-white-900 text-lg block bg-blue-700 border focus:outline-none"
                                style="background-color: rgb(109, 157, 247);"
                            >
                                <div class="text-white">
                                    Send Payment Request
                                </div>
                            </button>
                        </div>
                    </div>

                    <div class="flex gap-1   items-center">
                        <div class="font-bold text-gray-900 text-lg block p-2 ">
                            {{ option.apps }}
                        </div>
                        <div class="  ">
                            <img
                                class="w-10 h-8 "
                                alt=""
                                src="{{ option.img7 }}"
                            />
                        </div>
                        <div class="  ">
                            <img
                                class="w-10 h-8 "
                                alt=""
                                src="{{ option.img8 }}"
                            />
                        </div>
                        <div class="  ">
                            <img
                                class="w-10 h-8"
                                alt=""
                                src="{{ option.img9 }}"
                            />
                        </div>
                        <div class="  ">
                            <img
                                class="w-10 h-8 "
                                alt=""
                                src="{{ option.img10 }}"
                            />
                        </div>
                        <div class="  ">
                            <img
                                class="w-10 h-8 "
                                alt=""
                                src="{{ option.img11 }}"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1UpiOptionsComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1DetailsInputComponent],
})
export class N1UpiOptionsComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: Upi_options = {
        name: '',
        img1: '',
        img2: '',
        img3: '',
        Open: '',
        Approve: '',
        Scan: '',
        img4: '',
        Pay: '',
        img5: '',
        or: '',
        upi_id: '',
        img6: '',
        Enter: '',
        apps: '',
        img7: '',
        img8: '',
        img9: '',
        img10: '',
        img11: '',
         
    };
    ngOnInit() {
        console.log(this.option);
    }
}
