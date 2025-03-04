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
 
export interface   countries  {
  country_name: string;
   img1: string;
   
    
}

@Component({
    standalone: true,

    selector: 'n1-country-checkbox',
    template: `
<div class=" flex  p-2 ">
<div class="        ">

<figure class="relative  transition-all duration-300 cursor-pointer  ">
<figcaption class="absolute px-4 text-lg text-white bottom-11  ml-9">
<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
  </figcaption>
  <a href="#">
    <img class="rounded-lg  " src="https://tripmoneycmsimgak.mmtcdn.com/img/Thailand_e0981480d2.png?im=Resize=(80)" alt="image description">
  </a>
  <figcaption class="absolute px-4 text-sm font-bold text-white bottom-1">
      <p> {{option.country_name}}</p>
  </figcaption>
</figure>

 
</div>
</div>

    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1CountryCheckboxComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  ],
})
export class N1CountryCheckboxComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option:  countries = {
      country_name: '',
       img1: '',
       
         
    };

    ngOnInit() {
        console.log(this.option);
    }
}
