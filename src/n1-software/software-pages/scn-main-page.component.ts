import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
 import { Router, RouterLink, RouterOutlet } from "@angular/router";
import {  N1SoftwareServicesComponent, software } from "../n1-development/n1-software-services";
import { It_Professionals, N1ItSelectComponent } from "../n1-development/n1-it-select";
import { It_Partners, N1ItDevelopmentPartnerComponent } from "../n1-development/n1-it-development-partner";
import { awards, N1PartnershipAwardsComponent } from "../n1-development/n1-partnership-awards";
import { trusted, N1TrustedByManyComponent } from "../n1-development/n1-trusted-by-many";
import { different, N1AchiveComponent } from "../n1-development/n1-achive";
import { different_software, N1ProminentSoftwareComponent } from "../n1-development/n1-prominent-software";
import { N1HowWeHelpComponent, Software_consulting } from "../n1-development/n1-how-we-help";
import { Corporation, N1UsaCorporationComponent } from "../n1-development/n1-usa-corporation ";
import { N1ClientsValueComponent, value } from "../n1-development/n1-clients-value";
import { software_types, N1SoftwareTypesComponent } from "../n1-development/n1-software-types";
import { Industry, N1SpecificProcessesComponent } from "../n1-development/n1-specific-processes";
import { challenges, N1SoftwareIndustryComponent } from "../n1-development/n1-software-industry";
import { Advanced, N1BusinessTasksComponent } from "../n1-development/n1-business-tasks";
import { N1MainstreamTechnologiesComponent, We_work } from "../n1-development/n1-mainstream-technologies";
import { Collaboration_Scenarios, N1ScenariosComponent } from "../n1-development/n1-scenarios";
import { estimations, N1ApproximateCostComponent } from "../n1-development/n1-approximate-cost";
import { Development_services, N1CostsOfSoftwareComponent } from "../n1-development/n1-costs-of-software";
import { N1SuccessfulProjectComponent, Project_Delivery } from "../n1-development/n1-successful-project";
import { programming, N1ProgrammingLanguagesComponent } from "../n1-development/n1-progamming-languages";
import { Techs, N1TechsToolsComponent } from "../n1-development/n1-techs-tools";
import { Optimal_pace, N1ChoosingAnOptimalComponent } from "../n1-development/n1-choosing-an-optimal";
import { personal_review, N1PersonalReviewComponent } from "../n1-development/n1-personal-review";
import { Current_IT, N1DissatisfiedComponent } from "../n1-development/n1-dissatisfied";
import { contents, N1TableOfContentComponent } from "../n1-development/n1-table-of-content";
 

@Component({
  selector: 'scn-main-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, N1SoftwareServicesComponent, N1ItSelectComponent, N1ItDevelopmentPartnerComponent, N1PartnershipAwardsComponent, N1TrustedByManyComponent, N1AchiveComponent, N1ProminentSoftwareComponent, N1HowWeHelpComponent, N1UsaCorporationComponent, N1ClientsValueComponent, N1SoftwareTypesComponent, N1SpecificProcessesComponent, N1SoftwareIndustryComponent, N1BusinessTasksComponent, N1MainstreamTechnologiesComponent, N1ScenariosComponent, N1ApproximateCostComponent, N1CostsOfSoftwareComponent, N1SuccessfulProjectComponent, N1ProgrammingLanguagesComponent, N1TechsToolsComponent, N1ChoosingAnOptimalComponent, N1PersonalReviewComponent, N1DissatisfiedComponent, N1TableOfContentComponent],
  templateUrl: './scn-main-page.component.html',
  styleUrl: './scn-main-page.component.scss',
})
export class  SrcMainPageComponent {

  
   
     devlopment :    software[] = [
    {    
       name:"Software Development Services",  
       At:"At ScienceSoft, we are ready to offer end-to-end development that covers everything from business analysis to software delivery and support, help modernize your legacy software, or provide expert advisory at any stage of SDLC.",     
       Please:"Please select your role to proceed to a service offer most relevant to your needs.",      
     
       
    },
  ]
    it_select:    It_Professionals[] = [
    {    
       name:"Business ",  
       At:"Professionals",     
       Check:"Check how we approach enterprise software development and what we do to consistently deliver project success.",      
      
    },
    {    
      name:"IT ",  
      At:"Professionals",     
      Check:"Check how we can help you drive your business goals despite any time, budget, or technology constraints.",      
     
   },
   {    
    name:"Startup",  
    At:" Founders ",     
    Check:"Check how we can take a product from idea to launch together and examples of successful software we helped introduce to the market.",      
   
 },
  ]
 

    
   partners :    It_Partners[] = [
    {    
       name:"ScienceSoft as a Software Development Partner",  
        members:"750+",     
       people:"IT pros",      
       img1:"https://www.scnsoft.com/team/team-9.jpg",  
       img2:"https://www.scnsoft.com/team/expert-6.jpg",     
      img3:"https://www.scnsoft.com/team/tanya.jpg",      
      years:"35 years",  
      projects:"4,000 projects+",     
     in:"HQ in the US",      
     software:"in software engineering and IT consulting",  
     successfully:"successfully completed",     
    offices:"offices in Europe and the Gulf",          
    },
  ]

   our_partnership :    awards[] = [
    {    
       name:"Our partnerships and awards",  
        Quality:"--> Quality-first approach based on a mature ISO 9001-certified quality management system.",     
       certified:" --> ISO 27001-certified security management that relies on comprehensive policies and processes, advanced security technology, and skilled professionals.",      
       full:" --> A full-scale PMO able to carry out even the most complex projects.",  
       leading:"--> A leading outsourcing provider featured on the Global Outsourcing 100 list by IAOP for three years in a row.",     
          
    },
  ]
     global :    trusted[] = [
      {    
         
      },
  ]

   what :    different[] = [
    {    
      What:"What makes ScienceSoft different",  
        We:"We achieve project success no matter what.",     
       ScienceSoft:" ScienceSoft does not pass mere project administration off as project management, which, unfortunately, often happens on the market. We practice real project management, achieving project success for our clients no matter what.",      
     button:"See how we do it -->",
    },
]


some :    different_software[] = [
  {    
    Some:"Some Prominent Software We’ve Created",  
      img1:"https://www.scnsoft.com/boss/images/image-thumb__38815__case-study-dynamic/250-2-medicine-order-and-manufacturing-automation-solution-final-dy-doc.webp",     
      Health:"Healthcare",      
     Compliant:"GAMP4-Compliant Software to Automate Cancer & TPN Drugs Manufacturing",  
     ScienceSoft:"ScienceSoft developed a secure supply chain and manufacturing automation system for a global pharma company with 80+ years of experience. The solution’s modules include medicine production, order...",     
     img2:"https://www.scnsoft.com/boss/images/image-thumb__39577__case-study-dynamic/6018-4-development-of-a-physiotherapy-platform-for-aklos-health-doc.webp",     
     img3:"https://www.scnsoft.com/testimonials-logos/aklos-health-logo.svg",     
      Based:"IoT-Based Physiotherapy Platform Driving 70% Reduction in Pain and Unneeded Surgeries",      
      In:"In just 6 months, AKLOS Health got a ready-to-market MVP of an IoT platform powered with custom motion capture algorithms. The solution enables physiotherapists to control patient progress and...",      
     Software:"Software products",      
         

  },
  {    
    Some:" ",  
      img1:"https://www.scnsoft.com/boss/images/image-thumb__41114__case-study-dynamic/6647-4-underwriting-software-development-for-a-global-aviation-insurer-doc.webp",     
      Health:"Insurance",      
     Compliant:"Underwriting Automation Software for a Global Aviation Insurer with $30B in Assets",  
     ScienceSoft:"A custom underwriting system automates risk assessment, insurance pricing, policy administration, task management, and compliance control. The new software helped increase underwriter productivity, minimize the risk of fraud, and...",     
     img2:"https://www.scnsoft.com/boss/images/image-thumb__38699__case-study-dynamic/119-3-development-and-customer-support-center---sciencesoft-doc.webp",     
     img3:" ",     
      Based:"10-Year Evolution of Life Sciences Software Products Used by GSK and AstraZeneca",      
      In:"During 10+ years of cooperation, ScienceSoft’s scalable team of 8–29 experts has been involved in the development, customization, testing, and support of several laboratory and analytical software products for the world’s leading...",      
     Software:"Software products",      
         

  },
  {    
    Some:" ",  
      img1:"https://www.scnsoft.com/boss/images/image-thumb__41469__case-study-dynamic/5709-4-custom-loan-management-software-development-for-a-microfinance-company-doc.webp",     
      Health:"BFSI",      
     Compliant:"Custom Software for End-to-End Loan Management Automation",  
     ScienceSoft:"The software automates loan application processing, underwriting, lending document management, debt collection, and credit reporting. ScienceSoft's advice on the solution design helped the Client optimize project costs whil...",     
     img2:"https://www.scnsoft.com/boss/images/image-thumb__46957__case-study-dynamic/14839-4-azure-based-investment-management-software-for-a-family-office-doc.webp",     
     img3:" ",     
      Based:"IoT-Based Physiotherapy Platform Driving 70% Reduction in Pain and Unneeded Surgeries",      
      In:"In just 6 months, AKLOS Health got a ready-to-market MVP of an IoT platform powered with custom motion capture algorithms. The solution enables physiotherapists to control patient progress and...",      
     Software:"Software products",      
         

  },
  {    
    Some:" ",  
      img1:"https://www.scnsoft.com/boss/images/image-thumb__42938__case-study-dynamic/10566-4-secure-and-scalable-insurtech-saas-product-for-brush-claims-doc.webp",     
      Health:"BFSI",      
     Compliant:"Scalable and Secure Insurtech SaaS Product for Brush Claims",  
     ScienceSoft:"ScienceSoft helped Brush Claims, an insurtech company providing innovative claim solutions, rebuild and upgrade its core claim processing product. Thanks to ScienceSoft's assistance, Brush Claims obtained a modern, high-performi...",     
     img2:"https://www.scnsoft.com/boss/images/image-thumb__39657__case-study-dynamic/7193-4-mobile-banking-app-evolution-and-it-consulting-for-kapital-bank-doc.webp",     
     img3:"https://www.scnsoft.com/testimonials-logos/kapital-bank-logo.svg",     
      Based:"IoT-Based Physiotherapy Platform Driving 70% Reduction in Pain and Unneeded Surgeries",      
      In:"In just 6 months, AKLOS Health got a ready-to-market MVP of an IoT platform powered with custom motion capture algorithms. The solution enables physiotherapists to control patient progress and...",      
     Software:"Software products",      
         

  },
]


 help :    Software_consulting[] = [
    {
    How:"How We Help",  
    consulting:"Software consulting",     
      Custom:"Custom software development",      
     Enterprise:"Enterprise software development",  
     product:"Software product development",     
     Cloud:"Cloud application development",     
     Support:"Support and maintenance",     
      Legacy:"Legacy software modernization",      
      
    }     
]
 
 Usa :    Corporation[] = [
  {    
    ScienceSoft:"ScienceSoft USA Corporation Is a 3-Year Champion in the Financial Times Rating",  
    Three:"Three years in a row (2022–2024), the Financial Times has included ScienceSoft USA Corporation in the list of 500 fastest-growing American companies. This is the result of our dedication to driving project success despite any constraints and disruptions.",     
    img:"https://www.scnsoft.com/partners/financial-times/financial-times-recognition.png",     
   button:"Read a press release -->",
  },
]

Our  :    value[] = [
  {    
    What:"What Our Clients Value ",  
    Three:"Three years in a row (2022–2024), the Financial Times has included ScienceSoft USA Corporation in the list of 500 fastest-growing American companies. This is the result of our dedication to driving project success despite any constraints and disruptions.",     
    img:"https://www.scnsoft.com/testimonials-logos/deyarat-trading-logo.png",     
    img1:"https://www.scnsoft.com/testimonials-customer-profile-photos/image-thumb__16951__testimonials_representative/mikhail-anfimau-leo-burnett.webp",     
    img2:"https://www.scnsoft.com/bundles/app/img/star.svg",     
    name:"Mikhail Anii",  
    senior:"Senior Solutions Architect",     
    We:"We appreciate proactive approach and ability to suggest improvements to a prospective solution on both architectural and business levels.",         
  },
  {    
    What:" ",  
    Three:"Three years in a row (2022–2024), the Financial Times has included ScienceSoft USA Corporation in the list of 500 fastest-growing American companies. This is the result of our dedication to driving project success despite any constraints and disruptions.",     
    img:"https://www.scnsoft.com/testimonials-logos/deyarat-trading-logo.png",     
    img1:"https://www.scnsoft.com/testimonials-customer-profile-photos/image-thumb__29496__testimonials_representative/bader-alhamdan-deyarat-trading.webp",     
    img2:"https://www.scnsoft.com/bundles/app/img/star.svg",     
    name:" Bader Alhamdan",  
    senior:"Managing Director",     
    We:"We appreciated ScienceSoft’s client-oriented approach, consistent collaboration across all the project stages, and flexibility to adjust to changes. ScienceSoft’s expert advice helped us reveal cost optimization opportunities and define the functionality to increase the solution’s value.",         
  },
  {    
    What:" ",  
    Three:"Three years in a row (2022–2024), the Financial Times has included ScienceSoft USA Corporation in the list of 500 fastest-growing American companies. This is the result of our dedication to driving project success despite any constraints and disruptions.",     
    img:"https://www.scnsoft.com/testimonials-logos/bioaffinity-technologies-logo.svg",     
    img1:"https://www.scnsoft.com/testimonials-customer-profile-photos/image-thumb__28397__testimonials_representative/maria-zannes-bioaffinity-technologies.webp",     
    img2:"https://www.scnsoft.com/bundles/app/img/star.svg",     
    name:"Maria Zannes",  
    senior:"President & CEO",     
    We:"I am particularly impressed by the cooperative nature of ScienceSoft’s team. Our project required coordination with multiple companies and individuals. ScienceSoft worked well with everyone.",         
  },
]


 portfolio  :    software_types[] = [
  {    
    Portfolio:"60+ Software Types in Our Portfolio",  
    Along:"Along with the deep knowledge of software architecting and coding principles, we have accumulated vast domain experience and understanding of the context that our software operates in.",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/app-planning-yeallow.svg",     
    Business:"Business & project management",     
     erp:"--> ERP.",     
    Project:"--> Project management.", 
  },
  {    
    Portfolio:" ",  
    Along:" ",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/inventory-red.svg",     
    Business:"Sourcing & stock management",     
     erp:"--> Procurement management software",     
    Project:"--> Vendor management.", 
  },
  {    
    Portfolio:" ",  
    Along:" ",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/asset-management-1.svg",     
    Business:"Asset management",     
     erp:"--> Asset utilization planning and control.",     
    Project:"--> Remote asset monitoring.", 
  },
   {    
    Portfolio:" ",  
    Along:" ",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/marketing.svg",     
    Business:"Sales, marketing & customer service",     
     erp:"--> Customer relationship management.",     
    Project:"--> Sales & marketing automation systems.", 
  }, {    
    Portfolio:" ",  
    Along:" ",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/corporate-finance-yellow.svg",     
    Business:"Corporate finance management",     
     erp:"--> Financial accounting and reporting.",     
    Project:"--> General ledger software.", 
  }, {    
    Portfolio:" ",  
    Along:" ",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/ba.svg",     
    Business:"Business analytics",     
     erp:"--> BI solutions (DWHs, OLAP/ROLAP cubes, ",     
    Project:"  visualization and reporting).", 
  },
  {    
    Portfolio:" ",  
    Along:" ",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/hr.svg",     
    Business:"HR, talent & productivity management",     
     erp:"--> HR policy management.",     
    Project:"--> Recruitment management.", 
  }, {    
    Portfolio:" ",  
    Along:" ",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/communication.svg",     
    Business:"Communication",     
     erp:"--> Project team collaboration tools.",     
    Project:"--> Secure messengers.", 
  }, {    
    Portfolio:" ",  
    Along:" ",     
    img:"https://www.scnsoft.com/icons-linear-with-color-shape/linear-black-and-color-mix/security-yellow.svg",     
    Business:"Security & emergency ",     
     erp:"--> Information security systems.",     
    Project:" --> Video surveillance.", 
  },
]

 

experience    :    challenges[] = [
  {    
    name:"Software to Support Industry-Specific Processes ",  
    keep:"We keep an eye on needs, challenges and trends of 30+ industries with our core experience localized in the following areas",     
  },
  
]

 

expand :   We_work [] = [
  {    
    name:"Software for Advanced Business Tasks ",  
    work:"We work with all the mainstream technologies to expand the scope of functions the software can perform.",     
  },
  
]

help_plan :   Collaboration_Scenarios [] = [
  {    
    name:"Different Collaboration Scenarios for Your Software Development",  
    work:"Software development services help plan, design, develop, integrate, test, manage and evolve software solutions. Quality-centered and adherent to software development best practices, ScienceSoft provides application development services to startups, software companies, and enterprises across 30+ industries.",     
  },
  
]
 
 Costs  :   Development_services [] = [
  {    
    name:"Costs of Software Development Services at ScienceSoft",  
    work:"The cost of software development services may range from $30,000 to $4,000,000+, depending on service scope, software complexity, technical design patterns, and the chosen sourcing model",     
    Here:"Here are the approximate cost estimations based on ScienceSoft's experience in development projects:",     
    Wondering:"Wondering how much your development project will cost?",  
    Jump:"Jump to our free cost calculators to quickly learn the budget for your software initiative.",     
    The:"* The estimates provided are not ScienceSoft's official prices for software development projects. We calculate the cost of each project individually based on the client's specific situation and needs.",     
    img:"https://www.scnsoft.com/about/experts/expert-profiles/tim-grigoriev.jpg",  
    Tim:"Tim Grigoriev",     
    Director:"Director",     
    Pricing:"Pricing model considerations",  
    An:"An IT vendor’s service pricing model directly impacts the project cost. Knowing this, unscrupulous vendors may attempt to deliberately impose an unfavorable model for larger financial gains.At ScienceSoft, we never compromise client trust and offer flexible pricing models depending on the requested service scope and the client’s budget limitations. We avoid confining our clients to one option and can combine several pricing models to reduce development costs. Our team provides a clear rationale behind the choice of particular models to ensure charging on a fair, transparent, and predictable basis.",     
 
  },
  
]

Ensure   :    Project_Delivery [] = [
  {    
    name:"Our Practices to Ensure Successful Project Delivery",  
    work:"ScienceSoft’s teams ensure that project goals are achieved, costs and time are predictable, and uncertainties are addressed agilely. You are welcome to check the descriptions of our project management and development practices supported by samples from our recent projects. We also overview the dirty market practices and traps to avoid.",     
    Here:"If you wonder how our approach will work in your case, want to see a project similar to yours, or have any other questions about your initiative, feel free to contact our consultants.",     
    
  },
  
]

 

Proficient   :     Techs  [] = [
  {    
    name:"Back-end programming languages",  
    Front:"Front-end programming languages",
    Languages:"Languages",  
    JavaScript:"JavaScript frameworks",
    Mobile:"Mobile",  
    Desktop:"Desktop",
    Databases:"Databases / data storages",  
    sql:"SQL",  
    nosql:"NOSQL", 
    Cloud:"Cloud databases, warehouses, and storage",
    aws:"AWS",  
    Azure:"Azure",
    Google:"Google Cloud Platform",  
    Big :"Big data",
    Platforms:"Platforms",
    DevOps:"DevOps", 
    Containerization:"Containerization",
    Automation:"Automation",  
    tools:"CI/CD tools",
    Monitoring:"Monitoring",  
    Reliable :"Reliable Techs & Tools We Are Proficient In",
   },
  
]

Pace   :   Optimal_pace [] = [
  {  
    name:"Choosing an Optimal Pace for Your Project",       
    any:"* any product development project with a need to test the idea, midsize projects in custom software development where software requirements cannot be accurately defined, incremental development of large complex software (which is easy to divide into small functional parts) to start getting value fast.",     
    img:"https://www.scnsoft.com/icons-tritone/scrum.svg",  
    Scrum:"Scrum development",     
    Software:"Software development is done in Sprints, 2–3-week iterations with identified granular goals and backlogs. We ensure process transparency via sprint planning meetings, daily stand-ups, sprint review (and demo), retrospective, backlog refinement (grooming).",     
    img1:"https://www.scnsoft.com/software-development-services/software-development/cro/methodologies-scrum.png",  
    Best:"Best:",     
 
  },
  {   
    name:" ",      
    any:"software support and evolution projects.",     
    img:"https://www.scnsoft.com/icons-tritone/kanban.svg",  
    Scrum:"Kanban development",     
    Software:"The work is done in very short Sprints, often daily. Meetings are held daily or once in 2 days to follow the progress and prioritize next steps. We use the Kanban Board for a clear representation of all project activities, responsible persons, and progress.",     
    img1:"https://www.scnsoft.com/software-development-services/software-development/cro/methodologies-kanban.png",  
    Best:"Best:",     
 
  },
  {    
    name:" ",     
    any:"small and midsize projects with clearly defined and unchanging requirements, projects requiring formal approvals (governmental projects and projects for big corporations), projects with strict compliance requirements.",     
    img:"https://www.scnsoft.com/icons-tritone/waterfall.svg",  
    Scrum:"Waterfall development",     
    Software:"Each next chunk of work is done when the previous one is finished and approved by the stakeholders. The approach demands due diligence at the investigation and planning stage to have all requirements and risks covered.",     
    img1:"https://www.scnsoft.com/software-development-services/software-development/cro/methodologies-waterfall.png",  
    Best:"Best:",     
 
  },
]

review   :  personal_review [] = [
  {  
    name:"Boris Shiklo",       
    ScienceSoft:"ScienceSoft’s CTO with 20+ years of experience",     
    img:"https://www.scnsoft.com/about/experts/expert-profiles/boris-shiklo.jpg",  
    For:"For many projects it makes sense to use a combination of approaches or switch from one to another depending on the project stage. In our practice, the most common scenarios are ‘Waterfall -> Scrum’, ‘Scrum -> Kanban -> Scrum’. Since switching to a new methodology entails new tools and new processes, a pre-switch intro meeting or mini-training should be conducted by the vendor to keep project running effectively from day one.",     

  },
]

Vendor   :  Current_IT [] = [
  {  
    name:"Dissatisfied with Your Current IT Vendor? Switch to ScienceSoft — We Will Do the Job Right",       
    ScienceSoft:"To ensure smooth transition from one team to another, ScienceSoft will take a deep dive into your project’s current state and the key challenges you met. We’ll analyze the assets delivered by the other vendor, conduct a detailed code review, and prepare a solid transition plan to get the project back on track.Switch to ScienceSoft",     
     button:"Switch to ScienceSoft",     

  },
]

Table    :  contents [] = [
  {  
    name:"Table of contents",       
    Why:"Why ScienceSoft",     
     Service:"Service scope",     
     Projects:"Projects",       
     Software:"Software types",     
      faq:"FAQ",     
      Development:"Development costs",       
      Tech:"Tech stack",     
    
  },
]
}


  
 