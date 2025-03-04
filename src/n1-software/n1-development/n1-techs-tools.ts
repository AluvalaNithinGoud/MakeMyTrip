
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { N1ProgrammingLanguagesComponent, programming } from "./n1-progamming-languages";
 
 

export interface    Techs  {
  name: string,
  Front: string,
  Languages: string,
  JavaScript: string,
  Mobile: string,
  Desktop: string,
  Databases: string,
  sql: string,
  nosql: string,
  Cloud: string,
  aws: string,
  Azure: string,
  Google: string,
  Big: string,
  Platforms: string,
  DevOps: string,
  Containerization: string,
  Automation: string,
  tools: string,
  Monitoring: string,
  Reliable: string,
}






@Component({
  standalone: true,

  selector: 'n1-techs-tools ',
  template: `
        
        <div  class=" text-xl text-gray-900 p-2 font-semibold"> {{option.Reliable}}</div>


  <div class="p-4" style="background-color: rgb(202, 234, 241);">
 
        <div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.name}}</div>
   <div  class=" bg-white   items-center flex " > 
<div class="  " *ngFor="let    Tools          of  languages ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
<br>


<div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.Front}}</div>
<div class="flex gap-4">
<div>
 <div  class="   text-gray-900  "> {{option.Languages}}</div>
 <div  class="  bg-white   items-center flex " > 
<div class="  " *ngFor="let    Tools          of  Front_end ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>
<div>
 <div  class="   text-gray-900  "> {{option.JavaScript}}</div>
 <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  javascript ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>
</div>
<br>

<div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.Mobile}}</div>
   <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  Mobile ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
<br>

<div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.Desktop}}</div>
   <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  Desktop ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
<br>

<div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.Databases}}</div>
<div class="flex gap-4">
<div>
 <div  class="   text-gray-900  "> {{option.sql}}</div>
 <div  class="  bg-white   items-center flex " > 
<div class="  " *ngFor="let    Tools          of  Sql ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>
<div>
 <div  class="   text-gray-900  "> {{option.nosql}}</div>
 <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  Nosql ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>
</div>
<br>

<div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.Cloud}}</div>
<div class="flex gap-4">
<div>
 <div  class="   text-gray-900  "> {{option.aws}}</div>
 <div  class="  bg-white   items-center flex " > 
<div class="  " *ngFor="let    Tools          of  Aws ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>
<div>
 <div  class="   text-gray-900  "> {{option.Azure}}</div>
 <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  azure ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>

<div>
 <div  class="   text-gray-900  "> {{option.Google}}</div>
 <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  Google   ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>
</div>
<br>

<div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.Big }}</div>
   <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  Big_data ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
<br>

<div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.Platforms }}</div>
   <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  platforms ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
<br>

<div  class=" text-lg text-gray-900 p-2 font-semibold"> {{option.DevOps}}</div>
<div class="flex gap-4">
<div>
 <div  class="   text-gray-900  "> {{option.Containerization}}</div>
 <div  class="  bg-white   items-center flex " > 
<div class="  " *ngFor="let    Tools          of  Containerization ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>
<div>
 <div  class="   text-gray-900  "> {{option.Automation}}</div>
 <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  automation ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 
</div>

</div>

<br>

<div class="flex gap-4">
<div>
 <div  class="   text-gray-900  "> {{option.tools}}</div>
 <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  Tools   ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div>  
</div>

<div>
 <div  class="   text-gray-900  "> {{option.Monitoring}}</div>
 <div  class=" bg-white   items-center flex " > 
<div class="    " *ngFor="let    Tools          of  monitoring   ">
  <n1-progamming-languages  [option]="  Tools "></n1-progamming-languages>
</div>
</div> 

</div>
</div>
<br>
</div>

   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => N1TechsToolsComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, CommonModule, N1ProgrammingLanguagesComponent]
})
export class N1TechsToolsComponent {
  @Input() label: string = ' ';
  @Input() value: string = '';

  @Input() option: Techs  = {
    name: '',
    Front:'',
    Languages:'',
    JavaScript: '',
    Mobile:'',
    Desktop:'',
    Databases:'',
    sql: '',
    nosql: '',
    Cloud:'',
    aws:'',
    Azure: '',
    Google:'',
    Big:'',
    Platforms: '',
    DevOps: '',
    Containerization:'',
    Automation:'',
    Monitoring: '',
    tools:'',
    Reliable:'',
   };

   Tools   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/devops/aws-developer-tools.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/devops/azure-devops-logo-vertical.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/devops/azure-devops-logo-vertical.svg",     
  
 },
 
    
  ]
  automation   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/devops/ansible.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/devops/puppet.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/devops/chef.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/soa/saltstack.svg",     

},

    
  ]

   
  monitoring   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/devops/zabbix-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/devops/nagios-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/devops/elasticsearch.svg",     
  
 },
 
    
  ]


   Containerization   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/devops/jenkins.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/devops/kubernetes-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/devops/openshift-logo.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/devops/apache-mesos-logo-vertical.svg",     

},
 
    
  ]


   platforms   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/crm/ms-dynamics-365.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/big-data/spark.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/big-data/cassandra.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/big-data/apache-kafka.svg",     

},
{    
 img:"https://www.scnsoft.com/technologies-logos/big-data/hive.svg",     

},
{    
img:"https://www.scnsoft.com/technologies-logos/big-data/apache-zookeper-logo.svg",     

},
{    
  img:"https://www.scnsoft.com/technologies-logos/databases/apache-hbase-logo.svg",     
 
 },
 {    
 img:"https://www.scnsoft.com/technologies-logos/databases/apache-hbase-logo.svg",     
 
 },
    
  ]

   Big_data   :    programming [] = [
    {    
      img:"https://www.scnsoft.com/technologies-logos/crm/ms-dynamics-365.svg",     
    
   },
   {    
     img:"https://www.scnsoft.com/technologies-logos/big-data/spark.svg",     
   
  },
  {    
   img:"https://www.scnsoft.com/technologies-logos/big-data/cassandra.svg",     
 
},
{    
 img:"https://www.scnsoft.com/technologies-logos/big-data/apache-kafka.svg",     

},
{    
img:"https://www.scnsoft.com/technologies-logos/big-data/hive.svg",     

},
{    
img:"https://www.scnsoft.com/technologies-logos/big-data/apache-zookeper-logo.svg",     

},
{    
 img:"https://www.scnsoft.com/technologies-logos/databases/apache-hbase-logo.svg",     

},
{    
img:"https://www.scnsoft.com/technologies-logos/big-data/azure-cosmos-db-logo.svg",     

},
   
    
  ]

    Aws   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     
  
 },
 
    
  ]
     
   azure   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     

},
 
    
  ]

  Google    :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     
  
 },
 
    
  ]


   Sql   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     
  
 },
 
    
  ]
     
   Nosql   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     

},
 
    
  ]


   Desktop   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg",     

},
{    
 img:"https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg",     

},
{    
img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     

},
 
    
  ]
 
   Mobile   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/mobile/ios-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/mobile/android-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/mobile/xamarin-logo-vertical.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/mobile/cordova-logo.svg",     

},
{    
 img:"https://www.scnsoft.com/technologies-logos/mobile/pwa-logo.svg",     

},
{    
img:"https://www.scnsoft.com/technologies-logos/mobile/react-native-logo.svg",     

},
{    
  img:"https://www.scnsoft.com/technologies-logos/mobile/flutter-logo.svg",     
 
 },
 {    
 img:"https://www.scnsoft.com/technologies-logos/frameworks/ionic.svg",     
 
 },
    
  ]



   Front_end   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/front-end/html.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/front-end/css.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/front-end/javascript-logo.svg",     
  
 },
 
    
  ]
     
   javascript   :    programming [] = [
    {    
       img:"https://www.scnsoft.com/technologies-logos/front-end/angular-logo.svg",     
     
    },
    {    
      img:"https://www.scnsoft.com/technologies-logos/front-end/react-js-logo.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/front-end/meteor.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/front-end/vuejs-logo.svg",     

},
{    
  img:"https://www.scnsoft.com/technologies-logos/frameworks/nextjs.svg",     

},
    
  ]

    languages   :    programming [] = [
      {    
         img:"https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg",     
       
      },
      {    
        img:"https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg",     
      
     },
     {    
      img:"https://www.scnsoft.com/technologies-logos/back-end/python_1.svg",     
    
   },
   {    
    img:"https://www.scnsoft.com/technologies-logos/back-end/node-js-logo-small.svg",     
  
 },
 {    
  img:"https://www.scnsoft.com/technologies-logos/back-end/php-logo.svg",     

},
{    
  img:"https://www.scnsoft.com/technologies-logos/back-end/go-logo-blue.svg",     

},
      
    ]
       
    
  ngOnInit() {
    console.log(this.option);  
  }   
}
