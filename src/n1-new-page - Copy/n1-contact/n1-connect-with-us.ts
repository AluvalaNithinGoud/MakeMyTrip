
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface      connect{
   Connect: string,
  To: string,
  no1: string,
  no2: string,
  email: string,
  address: string,
  We: string,
  //  tell:string,
  // combine: string,
  // img: string,
  // Seamlessly: string,
}






@Component({
  standalone: true,

  selector: 'n1-connect-with-us',
  template: `
        
 
        <div class="  flex justify-center ">

<div class=" shadow  p-3 bg-white ">

  <div class="  text-[#4fd1c5]  text-lg font-bold p-1"> {{option.Connect}}</div> 
 <div class="text-gray-900    p-2 "> {{option.To}}</div>  
 
 <br>
<div class=" text-gray-900 p-2"> {{option.email}}</div> 
<div class=" p-2  text-gray-900   "> {{option.no1}}</div>
<div class=" p-2   text-gray-900  "> {{option.no2}}</div>
<div class=" p-2   text-gray-900 text-lg ">--> {{option.address}}</div>
<div class=" p-2   text-gray-900    ">  {{option.We}}</div>

</div>
</div>

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ConnectWithUsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1ConnectWithUsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:      connect = {
     Connect: '',
    To: '',
    no1:'',
    no2:'',
    email:'',
    address:'',
    We: '',
  
   };

    
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
