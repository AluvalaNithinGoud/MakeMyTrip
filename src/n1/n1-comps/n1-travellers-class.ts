import {   Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1DropdownComponent } from '../../app/inputs/elements/n1-dropdown';
 
 
 

@Component({
  standalone: true,

    selector: 'n1-travellars-class',
    template: `
               <div class=" ">
  
    

    <div class="dropdown-container ">
    <span class="block mb-1 text-lg font-bold mt-2"
    
    >Travellers & Class</span>
     
    
                            <n1-dropdown
                                [data]="seatsbooking"
                                [(value)]="selectedseats"
                                [label]="' '"
                                (valueChange)="onOptionSelected($event)"
                          
                            ></n1-dropdown>
                       
               </div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => N1TravellersClassComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule,N1DropdownComponent ]
})
export class N1TravellersClassComponent{

  isDropdownOpen = false;
   
  selectedOption: any = {
      id: 1,
      name: '  1',
        
  };
  selectedseats: string = '';


  seatsbooking = [
    
    {
      id: 1,
      name: '1',
     },
  {
    id: 2,
    name: '2', 
},

{
  id: 3,
  name: '3',
 },

{
id: 4,
name: '4',
},

{
  id: 5,
  name: '5',
 },
{
id: 6,
name: '6',
},
{
  id: 7,
  name: '7',
  },

];

toggleDropdown(): void {
  this.isDropdownOpen = !this.isDropdownOpen;
}


onOptionSelected(value: string): void {
  this.isDropdownOpen = false;
  this.selectedseats = value;
  this.selectedOption = this.seatsbooking.find(
      (opt) => opt.name == value
  );
}

  
  
  
}
