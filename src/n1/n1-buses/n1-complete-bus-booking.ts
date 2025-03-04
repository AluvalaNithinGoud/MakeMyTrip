
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
   
 

export interface    bookdetails{
  name:string,
  seat: string,
  View: string,
  ac: string,
  time: string,
  destination_time: string,
  arrival_time: string,
  place: string,
  destination: string,
  Munirka: string,
  Rama: string,
  Metro: string,
  Bharat: string,
  vasant: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-complete-bus-booking',
  template: `
        
         <div class="flex justify-center   p-5">
         <div class="    border w-5/6 p-3 bg-white">

  
 
   <div class="flex justify-between   rounded-lg"> 
  <div class="  text-gray-900 cursor-pointer text-lg font-bold  ">{{option.name}}</div>
  <div class="text-gray-900   text-sm font-bold  ">{{option.seat}}</div>
   </div>  
 

<div  class="flex justify-between     items-center"> 
<div  class="  text-sm    font-bold"  >{{option. ac}}</div>
<div class="text-sm">{{option. View}}</div> 
</div>
 
&nbsp;
&nbsp;
&nbsp;
&nbsp;

&nbsp;

<div class=" ">
<div  class="flex justify-between     items-center"> 
<div  class="   text-lg  font-bold"  >{{option. time}}</div>
<div class="text-sm">{{option. destination_time}}</div> 
<div class="   text-lg">{{option. arrival_time}}</div> 

</div>

<div  class="flex justify-between     items-center"> 
<div  class="     "  >{{option. place}}</div>
<div class=" ">{{option. destination }}</div> 
</div>
&nbsp;
<div  class="flex justify-between     items-center"> 
<div  class="     "  >{{option. Munirka}}</div>
<div class=" ">{{option.  Rama }}</div> 
</div>
 
<div  class="flex justify-between     items-center"> 
<div  class="     "  >{{option. Metro}}</div>
<div class=" ">{{option.  Rama }}</div> 
</div>
 
<div  class="     "  >{{option. Bharat}}</div>
<div class=" ">{{option.  vasant }}</div> 
</div>

 
</div>
</div>
 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1CompleteBusBookingComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule,  ]
})
export class N1CompleteBusBookingComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:    bookdetails = {
    name: '',
    seat: '',
    ac: '',
     View: '',
     time: '',   
     arrival_time: '',
     destination_time: '',
     destination : '',
     place: '',   
     Munirka: '',
      Rama: '',
      Metro : '',
      Bharat : '',
      vasant : '',
    
   };
    
  
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
