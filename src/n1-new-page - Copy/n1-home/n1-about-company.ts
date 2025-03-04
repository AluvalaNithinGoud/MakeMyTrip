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
import { N1TechnologiesComponent, Technology_details } from './n1-technologies';

export interface about_details {
    name: string;
    Our: string;
    img: string;
    
}

@Component({
    standalone: true,

    selector: 'n1-about-company',
    template: `
        <div class=" bg-white  ">
            <div class="    p-3  ">
                <div class="flex  p-3 items-center">
                    <div>
                        <img class=" size-12 " alt="" src="{{ option.img }}" />
                    </div>

                    <div class="  ">
                        <div class="  font-bold text-lg text-gray-900  block ">
                            {{ option.name }}
                        </div>
                    </div>
                </div>
 
    <div>{{option.Our}}</div>
    <br>
    <div class="flex w-1/3     "> 
  <div class="  " *ngFor="let  many   of    techno">
    <n1-technologies [option]="   many"></n1-technologies>
  </div>
  </div>

            </div>
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1AboutCompanyComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1TechnologiesComponent],
})
export class N1AboutCompanyComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: about_details = {
        name: '',
        Our: '',
        img: '',
       
    };

    techno  :    Technology_details [] = [
        {
          Digital:"Digital  ",
        },
        {
            Digital:"Oracle  ",
          },
          {
            Digital:"SAP  ",
          },
          {
            Digital:"Infor  ",
          },
          {
            Digital:"Microsoft  ",
          },
      ]

    ngOnInit() {
        console.log(this.option);
    }
}
