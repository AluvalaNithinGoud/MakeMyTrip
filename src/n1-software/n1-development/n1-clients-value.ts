
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface   value {
  What: string,
  Three: string,
  img: string,
  img1: string,
  img2: string,
  name: string,
  senior: string,
  We: string,
  // img: string,
  
}






@Component({
  standalone: true,

  selector: 'n1-clients-value',
  template: `
    
    <div  class=" p-2   text-xl text-gray-900 ">{{option.What}}</div>  
    <div class="    p-3 "  >
<div class=" p-3   items-center" style="background-color: rgb(221, 235, 236);"  >
  <div class="p-4 flex  gap-5">
 <div>
 <img alt=" " class="   w-20 h-15 " src={{option.img}}>
</div>

<div class="gap-4">
<div class="flex gap-3">
 <img alt="" class="  rounded-full  w-19 h-14" src={{option.img1}}>
 <div>
<div class="text-lg font-semibold text-gray-800">{{option.name}}</div>
<div >{{option.senior}}</div>
</div>
 
</div>
<br>
<div class="  text-gray-800">{{option.We}}</div>

</div>

<div class="flex gap-2 p-2  mr-9">
 <img alt=" " class=" size-4 " src={{option.img2}}>
 <img alt=" " class="  size-4 " src={{option.img2}}>
 <img alt=" " class="  size-4 " src={{option.img2}}>
 <img alt=" " class="  size-4 " src={{option.img2}}>
 <img alt=" " class="  size-4 " src={{option.img2}}>

</div>

 
</div>

<div class="p-4 flex justify-end">
  <button type="Button" class="items-center py-2 px-10 ms-2  text-white-900 text-lg block bg-blue-700 focus:outline-none">
  <div class="text-gray-900"> Check the original </div></button></div>
</div>

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1ClientsValueComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1ClientsValueComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: value = {
    What: '',
    Three: '',
    img:'',
    img1: '',
    img2: '',
    name:'',
    senior: '',
    We: '',
    // img:'',
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
