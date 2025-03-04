
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { hotel_type_options, N1HotelDetailsComponent } from "./n1-hotel-details";
  
 

export interface   stayoptions{
  Name: string,
dates: string,
  // user: string,
  // cancellation: string,
  //     and: string,
   
}






@Component({
  standalone: true,

  selector: 'n1-for-your-stay',
  template: `
       
         <div class=" flex justify-center   p-5">

         <div class="     w-5/6  bg-white border p-3 ">
           
  
      
      <div class="text-xl font-bold text-gray-900  ">{{option.Name}}</div>
      <div class="  text-gray-900  ">{{option.dates}}</div>
      
      <div class=" flex p-4   ">
 <div class=" " *ngFor="let choose  of  hotels_details">
  <n1-hotel-details [option]=" choose"></n1-hotel-details>
  </div>
  </div>

</div>
</div> 
 
         
          
        
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ForYourStayComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1HotelDetailsComponent]
})
export class N1ForYourStayComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option:   stayoptions = {
    Name: '',
      dates: '',
    //   cancellation: '',
    //     and: '',
    
 
     
   };
  

    hotels_details :   hotel_type_options [] = [
       {
            img:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201203301842173153-3275c498929611ee8a710a58a9feac02.jpg?&downsize=583:388&output-format=jpg ",     
           hotel_name:" Lemon Tree Premier Delhi Airport",
           price:"₹14,400",
           Per :  "Per Night",
           city:  "Aerocity",
       },
       {
        img:"https://r1imghtlak.mmtcdn.com/d076a970c29e11ebbbed0242ac110005.jpg?&downsize=583:388&output-format=jpg",     
       hotel_name:"Radisson Blu Plaza Delhi Airpor",
       price:"₹19, 455",
       Per :  "Per Night",
       city:  "Aerocity",
   },

    {
        img:"https://r1imghtlak.mmtcdn.com/1d844e72560711ee9bce0a58a9feac02.jpg?&downsize=583:388&output-format=jpg",     
       hotel_name:" Hotel The Royal Plaza Plaza",
       price:"₹16,566",
       Per :  "Per Night",
       city:  "Aerocity",
   },
     ]

  ngOnInit() {
    console.log(this.option);  
  }   
}
