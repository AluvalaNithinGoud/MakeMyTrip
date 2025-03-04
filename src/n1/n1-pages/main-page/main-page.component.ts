import { Component } from "@angular/core";
import { N1RadioGroupComponent } from "../../n1-comps/n1-radio-group";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { N1RadioComponent } from "../../../app/inputs/elements/n1-radio";
import { N1FromComponent } from "../../n1-comps/n1-from";
import { N1ToComponent } from "../../n1-comps/n1-to";
import { N1SwapButtonComponent } from "../../n1-comps/n1-swap-button";
import { N1DepartureReturnComponent } from "../../n1-comps/n1-departure-return";
import { N1TravellersClassComponent } from "../../n1-comps/n1-travellers-class";
import { N1DropdownAirportComponent, N1DropdownOptions } from "../../n1-comps/n1-dropdown-airport";
 import { N1DetailsInputComponent } from "../../n1-comps/n1-details-input";
import { NgForm } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from "@angular/common";
import { N1CompanyLogo } from "../../n1-comps/n1-company-logo";
import { N1TimingsComponent } from "../../n1-comps/n1-timings";
import { N1PriceComponent } from "../../n1-comps/n1-price-component";
import { N1JourneyTimeComponent } from "../../n1-comps/n1-journey-time";
import { N1FlightSelect, Detailsoptions } from "../../n1-comps/n1-flight-select";
import { bookingoptions, N1CompleteBookingComponent } from "../../n1-comps/n1-complete-booking";
import { cancellationoptions, N1CancellationComponent } from "../../n1-comps/n1-cancellation";
import { addonoptions, N1AddOnsComponent } from "../../n1-comps/n1-add-ons";
import { N1ImpInformationComponent } from "../../n1-comps/n1-imp-information";
import { N1VipComponent, vipoptions } from "../../n1-comps/n1-vip";
import { N1TravellersDetailsComponent, travellersoptions } from "../../n1-comps/n1-travellers-details";
import { fareoptions, N1FareSummaryComponent } from "../../n1-comps/n1-fare-summary";
import { N1PromoCodeComponent, promooptions } from "../../n1-comps/n1-promo-code";
import { filteroptions, N1PopularFiltersComponent } from "../../n1-comps/n1-popular-filters";
import { N1OnwardReturnFilterComponent, onwardreturnoptions } from "../../n1-comps/n1-onward-return-filter";
import { N1HotelFilterComponent } from "../../n1-hotels/n1-hotel-filters";
import { N1PopularHotelComponent, popularoptions } from "../../n1-hotels/n1-popular-hotels";
import { bookingreviewoptions, N1ReviewBookingComponent } from "../../n1-hotels/n1-review-booking";
import { guestdataoptions, N1GuestDetailsComponent } from "../../n1-hotels/n1-guest-details";
import { N1SpecialRequestComponent, requestoptions } from "../../n1-hotels/n1-special-request";
import { N1TripSecureComponent, secureoptions } from "../../n1-hotels/n1-trip-secure";
import { paymentmodes, N1PaymentOptionsComponent } from "../../n1-hotels/n1-payment-options";
import { N1PayNowComponent, paynowoptions } from "../../n1-hotels/n1-pay-now";
import { N1SelectTravellersComponent, Travellersoptions } from "../../n1-trains/n1-select-travellers";
import { N1RefundComponent, refundoptions } from "../../n1-trains/n1-refund";
import { addoptions, N1AddTravellarComponent } from "../../n1-trains/n1-add-travellar";
import { accountdetails, N1AccountDetailsComponent } from "../../n1-trains/n1-account-details";
import { contactdetails, N1ContactInformationComponent } from "../../n1-trains/n1-contact-information";
import { discontdetails, N1OfferDiscountsComponent } from "../../n1-trains/n1-offers-discounts";
import { additionalsdetails, N1additionsComponent } from "../../n1-trains/n1-additions";
import { advisorysdetails, N1TravelAdvisoryComponent } from "../../n1-trains/n1-travel-advisory";
import { paydetails, N1PayBooknowComponent } from "../../n1-trains/n1-pay-booknow";
import { bestseller, N1BestPackageComponent } from "../../n1-holiday-packages/n1-best-package";
import { traindetails, N1TrainBookingComponent } from "../../n1-trains/n1-train-booking";
import { pricedetails, N1PriceDetailsComponent } from "../../n1-trains/n1-price-details";
import { classdetails, N1FirstClassComponent } from "../../n1-trains/n1-first-class";
import { busdetails, N1SelectBusComponent } from "../../n1-buses/n1-select-bus";
import { bookdetails, N1CompleteBusBookingComponent } from "../../n1-buses/n1-complete-bus-booking";
import { N1BusTravellerDetailsComponent,travellers } from "../../n1-buses/n1-bus-traveller-detaills";
import { contactbusdetails, N1BusContactDetailsComponent } from "../../n1-buses/n1-bus-contact-detaills";
import { securedetails, N1BusSecureComponent } from "../../n1-buses/n1-bus-secure";
import { offersdetails, N1BusMydealComponent } from "../../n1-buses/n1-bus-mydeal";
import { pricetotal, N1BusPriceDetailsComponent } from "../../n1-buses/n1-bus-price-details";
import { cabdetails, N1SelectCabComponent } from "../../n1-cabs/n1-select-cab";
import { bookingdetails, N1CabBookingComponent } from "../../n1-cabs/n1-cab-booking";
import { inclusionsdetails, N1InclusionsComponent } from "../../n1-cabs/n1-inclusions";
import { specialdetails, N1SpecialReqComponent } from "../../n1-cabs/n1-cab-special-req";
import { detailsoftraveller, N1CabTravellerDetailsComponent } from "../../n1-cabs/n1-cab-traveller-details";
import { couponsdetails, N1CabCouponsComponent } from "../../n1-cabs/n1-cab-coupons";
import {  paymentdetailstype, N1CabPaymentOptionsComponent } from "../../n1-cabs/n1-cab-payment-options";
import { insurancedetails, N1InsuranceBookingComponent } from "../../n1-travel-insurance/n1-insurance-booking";
import { countries, N1CountryCheckboxComponent } from "../../n1-travel-insurance/n1-country-checkbox";
import { plandetails, N1InsChoosePlanComponent } from "../../n1-travel-insurance/n1-ins-choose-plan";
import { N1InsTravellerDetailsComponent, person_details } from "../../n1-travel-insurance/n1-ins-traveller-details";
import { currency_details, N1ForexCurrencyComponent } from "../../n1-forex-currency/n1-forex-currency";
import { card_details, N1GetMultiCurrencyComponent } from "../../n1-forex-currency/n1-get-multi-currency";
import { big_currency, N1CountryCheckboxForexomponent } from "../../n1-forex-currency/n1-country-checkbox-forex";
import { amount, N1ForeignCurrencyComponent } from "../../n1-forex-currency/n1-foreign-currency";
import { primary_travellers, N1ForexTravellersDetailsComponent } from "../../n1-forex-currency/n1-forex-travellers-details";
import { all_icons_details, N1AllIconsForexomponent } from "../../n1-icons/n1-all-icons";
import { group_icons_details, N1IconsGroupForexomponent } from "../../n1-icons/n1-icons-group";
import { stayoptions, N1ForYourStayComponent } from "../../n1-hotels/n1-for-your-stay";
import { hotel_type_options, N1HotelDetailsComponent } from "../../n1-hotels/n1-hotel-details";
import { summaryoptions, N1FlightSummaryComponent } from "../../n1-comps/n1-flight-summary";
import { N1FlightAirportPickDropComponent, pick_up_options } from "../../n1-comps/n1-fight-airport-pick-drop";
import { pickup_cab_options, N1FlightPickupComponent } from "../../n1-comps/n1-flight-pickup";
import { N1FlightDelayProtectionComponent, protection_options } from "../../n1-comps/n1-fight-delay-protection";
import { N1FlightHelpComponent, plant_options } from "../../n1-comps/n1-flght-help";
import { Upi_options, N1UpiOptionsComponent } from "../../n1-payments/n1-upi-options";
import { credit_debit_options, N1CreditDebitComponent } from "../../n1-payments/n1-credit-debit";
import { emi_options, N1EmiComponent } from "../../n1-payments/n1-emi";
import { bank_options, N1SelectBankComponent } from "../../n1-payments/n1-select-bank";
import { N1SelectTenureComponent, Tenure_options } from "../../n1-payments/n1-select-tenure";
import { interest_options, N1MonthlyInterestComponent } from "../../n1-payments/n1-monthly-interest";
import { choose_bank, N1ChooseYourBankComponent } from "../../n1-payments/n1-choose-your-bank";
import { banking_options, N1NetBankingComponent } from "../../n1-payments/n1-net-banking";
import { paylater_options, N1paylaterComponent } from "../../n1-payments/n1-paylater";
import { giftcard_options, N1GiftcardComponent } from "../../n1-payments/n1-giftcard";
import { icons, N1IconsTabsComponent } from "../../n1-icons/n1-icons-tabs";
 

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [N1RadioGroupComponent, RouterOutlet, CommonModule, RouterLink, N1RadioComponent, N1FromComponent, N1ToComponent, N1SwapButtonComponent, N1DepartureReturnComponent, N1TravellersClassComponent, N1DropdownAirportComponent, N1DetailsInputComponent, FormsModule, DatePipe, N1CompanyLogo, N1TimingsComponent, N1PriceComponent, N1JourneyTimeComponent, N1FlightSelect, N1CompleteBookingComponent, N1CancellationComponent, N1AddOnsComponent, N1ImpInformationComponent, N1VipComponent, N1TravellersDetailsComponent, N1FareSummaryComponent, N1PromoCodeComponent, N1PopularFiltersComponent, N1OnwardReturnFilterComponent, N1HotelFilterComponent, N1PopularHotelComponent, N1ReviewBookingComponent, N1GuestDetailsComponent, N1SpecialRequestComponent, N1TripSecureComponent, N1PaymentOptionsComponent, N1PayNowComponent, N1SelectTravellersComponent, N1RefundComponent,
    N1AddTravellarComponent, N1AccountDetailsComponent, N1ContactInformationComponent, N1OfferDiscountsComponent, N1additionsComponent, N1TravelAdvisoryComponent, N1PayBooknowComponent, N1BestPackageComponent, N1TrainBookingComponent, N1PriceDetailsComponent, N1FirstClassComponent, N1SelectBusComponent, N1CompleteBusBookingComponent, N1BusTravellerDetailsComponent, N1BusContactDetailsComponent, N1BusSecureComponent, N1BusMydealComponent, N1BusPriceDetailsComponent, N1SelectCabComponent, N1CabBookingComponent, N1InclusionsComponent, N1SpecialReqComponent, N1CabTravellerDetailsComponent, N1CabCouponsComponent, N1CabPaymentOptionsComponent, N1InsuranceBookingComponent, N1CountryCheckboxComponent, N1InsChoosePlanComponent, N1InsTravellerDetailsComponent, N1ForexCurrencyComponent, N1GetMultiCurrencyComponent, N1CountryCheckboxForexomponent, N1ForeignCurrencyComponent, N1ForexTravellersDetailsComponent, N1AllIconsForexomponent, N1IconsGroupForexomponent, N1ForYourStayComponent, N1HotelDetailsComponent, N1FlightSummaryComponent, N1FlightAirportPickDropComponent, N1FlightPickupComponent, N1FlightDelayProtectionComponent, N1FlightHelpComponent, N1UpiOptionsComponent, N1CreditDebitComponent, N1EmiComponent, N1SelectBankComponent, N1SelectTenureComponent, N1MonthlyInterestComponent,
    N1ChooseYourBankComponent, N1NetBankingComponent, N1paylaterComponent, N1GiftcardComponent, N1IconsTabsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {

  flyOptions = [
    'One Way',
    'Round Trip',
    'Multi City',
    
  ];
  selectedFlyOption: string = "";


  selectedDepartureReturnDates: Date[] | null = null;

  onDatesChange(selectedDates: Date[]): void {
    this.selectedDepartureReturnDates = selectedDates;
  }



  fromDropdownOptions: N1DropdownOptions[] = [
    {
      id: 1,
      name: 'Hyderabad',
      cityDetails: 'HYD, Hyderabad Airport India',
    },
    {
      id: 2,
      name: 'Bangalore',
      cityDetails: 'Blr, Blr Airport India',
    },
    { id: 3, name: 'Mumbai', cityDetails: 'Mum,  Mumbai Airport India' },
    {
      id: 4,
      name: 'Chennai',
      cityDetails: 'Chennai, Chennai Airport India',
    },
  ];

  toDropdownOptions: N1DropdownOptions[] = [
    {
      id: 1,
      name: 'Hyderabad',
      cityDetails: 'HYD, Hyderabad Airport India',
    },
    {
      id: 2,
      name: 'Bangalore',
      cityDetails: 'Blr, Blr Airport India',
    },
    { id: 3, name: 'Mumbai', cityDetails: 'Mum,  Mumbai Airport India' },
    {
      id: 4,
      name: 'Chennai',
      cityDetails: 'Chennai, Chennai Airport India',
    },
  ];

  seatsbooking: N1DropdownOptions[] = [

    {
      id: 1,
      name: '1',
      cityDetails: '',
    },
    {
      id: 2,
      name: '2',
      cityDetails: '',
    },
    {
      id: 3,
      name: '3',
      cityDetails: '',
    },
    {
      id: 3,
      name: '4',
      cityDetails: '',
    },
    {
      id: 3,
      name: '5',
      cityDetails: '',
    },

  ];
  classbooking: N1DropdownOptions[] = [

    {
      id: 1,
      name: 'Economy',
      cityDetails: '',
    },
    {
      id: 2,
      name: 'Premium Economy',
      cityDetails: '',
    },
    {
      id: 3,
      name: ' Business',
      cityDetails: '',
    },
    {
      id: 3,
      name: 'First Class',
      cityDetails: '',
    },


  ];

   countrycode: N1DropdownOptions[] = [

    {
      id: 1,
      name: 'India(91) ',
      cityDetails: '',
    },
    {
      id: 2,
      name: 'Afghanisthan(93)',
      cityDetails: '',
    },
    {
      id: 3,
      name: 'Ageria(213)',
      cityDetails: '',
    },
    {
      id: 3,
      name: 'Ageria(213)',
      cityDetails: '',
    },


  ];

 
  genderOptions = [
    'Regular',
    'Student',
    '  Senior Citizen',
    'Armed Forces',
    'Doctor and Nurses',
  ];

  firstName: string = '';
  lastname: string = '';
  number: string = '';
  email: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  selectedFrom = this.fromDropdownOptions[1];
  selectedTo = this.toDropdownOptions[3];
  seatNumbers = this.seatsbooking[1]
  classes = this.classbooking[1]
  selectedGender = this.genderOptions[0]
  // selectedcode= this.countrycode[0]

  flightdetails: Detailsoptions[] = [
    {
      from: "Mumbai",
      to: "Delhi",
      name: " Indigo",
      logo: '',
      start_time: '00.35',
      end_time: '12:23',
      amount: ' 7,544'
    },
    {
      from: "Hyderabad",
       to: "Mumbai",
      name: "Indigo",
      logo: '',
      start_time: '03:44',
      end_time: '07:44',
      amount: '1000'
    },  

  ]

  summary_booking:  summaryoptions[] = [
    {
      name:"Flights Summary",
       departure: "Mumbai → New Delhi",
      return: "New Delhi → Mumbai",
      date: " Friday, Feb 14 · Non Stop · 2h 15m",
      date2: "Tuesday, Mar 11 · Non Stop · 2h 20m",
     
    },
    
  ]
  
  delay:   pick_up_options[] = [
    {
      name:"Airport Pick & Drop",
       Pre: "Pre-book airport cabs at great prices. Now available in city near you.",
      Select: "Select cabs for Mumbai to New Delhi Trip",
      Select_return: " Select cabs for New Delhi to Mumbai Trip",
      No: "No last minute cancellation",
      time: 'On time pick-ups',
      Exact: 'Exact location details will be collected post booking.',
     },
    
  ]
   
   late:   protection_options[] = [
    {
      name:"Flight Delay Protection",
       Get: "Get hassle-free compensation of ₹1000 if your flight is delayed by one hour or more for any reason.",
      Note: "NOTE : Around 30% of domestic flights were delayed last month. View T&Cs",
      price: " ₹ 199",
     
    },
    
  ]

  help:   plant_options[] = [
    {
      name:"Help us plant 3 million trees by 2026!",
       img: "https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_tree.webp",
      Note: "Support the MakeMyTrip Foundation & donate for a greener future",
      price: " ₹ 5",
      price1: " ₹ 20",
      price2: " ₹ 30",
      price3: " ₹ 40",

    },
    
  ]



   completebookingoptions:  bookingoptions [] = [
    {
      destination: "Mumbai → New Delhi",
      booking_date: "Saturday, Feb 15",
      logo: "",
      time: 'Non Stop · 2h 25m',
      travel_time:"2h 25m",
      name: "IndiGo" ,
      start_place: "Mumbai " ,
      from_airportname: ".Chhatrapati Shivaji International Airport, Terminal T2",
      end_place:  "New Delhi",
      to_airportname:".Indira Gandhi International Airport, Terminal T3",
      flightnum:"6E 6218",
      airbus:"Airbus A320 N",
      start_time:'00.35',
      end_time: '12:23',
      cabinbaggage:"Cabin Baggage:",
      Checkinbaggage:"Check-In Baggage:",
      cabinbaggage_details:"7 Kgs (1 piece only) / Adult",
      checkbaggage_details:"15 Kgs / Adult",
      conditions:"Got excess baggage? Don’t stress, buy extra check-in baggage allowance for BOM-DEL at fab rates!",
      refund:"REFUNDABLE",
      economy:"Economy >",
      eco:"ECO VALUE"
    },
    {
      destination: "New Delhi → Mumbai",
      booking_date: "Saturday, Feb 18",
      logo: "",
      time: 'Non Stop · 2h 25m',
      travel_time:"2h 25m",
      name: "IndiGo" ,
      start_place: " New Delhi " ,
      from_airportname: ".Indira Gandhi International Airport, Terminal T3",
      end_place:  "Mumbai ",
      to_airportname:".Chhatrapati Shivaji International Airport, Terminal T2",
      flightnum:"6E 6218",
      airbus:"Airbus A321 N",
      start_time:'06.35',
      end_time: '08:00',
      cabinbaggage:"Cabin Baggage:",
      Checkinbaggage:"Check-In Baggage:",
      cabinbaggage_details:"7 Kgs (1 piece only) / Adult",
      checkbaggage_details:"15 Kgs / Adult",
      conditions:"Got excess baggage? Don’t stress, buy extra check-in baggage allowance for BOM-DEL at fab rates!",
      refund:"REFUNDABLE",
      economy:"Economy >",
      eco:"ECO VALUE"
    },
   ]


   cancel : cancellationoptions [] = [
    {
    name:"Cancellation & Date Change Policy",
    logo:"",  
    destination:"BOM-DEL",
    penalty:"Cancellation Penalty :",
    penalty_1: "₹ 0",
    penalty_2: "₹ 2000",
    penalty_3:" ₹ 4000",
    cancel_ist:"Cancel Between (IST) :",
     now:"Now",
     canceldate1:"28 Jan",
     canceltime1:"09:45",
     canceldate2:"14 Feb",
     canceltime2:"13:45",
     canceldate3:"14 Feb",
     canceltime3:"15:45",
    },
    {
      name:" ",
      logo:"",  
      destination:"DEL-BOM",
      penalty:"Cancellation Penalty :",
      penalty_1: "₹ 0",
      penalty_2: "₹ 2000",
      penalty_3:" ₹ 4000",
      cancel_ist:"Cancel Between (IST) :",
       now:"Now",
       canceldate1:"28 Jan",
       canceltime1:"09:45",
       canceldate2:"14 Feb",
       canceltime2:"13:45",
       canceldate3:"14 Feb",
       canceltime3:"15:45",
      },

   ]

  addons : addonoptions [] = [
    {
      name:"Unsure of your travel plans?",
      subname:"Get full flexibility with our special add-ons",
      logo:"",
      Zero_cancel:"Zero Cancellation",
      coupon:"Get Zero Cancellation with coupon HSBCZC",
      get_refund:"Great! Get refund of up to ₹ 10,270",
      in_case:"in case of cancellation up to 24 hours before departure!",
      terms:"View T&C",
      price:"₹ 1,345",
    },
    {
      name:" ",
      subname:" ",
      logo:"",
      Zero_cancel:"Free Date Change",
      coupon:" ",
      get_refund:"Great! Get refund of up to ₹ 10,270",
      in_case:"in case of cancellation up to 24 hours before departure!",
      terms:"View T&C",
      price:"₹ 1,245",
    },
    {
      name:" ",
      subname:" ",
      logo:"",
      Zero_cancel:"FlexiFly",
      coupon:"Get Zero Cancellation with coupon HSBCZC",
      get_refund:"Great! Get refund of up to ₹ 10,270",
      in_case:"in case of cancellation up to 24 hours before departure!",
      terms:"View T&C",
      price:"₹ 1,545",
    },
  ]

   flylike : vipoptions [] = [
    {
      name:"Fly Like a VIP @ Just ₹ 450",
      logo:"",
      desicription:"Be amongst the first to check-in and get your bags tagged with priority status with Akasa Air Priority Check-in & Bag Services.",
      checkin:"Priority Check-in",
      symbol:"+",
      bag_service:"Priority Bag Service",
      Equal:"=",
      amount:" ₹ 450",    
    }
   ]

    travellers :  travellersoptions [] = [
      {
        name:" Traveller Details",
      logo:"",
      audlt:"ADULT (12 yrs+)",
      conditions:"Important:",
      context:"Enter name as mentioned on your passport or Government approved IDs.Please ensure that the Frequent Flyer No entered here is against the same passenger name otherwise the points will not be updated by the airline.",
      adult_1:"ADULT 1",
      firstName:'',
      lastname:'',
      number:'',
      email:'',
      }
    ]

     summary :   fareoptions [] = [
      {
        name:" Fare Summary",
      logo:"",
       base:"Base Fare",
       sub_base:"Adult(s) (1 X ₹ 9,846):",
       price:" ₹ 9,846",
      tax:"Taxes and Surcharges",
       air_line_tax:"Airline Taxes and Surcharges",
        price1:" ₹ 9,846",
      total_amount:"Total Amount",
      total_price:"₹ 11,279",
      desicription:" The airfare has increased by ₹ 985.Please review baggage allowance, cancellation policies & other ticket inclusions ",
      }
    ];


     promocodes :    promooptions [] = [
      {
        name:"PROMO",
        subname:"CODES",
        firstName:'',
      
      }
    ];

     popular :    filteroptions [] = [
      {
        name:"Popular Filters",
         nonstop:" Non Stop",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:" Refundable Fares",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:" IndiGo",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:" Air India",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:" Morning Departures",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:"AfterNoon Departure",
         price:" ₹ 9,846",
      },
      
      
      
      {
        name:" Airlines",
         nonstop:"Air India",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:" Air India Express",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:" IndiGo",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:" Air India",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:" Akasa Air",
         price:" ₹ 9,846",
      },
      {
        name:" ",
         nonstop:"SpiceJet",
         price:" ₹ 9,846",
      }


    ];
    selectedfliter :string = "";

     onwardfilters :   onwardreturnoptions [] = [
      {
        name:"Onward Journey",
       stops:"Stops From Mumbai",
       departure:"Departure From Mumbai",
       before:"Before ",
       before1:"6 AM",
       morningtime:"6 AM to  ",
       morningtime1:"  12 PM",
       afterNoon:"12 PM to  ",
       afterNoon1:" 6 PM",
        night:"After  ",
        night1:" 6 PM",
       arrival:"Arrival at  New Delhi",
       departure_air:"Departure Airports",
      },

      {
        name:"Return Journey",
       stops:"Stops From New Delhi",
       departure:"Departure From  New Delhi",
       before:"Before ",
       before1:"6 AM",
       morningtime:"6 AM to  ",
       morningtime1:"  12 PM",
       afterNoon:"12 PM to  ",
       afterNoon1:" 6 PM",
        night:"After  ",
        night1:" 6 PM",
       arrival:"Arrival at Mumbai",
       departure_air:"Departure Airports",
      }
    ];

  hotelfilters = {
    suggested:[
      
      { name:"  ", nonstop:" Last Minute Deals", price:"   ", },
      { name:"  ", nonstop:"Highly Recommeded by Couple Travellers", price:" (47)  ", },
      { name:"  ", nonstop:"Unmarried Couples Allowed", price:" (1510) ", },
      { name:"  ", nonstop:"3 Star", price:" (33) ", },
      { name:"  ", nonstop:"MMT ValueStays - Top Rated & Affordable", price:" (334) ", },
      { name:"  ", nonstop:"Breakfast Included", price:" (140) ", },
      { name:"  ", nonstop:"Free Cancellation", price:" (140) ", },
    ],
     price_per_night:[
      
      { name:"  ", nonstop:" ₹ 0 - ₹ 4000", price:" (143)  ", },
      { name:"  ", nonstop:" ₹ 4000 - ₹ 8000", price:" (27)  ", },
      { name:"  ", nonstop:"₹ 8000 - ₹ 12000", price:" (0) ", },
      { name:"  ", nonstop:" ₹ 12000 - ₹ 16000", price:" (0) ", },
      
    ],

    star_category:[
      
      { name:"  ", nonstop:"3 Star", price:" (113)  ", },
      { name:"  ", nonstop:" 4 Star", price:" (27)  ", },
      { name:"  ", nonstop:"5 star", price:" (0) ", },
 
      
    ],

    super_packages:[
      { name:"  ", nonstop:"Super Packages", price:" (3)  ", }  
    ],


    user_rating:[
      { name:"  ", nonstop:"Excellent: 4.2+ ", price:" (23)  ", } , 
      { name:"  ", nonstop:"VeryGood: 3.5+ ", price:" (13)  ", }  ,
      { name:"  ", nonstop:"Good: 3+ ", price:" (13)  ", },  
    ],



    property_type:[
      { name:"  ", nonstop:"Hotel ", price:" (2)  ", } , 
      { name:"  ", nonstop:"Apartment ", price:" (0)  ", }  ,
      { name:"  ", nonstop:"Villa", price:" (0)  ", },  
    ],


    chains:[
      { name:"  ", nonstop:"Accor - Novotel & ibis ", price:" (2)  ", } , 
      { name:"  ", nonstop:"Best Western ", price:" (0)  ", }  ,
      { name:"  ", nonstop:"Bloom Hotels", price:" (0)  ", },  
      { name:"  ", nonstop:"Bluekite ", price:" (2)  ", } , 
      { name:"  ", nonstop:"Concept Hospitality ", price:" (0)  ", }  ,
      { name:"  ", nonstop:"Cygnett Group", price:" (0)  ", },  
      { name:"  ", nonstop:"Elivaas ", price:" (2)  ", } , 
      { name:"  ", nonstop:"Fab hotels ", price:" (0)  ", }  ,
      { name:"  ", nonstop:"Fortune", price:" (0)  ", },  
      { name:"  ", nonstop:"Ginger Hotels ", price:" (2)  ", } , 
      { name:"  ", nonstop:"GoStops ", price:" (0)  ", }  ,
      { name:"  ", nonstop:"Hilton & Doubletree", price:" (0)  ", },  
      { name:"  ", nonstop:"Hostie ", price:" (2)  ", } , 
      { name:"  ", nonstop:"Hyatt ", price:" (0)  ", }  ,
      { name:"  ", nonstop:"IHG - Crowne Plaza, Holiday Inn & Intercontinental", price:" (0)  ", },  
      { name:"  ", nonstop:"Justa", price:" (0)  ", },  
      { name:"  ", nonstop:"Lemon Tree ", price:" (2)  ", } , 
      { name:"  ", nonstop:"Marriott, Westin & Le Meridien ", price:" (0)  ", }  ,
    ],



    locality:[
      { name:"  ", nonstop:"Karol bagh ", price:"  ", } , 
      { name:"  ", nonstop:"Lajpat Nagar ", price:"    ", }  ,
      { name:"  ", nonstop:"Mehrauli", price:"    ", },  
    ],

    shopping:[
      { name:"  ", nonstop:"Connaught Place ", price:"  ", } , 
      { name:"  ", nonstop:"Chandni Chowk ", price:"    ", }  ,
      { name:"  ", nonstop:"South Delhi", price:"    ", },  
      { name:"  ", nonstop:"Green Park", price:"    ", },  
    ],


    transit_hub:[
      { name:"  ", nonstop:"Aerocity ", price:"  ", } , 
      { name:"  ", nonstop:" T1 - Delhi Airport (IGI Airport)" , price:"    ", }  ,
      { name:"  ", nonstop:" T2 - Delhi Airport (IGI Airport)", price:"    ", },  
      { name:"  ", nonstop:" T3 - Delhi Airport (IGI Airport)", price:"    ", }, 
      { name:"  ", nonstop:"New Delhi Railway Station", price:"  ", } , 
      { name:"  ", nonstop:"Old Delhi Railway Station", price:"    ", }  ,
      { name:"  ", nonstop:"ISBT Kashmere Gate", price:"    ", },  
      { name:"  ", nonstop:"Hazrat Nizamuddin Railway Station", price:"    ", },  
      { name:"  ", nonstop:"Sarai Rohilla Railway Station ", price:"  ", } , 
      { name:"  ", nonstop:"Paharganj ", price:"    ", }  ,
      { name:"  ", nonstop:"Mahipalpur", price:"    ", },  
      
    ],

    guests_love:[
      { name:"  ", nonstop:"Wi-Fi", price:"  ", } , 
      { name:"  ", nonstop:"Spa ", price:"    ", }  ,
      { name:"  ", nonstop:"Swimming Pool", price:"    ", },  
     
    ],


    house_rules:[
      { name:"  ", nonstop:"Smoking Allowed", price:" (22) ", } , 
      { name:"  ", nonstop:"Unmarried Couples Allowed ", price:"  (32)  ", }  ,
      { name:"  ", nonstop:"Pets Allowed", price:"   (22) ", },  
      { name:"  ", nonstop:"Alcohol Allowed", price:"     (22) ", },
     
    ],

    booking_preference:[
      { name:"  ", nonstop:" Entire Property", price:" (2) ", } , 
      { name:"  ", nonstop:"CareTaker ", price:"  (2)  ", }  ,
      { name:"  ", nonstop:"Instant Book", price:"   (2) ", },  
      { name:"  ", nonstop:"HomeStays", price:"     (2) ", },
     
    ],

    
    room_views:[
      { name:"  ", nonstop:"Garden View", price:" (2) ", } , 
      { name:"  ", nonstop:"City View ", price:"  (2)  ", }  ,
    ],


    room_amenities:[
      { name:"  ", nonstop:"Cook & Butler Service", price:" (2) ", } , 
      { name:"  ", nonstop:"Home Theatre ", price:"  (2)  ", }  ,
      { name:"  ", nonstop:"Spa Tub", price:" (2) ", } , 
      { name:"  ", nonstop:"Kitchenette ", price:"  (2)  ", }  ,
      { name:"  ", nonstop:"Fireplace", price:" (2) ", } , 
      { name:"  ", nonstop:"Smoking Room ", price:"  (2)  ", }  ,
      { name:"  ", nonstop:"Bathtub", price:" (2) ", } , 
      { name:"  ", nonstop:"Jacuzzi ", price:"  (2)  ", }  ,
      { name:"  ", nonstop:"Private Pool", price:" (2) ", } , 
      { name:"  ", nonstop:"Living Area", price:"  (2)  ", }  ,
      { name:"  ", nonstop:"Interconnected Room", price:" (2) ", } , 
      { name:"  ", nonstop:"Heater ", price:"  (2)  ", }  ,
      
    ],
  }


   popularhotles : popularoptions [] = [
    {
      name:"Popular in Delhi",
      mmt:"MMT ValueStays",
      sponsored:"SPONSORED",
      hotelname:"The Lohmod - Boutique Hotel At Delhi Airport",
      img1:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      img2:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      img3:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      img4:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      img5:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
       areaname:"Mahipalpur |",
       distance:"4.4 km drive to Indira Gandhi International Airport!",
       restaurant:"Restaurant",
       free_cancellation:"Free Cancellation till check-in",
        book:"Book with ₹0 Payment",
         discount:"10% Discount on F&B services",
         convenient:"Convenient location, good food & excellent staff",
         offer:"HSBC Bank Credit Card NoCostEMI Offer - Get INR 2596 Off",
         very_good:"Very Good",
             hotel_rating:"3.9",
             emi: " No Cost EMI"  ,
             actual_price: "₹ 7,499"  ,
             real_price:"₹ 2,767" ,
    },

    {
      name:" ",
      mmt:"MMT ValueStays",
      sponsored:"SPONSORED",
      hotelname:"Qotel Hotel Church House Rohini Sector 15",
      img1:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      img2:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      img3:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      img4:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      img5:"https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
       areaname:"Mahipalpur |",
       distance:"4.4 km drive to Indira Gandhi International Airport!",
       restaurant:"Restaurant",
       free_cancellation:"Free Cancellation till check-in",
        book:"Book with ₹0 Payment",
         discount:"10% Discount on F&B services",
         convenient:"Convenient location, good food & excellent staff",
         offer:"HSBC Bank Credit Card NoCostEMI Offer - Get INR 2596 Off",
         very_good:"Very Good",
             hotel_rating:"3.9",
             emi: " No Cost EMI"  ,
             actual_price: "₹ 7,499"  ,
             real_price:"₹ 2,767" ,
    },
  ]
   booking_review :   bookingreviewoptions [] = [
    {
      hotel_name:"The Lohmod - Boutique Hotel At Delhi Airport",
      friendly:"Couple Friendly",
      address:"A-292, NH-8, Near IGI Airport, Aerocity, Mahipalpur, New Delhi, India 110037, Delhi, India",
      img1:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201908061717592701-16c8dee4bb7a11ee89970a58a9feac02.jpg",
      checkin:"CHECK IN ",
      day:"SUN",
      date:"9 Feb ",
     year:" 2025",
      time:"12 PM    ",
      checkout:"CHECK OUT ",
      day1:"SUN",
      date1:"12 Feb ",
     year1:" 2025",
      time1:"12 PM    ",
      night:"3 Night   ",
       adult:" | 1 Adult | ",
       room:"1 Room",
       deluxe:"Deluxe Double Room",
       free: "Room With Free Cancellation",
    meals: "No meals included",
    discount: "10% Discount on F&B services",
    free_cancellation:"Free Cancellation till check-inCancellation policy details Book with ₹0 Payment. Pay before 08 Feb, 11:59 PM IST to avoid auto-cancellation. Payment can only be done on MakeMyTrip.",
    bar:"100% Refund",
    imp:   "Important information"  ,
   passport: " Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)",
   pets:  "Pets are not allowed",
   Unmarriedc:  "Unmarried couples allowed",
  local: "Local ids are allowed",
     
    },
  ]

   details :   guestdataoptions [] = [
    {
      name:"Guest Details",
      myself:" My Self",
      someone:"Someone Else",
      title:"Title ",
      firstName:" ",
      lastname:" ",
      email:"",
      number:"12 PM to  ",
      countrycode:"Countrycode",
      enter:"Enter GST Details",
     
    },
  ]

   special :  requestoptions [] = [
    {
      name:"Special Request",
       desicription:" Special requests are subject to each hotel's availability, may be chargeable & can't be guaranteed.",
       common:"Commonly Requested",
       anyother:"Any other request?",
      firstName:" ",
     
    },
  ]


   secure :   secureoptions [] = [
    {
      name:"Trip Secure",
       desicription:" Excited to travel solo? Make sure to secure your trip against sudden events!",
        enjoy:"Enjoy a Worry-Free Stay",
        loss:  "Loss of Laptop/Tablet",
        medical:  "Medical Assistance",
        refund:  "Refund on Hotel Cancellation",
        personal:   "Personal Accident",
        price1:"Rs 25,000",
      support:"24*7 SUPPORT",
      price2:"Rs 15,000",
      price3:"Rs 10,00,000",
      price4:"₹237",
      per:"per guest",
      non:"Non Refundable I 18% GST Included",
        yes:"Yes, secure my trip.",
       no:"No, I will book without trip secure."
        
     
     
    },
  ]

     payment :   paymentmodes [] = [
    {
      name:"Payment Options",
        pay:"Pay Full Amount Now and save ₹91",
        cancel:"Cancel for free any time before 09 Feb",
         book:  "Book with ₹0 Payment",
        remaining:  "Pay the remaining amount of ₹ 9,539 using any payment options before 08 Feb, 2025, 11:59 PM IST to avoid auto cancellation",
        price1:  "₹9,448",
        price2:   "₹9,539",
      
     
     
    },
  ]

   paynow :   paynowoptions [] = [
    {
       discription:"By proceeding, I agree to MakeMyTrip’s",
       user:" User Agreement, Terms of Service",
        and:"and",
        cancellation :  " Cancellation & Property Booking Policies.",
         button :  " PAY NOW",
    },
  ]


   for_your :   stayoptions [] = [
    {
        Name:"For your stay in Delhi",
        dates:" Fri, 14 Feb 25 - Tue, 11 Mar 25",
      
    },
  ]

  
   


 select :   Travellersoptions [] = [
    {
      name:"Select Travellers",
        drbt:"Dbrt Rajdhani!",
        num:"#12424",
        departs:  "Departs on: S M T W T F S",
        time:  "4:20 PM,",
        date:  " 03 Feb",
        place:   "New Delhi (NDLS)",
         destination_time:"4 hrs 42 mins",
         time2:"9:02 PM,",
      date2:"03 Feb",
      place2:"Kanpur Central (CNB)",
      status:"Availability Status",
      b_no:"2A",
      avalible:"AVAILABLE-0003",
      Updated:"Updated few mins ago",
        boarding_station:"Your Boarding Station",
        
     
     
    },
  ]

   refund :   refundoptions [] = [
    {
      name:"Get full ticket fare refund on Cancellation",
         just:"Just at ₹553 per person",
         zero:"Zero charges when the ticket is cancelled",
        refund:  "Refund: ₹ 2215 per person",
        change:  "35% of our users cancel their ticket due to change in plans",
      
     
     
    },
  ]


   add :   addoptions [] = [
    {
      name:"Add Traveller Information",
      firstName:" ",
      age:" ",
      gender:  " Gender",
      Nationality:  "Nationality",
      berth_preference:  "  Berth Preference",
      meal_preference:   " Meal Preference",
      reservation_type:" Reservation type",
     
       
     
     
    },
  ]


  account :   accountdetails [] = [
    {
      name:"IRCTC Account Details",
      username:"IRCTC Username ",
      required:"Why is this required?",
      discription:  "IRCTC username will be required after Payment. Please ensure you have entered correct username.",
      irtc_username:  " ",
      Password:  "IRCTC Password",
      discription1:   "Please ensure you have your password ready. In case you don't have your password, we strongly recommend that you get a new password now.",
    
     
     
    },
  ]


   contact :   contactdetails [] = [
    {
      name:"Contact Information",
       update:"  (We'll send your ticket and status updates here)",
       email:" ",
       number:  "IRCTC username will be required after Payment. Please ensure you have entered correct username.",
       
     
     
    },
  ]

  Offers  :   discontdetails [] = [
    {
      name:"Offers & Discounts",
      welcome:"welcomemmt",
      Get :" Get Rs. 40 instant discount ",
      coupon:  "Have a Coupon Code?",
      firstName:  " ",
     
     
    },
  ]


   addtional  :    additionalsdetails [] = [
    {
      name:"Additional Preferences",
      Insurance:"IRCTC Travel Insurance",
       would :"Would you like to take Travel Insurance for ₹ 0.45 per person? ",
       yes:  "Yes, and I accept the",
        terms:  "  Insurance Terms & Conditions",
        no:  "No, I don’t want travel insurance",
      
     
     
    },
  ]


   travel  :    advisorysdetails [] = [
    {
      name:"Travel Advisory",
      health :"Please read health advisories by relevant authorities.",
      know :"KNOW MORE",
      proceeding :  "By proceeding with the booking, I confirm that I have read and I accept the",
      Cancellation:  " Cancellation & Refund Policy,Privacy Policy,",
      user:  " User Agreement and Terms of Service",
       
     
     
    },
  ]


   pay  :    paydetails [] = [
    {
      name:" Pay & Book Now",
      base :"Base fare per adult",
      price :"₹1166",
      price1 :  "₹583",
      Dynamic:  " Dynamic fare",
      Catering:  "Catering charge",
      price2:   "₹275",
      Total:"Total Price per adult",
      Totalprice:"₹2215",
           
       
     
     
    },
  ]


   best  :    bestseller [] = [
    {
      img1:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201908061717592701-16c8dee4bb7a11ee89970a58a9feac02.jpg",

      Most :"Most Wanted Goa Package",
      Goa :"4N Goa",
      num :  "4N/5D",
      round:  "Round Trip Flights",
      star:  "4 Star Hotel",
      Selected:   "Selected Meals",
      Airport:"Airport Transfers",
      Includes :"Includes extra ₹2,325 discount for packages with flights",
       price:   "₹31,437",
       Person:"/Person Total Price ₹62,874",
       Extra:"Extra",
       off:"off. Use Code",
       welcome:"welcomemmt",
      price1: "2,165",  
           
       
     
     
    },
  ]

   train  :    traindetails [] = [
    {
      name:"Hwh Duronto Exp",
       time :"12:35 PM,3 Feb",
       arrival_time :"5h 0m",
      destination_time :  "5:35 PM,4 Feb",
      num:  " #12274 | Depart on:S M T W T F S",
      place:  "New Delhi",
      view:   "View Route",
      destination:" Kanpur Central",
      nearby:"Nearby dates ",
      
    },
     
  ]

   price  :    pricedetails [] = [
    {
      num:"2A",
       price :" ₹ 437",
       tatkal :"TATKAL",
      train_num :  "TQWL 38",
      free:  " Free Cancellation",
      updated:  "Updated 4 hrs ago",
    },
  ]

   first  :    classdetails [] = [
    {
      name:"FirstClassAC",
        date :" 4th Feb, Monday",     
      train_num :  "GNWL 7",
      free:  "Free Cancellation",
       book:  " Book @₹1837",
    },
    
  ]

   bus  :    busdetails [] = [
    {
      name:"Via PARIYAR",
        org :"UPSRTC",     
       date :  " 22:004 Feb | 07hrs 00mins | 05:005 Feb",
      price:  " ₹ 437",
       Ordinary:  "Ordinary Non AC Seater 2+3",
       rating:  "*3.3",
       seats:  "52 Seats Left",
          policies:  "Policies",
           photos:  "photos",
             amenities:  "Amenities",
             pickup:  "Pickups & Drops",
              reviews:  "Reviews",  
    },
    {
      name:"Via PARIYAR",
        org :"UPSRTC",     
       date :  " 22:004 Feb | 07hrs 00mins | 05:005 Feb",
      price:  " ₹ 437",
       Ordinary:  "Ordinary Non AC Seater 2+3",
       rating:  "*3.3",
       seats:  "52 Seats Left",
          policies:  "Policies",
           photos:  "photos",
             amenities:  "Amenities",
             pickup:  "Pickups & Drops",
              reviews:  "Reviews",     
    },
    {
      name:"Via PARIYAR",
        org :"UPSRTC",     
       date :  " 22:004 Feb | 07hrs 00mins | 05:005 Feb",
      price:  " ₹ 437",
       Ordinary:  "Ordinary Non AC Seater 2+3",
       rating:  "*3.3",
       seats:  "52 Seats Left",
          policies:  "Policies",
           photos:  "photos",
             amenities:  "Amenities",
             pickup:  "Pickups & Drops",
              reviews:  "Reviews",     
    },
    {
      name:"Via PARIYAR",
        org :"UPSRTC",     
       date :  " 22:004 Feb | 07hrs 00mins | 05:005 Feb",
      price:  " ₹ 437",
       Ordinary:  "Ordinary Non AC Seater 2+3",
       rating:  "*3.3",
       seats:  "52 Seats Left",
          policies:  "Policies",
           photos:  "photos",
             amenities:  "Amenities",
             pickup:  "Pickups & Drops",
              reviews:  "Reviews",     
    },
    
  ]


    booking  :    bookdetails [] = [
    {
 
      name :"India Tours & Travels (GetBookCab)",
      seat :"Seat No: U18",
      ac :  "A/C Seater / Sleeper (2+1)",
      View:  "View Policies",
      time:  "08:30  5 Feb' 25, Wed",
      destination_time:   "7h 0m",
      arrival_time:"15:30   5 Feb' 25, Wed",
      place :"Delhi",
       destination :   "Kanpur (Uttar Pradesh)",
       Munirka:"Munirka",
       Rama :"Rama devi chowraha",
       Metro:"Munirika Metro Station",
       Bharat:"Bharat petroleum coco bp",
       vasant: "vasant vihar", 
       
  
    },
  ]

   traveller_inf :    travellers  [] = [
    {
      firstName :" ",
      age :" ",
      gender :  "Gender",
      Traveller:  "Traveller Details",
      Seat:  "Seat U18",
       
    },
  ]


   bus_contact :  contactbusdetails  [] = [
    {
      number :" ",
      email :" ",
      company :  " ",
      com_Number:  " ",
      Contact:  "Contact Details",
       send:  "We’ll send your ticket heres",
    },
  ]

  
   secure_my_trip :  securedetails  [] = [
    {
      Secure :"Secure your trip at just ₹15 ",
      Powered :"Powered by ",
      terms:  "  Terms & Conditions",
      Loss:  " Loss of Baggage",
      flat:  "flat ₹ 5000",
       Accidental:  "Accidental Death",
       upto:  "upto ₹ 600000es",
       hosp:  "Hospitalisation",
       upto2:  "upto ₹ 75000",
    },
  ]
  

   deal :   offersdetails  [] = [
    {
      name :"My Deal ",
      pre :"PRE-APPLIED ",
      price:  " - Rs. 51",
      offers:  " Offers",
      mega:  "MEGABUS",
       upto:  "Up to 10% (Instant Discount and Mydeal savings)",
       pass:  "BUSTRAINPASS",
       travel_pass:  "Travel Pass - Buy for Rs. 99 and get instant Rs. 50 off and 4 vouchers each worth Rs. 50 off on bus/Rs. 25 off on train bookings",
       coupon:  " ",
       apply:"APPLY",
    },
  ]

  price_details :    pricetotal  [] = [
    {
      name :"Price details",
      Base :"Base Fare ",
      price:  " ₹2199.0",
      discounts:  " Discounts",
      price1:  "-₹83.0",
       amount:  "Amount",
       price2:  "₹2116",
       final:  "Final payable amount will be updated on the next page",
       proceeding:  "By proceeding with the booking, I confirm that I have read and I accept the Cancellation & Refund Policy,Privacy Policy,User Agreement and Terms of Service",
        
    },
  ]

  cab  :    cabdetails [] = [
    {
      img1:"https://jsak.mmtcdn.com/cabs_cdn_dt/image/LighterFunnel_Cabs/Hatchback_2x.png",
      car_name:"Indica, Swift",
        or :"or similar",     
       rating :  " * 4.2",
      price:  " ₹2,158",
       Taxes:  "+ ₹521 (Taxes & Charges)",
       seats:  "4 Seats | AC | 1 Bag",
       Inclusions:  "Inclusions and Exclusions",
          policies:  "Cancellation Policy",
      
    },
  ]

   bookingcab  :     bookingdetails [] = [
    {
      img1:"https://jsak.mmtcdn.com/cabs_cdn_dt/image/LighterFunnel_Cabs/Hatchback_2x.png",
      outstation:"Outstation One Way Trip",
        destination :"Mumbai TO Pune",     
        date :  " 06 Feb, 01:00 PM",
      car_name:  "Xylo, Ertiga  ",
      rating :  " * 4.2",
        reviews:  "17 Reviews",
       or:  " or similar",
       seats:  "6 Seats | AC  ",
      
    },
  ]

  
  exclusions  :     inclusionsdetails [] = [
    {    
      Inclusions:"Inclusions/Exclusions",
      View :"View Policies",     
        State :  " State Tax, Toll Charges & Driver Allowance includedM",
      Only:  "Only One Pickup and Drop  ",
      Kms :  " 149 Kms included. ₹18.5/Km will be charged beyond that",
        Waiting:  "Waiting time upto 45 mins included. ₹100.0/30 mins after that",
    },
  ]

  requests  :     specialdetails [] = [
    {    
      name:"Special Requests",
      Roof :"Roof Carrier",     
      price :  " + ₹158",
      Car:  "Car with roof carrier for adjusting extra luggage",
      
    },
  ]


   cab_details  :     detailsoftraveller [] = [
    {    
      name:"Pickup Details",
      pick_up_location :" ",     
      Traveller :  " Traveller Details",
      fullname:  " ",
      gender :  " Gender",
      contact:  " Traveller Contact Details",
      email:  " ",
      number:  " ",
      proceeding:  " By proceeding to book, I agree to MakeMyTrip's ",
      Cancellation:  "Cancellation & Refund Policy,Privacy Policy, ",
      user:  "User Agreement and Terms of Service ",
    },
  ]

   offers  :      couponsdetails [] = [
    {    
      name:"Coupon & Offers",
      code :" MMTSBII",     
      Congratulations :  " Congratulations! You have successfully applied a Rs 346 discount on your base fare!",
      enter_coupon:  " ",
      coupon :  "Enter a Coupon",
      
    },
  ]


   payment_types  :      paymentdetailstype [] = [
    {    
      name:"Payment Options",
      Part :" Part Pay",     
       price :  " ₹966",
      rest:  "Pay rest to the driver ",
      Full :  "Full Pay",
      price2:  " ₹4,100",
      amount:  " Full amount have to pay",
      
    },
  ]

   insurance_type  :      insurancedetails [] = [
    {    
      name:"International Travel + Medical Insurance",     
       Offered :  "Offered By",
       img1:"https://tripmoneycmsimgak.mmtcdn.com/img/Reliance_General_insur_nce_1_ff7e996e13.png",
       img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6zus-jfD2n5EgcT_oBC6bp9yE0ZQVUT8TA&s",
      license:  "IRDAI license number and validity: CA0599 / Valid upto 25th Sept 2025",
      img3 :  "https://tripmoneycmsimgak.mmtcdn.com/img/Luggage_Shield_a9baed13b4.svg",
      travel:  " Comprehensive travel + medical insurance",
      policies:  " Insurance policies covering country-specific visa requirements and Schengen Visa Compliant plans.",
      Destination:  "Travel Destination ",
      You:  " You can select multiple destinations ",
      Popular:  "Popular Destination ",
      amount_1:  "30,000+ ",
       Claims:  " Claims settled per month",
       support:  " 24X7",
      Customer:  "Customer support, ",
      Min:  "Min. $50k ",
       Medical:  "Medical coverage with cashless hospitalisation ",
       people:  "15,000,000+ ",
      covered:  "Customers covered",
      Cover:  "Cover All Your Travel Insurance Needs",
      Bringing:  "Bringing to you, comprehensive travel + medical insurance plans, including trip cancellations, flight delays, lost luggage and medical expenses. Each plan is designed to protect your dream trips against unexpected challenges and to give you absolute peace of mind on your journey along with:",
      Instant:  "Instant policy generation",
      Health:  "Comprehensive Health Insurance included ",
       What:  " What Kind of Plans Are Available?",
       Insurance:  "Travel Insurance",
      Quick:  "| Quick & easy claim process in simple 4 steps.",
      Digital:  "| 100% Digital Claim & Settlemen",
      img5:"https://tripmoneycmsimgak.mmtcdn.com/img/Luggage_Shield_a9baed13b4.svg",
       Benefits:  "What are the Benefits of Travel Insurance? ",
       We:  "We cover almost everything to make your travel easy and secure ",
       img6:"https://tripmoneycmsimgak.mmtcdn.com/img/Group_1000005310_d8e97b7910.svg",
         Offers:  "Offers complete medical insurance plan and assistance, including medical consultation cost, global cashless hospitalisation and transportation/evacuation cost in case of medical emergencies.",
         Secures:  "Secures your trips against unforseen challenges, including loss of check-in luggage or passport, non-refundable ticket cost in case of trip cancellation, flight delays and more.",
         Medicals:  "Medical Coverage ",
     Coverage:  "Travel Coverage",

    },
  ]

   checkbox  :      countries [] = [
    {    
      country_name:"India",     
       img1:"https://tripmoneycmsimgak.mmtcdn.com/img/Thailand_e0981480d2.png?im=Resize=(80)",
       
    },
  ]


   choose_plan  :      plandetails [] = [
    {    
      name:"Recommended Plans for Your Trip",     
       Offered :  "Powered By",
       img1:"https://tripmoneycmsimgak.mmtcdn.com/img/Reliance_General_insur_nce_1_ff7e996e13.png",
       img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6zus-jfD2n5EgcT_oBC6bp9yE0ZQVUT8TA&s",
      license:  "IRDAI license number and validity: CA0599 / Valid upto 25th Sept 2025",
      Thailand :  "Thailand",
       dates:  " 10 Feb'25-To-12 Feb'25",
       Travel:  " Travel + Medical Insurance",
       Protects:  "Protects from medical & travel emergencies while travelling. ",
       Choose:  " Choose Plan",
       Sum:  "Sum Insured Per Person ",
       prices:  "Sum Insured Upto $ 50,000",
       Insured:  " Claims settled per month",
       International:  "International Travel Insurance",
       price:  "₹ 552 ",
       Claims:  "99% Claims Settled",
       per:  "per person ",
       Primary:  "Travel - Primary Care 1 ",
       termss:  "T&C",
       Medical:  "Medical Expenses $ 50,000",
       Dental:  "Dental Care Expenses 500",
       Baggage:  "Baggage Loss $ 500",
       Benefits:  " 7 More Benefits ",
       

    },
  ]


  passenger_details  :      person_details [] = [
    {    
      name:"Add Traveller Details",     
       Offered :  "Powered By",
       img1:"https://tripmoneycmsimgak.mmtcdn.com/img/Reliance_General_insur_nce_1_ff7e996e13.png",
       img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6zus-jfD2n5EgcT_oBC6bp9yE0ZQVUT8TA&s",
      license:  "IRDAI license number and validity: CA0599 / Valid upto 25th Sept 2025",
      Thailand :  "Thailand",
       dates:  " 10 Feb'25-To-12 Feb'25",
       Travel:  " Travel + Medical Insurance",
       Protects:  "Protects from medical & travel emergencies while travelling. ",
       Choose:  " Choose Plan",
       Currently:  "Currently, plans are available only for traveller age between 3 months to 65 years ",
       Traveller:  " Traveller 1(1-40 years)",
       fullname:  " ",
       Dob:  " ",
       Passport_NO:  "  ",
       Gender:  "Gender*",
       Relationship:  "Relationship with Proposer*",
       Proposer:  "Proposer Details",
       Details:  "Proposer Details required incase of traveller is minor",
       Proposer_fullname:  "  ",
       Proposer_Dob:"",
       Contact:  " Primary Contact Details",
       related:  " All travel insurance related details will be communicated on these contact details",
       number:  " ",
       email:  "  ",
       disease:  "Do you have any pre-existing medical disease ?",
       agree:  "I agree to all theterms and conditions, and confirm that all travellers are Indian citizen aged below 65 years.",
       All:  "All travellers are not travelling on immigration visa",
       Buy:  "BUY FOR ₹ 544",
       

    },
  ]


   currency  :      currency_details [] = [
    {    
      name:"Multicurrency Card",     
       Zero :  "Zero forex mark-upAccepted in 150+ countriesUp to 5% more savings over Credit/Debit CardsOffers & cashback",
       img1:"https://tripmoneycmsimgak.mmtcdn.com/img/new_bmf_card_714a7ae7ca.png",
       Foreign:  "Foreign Currency Notes",
      currencies :  "40+ currencies | Best rates | Genuine Notes from RBI licensed companies",
       Why:  " Why Trust Us",
        people:  " 12,00,000+",
       Happy:  "Happy Travellers with Forex Transactions ",
       Forex:  " Forex Powered by",
       Know:  "Know More about our Products",
       
       

    },
  ]


   forex_card  :       card_details [] = [
    {    
      name:"Get Multi-Currency",     
       Card :  "Forex Card",
       Forex:  "   Powered by",
      Delivery:  "Delivery by Today, 9 pm in",
      location :  "Hyderabad, 500049",
       Order:  " Order within",
        time:  "1hr 1min+",
       get:  "Order & get dedicated number to check delivery status ",
       In:  " In 2 steps: ",
       Select:  "Select Currency",
       Currency:  " Select Currency",
       Offers:"Offers",     
        cash :  "UPTO INR 7500 CASHBACK",
        apply:  "  APPLY",
      Cashback:  "Cashback will be credited to your myCash wallet on delivery of your forex. Validity: 1 year. No restriction on usage. Use it to book flights, hotels, bus, cab, insurance and more on Makemytrip app/website. Check final cashback at the bottom of the pageKnow More",
      Enter :  "Enter Travel Destination",
       Air:  " Air ticket required to support your travel to below countries",
        Add:  "Add Travel Dates",
       Start:  "Start date should be within 60 days from order date ",
       End:  " End date is optional but we recommend you to add end date. ",
        total_price:  "INR 1,93,730",
       taxes:  " + INR 364 taxes & fee",

    },
  ]

    add_travellers :        primary_travellers[] = [
    {    
      name:"Get Multi-Currency",     
       Card :  "Forex Card",
       Forex:  "   Powered by",
       number:  "   ",
       get:  "Order & get dedicated number to check delivery status ",
       In:  " In 2 steps: ",
       Select:  "Traveller Details",
       Adds:  " Add Traveller Details",
       Pan:"PAN Detail",     
        cash :  "UPTO INR 7500 CASHBACK",
        apply:  "  APPLY",
        For:  "For payment of this order, use the bank account of the above mentioned name",
        Delivery :  "Delivery Address",
       Air:  " Air ticket required to support your travel to below countries",
       Important:  "Important note:",
       After:  "After payment, you will need to upload Passport, PAN & Air Ticket within 48hrs. ",
       Your:  "Your travel should start within 60 days of payment ",
        total_price:  "INR 1,93,730",
       taxes:  " + INR 364 taxes & fee",
       email:"",
       pan_number:"",
       fullname:"",
       pincode:"",
       house_no:"",
       line_2:"",
       understand:  "I understand non-fulfillment of above conditions will result in cancellation of order, and I am obligated to pay 2% of order total and payment convenience fee as cancellation charge as per .",
       agree:  " I agree to all T&C including that my travel purpose is Leisure/Holiday/Personal Visit and I am an Indian Citizen.",
    },
  ]


   

 
   group  :     group_icons_details[] = [
    {    
       
    },
  ]

   
   upi :        Upi_options[] = [
    {    
      name:"UPI Options",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/upi/upi_collect_step1.png ",
      img2:"https://imgak.mmtcdn.com/payment-ui-service/images/upi/upi_collect_step2.png ",
      img3:"https://imgak.mmtcdn.com/payment-ui-service/images/upi/upi_collect_step3.png ",
      img4:"https://imgak.mmtcdn.com/payment-ui-service/pwa_v3/pwa_payments_assets/v2//upiQr.png ",
      img5:"data:image/webp;base64,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",
      img6:"https://imgak.mmtcdn.com/payment-ui-service/pwa_v3/pwa_payments_assets/v2//upiCollect.png",
      img7:"https://imgak.mmtcdn.com/payment-ui-service/pwa_v3/pwa_payments_assets/payUiModules//upi.png",
      img8:"https://imgak.mmtcdn.com/payment-ui-service/pwa_v3/pwa_payments_assets/payUiModules//gpay.png",
      img9:"https://imgak.mmtcdn.com/payment-ui-service/pwa_v3/pwa_payments_assets/payUiModules//phonepe.png ",
      img10:"https://imgak.mmtcdn.com/payment-ui-service/pwa_v3/pwa_payments_assets/payUiModules//paytm.png",
      img11:"https://imgak.mmtcdn.com/payment-ui-service/pwa_v3/pwa_payments_assets/v2//cred.png",
       Open :  "Open",
       Scan:  "  Scan QR",
       Approve:  "Approve   ",
       Pay:  " Scan QR to Pay",
       or:  "OR ",
       upi_id:  '',
       Enter:  " Enter your UPI ID",
       apps:"All UPI apps supported",     
      
    },
  ]


  credit :        credit_debit_options[] = [
    {    
      name:"Credit & Debit Cards",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/card_paymode.png",
       Enter :  "Enter card details",
       We:  " We support all major domestic & international cards",
       card_number:  '',
       enter_cvv:  '',
     
    },
  ]

   select_Emi : emi_options[] = [
    {    
      all_bank:"ALL BANKS",   
      name:"EMI",
       Select :  "Select your bank",
       Below:  " Below is the list of banks and their starting interest rates",
        
      
    },
  ]


   choose : choose_bank[] = [
    {    
      all_bank:"ALL BANKS",   
      name:"Net Banking",
       Select :  " 40+ Banks Available",
       Below:  " ",
        
      
    },
  ]


  
  net_banking : banking_options[] = [
    {    
     
      
    },
  ]

  
 
   later : paylater_options[] = [
    {    
      Pay:"Pay Later",   
      name:"POWERED BY",
      img:"https://go-assets.ibcdn.com/u/MMT/images/1720776591433-tripMoneyLogo.png",
       Starts :  " Starts at 0% Interest",
       months:  " Pay in 15 days - 18 months",
      No:"No Paperwork",   
      img1:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/Tripmoney_CF_Expanded.png",
      img2:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/olamoney_postpaid.png",
      img3:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/zestmoney_expanded.png",
      img4:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/bajajFS_expanded.png",
      img5:"https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/paytm_postpaid.png",
      img6:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/ICICI_PL_expanded.png",
      img7:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/lazypay_expanded.jpg",
      img8:"https://imgak.mmtcdn.com/payment-ui-service/images/payment/SIMPL_expanded.png",
      Meet:"Meet our proud partners",
       people :  " 1,00,000+ people have trusted them",
       Find:  "Find your pay later partner! ",
       Our:"Our partners will use your login mobile number - xxxxxx6688 to check your eligibility with them. Available partners will be shown on the next screen.",   
      
    },
  ]



   gift :  giftcard_options[] = [
    {    
      Gift:"Gift Card",   
      Add:"Add using gift card number",
      card_number:"",
      Digit:" ",
       Or :  " Or add using link",
       link:  '',
      Copy:"Copy paste or enter the link here",   
      ePay:"Add ePay gift card",
      card:" ",
      epay_number:" ",
      Once:"Once added, you will only be able to use this gift card with a single account i.e., with xxxx3678.",
      
    },
  ]

   tabs :  icons[] = [
    {    
   
      img:"data:image/png;base64,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",     
    img1:"data:image/png;base64,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",     
  img2:"data:image/jpeg;base64,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",     
  img3:"https://static.vecteezy.com/system/resources/thumbnails/052/370/529/small/a-black-and-white-silhouette-of-a-beach-with-palm-trees-and-chairs-vector.jpg",     
  img4:"data:image/jpeg;base64,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",     
  img5:"https://t4.ftcdn.net/jpg/05/28/03/59/360_F_528035923_TzrgU6c0opA2o8quUsW4BBH5fAgODqnD.jpg",     
  img6:"data:image/png;base64,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",     
  img7:"data:image/jpeg;base64,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",     
  img8:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahtjcXvbysaNo64IzLrdYGq9s0n71iW1R17J4X7IndSbHxYtqmhLLqfc&s",     
  Flights:"Flights",
  Hotels:"Hotels",
  Homestays:"Homestays",
   Buses: "Buses",
  Trains: "Trains",
  Packages: "Packages",
  Cabs: "Cabs",
  Insurance: "Insurance",
  Curreny: "Curreny",
    },
  ]

  



}


  
 