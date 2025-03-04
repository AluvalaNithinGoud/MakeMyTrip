
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface  vipoptions {
  name: string,
  logo: string,
  desicription:string,
  checkin:string ,
      symbol: string,
      bag_service: string,
      Equal:string,
      amount:string,
}






@Component({
  standalone: true,

  selector: 'n1-vip',
  template: `
       
         <div class="bg-white flex justify-center p-6">

         <div class=" border w-5/6 p-3 bg-white">
          <div class="font-bold text-gray-900 text-lg block p-3">
          {{option.name}}
          </div>
          <div class="flex justify-end -mt-9">
          <button type="Button" class="   items-center py-1.5 px-2.5 ms-2.5 font-bold text-white-900  block bg-sky-500/75 rounded-full border   " 
 >
  +ADD</button>
</div>
          <div class="p-3">
            {{option.desicription}}
          </div>
          
          <div class="flex ml-6 gap-5">
            <div class="text-sm text-gray-900 ">
            {{option.checkin}}
            </div>
             <div>
            {{option.symbol}}
</div>
<div class="text-sm text-gray-900 ">
            {{option.bag_service}}
            </div>
            <div>
            {{option. Equal}}
</div>
<div class="font-bold text-gray-900 ">
            {{option.  amount}}
</div>
          </div>
         </div>
         </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1VipComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class  N1VipComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: vipoptions = {
    name: '',
    logo: '',
    desicription:'',
    checkin: '',
      symbol: '',
      bag_service: '',
      Equal: '',
      amount: '',
  };
  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
}
