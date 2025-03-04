
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { bank_options, N1SelectBankComponent } from "./n1-select-bank";
import { N1SelectTenureComponent, Tenure_options } from "./n1-select-tenure";
import { credit_debit_options, N1CreditDebitComponent } from "./n1-credit-debit";
 
export interface    choose_bank {
   all_bank : string,
  name: string,
   Select:string,
   Below:string ,
    

}






@Component({
  standalone: true,

  selector: 'n1-choose-your-bank',
  template: `
       
        

          
         <div class="font-bold text-gray-900 text-lg block ">{{option.name}}</div>
         
         
 
 <br>
 <div class="p-3">
 <div class="font-bold text-gray-900 text-lg block   ">{{option.Select}}</div>
 <div class="  text-gray-900 text-sm  ">{{option.Below}}</div>
 </div>

<div class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
  <div class="px-7">
    <div class="relative     overflow-hidden bg-white ring-1 shadow-lg ring-gray-900/5 dark:bg-gray-800">
      <div class="  top-0 right-0 left-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10"> {{option.all_bank}}</div>
      <div class="flex h-80 flex-col divide-y divide-gray-200 overflow-auto dark:divide-gray-200/5">
         
      <div class="w-full  " *ngFor="let  select_your  of   bank">
     <n1-select-bank [option]="   select_your"></n1-select-bank>
       </div>
 
          </div></div></div></div>
             
         
          

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  N1ChooseYourBankComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1SelectBankComponent, N1SelectTenureComponent, N1CreditDebitComponent]
})
export class  N1ChooseYourBankComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';


  @Input() option: choose_bank = {
    all_bank: '',
    name: '',
    Select:'',
    Below: '',
    
  };
  bank :  bank_options[] = [
    {    
      Bank_name:" HDFC Bank",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/card_paymode.png",
       percentage :  "16% p.a.",
       
     },
    {    
      Bank_name:"State Bank of India",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/sbi.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:" Kotak Mahindra Bank",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/kotak_bank.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:" Bajaj Finserv",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/BajajFS.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:" MakeMyTrip ICICI Bank Credit Card",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/mmt_icici_travel_icon.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:"BOBCARD",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/bobcard.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:" HDFC Bank",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/hdfc.png",
       percentage :  "16% p.a.",
       
     },
    {    
      Bank_name:"ICICI Bank",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/icici.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:" Axis Bank",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/card_paymode.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:" Axis Bank",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/axis_bank.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:"American Express",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/amex_logo.png",
       percentage :  "16% p.a.",
     
    },
    {    
      Bank_name:"RBL Bank",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/axis_bank.png",
       percentage :  "16% p.a.",
     
    },
  
  ] 
   
  

  ngOnInit() {
    console.log(this.option);   
  }
}

