
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { estimations, N1ApproximateCostComponent } from './n1-approximate-cost';
   
 

export interface Development_services  {
  name: string,  
  work: string,
  Here: string,
  Wondering: string,  
  Jump: string,
  The: string,
  img: string,  
  Tim: string,
  Director: string,
  Pricing: string,  
  An: string,
  // The: string,
  }






@Component({
  standalone: true,

  selector: 'n1-costs-of-software ',
  template: `
        
    <div class="p-8 justify-center"  >
<div class="   bg-white p-4  " >
 
 
   <div  class="   text-xl text-gray-900 p-2 font-semibold"> {{option.name}}</div>
   <div  class="  text-medium text-gray-900  "> {{option.work}}</div>
   <div  class="  text-medium text-gray-900  "> {{option.Here}}</div>

<br>
<br>
   <div  class=" items-center flex gap-7  grid grid-cols-3 " > 
   <div class="  " *ngFor="let      Development   of  Services ">
  <n1-approximate-cost  [option]=" Development   "></n1-approximate-cost >
</div>

<div class="  items-center  shadow border "  style="background-color: rgb(88, 78, 216);" >
 
 
 
<div class=" flex  text-lg justify-center font-semibold text-white p-2  ">   {{option.Wondering}}
</div>
   <div  class="flex  justify-center  text-medium text-white p-4   "> {{option.Jump}}</div>
   <div class="p-1 "><button type="Button" class="items-center py-1.5 px-4 ms-2 font-semibold text-gray-900 text-lg block bg-blue-700 border focus:outline-none" style="background-color: rgb(252, 165, 67);"><div class=" ">Calculate the cost</div></button></div>


</div>
 </div>
 <br>
 <br>
 <div  class="  text-medium text-gray-900 p-4   "> {{option.The}}</div>
   </div>
</div>
<div class="p-8 justify-center"  >
<div class="   bg-white p-4 " >

<div class="flex gap-3 justify-between">
<div class="p-4 mr-8 gap-2">
<div class="  w-full"> <img alt=" " class="w-30 h-20" src={{option.img}}></div>
<div class="   text-lg  font-semibold text-gray-900  underline ">   {{option.Tim}}</div>
<div class=" text-lg   text-gray-900  ">   {{option.Director}}</div>
</div>
<div  class="p-4 gap-4">
<div class=" text-lg  p-2  text-gray-900  ">   {{option.Pricing}}</div>
<div class="   p-2  text-gray-900  ">   {{option.An}}</div>
</div>

</div>

</div>
</div>

  
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1CostsOfSoftwareComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1ApproximateCostComponent  ]
})
export class N1CostsOfSoftwareComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Development_services  = {
    name: '',
    work:'',
    Here:'',
    Wondering: '',
    Jump:'',
    The:'',
    img: '',
    Tim:'',
    Director:'',
    Pricing: '',
    An:'',
    // The:'',
   };
Services     :    estimations [] = [
    {    
      name:"$30,000–$70,000",  
      Software:"Developing a mobile app of moderate complexity.",
      img:'https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/pricing-examples/mobile-1.svg',   
    },
    {    
      name:"~$150,000",  
      Software:"Building a native mobile banking or telehealth app.",
      img:'https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/pricing-examples/mobile-2.svg',   
    },
    {    
      name:"$150,000–$350,000",  
      Software:"Creating a client-facing web platform for the mid-market.",
      img:'https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/pricing-examples/web-portal-2.svg',   
    },
    {    
      name:"~$200,000–$400,000+",  
      Software:"Building a specialized automation solution (e.g., for accounting, SCM, ecommerce) of average complexity.",
      img:'https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/pricing-examples/price-automation-blue.svg',   
    },
    {    
      name:"~$800,000–$4,000,000",  
      Software:"Implementing a large-scale business automation system powered with big data and AI/ML.",
      img:'https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/pricing-examples/web-portal-3-1.svg',   
    },
 ]

  ngOnInit() {
    console.log(this.option);  
  }   
}
