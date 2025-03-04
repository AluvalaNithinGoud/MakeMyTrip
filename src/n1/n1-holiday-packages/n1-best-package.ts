
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
    
 

export interface     bestseller{
  img1:string,
  Most : string,
  Goa : string,
  num : string,
  round: string,
  star: string,
  Airport: string,
  Selected: string,
  Includes : string,
  price: string,
  Person: string,
  Extra: string,
        off: string,
         welcome: string,
         price1:string,
   
}






@Component({
  standalone: true,

  selector: 'n1-best-package',
  template: `
        
         <div class=" flex justify-center   p-5">
         <div class="    w-2/5 bg-white border  rounded-lg ">
    
         <div class=" ">
                                <img
                                    class=" w-full  rounded-lg"
                                    src="{{ option.img1 }}"
                                    alt=""
                                />
                            </div>
  <div class="p-2">           
                            
<div class="p-2">
<div class="flex justify-between   items-center">
<div  class="  font-bold text-lg text-gray-900 block">{{option.Most}} </div>
<div class="border px-1 rounded-lg"> {{option.num}}</div>
</div>
<div> {{option.Goa}}</div>
<div class="p-2"><hr></div>
</div>

<div class="p-2">
<ul class="list-disc flex justify-between ">
  <li class="ml-8">{{option.round}} </li>
  <li  class="mr-9">{{option.star}} </li>
</ul>
<ul class="list-disc flex justify-between  ">
  <li class="ml-8">{{option.Airport}} </li>
  <li  class="mr-4">{{option.Selected}} </li>
</ul>
</div>
<br>
<div class="border rounded-lg flex justify-between">
<div class="p-2">{{option.Includes}}</div>
<div>
<div class="  font-bold text-lg text-gray-900 block flex"> {{option.price}}</div>
<div> {{option.Person}}</div>
</div>
</div>

<div  class="  flex items-center p-2 gap-1">
<div >{{option.Extra}}</div>
<div  class="  font-bold text-lg text-gray-900 block  ">{{option.price1}}</div>
<div>{{option. off}}</div>
<div  class="  font-bold text-lg text-gray-900 block  ">{{option.welcome}}</div>
</div>

</div>
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1BestPackageComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1BestPackageComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   bestseller = {
    img1: '',
    Most : '',
    Goa : '',
    num  : '',
    round: '',
    star: '',
    Airport: '',
    Selected : '',
    Includes : '',
    price: '',
    Person: '',
    Extra: '',
         off: '',
         welcome: '',
         price1:'',
 
     
   };
    
   
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
