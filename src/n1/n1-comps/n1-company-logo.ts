import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';

 


@Component({
    standalone: true,

    selector: 'n1-company-logo',
    template: `
     <div class="flex items-center  ">
     <!-- <img [src]="logo" [alt]=" " class="image" /> -->
     <div class="">
       <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0" d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
       
      </div>
           <span class="mt-">{{label}}</span>
     </div>
         

  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1CompanyLogo),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  ]
})
export class N1CompanyLogo {
  @Input() label: any = ' ';
  @Input()  logo: string = ' ';

}
