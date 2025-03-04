import {
    Component,
    Input,
    Output,
    EventEmitter,
    forwardRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
export interface paylater_options {
    Pay: string,
    name: string,
     img:string,
     Starts:string ,
     months:string,
     No: string,
     img1:string ,
     img2:string ,
     img3:string ,
     img4:string ,
     img5:string ,
     img6:string ,
     img7:string ,
     img8:string ,
     
     Meet:string,
     people: string,
     Find:string ,
     Our:string,
    //  enter_cvv: string,
    
}

@Component({
    standalone: true,

    selector: 'n1-paylater',
    template: `
 <div class="bg-white flex justify-center p-6 ">

<div class=" border w-5/6 p-3 bg-white ">



        <div class=" flex justify-between">
        <div class="font-bold text-gray-900 text-xl block p-2 ">{{option.Pay}}</div>
        <div class="flex items-center">
        <div class="     ">{{option.name}}</div>
        <img class="w-16 h-8 " src={{option.img}}>
</div>
        </div>


        <div class="text-gray-900  flex gap-9 p-2">
        <div class="     ">{{option.Starts}}</div>
        <div class="     ">{{option.months}}</div>
        </div>
  
        <div class=" text-gray-900  p-2   ">{{option.No}}</div>
        <br>
<hr>
<br>
<div class="font-semibold text-gray-900 text-xl block   ">{{option.Meet}}</div>
<div class="  ">{{option.people}}</div>

<br>

<div class=" flex gap-8 p-2">
<img class="w-19 h-8 " src={{option.img1}}>
<img class="w-19 h-8 " src={{option.img2}}>
<img class="w-19  h-8 " src={{option.img3}}>
<img class="w-19  h-8 " src={{option.img4}}>
</div>
<div class=" flex gap-8 p-2">
<img class="w-19  h-8 " src={{option.img5}}>
<img class="w-19  h-8 " src={{option.img6}}>
<img class="w-19  h-8 " src={{option.img7}}>
<img class="w-19  h-8 " src={{option.img8}}>
  </div>
<br>
  <hr>
<br>
<div class="font-bold text-gray-900 text-lg block   ">{{option.Find}}</div>
<div class="  ">{{option.Our}}</div>
<br>
<div class="    ">
    <button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-white-900 text-lg block bg-blue-700 border focus:outline-none" style="background-color: rgb(109, 157, 247);"><div class="text-white"> FIND PARTNERS
</div></button></div>
</div>     
  </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1paylaterComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,  ],
})
export class N1paylaterComponent {
    @Input() label: string = ' ';
    @Input() value: string = '';

    @Input() option: paylater_options = {
        Pay: '',
        name: '',
        img:'',
        Starts: '',
        months:'',
        No: '',
        img1:'',
        img2:'',
        img3:'',
        img4:'',
        img5:'',
        img6:'',
        img7:'',
        img8:'',
        
          Meet: '',
        people:'',
        Find: '',
          Our: '',
        // card_number:'',
        // enter_cvv: '',

    };

   

    ngOnInit() {
        console.log(this.option);
    }
}
