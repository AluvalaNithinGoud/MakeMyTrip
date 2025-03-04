import { Component, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { N1DropdownComponent } from './n1-dropdown';
import { N1RadioComponent } from './n1-radio';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import "@danielmoncada/angular-datetime-picker/assets/style/picker.min.css";
import { NgIf, NgFor } from '@angular/common';

@Component({
    standalone: true,
    selector: 'from-to',

    template: `
        <div class="    p-5 mt-10 relative z-0  space-x-6  ">
            <div
                class="  rounded-md   rounded-lg absolute inset-0 flex justify-center items-center z-10    "
            >
                <nav class="bg-white shadow-md p-4  rounded-lg  ">
                    <div class="max-w-7xl mx-auto px-4 ">
                        <div class="flex justify-between items-center h-16  ">
                            <div class="flex space-x-8 justify-between ">
                                <div class="flex-wrap   ">
                                    <a
                                        href="#"
                                        class="  items-center text-blue-500 hover:text-blue-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="62"
                                            height="52"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"
                                            ></path>
                                        </svg>

                                        <span class="font-medium ml-3"
                                            >Flights</span
                                        >
                                    </a>
                                </div>
                                <a
                                    href="#"
                                    class=" items-center text-gray-600 hover:text-gray-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="52"
                                        viewBox="0 -960 960 960"
                                        width="62"
                                        fill="#5f6368"
                                    >
                                        <path
                                            d="M40-200v-585h60v394h353v-309h322q59.81 0 102.41 42.59Q920-614.81 920-555v355h-60v-131H100v131H40Zm230-249q-45 0-75.5-30.5T164-555q0-45 30.5-75.5T270-661q45 0 75.5 30.5T376-555q0 45-30.5 75.5T270-449Zm243 58h347v-164q0-35.06-24.97-60.03T775-640H513v249ZM270-509q19 0 32.5-13.5T316-555q0-19-13.5-32.5T270-601q-19 0-32.5 13.5T224-555q0 19 13.5 32.5T270-509Zm0-46Zm243-85v249-249Z"
                                        />
                                    </svg>
                                    <span
                                        class="font-medium justify-center flex"
                                        >Hotels</span
                                    >
                                </a>

                                <a
                                    href="#"
                                    class=" items-center text-gray-600 hover:text-gray-900"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="52"
                                        viewBox="0 -960 960 960"
                                        width="62px"
                                        fill="#5f6368"
                                    >
                                        <path
                                            d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"
                                        />
                                    </svg>
                                    <span
                                        class="font-medium justify-center flex"
                                        >Homestays</span
                                    >
                                </a>

                                <a
                                    href="#"
                                    class=" items-center text-gray-600 hover:text-gray-900 ::after"
                                >
                                    <svg
                                        version="1.1"
                                        id="Icons"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 32 32"
                                        xml:space="preserve"
                                        width="62"
                                        height="52"
                                        class="justify-center flex w-full"
                                    >
                                        <circle
                                            class="st0"
                                            cx="24"
                                            cy="9"
                                            r="4"
                                        />
                                        <line
                                            class="st0"
                                            x1="24"
                                            y1="1"
                                            x2="24"
                                            y2="2"
                                        />
                                        <line
                                            class="st0"
                                            x1="24"
                                            y1="16"
                                            x2="24"
                                            y2="17"
                                        />
                                        <line
                                            class="st0"
                                            x1="17.1"
                                            y1="5"
                                            x2="17.9"
                                            y2="5.5"
                                        />
                                        <line
                                            class="st0"
                                            x1="30.9"
                                            y1="13"
                                            x2="30.1"
                                            y2="12.5"
                                        />
                                        <line
                                            class="st0"
                                            x1="30.9"
                                            y1="5"
                                            x2="30.1"
                                            y2="5.5"
                                        />
                                        <path
                                            class="st0"
                                            d="M27,31c-2.9-3.6-7.4-6-12.5-6S4.9,27.4,2,31H27z"
                                        />
                                        <path
                                            class="st0"
                                            d="M11,11c-4.6,0-8.4,3.4-8.9,7.9C2,19.5,2.5,20,3.1,20h15.9c0.6,0,1.1-0.5,1-1.1C19.4,14.4,15.6,11,11,11z"
                                        />
                                        <path
                                            class="st0"
                                            d="M15,20c-0.2-5.1-1.9-9-4-9s-3.7,3.9-4,9"
                                        />
                                        <line
                                            class="st0"
                                            x1="11"
                                            y1="20"
                                            x2="11"
                                            y2="25"
                                        />
                                    </svg>
                                    <span class="text-sl"
                                        >Holiday Packages</span
                                    >
                                </a>

                                <a
                                    href="#"
                                    class=" items-center text-gray-600 hover:text-gray-900"
                                >
                                    <svg
                                        width="62px"
                                        height="52px"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--emojione-monotone"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M30.873 19.986V10.51c-.148-.792-19.391 2.355-19.24 3.147v9.476c.15.793 19.39-2.354 19.24-3.147"
                                            fill="#000000"
                                        ></path>
                                        <path
                                            d="M52.367 23.134v-9.476c.152-.792-19.09-3.939-19.24-3.147v9.475c-.15.793 19.09 3.94 19.24 3.148"
                                            fill="#000000"
                                        ></path>
                                        <ellipse
                                            cx="12.439"
                                            cy="26.402"
                                            rx="1.574"
                                            ry="1.535"
                                            fill="#000000"
                                        ></ellipse>
                                        <path
                                            d="M17.018 51.689l7.441 1.278l.369-2.039l-7.441-1.278z"
                                            fill="#000000"
                                        ></path>
                                        <path
                                            d="M39.172 50.928l.369 2.039l7.441-1.278l-.369-2.039z"
                                            fill="#000000"
                                        ></path>
                                        <ellipse
                                            cx="51.562"
                                            cy="26.401"
                                            rx="1.575"
                                            ry="1.535"
                                            fill="#000000"
                                        ></ellipse>
                                        <ellipse
                                            cx="32"
                                            cy="27.291"
                                            rx="3.352"
                                            ry="3.265"
                                            fill="#000000"
                                        ></ellipse>
                                        <path
                                            d="M29.713 36.271c0 1.23 1.025 2.229 2.287 2.229s2.287-.998 2.287-2.229s-1.025-2.226-2.287-2.226s-2.287.996-2.287 2.226m3.359 0c0 .576-.48 1.045-1.072 1.045a1.06 1.06 0 0 1-1.07-1.045c0-.574.48-1.043 1.07-1.043c.592.001 1.072.469 1.072 1.043"
                                            fill="#000000"
                                        ></path>
                                        <path
                                            d="M45.379 30.195l-.285 1.57c-.084.462.299.914.852 1.009l8.008 1.376c.553.094 1.07-.203 1.152-.664l.285-1.571c.084-.462-.297-.913-.852-1.008l-8.008-1.376c-.552-.095-1.07.203-1.152.664"
                                            fill="#000000"
                                        ></path>
                                        <path
                                            d="M49.994 52.668v-.167L56.23 62H62l-8.065-10.567c1.839-.619 2.839-1.518 2.839-2.958V34.292c.02-.071.045-.14.059-.214l.384-2.125a2.102 2.102 0 0 0-.351-1.596c-.027-.04-.063-.071-.092-.109v-17.87c0-1.725-1.824-2.371-3.289-2.89a33.095 33.095 0 0 0-1.113-.369v-.695c0-.304-2.428-1.125-6.088-1.887c.015-.143.043-.281.043-.428c0-2.266-1.88-4.109-4.191-4.109c-2.029 0-3.726 1.423-4.107 3.306A64.707 64.707 0 0 0 32 5c-2.038 0-4.068.122-6.025.306C25.593 3.423 23.896 2 21.867 2c-2.312 0-4.191 1.843-4.191 4.109c0 .146.028.285.043.427c-3.661.762-6.088 1.583-6.088 1.887v.694c-.396.124-.77.248-1.113.369c-1.466.519-3.29 1.165-3.29 2.89l.002 17.868c-.03.039-.066.07-.095.111a2.115 2.115 0 0 0-.35 1.596l.384 2.124c.014.077.039.149.062.222v6.069h-.003v8.107c0 1.44 1 2.339 2.839 2.959L2 62h5.771l6.235-9.497v.165c0 1.284.793 2.338 2.341 3.167L12.439 62H51.56l-3.906-6.166c1.549-.828 2.34-1.882 2.34-3.166m-7.863-14.307v.199c0 .689-1.045 1.156-1.596 1.248c-.754.126-1.662.228-2.66.308v-1.755h4.256m-4.256-2.09v-1.756a32.68 32.68 0 0 1 2.66.309c.551.092 1.596.559 1.596 1.248v.199h-4.256m18.357-4.497l-.385 2.124a1.172 1.172 0 0 1-1.365.931l-9.273-1.594a1.153 1.153 0 0 1-.957-1.331l.385-2.122a1.17 1.17 0 0 1 1.367-.931l9.273 1.592c.641.112 1.069.706.955 1.331M42.135 3c1.762 0 3.191 1.392 3.191 3.109s-1.43 3.109-3.191 3.109s-3.191-1.393-3.191-3.109C38.943 4.392 40.373 3 42.135 3M21.867 3c1.762 0 3.191 1.392 3.191 3.109s-1.43 3.109-3.191 3.109s-3.191-1.393-3.191-3.109C18.676 4.392 20.105 3 21.867 3m-2.585 6.32a4.2 4.2 0 0 0 6.03-.88A64.077 64.077 0 0 1 32 8.066h.006c2.259 0 4.514.144 6.684.373a4.202 4.202 0 0 0 6.03.881c5.848 1.095 10.054 2.581 10.054 3.058v16.966l-8.601-1.477a2.29 2.29 0 0 0-.376-.032a2.167 2.167 0 0 0-2.145 1.772l-.384 2.121a2.11 2.11 0 0 0 .354 1.601c.334.478.838.795 1.418.894l9.272 1.594c.127.021.251.032.374.032c.029 0 .057-.007.086-.007v.431h-10.52v-.832c0-1.039-1.262-1.742-1.928-1.879c-1.215-.253-2.752-.444-4.449-.575v-9.903c0-2.539-11.748-2.539-11.748 0v9.903c-1.698.131-3.235.322-4.449.575c-.666.137-1.928.84-1.928 1.879v.832H9.23v-.431c.028 0 .056.007.084.007c.123 0 .248-.011.373-.032l9.273-1.594a2.17 2.17 0 0 0 1.418-.893a2.12 2.12 0 0 0 .354-1.601l-.385-2.124a2.165 2.165 0 0 0-2.143-1.771c-.124 0-.25.011-.376.032l-8.6 1.477V12.377c0-.477 4.206-1.962 10.054-3.057M32 32.063c-2.705 0-4.898-2.137-4.898-4.772s2.193-4.772 4.898-4.772s4.898 2.137 4.898 4.772s-2.193 4.772-4.898 4.772m3.344 4.208c0 1.801-1.498 3.26-3.344 3.26s-3.342-1.459-3.342-3.26c0-1.797 1.496-3.256 3.342-3.256s3.344 1.46 3.344 3.256m-11.879 3.538c-.551-.092-1.594-.559-1.594-1.248v-.199h4.256v1.755c-1-.081-1.906-.182-2.662-.308m-1.594-3.538v-.199c0-.689 1.043-1.156 1.594-1.248a32.737 32.737 0 0 1 2.662-.309v1.756h-4.256M8.152 33.898l-.384-2.124a1.152 1.152 0 0 1 .956-1.331l9.273-1.592a1.167 1.167 0 0 1 1.365.931l.385 2.122a1.15 1.15 0 0 1-.957 1.331L9.519 34.83a1.177 1.177 0 0 1-1.367-.932m39.842 18.77c0 1.7-4.498 2.763-10.121 3.188v-2.889H26.127v2.889c-5.623-.425-10.121-1.487-10.121-3.188v-2.161c-4.078-.459-6.778-1.137-6.778-2.032V45.15h15.54v3.725h3.02v2.686h2.143v-2.686h4.141v2.686h2.145v-2.686h3.018V45.15h15.541v3.324c0 .896-2.699 1.573-6.779 2.032v2.162z"
                                            fill="#000000"
                                        ></path>
                                        <path
                                            d="M10.049 34.15l8.008-1.376c.553-.097.934-.549.85-1.011l-.283-1.568c-.084-.461-.6-.76-1.154-.664l-8.01 1.376c-.552.095-.934.546-.851 1.008l.284 1.571c.084.461.602.758 1.156.664"
                                            fill="#000000"
                                        ></path>
                                        <path
                                            d="M21.865 8.235c1.205 0 2.184-.951 2.184-2.126s-.979-2.127-2.184-2.127c-1.203 0-2.182.952-2.182 2.127s.979 2.126 2.182 2.126"
                                            fill="#000000"
                                        ></path>
                                        <ellipse
                                            cx="42.135"
                                            cy="6.109"
                                            rx="2.184"
                                            ry="2.126"
                                            fill="#000000"
                                        ></ellipse>
                                    </svg>
                                    <span class="font-medium">Trains</span>
                                </a>
                                <a
                                    href="#"
                                    class=" items-center text-gray-600 hover:text-gray-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="52"
                                        viewBox="0 -960 960 960"
                                        width="62"
                                        fill="#5f6368"
                                    >
                                        <path
                                            d="M333-185q23 14 47 23.5t50 14.5v62q-24-5-48.5-12.5T333-117q-38 18-77.5 27.5T178-80h-58v-60h58q40 0 79-11t76-34Zm191-383ZM378-881h204v103h132q24.75 0 42.38 17.62Q774-742.75 774-718v132q-14-2-28.5-2.5T714-590v-128H246v171l234-71 110 34q-17 2-33.5 6.5T524-568L176-463l48 159q20-11 38-25t34-31l36-38q23 22 46 43t52 38v78q-26-9-51-26.5T331-307q-34 33-72 52.5T183-230l-72-245q-4-12 1.82-22.61 5.82-10.6 18.18-14.39l55-16v-190q0-24.75 17.63-42.38Q221.25-778 246-778h132v-103ZM550-80q-8 0-14-6t-6-14v-51q-19-11-29.5-29T490-220v-210q0-52 47.5-76t148.42-24q104.8 0 149.44 23T880-430v210q0 21-10.5 39.5T840-151v51q0 8-6 14t-14 6h-40q-8 0-14-6t-6-14v-40H610v40q0 8-6 14t-14 6h-40Zm55-130q15 0 25-10t10-25q0-15-10-25t-25-10q-15 0-25 10t-10 25q0 14 10.5 24.5T605-210Zm160 0q15 0 25-10t10-25q0-15-10-25t-25-10q-15 0-25 10t-10 25q0 14 10.5 24.5T765-210ZM550-340h270v-80H550v80Z"
                                        />
                                    </svg>
                                    <span class="font-medium ml-3">Buses</span>
                                </a>
                                <a
                                    href="#"
                                    class=" items-center text-gray-600 hover:text-gray-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="justify-center flex w-full"
                                        height="52"
                                        width="62"
                                        viewBox="0 -960 960 960"
                                        fill="#5f6368"
                                    >
                                        <path
                                            d="M200-204v54q0 12.75-8.62 21.37Q182.75-120 170-120h-20q-12.75 0-21.37-8.63Q120-137.25 120-150v-324l85-256q3-14 15.4-22t27.6-8h127v-75h212v75h125q15.2 0 27.6 8 12.4 8 15.4 22l85 256v324q0 12.75-8.62 21.37Q822.75-120 810-120h-21q-12.75 0-21.37-8.63Q759-137.25 759-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm-23 60v210-210Zm105.76 160q23.24 0 38.74-15.75Q340-345.5 340-368q0-23.33-15.75-39.67Q308.5-424 286-424q-23.33 0-39.67 16.26Q230-391.47 230-368.24q0 23.24 16.26 38.74 16.27 15.5 39.5 15.5ZM675-314q23.33 0 39.67-15.75Q731-345.5 731-368q0-23.33-16.26-39.67Q698.47-424 675.24-424q-23.24 0-38.74 16.26-15.5 16.27-15.5 39.5 0 23.24 15.75 38.74Q652.5-314 675-314Zm-495 50h600v-210H180v210Z"
                                        />
                                    </svg>
                                    <span class="font-medium ml-3">cabs</span>
                                </a>
                                <a
                                    href="#"
                                    class=" items-center text-gray-600 hover:text-gray-900"
                                >
                                    <svg
                                        fill="#000000"
                                        width="62"
                                        height="52"
                                        viewBox="0 0 512 512"
                                        enable-background="new 0 0 512 512"
                                        id="flight_x5F_insuarance"
                                        version="1.1"
                                        xml:space="preserve"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <path
                                            d="M105.955,249.339l121.285-21.611l5.869,68.518l-33.372,19.627c-3.485,2.05-5.844,5.578-6.405,9.583l-1.55,11.063  c-0.444,3.171,2.408,5.813,5.536,5.127l39.606-8.681c0.34,1.105,0.728,2.197,1.223,3.247c2.412,5.119,7.409,11.253,16.876,11.31  l0.13,0.002c9.467-0.059,14.465-6.192,16.877-11.312c0.494-1.05,0.882-2.142,1.223-3.247l39.606,8.681  c3.128,0.686,5.979-1.956,5.535-5.127l-1.55-11.063c-0.562-4.005-2.92-7.533-6.405-9.583l-33.372-19.627l5.868-68.518  l121.285,21.611c4.552,0.88,8.741-2.454,8.261-6.575l-2.494-21.449c-0.602-5.177-4.131-9.725-9.36-12.061l-111.819-50.096  l4.385-51.199c3.049-23.45-1.553-38.46-8.498-48.063c-14.79-20.452-44.556-20.449-59.287,0.044  c-6.904,9.605-11.469,24.605-8.425,48.019l4.385,51.199l-111.818,50.096c-5.229,2.336-8.759,6.883-9.361,12.061l-2.495,21.449  C97.214,246.886,101.402,250.219,105.955,249.339z M233.621,82.018c0-11.655,9.448-21.103,21.103-21.103  c11.655,0,21.103,9.448,21.103,21.103v3.613c0,2.183-1.77,3.952-3.951,3.952h-34.302c-2.183,0-3.953-1.77-3.953-3.952V82.018z"
                                        />
                                        <path
                                            d="M75.108,387.693c0.663,10.66,7.323,20.02,17.178,24.139l53.19,22.237c4.737,2.074,7.798,6.756,7.798,11.928v21.438h80.708  l-5.697-33.187c-3.293-19.185-17.598-34.619-36.478-39.358l-20.792-5.22l-12.201-34.404c-1.714-4.834-6.526-7.855-11.625-7.299  c-5.607,0.612-9.855,5.344-9.861,10.983l-0.024,22.256l-24.745-6.211c-3.182-0.8-5.635-3.336-6.325-6.544l-11.814-54.875  c-1.19-5.53-6.08-9.479-11.737-9.479c-6.924,0-12.413,5.841-11.983,12.752L75.108,387.693z"
                                        />
                                        <path
                                            d="M399.439,374.996l-24.744,6.211l-0.024-22.256c-0.006-5.64-4.255-10.371-9.861-10.983  c-5.099-0.557-9.911,2.465-11.625,7.299l-12.201,34.404l-20.792,5.22c-18.879,4.739-33.184,20.174-36.477,39.358l-5.697,33.187  h80.707v-21.438c0-5.172,3.062-9.854,7.799-11.928l53.19-22.237c9.854-4.119,16.515-13.479,17.179-24.139l4.406-70.844  c0.43-6.911-5.06-12.752-11.983-12.752c-5.657,0-10.547,3.949-11.737,9.479l-11.813,54.875  C405.074,371.66,402.622,374.196,399.439,374.996z"
                                        />
                                    </svg>
                                    <span class=" flex-wrap font-medium ml-3"
                                        >Travel Insurance</span
                                    >
                                </a>

                                <a
                                    href="#"
                                    class=" items-center text-gray-600 hover:text-gray-900 flex justify-center"
                                >
                                    <div class="items-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="52"
                                            viewBox="0 -960 960 960"
                                            width="62"
                                            fill="#5f6368"
                                            class="justify-center flex w-full"
                                        >
                                            <path
                                                d="M880-740v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42ZM140-631h680v-109H140v109Zm0 129v282h680v-282H140Zm0 282v-520 520Z"
                                            />
                                        </svg>
                                        <span class="font-medium ml-3">
                                            Forex Card & Currency</span
                                        >
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div
            class="w-full   p-10  py-10 bg-white  rounded-md shadow-md rounded-lg  "
        >
            <div>
                <div class="flex p-4">
                    <div class="flex items-center me-4">
                        <input
                            id="inline-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            for="inline-checkbox"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >One Way</label
                        >
                    </div>

                    <div class="flex items-center me-4">
                        <input
                            id="inline-2-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            for="inline-2-checkbox"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Round Trip</label
                        >
                    </div>
                    <div class="flex items-center me-4">
                        <input
                            checked
                            id="inline-checked-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            for="inline-checked-checkbox"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Multi City</label
                        >
                    </div>
                </div>
            </div>
            <div class="flex   mb-[20px] md:mb-[25px]">
                <div
                    class="w-1/3  relative cursor border-right  rounded-lg flex w-full "
                    onclick="document.getElementById('fromCity').focus()"
                >
                    <!-- From Section -->
                    <div
                        class="border p-5 rounded-l-lg relative cursor-pointer  hover:shadow-lg  w-1/2 border   hover:bg-sky-500 "
                    >
                        <span class="block mb-1 text-sl">From</span>
                         
                        <div class="dropdown-container ">
                            <n1-dropdown
                                [data]="dropdownOptions"
                                [(value)]="selectedCityName"
                                [label]="' '"
                                (valueChange)="onOptionSelected($event)"
                            ></n1-dropdown>
                        </div>

                        <p
                            *ngIf="selectedOption && selectedOption.cityDetails"
                            class="text-sm text-gray-500 "
                        >
                            <span class="font-medium text-gray-800">{{
                                selectedOption.cityDetails
                            }}</span>
                        </p>
                    </div>

                    <!-- Swap Button -->
                    <div
                        class="swap-button flex items-center justify-center my-4 cursor-pointer"
                        (click)="swapCities()"
                    >
                        <span
                            class="material-symbols-outlined text-4xl text-blue-600 hover:text-blue-800"
                        >
                            swap_horizontal_circle
                        </span>
                    </div>

                    <!-- To Section -->
                    <div
                        class="border p-5 rounded-l-lg hover:bg-sky-500 relative cursor-pointer  w-1/2   border"
                    >
                        <span class="block mb-1 text-sl">To</span>
                        
                        <div class="dropdown-container">
                            <n1-dropdown
                                [data]="toDropdownOptions"
                                [(value)]="selectedToCityName"
                                [label]="'   '"
                                (valueChange)="onToOptionSelected($event)"
                            ></n1-dropdown>
                        </div>

                        <p
                            *ngIf="
                                selectedToOption &&
                                selectedToOption.airportDetails
                            "
                            class="text-sm text-gray-500"
                        >
                            <span class="font-medium text-gray-800">
                                {{ selectedToOption.airportDetails }}</span
                            >
                        </p>
                    </div>



                    <div class="w-1/3 relative border p-2 hover:bg-gray-100 hover:shadow-lg">
    <span
        (click)="hiddenInput.click()"
        class="cursor-pointer text-gray-900 font-bold mb-1 text-sl block h-[45px] flex items-center"
    >Departure-Return
        {{ selectedDates ? (selectedDates[0] | date: 'MM/dd/yyyy') + ' - ' + (selectedDates[1] | date: 'MM/dd/yyyy') : ' ' }}
    </span>
    <!-- Hidden input to associate with the date picker -->
    <input
        #hiddenInput
        [owlDateTimeTrigger]="dt10"
        [owlDateTime]="dt10"
        [selectMode]="'range'"
        (dateTimeChange)="updateSelectedDates($event)"
        class="hidden"
    />
    <owl-date-time #dt10></owl-date-time>
</div>


           <!-- Travellers & Class Section -->
                    <div class="w-1/2 flex flex-col border p-2 rounded-r-lg hover:bg-gray-100 hover:shadow-lg relative">
  <label class="block text-sm font-medium text-gray-700">
    <span class="block mb-1 text-lg font-bold">Travellers & Class</span>
  </label>
  <div class="relative">
    <button
      class="w-full text-left border rounded-lg p-2 bg-white text-gray-700 flex justify-between items-center hover:shadow"
      (click)="toggletrevellarDropdown()"
    >
      <span>{{ selectedTravellers }} Travellers, {{ selectedClass }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <!-- Dropdown -->
    <div
      *ngIf="dropdownOpen"
      class="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10"
    >
      <div class="p-4">
        <label class="block text-sm font-medium text-gray-700">Travellers</label>
        <select
          [(ngModel)]="selectedTravellers"
          class="w-full mt-2 p-2 border rounded-lg text-gray-700"
        >
          <option *ngFor="let traveller of travellersOptions" [value]="traveller">
            {{ traveller }}
          </option>
        </select>
      </div>

      
      <div class="p-4 border-t">
        <label class="block text-sm font-medium text-gray-700">Class</label>
        <select
          [(ngModel)]="selectedClass"
          class="w-full mt-2 p-2 border rounded-lg text-gray-700"
        >
          <option *ngFor="let travelClass of classOptions" [value]="travelClass">
            {{ travelClass }}
          </option>
        </select>
      </div>
    </div>
  </div>
  </div>
            </div>
        </div>
        <div class="mt-4 flex">
            <div class="">
                <div class="Text latoBlack appendBottom4">
                    Select a special fare
                </div>
                <div class="promoBanner" style="background-image:);">
                    <span class="promoText">EXTRA SAVINGS</span>
                </div>
            </div>
            <div>
                <n1-radio
                    [options]="genderOptions"
                    [(value)]="selectedGender"
                    [name]="'gender'"
                    [label]="'Gender Selection'"
                ></n1-radio>
            </div>
        </div>
</div>
                <!-- <n1-radio
                    [options]="flyOptions"
                    [(value)]="selectedFlyOption"
                    [name]="'flyOptions'"
                    [label]="'Gender Selection'"
                ></n1-radio>
               -->

        <div class="flex items-center justify-center  ">
            <button
                type="button"
                class="px-2 py-1 bg-blue-500 text-black font-medium text-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                (click)="navigateToSearch()"
            >
                <h6 class="text-lg mb-[10px]">
                    <a
                        routerLink="./elements/next-page "
                        class="text-black dark:text-white transition-all hover:text-primary-500"
                    >
                        Search
                    </a>
                </h6>
            </button>
            
        </div>
    `,

    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FromtoComponent),
            multi: true,
        },
    ],
    imports: [FormsModule, CommonModule, N1DropdownComponent, N1RadioComponent, CommonModule, OwlDateTimeModule, OwlNativeDateTimeModule, NgIf, NgFor],
})
export class FromtoComponent {
    dt1: any;
    Departure: any;
    constructor(private router: Router) { }

    navigateToSearch() {
        this.router.navigate(['/search']);
    }

    today: Date = new Date();
    selectedDepartureDate: Date | null = null;
    selectedReturnDate: Date | null = null;
    isDepartureCalendarOpen: boolean = false;
    isReturnCalendarOpen: boolean = false;
    currentDepartureMonth: Date = new Date();
    currentReturnMonth: Date = new Date();
    weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    onDepartureDateSelected(date: Date) {
        this.selectedDepartureDate = date;
        this.isDepartureCalendarOpen = false;
    }

    onReturnDateSelected(date: Date) {
        this.selectedReturnDate = date;
        this.isReturnCalendarOpen = false;
    }

    toggleDepartureCalendar() {
        this.isDepartureCalendarOpen = !this.isDepartureCalendarOpen;
    }

    toggleReturnCalendar() {
        this.isReturnCalendarOpen = !this.isReturnCalendarOpen;
    }



    isSameDate(date1: Date, date2: Date | null): boolean {
        if (!date2) return false;
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    }

    isDropdownOpen = false;
    isToDropdownOpen = false;
    selectedOption: any = {
        id: 1,
        name: 'Hyderabad',
        cityDetails: 'HYD, Hyderabad Airport India',
    };
    selectedToOption: any = {
        id: 1,
        name: 'Mumbai',
        airportDetails: 'Mum,  Mumbai Airport India',
    };

    selectedCityName: string = 'Hyderabad';
    selectedToCityName: string = '  Mumbai';

    dropdownOptions = [
        {
            id: 1,
            name: 'Hyderabad',
            cityDetails: 'HYD, Hyderabad Airport India',
        },
        {
            id: 2,
            name: 'Bangalore',
            cityDetails: 'Blr, Hyderabad Airport India',
        },
        { id: 3, name: 'Mumbai', cityDetails: 'Mum,  Mumbai Airport India' },
        {
            id: 4,
            name: 'Chennai',
            cityDetails: 'Chennai, Hyderabad Airport India',
        },
    ];

    toDropdownOptions = [
        {
            id: 1,
            name: 'Hyderabad',
            airportDetails: 'Rajiv Gandhi International Airport',
        },
        {
            id: 2,
            name: 'Mumbai',
            airportDetails: 'Mum, Hyderabad Airport India',
        },
        {
            id: 3,
            name: 'Bangalore',
            airportDetails: 'BNG, Hyderabad Airport India',
        },
        {
            id: 4,
            name: 'Delhi',
            airportDetails: 'DEL, Hyderabad Airport India',
        },
        {
            id: 5,
            name: 'Chennai',
            airportDetails: 'CHE, Hyderabad Airport India',
        },
    ];

    toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    toggleToDropdown(): void {
        this.isToDropdownOpen = !this.isToDropdownOpen;
    }

    onOptionSelected(value: string): void {
        this.isDropdownOpen = false;
        this.selectedCityName = value;
        this.selectedOption = this.dropdownOptions.find(
            (opt) => opt.name == value
        );
    }

    onToOptionSelected(value: string): void {
        this.isToDropdownOpen = false;
        this.selectedToCityName = value;
        this.selectedToOption = this.toDropdownOptions.find(
            (opt) => opt.name == value
        ) as any;
    }

    swapCities() {
        const temp = this.selectedCityName;
        this.selectedCityName = this.selectedToCityName;
        this.selectedToCityName = temp;
    }

    genderOptions = [
        'Regular',
        'Student',
        '  Senior Citizen',
        'Armed Forces',
        'Doctor and Nurses',
    ];

    // flyOptions = [
    //     'One Way',
    //     'Round Trip',
    //     'Multi City',
    // ];

    // selectedFlyOption: string = "";

    selectedGender: string = 'Male'; // Default value

    selectedDates: Date[] | null = null;

    updateSelectedDates(event: any): void {
        this.selectedDates = event.value;
    }
    dropdownOpen = false;

    // Travellers and Class properties
    selectedTravellers: number = 1; // Default value
    selectedClass: string = 'Economy'; // Default value
    travellersOptions: number[] = [1, 2, 3, 4, 5, 6];
    classOptions: string[] = ['Economy', 'Business', 'First Class'];

    toggletrevellarDropdown(): void {
        this.dropdownOpen = !this.dropdownOpen;
    }


}

