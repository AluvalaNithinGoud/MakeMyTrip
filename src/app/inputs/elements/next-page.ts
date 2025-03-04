import { ChangeDetectionStrategy, Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,

  selector: 'nextpage',
  template: `

     <div class="listingp flex items-center justify-center  text-gray-900 text-xl font-bold p-5">
                <p class="font24 blackFont whiteText appendBottom20 journey-title makeFlex spaceBetween bottom bg-blue  flex items-center ">
                    <span>Flights from <b>Hyderabad</b> to <b>Mumbai</b>, and back</span></p>
                </div> 
      <div class="flex items-center justify-center ">
        <div id="listing-id  ">
            <div class="splits   p-5">
               


  <div class="viewdetails max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md relative cursor border-right hover:bg-gray-100 hover:shadow-lg rounded-lg  ">
  <div class="planeview">
            <p class="fontSize16 blackText appendLR20 appendBottom20 paddingTop40 "><b>Mumbai → New Delhi</b>  Sun, 2 Feb</p>
            </div>
    <div class="flex justify-between items-center paddingTop40 bg-white"> 
      <div class="flex- text-left bg-white">
        <span class="cursor-pointer">
          <span>Departure</span>
        </span>
      </div>

      <div class="w-40 flex-2 text-center">
        <span class="cursor-pointer">
          <span>Duration</span>
        </span>
      </div>

      <div class="w-20   text-left pl-2">
        <span class="cursor-pointer">
          <span>Arrival</span>
        </span>
      </div>
      <div class="w-40 flex-1 relative text-left pl-2">
          <span class="cursor-pointer text-black">
            <span>Price</span>
          </span>
         
    </div>
    </div>
         
  </div>
 </div>

        </div>
        <div id="listing-id p-5 ">
            <div class="splits">
                <div class="listingp flex items-center justify-center  text-gray-900 text-xl font-bold">
                <p class="font24 blackFont whiteText appendBottom20 journey-title makeFlex spaceBetween bottom bg-blue">
                 </div>


  <div class="viewdetails max-w-2xl mx-auto p-6  bg-white rounded-md shadow-md relative cursor border-right hover:bg-gray-100 hover:shadow-lg rounded-lg">
  <div class="planeview">
            <p class="fontSize16 blackText appendLR20 appendBottom20 paddingTop40 "><b>Mumbai → New Delhi</b>  Sun, 2 Feb</p>
            </div>
    <div class="flex justify-between items-center paddingTop40 bg-white"> 
      <div class="flex- text-left bg-white">
        <span class="cursor-pointer">
          <span>Departure</span>
        </span>
      </div>

      <div class="w-40 flex-2 text-center">
        <span class="cursor-pointer">
          <span>Duration</span>
        </span>
      </div>

      <div class="w-20   text-left pl-2">
        <span class="cursor-pointer">
          <span>Arrival</span>
        </span>
      </div>
      <div class="w-40 flex-1 relative text-left pl-2">
          <span class="cursor-pointer text-black">
            <span>Price</span>
          </span>
         
    </div>
    </div>
         
  </div>
 

             
            </div>

        </div>
        
        </div>
<div class="flex grid gap-0 grid-cols-2 grid-rows-2 ">
        <div class="flex  justify-center p-5  ">
  <div>
    <!-- Wrap the card in a label -->
    <label for="radio1" class="block cursor-pointer">
      <!-- Hidden radio input -->
      <input
        type="radio"
        id="radio1"
        name="flight"
        class="peer hidden peer-checked:bg-blue-100  "
      />
      <!-- Card container -->
      <div class="bg-white p-3 rounded-xl shadow transition-all  peer-checked:bg-blue-100  ">
      <div class="flex items-center space-x-2">   
          
     <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0" d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
          <span class="mt-">Indigo</span>
        </div>
        <div class="relative flex w-full justify-between">
          <nav class="flex gap-5 justify-between">
            <div class="flex justify-between gap-5 items-center">
              <div class="p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="mt-1 p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="p-5 mt-1">
                <span class="font-bold text-gray-900 text-lg block">₹5,362</span>
                Per Adult
              </div>
              <!-- Visible Radio Button -->
              <div class="p-5">
                <input
                  type="radio"
                  id="radio-visible"
                  name="flight"
                  class="peer h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </label>
  </div>
</div>
 
<div class="flex items-center justify-center p-5  ">
  <div>
    <!-- Wrap the card in a label -->
    <label for="radio1" class="block cursor-pointer">
      <!-- Hidden radio input -->
      <input
        type="radio"
        id="radio1"
        name="flight"
        class="peer hidden peer-checked:bg-blue-100  "
      />
      <!-- Card container -->
      <div class="bg-white p-3 rounded-xl shadow transition-all  peer-checked:bg-blue-100  ">
      <div class="flex items-center space-x-2">   
          
     <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0" d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
          <span class="mt-">Indigo</span>
        </div>
        <div class="relative flex w-full justify-between">
          <nav class="flex gap-5 justify-between">
            <div class="flex justify-between gap-5 items-center">
              <div class="p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="mt-1 p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="p-5 mt-1">
                <span class="font-bold text-gray-900 text-lg block">₹5,362</span>
                Per Adult
              </div>
              <!-- Visible Radio Button -->
              <div class="p-5">
                <input
                  type="radio"
                  id="radio-visible"
                  name="flight"
                  class="peer h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </label>
  </div>
</div>
<div class="flex items-center justify-center p-5  ">
  <div>
    <!-- Wrap the card in a label -->
    <label for="radio1" class="block cursor-pointer">
      <!-- Hidden radio input -->
      <input
        type="radio"
        id="radio1"
        name="flight"
        class="peer hidden peer-checked:bg-blue-100  "
      />
      <!-- Card container -->
      <div class="bg-white p-3 rounded-xl shadow transition-all  peer-checked:bg-blue-100  ">
      <div class="flex items-center space-x-2">   
          
     <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0" d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
          <span class="mt-">Indigo</span>
        </div>
        <div class="relative flex w-full justify-between">
          <nav class="flex gap-5 justify-between">
            <div class="flex justify-between gap-5 items-center">
              <div class="p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="mt-1 p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="p-5 mt-1">
                <span class="font-bold text-gray-900 text-lg block">₹5,362</span>
                Per Adult
              </div>
              <!-- Visible Radio Button -->
              <div class="p-5">
                <input
                  type="radio"
                  id="radio-visible"
                  name="flight"
                  class="peer h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </label>
  </div>
</div>
<div class="flex items-center justify-center p-5  ">
  <div>
    <!-- Wrap the card in a label -->
    <label for="radio1" class="block cursor-pointer">
      <!-- Hidden radio input -->
      <input
        type="radio"
        id="radio1"
        name="flight"
        class="peer hidden peer-checked:bg-blue-100  "
      />
      <!-- Card container -->
      <div class="bg-white p-3 rounded-xl shadow transition-all  peer-checked:bg-blue-100  ">
      <div class="flex items-center space-x-2">   
          
     <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0" d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
          <span class="mt-">Indigo</span>
        </div>
        <div class="relative flex w-full justify-between">
          <nav class="flex gap-5 justify-between">
            <div class="flex justify-between gap-5 items-center">
              <div class="p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="mt-1 p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="p-5 mt-1">
                <span class="font-bold text-gray-900 text-lg block">₹5,362</span>
                Per Adult
              </div>
              <!-- Visible Radio Button -->
              <div class="p-5">
                <input
                  type="radio"
                  id="radio-visible"
                  name="flight"
                  class="peer h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </label>
  </div>
</div>
<div class="flex items-center justify-center p-5  ">
  <div>
    <!-- Wrap the card in a label -->
    <label for="radio1" class="block cursor-pointer">
      <!-- Hidden radio input -->
      <input
        type="radio"
        id="radio1"
        name="flight"
        class="peer hidden peer-checked:bg-blue-100  "
      />
      <!-- Card container -->
      <div class="bg-white p-3 rounded-xl shadow transition-all  peer-checked:bg-blue-100  ">
      <div class="flex items-center space-x-2">   
          
     <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0" d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
          <span class="mt-">Indigo</span>
        </div>
        <div class="relative flex w-full justify-between">
          <nav class="flex gap-5 justify-between">
            <div class="flex justify-between gap-5 items-center">
              <div class="p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="mt-1 p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="p-5 mt-1">
                <span class="font-bold text-gray-900 text-lg block">₹5,362</span>
                Per Adult
              </div>
              <!-- Visible Radio Button -->
              <div class="p-5">
                <input
                  type="radio"
                  id="radio-visible"
                  name="flight"
                  class="peer h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </label>
  </div>
</div>
<div class="flex items-center justify-center p-5">
  <div>
    <!-- Wrap the card in a label -->
    <label for="radio1" class="block cursor-pointer">
      <!-- Hidden radio input -->
      <input
        type="radio"
        id="radio1"
        name="flight"
        class="peer hidden peer-checked:bg-blue-100  "
      />
      <!-- Card container -->
      <div class="bg-white p-3 rounded-xl shadow transition-all  peer-checked:bg-blue-100  ">
      <div class="flex items-center space-x-2">   
          
     <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0" d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
          <span class="mt-">Indigo</span>
        </div>
        <div class="relative flex w-full justify-between">
          <nav class="flex gap-5 justify-between">
            <div class="flex justify-between gap-5 items-center">
              <div class="p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="mt-1 p-5">
                <span class="font-bold text-gray-900 text-xl block">12:00</span>
                Time
              </div>
              <div class="p-5 mt-1">
                <span class="font-bold text-gray-900 text-lg block">₹5,362</span>
                Per Adult
              </div>
              <!-- Visible Radio Button -->
              <div class="p-5">
                <input
                  type="radio"
                  id="radio-visible"
                  name="flight"
                  class="peer h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </label>
  </div>
</div>
</div>


 <div class="w-2/3  flex bg-black text-white sticky bottom-0 p-2 mb-8 ml-9 rounded-lg border ">
  <div>
<div class="me-8">
  <span class="flex-wrap ">Departure</span>
  <span>. Indigo</span>
</div>
<div class=" flex">
    <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0 " d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
          <span class="mt-2 font-bold text-white-900 text-lg block me-8"> 01:10 → 03:20</span>
           <span class="p-2 font-bold text-white-900 text-lg block me-8">₹ 5,362</span>
          </div>
   <div>
   <span class="me-8">Filght Details</span>
   </div>
 
 </div>
 <div>
<div class="me-8">
  <span class="flex-wrap  ">Return</span>
  <span class="me-8">. Indigo</span>
</div>
<div class=" flex  me-8         ">
    <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="-30.02085 -50.03475 260.1807 300.2085"><path fill="#3a469d" class="st0 " d="M0 0h200.139v200.139H0z"/><path fill="#fff" d="M193.805 155.804l.253 3.42v.064h-.696c-.064 0-.064 0-.064-.064l-.126-1.393-.444 1.457c0 .063-.063.063-.063.063h-.443c-.064 0-.064 0-.064-.063l-.443-1.457-.127 1.393v.064h-.633c-.063 0-.063 0-.063-.064l.253-3.42c0-.063 0-.063.063-.063h.634c.063 0 .063 0 .063.063l.57 2.28.57-2.28c0-.063.063-.063.063-.063h.634c.063 0 .063 0 .063.063zm-6.017-.127h2.724c.063 0 .063 0 .063.064v.633c0 .063 0 .063-.063.063h-1.014v2.787c0 .064 0 .064-.063.064h-.633c-.064 0-.064 0-.064-.064v-2.787h-1.076v-.696c.063 0 .126-.064.126-.064z" class="st1"/><g fill="#fff" transform="scale(.63335)"><path d="M273 304c-14.4-.1-26.3-12.4-26.7-27.7-.3-15.7 12.2-28.8 27.1-28.8 14.5.1 26.6 12.3 26.9 27.6.4 15.8-12.2 29.1-27.3 28.9zm1-47c-9.7-.4-17.6 8.4-17.6 18.7 0 10 7.3 18.5 16.7 18.6 9.8.1 17.5-8.9 17.4-19.1-.2-9.7-7.2-18-16.5-18.2zm-74 48c-20.7-.9-37.3-18.3-37.7-40-.3-22.6 16.5-41.4 38.9-41.4 7 0 18.4.4 31.5 14.2l-7.4 7.8c-11.3-11-19.7-11.8-24.1-11.6-20 .6-28.4 18.2-28 30.7.4 19.1 15.7 29.7 27.5 30.1 14.1.4 27.7-11 27.9-25.4h-26.7v-10.5H240c1.8 30.9-19.2 47.2-40 46.1zm-185.7-2v-79.1h11.5V303zm94.7 1c-16.9-.7-25.7-14-26.1-27.8-.9-15.4 11.1-28.8 26.6-28.7 3.7 0 7.3 1.2 9.4 2.1l4 2v11.5l-1.7-1.9c-1.3-1.4-7.4-4.3-12.4-4.2-9.3.1-15.8 8.1-16 17.5-.5 10.9 6.1 19.3 16.5 19.9.8 0 16.6-.6 16.6-19v-51.5h10.4v51.8c0 14.3-10.9 29.1-27.3 28.3zm-42.7-1v-28.7c0-15.9-7.8-16.2-11.9-16.6-5.4-.9-12.7 4.8-12.7 14v31.4h-10v-30.8c0-16.1 11.6-24.5 23-24.6 5.5 0 22 4.7 22 24.1V303zm76.7-67c.5-8.4 12.3-8 12.1.1-.3 8.7-12.6 7.6-12.1-.1zm1.3 67v-54.8h10.5V303z" class="st2" stroke-miterlimit="10" stroke="#fff"/><circle r="4.5" cy="130" cx="210" class="st1"/><circle r="4.5" cy="118" cx="210" class="st1"/><circle r="4.5" cy="106" cx="186" class="st1"/><circle r="4.5" cy="106" cx="198" class="st1"/><circle r="4.5" cy="60" cx="208" class="st1"/><circle r="4.5" cy="60" cx="220" class="st1"/><circle r="4.5" cy="60" cx="232" class="st1"/><circle r="4.5" cy="60" cx="244" class="st1"/><circle r="4.5" cy="108" cx="256" class="st1"/><circle r="4.5" cy="95.7" cx="256" class="st1"/><circle r="4.5" cy="83.7" cx="256" class="st1"/><circle r="4.5" cy="71.7" cx="256" class="st1"/><circle r="4.5" cy="106" cx="210" class="st1"/><circle r="4.5" cy="97.1" cx="219" class="st1"/><circle r="4.5" cy="89.2" cx="227" class="st1"/><circle r="4.5" cy="80.2" cx="236" class="st1"/><circle r="4.5" cy="71.6" cx="244" class="st1"/><circle r="4.5" cy="60" cx="256" class="st1"/><circle r="4.5" cy="51.6" cx="264" class="st1"/><circle r="4.5" cy="43.1" cx="273" class="st1"/></g></svg>
          <span class="mt-2  font-bold text-white-900 text-lg block me-8 "> 01:10 → 03:20</span>
           <span class="p-2  font-bold text-white-900 text-lg block me-8">₹ 5,362</span>
          </div>
   <div class="me-8">
   <span>Filght Details</span>
   </div>
 
 </div>
 <div>
  <div class="flex-wrap ml-6 mt-4">
  <span class="font-bold text-white-900 text-lg block">₹ 9,359</span>
  <span>Per Adult</span>
  <div class="flex">
  <span > Fare Details</span>
</div>
  </div>
 </div>
 <div class=" space-y-3">
 <div class=" ">
 <button type="Button" class="   items-center py-1.5 px-1.5 ms-2 font-bold text-white-900 text-lg block bg-sky-500/75 rounded-full border   " 
 >
 Book Now</button>
 </div>
 <div class="  ">
 <button type="Button" class="    items-center py-1.5 px-1.5 ms-2 font-bold text-white-900 text-lg block bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
 Lock Price</button>  
</div>

</div>
 </div>

      <!-- </label> -->
 
    
     


          
          
          `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NextPageComponent),
      multi: true,
    },
  ],
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextPageComponent {
  constructor(private router: Router) { }
  navigateToSearch() {
    this.router.navigate(['/search']);
  }
}


