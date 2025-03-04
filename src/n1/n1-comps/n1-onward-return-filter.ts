
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 

export interface  onwardreturnoptions{
  name: string,
  stops: string,
  departure: string,
  before: string,
  before1: string,
  morningtime: string,
  morningtime1: string,
  afterNoon: string,
  afterNoon1: string,
   night: string,
   night1: string,
  arrival: string,
  departure_air:string,
}






@Component({
  standalone: true,

  selector: 'n1-onward-return-filter',
  template: `
       
         <div class=" flex justify-center   p-5">

         <div class="     w-2/5  bg-white border  ">
           <div >
            <div class="p-3 text-lg font-bold  text-gray-900 ">
{{option.name}}
            </div>
            <div  class="p-3   font-bold  text-gray-900 ">
{{option.stops}}
</div>
</div>
           <div>
     <div class="p-2   font-bold  text-gray-900 "> {{option.departure}}</div>
     <div class="flex text-sm gap-4  justify-center font-bold  text-gray-900 p-4 cursor-pointer">
      <div class=" border text-sm p-2 rounded-md">
      <div>{{option.before}}</div>
      <div>{{option.before1}}</div>
</div>
<div  class=" border text-sm p-2  rounded-md ">
      <div>{{option. morningtime}}</div>
      <div>{{option.morningtime1}}</div>
      </div>
      <div  class=" border text-sm p-2 rounded-md">
      <div>{{option.afterNoon}}</div>
      <div>{{option.afterNoon1}}</div>
      </div>
      <div  class=" border text-sm p-2 rounded-md">
      <div>{{option.night}}</div>
      <div>{{option.night1}}</div>
      </div>
     </div>
         </div>


         <div>
     <div class="p-2   font-bold  text-gray-900 "> {{option.arrival}}</div>
     <div class="flex text-sm gap-4  justify-center font-bold  text-gray-900 p-4 cursor-pointer">
      <div class=" border text-sm p-2 rounded-md">
      <div>{{option.before}}</div>
      <div>{{option.before1}}</div>
</div>
<div  class=" border text-sm p-2  rounded-md ">
      <div>{{option. morningtime}}</div>
      <div>{{option.morningtime1}}</div>
      </div>
      <div  class=" border text-sm p-2 rounded-md">
      <div>{{option.afterNoon}}</div>
      <div>{{option.afterNoon1}}</div>
      </div>
      <div  class=" border text-sm p-2 rounded-md">
      <div>{{option.night}}</div>
      <div>{{option.night1}}</div>
      </div>

     
     </div>
     <div class="p-2   font-bold  text-gray-900 ">{{option.departure_air}}</div>
         </div>
         </div>
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1OnwardReturnFilterComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1OnwardReturnFilterComponent {
  @Input() label: string = ' ';
 

  @Input() option: onwardreturnoptions = {
     name: '',
     stops: '',
     departure: '',
     before: '',
     before1: '',
       morningtime: '',
       morningtime1: '',
       afterNoon: '',
       afterNoon1: '',
        night: '',
        night1: '',
       arrival: '',
       departure_air:'',
     
   };
  

  ngOnInit() {
    console.log(this.option);  // Check if data is passed correctly
  }
  // @Output() valueChange = new EventEmitter<string>();

  //  _value: string = "";   
  //  get value(): string {
  //    return this._value;
  //  }
 
  //  @Input() set value(val: string) {
  //    this._value = val;
  //    this.valueChange.emit(val);
  //  }
 
  //  onOptionChange(selectedfliter: string): void {
  //   this.value = selectedfliter;
  // }
}
