
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
       
 

export interface      webinar_details{
  Upcoming:string,
  Webinar: string,
  Past: string,
  Watch: string,
  img: string,
  Meet:string,
  date: string,
  Transform: string,
}






@Component({
  standalone: true,

  selector: 'n1-webinar',
  template: `
        <br>
        <br>
         <div class="  ">
         <div class="    ">
          
         <figure class="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
  <a href="#">
    <img class=" w-full" src={{option.img}} alt="image description">
  </a>
  <figcaption class="absolute px-4 text-lg text-white bottom-9 -mt-6">
      <p class="font-bold text-lg">WEBINAR</p>
  </figcaption>
</figure>

         

         <div class=" flex justify-center p-4 ">
         <div  class=" p-4 font-semibold text-lg  select-all  block border-r-2">{{option.Upcoming}}</div>
         <div  class=" p-4 font-semibold text-lg  select-all  block border-r-2">{{option.Webinar}}</div>
         <div  class=" p-4 font-semibold text-lg  select-all  block border-r-2">{{option.Past}}</div>
         <div  class=" p-4 font-semibold text-lg  select-all block border-r-2">{{option.Watch}}</div>
         </div>
         <br>
         <div class="   justify-center p-4">
         <div  class=" p-2  text-gray-900  text-lg   ">{{option.Meet}}</div>
         <div  class=" p-2   text-medium  ">{{option.date}}</div>
         <div  class=" p-2  text-medium   ">{{option.Transform}}</div>
        
         </div>


         
  

</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1WebinarComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1WebinarComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:     webinar_details = {
    Upcoming: '',
    Webinar: '',
    Past: '',
    Watch: '',
    img: '',
    Meet: '',
    date: '',
    Transform: '',
   };
    
     
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
