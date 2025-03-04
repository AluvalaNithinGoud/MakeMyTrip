import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { N1InputComponent } from "./elements/n1-input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FromtoComponent } from './elements/from-to';
import { N1DropdownComponent } from './elements/n1-dropdown';
import { N1RadioComponent } from './elements/n1-radio';
import { DateRangeComponent } from "./elements/date-range";
import { NextPageComponent } from './elements/next-page';
import { PriceRangeComponent } from './elements/price-range';
import { BookNowComponent } from './elements/book-now';
 
@Component({
    selector: 'app-inputs',
    standalone: true,
    imports: [RouterOutlet, RouterLink ,  N1InputComponent, ReactiveFormsModule, FromtoComponent, N1DropdownComponent, N1RadioComponent, DateRangeComponent, NextPageComponent, BookNowComponent ],
    templateUrl: './inputs.component.html',
    styleUrl: './inputs.component.scss',
})
export class InputsComponent {

    cid = "nsk0";
    cid1 = "nsk1";
    cid2 = "nsk2";
    disabled = false;
    label = "newLabel";
    type = "text";
    value = "123";

    profileForm = new FormGroup({
        nsk1: new FormControl('x', [Validators.required, Validators.minLength(3)]),
        nsk2: new FormControl('', Validators.email),
    });

     

    dropdownOptions = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
      ];
      selectedOption: string = ''; // To track the selected value
    
      selectedGender: string = ''; 
      genderOptions: string[] = ['Male', 'Female', 'Other'];
      
     
      selectedDates = ['2025-01-10T00:00:00Z'];

      constructor(private router: Router) {}  // Inject Router

      navigateToSearch(): void {
        // Navigate to NextPageComponent route
        this.router.navigate(['./elements/next-page']);
      }
      searchValue: string = '';

}