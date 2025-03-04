
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
    
 

export interface    paydetails{
  name:string,
  base : string,
  price : string,
  Dynamic : string,
  price1: string,
  price2: string,
  Catering: string,
  Totalprice: string,
     Total: string,
     // discription1: string,
      // discription1: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-pay-booknow',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="    w-2/5 bg-white border p-3 ">
    
<div  class="p-2 font-bold text-lg text-gray-900 block">{{option.name}}</div>

<div class="flex justify-between p-2">
<div>{{option.base}}</div>
<div>{{option.price}}</div>
</div>

<div class="flex justify-between p-2">
<div>{{option. Dynamic}}</div>
<div>{{option.price1}}</div>
</div>

<div class="flex justify-between p-2">
<div>{{option.  Catering}}</div>
<div>{{option.price2}}</div>
</div>

<div class="flex justify-between p-2">
<div>{{option.  Catering}}</div>
<div>{{option.price2}}</div>
</div>

<div class="flex justify-between p-2">
<div>{{option.  Catering}}</div>
<div>{{option.price2}}</div>
</div>

<div class="flex justify-between p-2">
<div>{{option.  Catering}}</div>
<div>{{option.price2}}</div>
</div>


<div class="flex justify-between p-2">
<div class="font-bold text-gray-900">{{option.   Total}}</div>
<div class="font-bold text-gray-900">{{option. Totalprice}}</div>
</div>

</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1PayBooknowComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1PayBooknowComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   paydetails = {
    name: '',
    base : '',
    price : '',
    Dynamic  : '',
    price1: '',
    Catering: '',
    price2: '',
    Totalprice: '',
    Total: '',
     //     and: '',
    //   cancellation: '',
    //     and: '',
     //     and: '',
    //   cancellation: '',
    //     and: '',
    
 
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
