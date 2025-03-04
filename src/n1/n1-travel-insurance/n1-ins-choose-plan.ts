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
import { N1RadioComponent } from '../../app/inputs/elements/n1-radio';

export interface plandetails {
    name: string;
    Offered: string;
    img1: string;
    img2: string;
    license: string;
    Thailand: string;
    dates: string;
    Travel: string;
    Protects: string;
    Choose: string;
    Sum: string;
    prices: string;
    Insured: string;
    International: string;
    price: string;
    Claims: string;
    per: string;
    Primary: string;
    termss: string;
    Medical: string;
    Dental: string;
    Baggage: string;
    Benefits: string;
   
}

@Component({
    standalone: true,

    selector: ' n1-ins-choose-plan',
    template: `
        <div
            class="   justify-center p-9  "
            style="background-color: rgb(188, 201, 226);"
        >
            <div class="       w-full p-3   rounded-md">
                <div class="flex gap-5">
                    <div class="p-4">
                        <div class="font-bold text-gray-900 text-4xl block ">
                            {{ option.name }}
                        </div>

                        <div class="flex gap-2 items-center p-2">
                            <div class="font-bold text-sm text-gray-900">
                                {{ option.Offered }}
                            </div>
                            <div>
                                <img
                                    class="w-25 h-10"
                                    alt=""
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6zus-jfD2n5EgcT_oBC6bp9yE0ZQVUT8TA&s"
                                />
                            </div>
                            <div>
                                <img
                                    class="w-12 h-7"
                                    alt=""
                                    src="https://tripmoneycmsimgak.mmtcdn.com/img/Reliance_General_insur_nce_1_ff7e996e13.png"
                                />
                            </div>
                        </div>
                        <div class="text-sm text-gray-900">
                            {{ option.license }}
                        </div>

                        <br />

                        <div class=" w-full p-3  bg-white rounded-lg shadow-xl">
                            <div class="font-bold text-lg text-gray-900">
                                {{ option.Thailand }}
                            </div>
                            <div class="font-bold text-sm text-gray-900">
                                {{ option.dates }}
                            </div>
                        </div>
                        <br />
                        <div class="w-full p-3  bg-white rounded-lg shadow-xl ">
                            <div class="flex items-center p-1">
                                <div>
                                    <img
                                        class="w-7 h-6"
                                        alt=""
                                        src="https://tripmoneycmsimgak.mmtcdn.com/img/Luggage_Shield_a9baed13b4.svg"
                                    />
                                </div>
                                <div class="font-bold text-lg text-gray-900">
                                    {{ option.Travel }}
                                </div>
                            </div>
                            <div class="  text-sm text-gray-900">
                                {{ option.Protects }}
                            </div>
                        </div>
                    </div>

                    <div class=" w-full p-3  bg-white rounded-lg shadow-xl p-4">
                        <div class="font-bold text-gray-900 text-xl block">
                            {{ option.Choose }}
                        </div>

                        <div class="gap-2">
                            <div class="text-sm font-bold p-1">
                                {{ option.Sum }}
                            </div>
                            <div class=" ">
                                <n1-radio
                                    [options]="genderOptions"
                                    [(value)]="selectedGender"
                                    [name]="'gender'"
                                    [label]="'Gender Selection'"
                                ></n1-radio>
                            </div>
                            <div class="p-3 text-sm text-gray-900">
                                {{ option.prices }}
                            </div>

                            <div
                                class="p-3 justify-center  rounded-lg shadow-xl items-center"
                            >
                                <div
                                    class="text-sm font-bold text-[#e53e3e] p-2"
                                    style="background-color: rgb(240, 242, 245);"
                                >
                                    {{ option.Insured }}
                                </div>
                                <div>
                                    <div class="flex gap-7">
                                        <div>
                                            <div class="font-bold">
                                                {{ option.International }}
                                            </div>
                                            <div class=" ">
                                                {{ option.Claims }}
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">
                                                {{ option.price }}
                                            </div>
                                            <div class=" text-sm">
                                                {{ option.per }}
                                            </div>
                                        </div>

                                        <div class="p-1 flex justify-center">
                                            <button
                                                type="Button"
                                                class="items-center py-2 px-3 ms-2 font-bold text-white-900 block bg-blue-700 border rounded-full  focus:outline-none"
                                                style="background-color: rgb(98, 146, 235);"
                                            >
                                                <div class="text-white">
                                                    BOOK NOW
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        class="p-3 justify-center  rounded-lg   items-center"
                                        style="background-color: rgb(240, 242, 245);"
                                    >
                                        <div class="flex gap-3 ">
                                            <div>
                                                <img
                                                    class="w-8 h-7"
                                                    alt=""
                                                    src="https://tripmoneycmsimgak.mmtcdn.com/img/Reliance_General_insur_nce_1_ff7e996e13.png"
                                                />
                                            </div>
                                            <div
                                                class="text-sm font-bold text-gray-900 "
                                            >
                                                {{ option.Primary }}
                                            </div>

                                            <div
                                                class="font-bold  text-[#4fd1c5] cursor-pointer"
                                            >
                                                {{ option.termss }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex justify-between text-sm text-gray-900 gap-5 p-4"
                                        >
                                            <div>{{ option.Medical }}</div>
                                            <div>{{ option.Dental }}</div>
                                            <div>{{ option.Baggage }}</div>
                                            <div
                                                class="font-bold  text-[#4fd1c5] cursor-pointer"
                                            >
                                                {{ option.Benefits }}
                                            </div>
                                        </div>
                                    </div>
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
            useExisting: forwardRef(() => N1InsChoosePlanComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1RadioComponent],
})
export class N1InsChoosePlanComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: plandetails = {
        name: '',
        Offered: '',
        img1: '',
        img2: '',
        license: '',
        Thailand: '',
        dates: '',
        Travel: '',
        Protects: '',
        Choose: '',
        Sum: '',
        prices: '',
        Insured: '',
        International: '',
        price: '',
        Claims: '',
        per: '',
        Primary: '',
        termss: '',
        Medical: '',
        Dental: '',
        Baggage: '',
        Benefits: '',
        
    };

    genderOptions = [
        ' ALL ',
        '$ 50,000',
        ' $ 100,000',
        ' $ 250,000',
        ' $ 500,000',
    ];

    selectedGender: string = '';

    ngOnInit() {
        console.log(this.option);
    }
}
