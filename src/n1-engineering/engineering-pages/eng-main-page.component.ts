import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
 import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { different, N1AchiveComponent } from "../../n1-software/n1-development/n1-achive";
import { Corporation, N1UsaCorporationComponent } from "../../n1-software/n1-development/n1-usa-corporation ";
import { Delivery, N1EnsureSuccessfulComponent } from "../n1-eng-components/n1-ensure-successful ";
import { different_software, N1ProminentSoftwareComponent } from "../../n1-software/n1-development/n1-prominent-software";
import { contents, N1TableOfContentComponent } from "../../n1-software/n1-development/n1-table-of-content";
 

@Component({
  selector: 'scn-main-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, N1AchiveComponent, N1UsaCorporationComponent, N1EnsureSuccessfulComponent, N1ProminentSoftwareComponent, N1TableOfContentComponent],
  templateUrl: './eng-main-page.component.html',
  styleUrl: './eng-main-page.component.scss',
})
export class   EngMainPageComponent {

   what :    different[] = [
      {    
        What:"What makes ScienceSoft different",  
          We:"Driving Project Success No Matter What",     
         ScienceSoft:" Achieving project goals despite time, budget, technology constraints, and changing requirements is ScienceSoft's top priority. You set the goals; we drive the project to achieve them. Unlike many IT firms that practice passive project administration, we engage in proactive, results-oriented project management, ensuring the success of our clients' initiatives no matter what.",      
       button:" Find out how we drive success -->",
      },
  ]
  
   Usa :    Corporation[] = [
     {    
       ScienceSoft:"ScienceSoft USA Corporation Is a 3-Year Champion in the Financial Times Rating",  
       Three:"Three years in a row (2022–2024), the Financial Times has included ScienceSoft USA Corporation in the list of 500 fastest-growing American companies. This is the result of our dedication to driving project success despite any constraints and disruptions.",     
       img:"https://www.scnsoft.com/partners/financial-times/financial-times-recognition.png",     
      button:"Read a press release -->",
     },
   ]
     
   aborad :   Delivery [] = [
  {    
    name:"Different Collaboration Scenarios for Your Software Development",  
    work:"Software development services help plan, design, develop, integrate, test, manage and evolve software solutions. Quality-centered and adherent to software development best practices, ScienceSoft provides application development services to startups, software companies, and enterprises across 30+ industries.",     
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


  
 