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
import { N1DetailsInputComponent } from '../n1-comps/n1-details-input';
import {
    N1DropdownAirportComponent,
    N1DropdownOptions,
} from '../n1-comps/n1-dropdown-airport';

export interface person_details {
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
    Currently: string;
    Traveller: string;
    fullname: string;
    Dob: string;

    Passport_NO: string;
    Gender: string;
    Relationship: string;
    Proposer: string;
    Details: string;
    Proposer_fullname: string;

    Proposer_Dob: string;
    Contact: string;
    related: string;
    number: string;
    email: string;
    disease: string;
    agree: string;
    All: string;
    Buy: string;
}

@Component({
    standalone: true,

    selector: '  n1-ins-traveller-details ',
    template: `
        <br />
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
                            <div class="text-sm  p-1">
                                {{ option.Currently }}
                            </div>

                            <div
                                class="p-3 justify-center  rounded-lg   items-center"
                            >
                                <div
                                    class="text-medium font-bold text-gray-900   p-2"
                                >
                                    {{ option.Traveller }}
                                </div>
                                <div>
                                    <div class="flex gap-7">
                                        <div class="flex gap-3 w-full">
                                            <div class=" w-full">
                                                <n1-details-input
                                                    [(value)]="option.fullname"
                                                    [label]="
                                                        'Full Name (As per PAN)*'
                                                    "
                                                    [placeholder]="
                                                        'Enter Traveller Name'
                                                    "
                                                    [name]="'firstName'"
                                                    required
                                                ></n1-details-input>
                                            </div>
                                            <div class=" w-full">
                                                <n1-details-input
                                                    [(value)]="option.Dob"
                                                    [label]="
                                                        'Date Of Birth (As per PAN)*'
                                                    "
                                                    [placeholder]="'DD/MM/YY'"
                                                    [name]="'firstName'"
                                                    required
                                                ></n1-details-input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class=" ">
                                        <div class="flex gap-3 items-center ">
                                            <div>
                                                <div class=" ">
                                                    <div class="p-2 text-sm">
                                                        {{ option.Gender }}
                                                    </div>
                                                    <n1-radio
                                                        [options]="
                                                            genderOptions
                                                        "
                                                        [(value)]="
                                                            selectedGender
                                                        "
                                                        [name]="'gender'"
                                                        [label]="
                                                            'Gender Selection'
                                                        "
                                                    ></n1-radio>
                                                </div>
                                            </div>
                                            <div class="  ">
                                                <n1-details-input
                                                    [(value)]="
                                                        option.Passport_NO
                                                    "
                                                    [label]="'Passport No*'"
                                                    [placeholder]="
                                                        'Enter Traveller Name'
                                                    "
                                                    [name]="'firstName'"
                                                    required
                                                ></n1-details-input>
                                            </div>
                                        </div>
                                        <div class="  text-gray-900   p-2">
                                            <div class="p-2 text-sm">
                                                {{ option.Relationship }}
                                            </div>
                                            <div class=" w-1/2  border  ">
                                                <n1-dropdown-airport
                                                    [options]="selectage"
                                                    [selected]="age"
                                                    [label]="'select age'"
                                                    class="  text-gray-900 text-sm block w-full  outline-0 cursor-pointer "
                                                ></n1-dropdown-airport>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-2"><hr /></div>

                            <div
                                class="p-3 justify-center  rounded-lg items-center"
                            >
                                <div class="text-xl font-bold text-gray-900 ">
                                    {{ option.Proposer }}
                                </div>
                                <div class="text-sm   text-gray-900 p-2">
                                    {{ option.Details }}
                                </div>
                                <div>
                                    <div class="flex gap-7">
                                        <div class="flex gap-3 w-full">
                                            <div class=" w-full">
                                                <n1-details-input
                                                    [(value)]="
                                                        option.Proposer_fullname
                                                    "
                                                    [label]="
                                                        'Full Name (As per PAN)*'
                                                    "
                                                    [placeholder]="
                                                        'Enter Traveller Name'
                                                    "
                                                    [name]="'firstName'"
                                                    required
                                                ></n1-details-input>
                                            </div>
                                            <div class=" w-full">
                                                <n1-details-input
                                                    [(value)]="
                                                        option.Proposer_Dob
                                                    "
                                                    [label]="
                                                        'Date Of Birth (As per PAN)*'
                                                    "
                                                    [placeholder]="'DD/MM/YY'"
                                                    [name]="'firstName'"
                                                    required
                                                ></n1-details-input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class=" ">
                                        <div class="flex gap-3 items-center ">
                                            <div>
                                                <div class=" ">
                                                    <div class="p-2 text-sm">
                                                        {{ option.Gender }}
                                                    </div>
                                                    <n1-radio
                                                        [options]="
                                                            genderOptions
                                                        "
                                                        [(value)]="
                                                            selectedGender
                                                        "
                                                        [name]="'gender'"
                                                        [label]="
                                                            'Gender Selection'
                                                        "
                                                    ></n1-radio>
                                                </div>
                                            </div>
                                            <div class="  ">
                                                <n1-details-input
                                                    [(value)]="
                                                        option.Passport_NO
                                                    "
                                                    [label]="'Passport No*'"
                                                    [placeholder]="
                                                        'Enter Traveller Name'
                                                    "
                                                    [name]="'firstName'"
                                                    required
                                                ></n1-details-input>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="p-2"><hr /></div>

                                        <div
                                            class="p-3 justify-center  rounded-lg items-center"
                                        >
                                            <div
                                                class="text-xl font-bold text-gray-900 "
                                            >
                                                {{ option.Contact }}
                                            </div>
                                            <div class="text-sm font-bold">
                                                {{ option.related }}
                                            </div>
                                            <div class="flex gap-2 w-full">
                                                <div class="  w-full">
                                                    <n1-details-input
                                                        [(value)]="option.email"
                                                        [label]="'Email: '"
                                                        [placeholder]="' Email'"
                                                        [name]="'email'"
                                                        [pattern]="
                                                            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
                                                        "
                                                        required
                                                        [type]="'text'"
                                                    ></n1-details-input>
                                                </div>
                                                <div class=" w-full">
                                                    <n1-details-input
                                                        [(value)]="
                                                            option.number
                                                        "
                                                        [label]="
                                                            ' Mobile Number '
                                                        "
                                                        [placeholder]="
                                                            ' Mobile No '
                                                        "
                                                        [name]="'mobilenumber'"
                                                        [pattern]="
                                                            '^[0-9]{10}$'
                                                        "
                                                        required
                                                        [type]="'number'"
                                                        class="-moz-appearance: textfield  "
                                                    ></n1-details-input>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="p-2"><hr /></div>

                                        <div class="text-sm  p-2">
                                            {{ option.disease }}
                                        </div>
                                        <div class="flex gap-4">
                                            <div
                                                class="flex justify-center p-2"
                                            >
                                                <button
                                                    type="Button"
                                                    class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border focus:outline-none"
                                                    style="background-color: rgb(109, 157, 247);"
                                                >
                                                    <div class="text-white">
                                                        YES
                                                    </div>
                                                </button>
                                            </div>

                                            <div
                                                class="flex justify-center p-2"
                                            >
                                                <button
                                                    type="Button"
                                                    class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border focus:outline-none"
                                                    style="background-color: rgb(109, 157, 247);"
                                                >
                                                    <div class="text-white">
                                                        NO
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            class="flex items-center gap-3 p-2"
                                        >
                                            <input
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label for="checked-checkbox"
                                                ><div
                                                    class=" text-sm text-gray-900"
                                                >
                                                    {{ option.agree }}
                                                </div>
                                            </label>
                                        </div>

                                        <div
                                            class="flex items-center gap-3 p-2"
                                        >
                                            <input
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label for="checked-checkbox"
                                                ><div
                                                    class=" text-sm text-gray-900"
                                                >
                                                    {{ option.All }}
                                                </div>
                                            </label>
                                        </div>

                                        <div class="flex justify-center p-2">
                                            <button
                                                type="Button"
                                                class="items-center py-2 px-10 ms-2 font-bold text-white-900 block bg-blue-700 border focus:outline-none"
                                                style="background-color: rgb(109, 157, 247);"
                                            >
                                                <div class="text-white">
                                                    {{ option.Buy }}
                                                </div>
                                            </button>
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
            useExisting: forwardRef(() => N1InsTravellerDetailsComponent),
            multi: true,
        },
    ],
    imports: [
        FormsModule,
        CommonModule,
        N1RadioComponent,
        N1DetailsInputComponent,
        N1DropdownAirportComponent,
    ],
})
export class N1InsTravellerDetailsComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: person_details = {
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
        Currently: '',
        Traveller: '',
        fullname: '',
        Dob: '',

        Passport_NO: '',
        Gender: '',
        Relationship: '',
        Proposer: '',
        Details: '',
        Proposer_fullname: '',
        Proposer_Dob: '',
        Contact: '',
        related: '',
        number: '',
        email: '',
        disease: '',
        agree: '',
        All: '',
        Buy: '',
    };

    genderOptions = [' MALE ', ' FEMALE', ' OTHERS'];

    selectedGender: string = '';

    selectage: N1DropdownOptions[] = [
        {
            id: 1,
            name: 'Select Relation',
            cityDetails: '',
        },
        {
            id: 2,
            name: 'Son ',
            cityDetails: '',
        },
        {
            id: 3,
            name: ' Father',
            cityDetails: '',
        },
        {
            id: 3,
            name: 'Mother',
            cityDetails: '',
        },
        {
            id: 3,
            name: ' Daughter',
            cityDetails: '',
        },
        {
            id: 3,
            name: ' Brother',
            cityDetails: '',
        },
        {
            id: 3,
            name: 'Sister',
            cityDetails: '',
        },
        {
            id: 3,
            name: ' Spouse',
            cityDetails: '',
        },
    ];

    age = this.selectage[1];

    ngOnInit() {
        console.log(this.option);
    }
}
