
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
 

export interface   Software_consulting {
   How: string,
  consulting: string,
  Custom: string,
  Enterprise: string,
  product: string,
    Cloud: string,
  Support: string,
  Legacy: string,
  
   
}






@Component({
  standalone: true,

  selector: 'n1-how-we-help',
  template: `
    

    <div class="  flex  justify-center">
    <div class="   bg-white">
      
  <div  class=" p-2   text-2xl ">{{option.How}}</div>

<div class=" border flex">

<div class="w-1/3 P-2" style="background-color: rgb(211, 215, 240);">

<div class=" ">
        <button 
          class=" p-2 py-2 text-center text-sm font-medium  transition duration-300"
          [ngClass]="activeTab === 'consulting' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('consulting')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.consulting}}</div>

</div>

        </button>
        </div>

        <div>  
        <button 
          class="p-2 py-2 text-center text-sm font-medium   transition duration-300"
          [ngClass]="activeTab === 'Custom' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Custom')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.Custom}}</div>

</div>
        </button>
        </div>

        <div>
        <button 
          class=" p-2 py-2 text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'Enterprise' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Enterprise')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.Enterprise}}</div>

</div>
        </button>
        </div>
    
      <div>
      <button 
          class=" p-2 py-2 text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'product' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('product')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.product}}</div>

</div>
        </button>
</div>

<div>
      <button 
          class=" p-2 py-2 text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'Cloud' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Cloud')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.Cloud}}</div>

</div>
        </button>
</div>



<div>
      <button 
          class=" p-2 py-2 text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'Support' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Support')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.Support}}</div>

</div>
        </button>
</div>

<div>
      <button 
          class=" p-2 py-2 text-center text-sm font-medium transition duration-300"
          [ngClass]="activeTab === 'heloo' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'"
          (click)="setActiveTab('Legacy')">
          <div class=" ">
          <div class="text-lg text-gray-900    ">{{option.Legacy}}</div>

</div>
        </button>
</div>

</div>
      
      <div class="p-4 w-1/2  rounded-md mt-4">
      
        <div *ngIf="activeTab === 'consulting'">
          <div class="p-9 justify-center">
        <div class="flex justify-center text-lg font-semibold text-gray-900">
        Software consulting
</div>
<div class=" flex justify-center p-4 text-gray-900">
We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.
</div>
<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900 block bg-blue-700 border focus:outline-none"><div class="text-gray-900"> Explore further --&gt; </div></button></div>
</div>
        </div>




        <div *ngIf="activeTab === 'Custom'">
        <div class="p-9 justify-center">
        <div class="flex justify-center text-lg font-semibold text-gray-900">
        Custom software development
</div>
<div class=" flex justify-center p-4 text-gray-900">
We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.
</div>
<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900 block bg-blue-700 border focus:outline-none"><div class="text-gray-900"> Explore further --&gt; </div></button></div>
</div>
        </div>


        <div *ngIf="activeTab === 'Enterprise'">
        <div class="p-9 justify-center">
        <div class="flex justify-center text-lg font-semibold text-gray-900">
        Enterprise software development
</div>
<div class=" flex justify-center p-4 text-gray-900">
We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.
</div>
<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900 block bg-blue-700 border focus:outline-none"><div class="text-gray-900"> Explore further --&gt; </div></button></div>
</div>
</div> 


<div *ngIf="activeTab === 'product'">
<div class=" ">
<div class="p-9 justify-center">
        <div class="flex justify-center text-lg font-semibold text-gray-900">
        Software product development
</div>
<div class=" flex justify-center p-4 text-gray-900">
We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.
</div>
<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900 block bg-blue-700 border focus:outline-none"><div class="text-gray-900"> Explore further --&gt; </div></button></div>
</div>
</div>
</div>

<div *ngIf="activeTab === 'Cloud'">
<div class=" ">
<div class="p-9 justify-center">
        <div class="flex justify-center text-lg font-semibold text-gray-900">
        Cloud application development
</div>
<div class=" flex justify-center p-4 text-gray-900">
We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.
</div>
<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900 block bg-blue-700 border focus:outline-none"><div class="text-gray-900"> Explore further --&gt; </div></button></div>
</div>
</div>
</div>

<div *ngIf="activeTab === 'Support'">
<div class="flex gap-8">
<div class="p-9 justify-center">
        <div class="flex justify-center text-lg font-semibold text-gray-900">
        Support and maintenance
</div>
<div class=" flex justify-center p-4 text-gray-900">
We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.
</div>
<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900 block bg-blue-700 border focus:outline-none"><div class="text-gray-900"> Explore further --&gt; </div></button></div>
</div></div>
</div>

<div *ngIf="activeTab === 'Legacy'">
<div class="flex gap-8">
<div class="p-9 justify-center">
        <div class="flex justify-center text-lg font-semibold text-gray-900">
        Legacy software modernization
</div>
<div class=" flex justify-center p-4 text-gray-900">
We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.
</div>
<div class="p-2"><button type="Button" class="items-center py-2 px-10 ms-2 font-bold text-gray-900 block bg-blue-700 border focus:outline-none"><div class="text-gray-900"> Explore further --&gt; </div></button></div>
</div>
</div>
</div>

        </div>




</div>


    </div>
    </div>

    

 
           
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1HowWeHelpComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, ]
})
export class N1HowWeHelpComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Software_consulting = {
    How: '',
    consulting: '',
    Custom:'',
    Enterprise:'',
    product:'',
    Cloud:'',
    Support:'',
    Legacy:'',
    
   };

   activeTab: string = 'consulting';

   setActiveTab(tab: string): void {
     this.activeTab = tab;
   }
       
  ngOnInit() {
    console.log(this.option);  
  }   
}
