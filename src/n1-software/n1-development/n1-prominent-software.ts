
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface  different_software {
   Some: string,
  img1: string,
  Health: string,
  Compliant: string,
  ScienceSoft: string,
    img2: string,
  img3: string,
  Based: string,
    In: string,
  Software: string,
  // email: string,
   
}






@Component({
  standalone: true,

  selector: 'n1-prominent-software',
  template: `
    

    <div class=" ">
    <div class=" ">
    <div  class=" p-2   text-2xl ">{{option.Some}}</div>

    <div class="flex ">
      <img alt=" " class="  " src={{option.img1}}>
<div class="">
 <div class="p-4" style="background-color: rgb(253, 249, 244);" >
 
 <div  class="w-14  text-gray-900 p-2 bg-white">{{option.Health}}</div>
 
<div  class=" text-xl text-gray-900 p-2">{{option.Compliant}}</div>
<div  class=" tetx-medium text-gray-900 p-2">{{option.ScienceSoft}}</div>

<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900  block bg-blue-700 border focus:outline-none"  ><div class="text-gray-900">See Project Details --&gt; </div></button></div>
 </div> 
</div>
    </div>
 

 
<div class="flex ">
 <div class="">
<div class="p-4" style="background-color: rgb(211, 215, 240);" >
<div class="flex gap-2">
<div  class="   text-gray-900 p-2 bg-white">{{option.Health}}</div>
<div  class="   text-gray-900 p-2 bg-white">{{option.Software}}</div>
</div>
<img alt=" ." class="w-30 h-10 p-2 " src={{option.img3}}>

<div  class=" text-xl text-gray-900 p-2">{{option.Based}}</div>
<div  class=" tetx-medium text-gray-900 p-2">{{option.In}}</div>

<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900  block bg-blue-700 border focus:outline-none"  ><div class="text-gray-900">See Project Details --&gt; </div></button></div>
</div> 
</div>
<img alt=" " class="  " src={{option.img2}}>

</div>
 

    </div>
    </div>

    

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ProminentSoftwareComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1ProminentSoftwareComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: different_software = {
    Some: '',
    img1: '',
    Health:'',
    Compliant:'',
    ScienceSoft:'',
    img2:'',
    img3:'',
    Based:'',
     In:'',
    Software:'',
    // email:'',
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
