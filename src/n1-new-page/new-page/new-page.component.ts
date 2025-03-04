import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
 import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { digital_details, N1TransformingComponent } from "../n1-home/n1-transforming";
import { about_details, N1AboutCompanyComponent } from "../n1-home/n1-about-company";
import { N1TechnologiesComponent, Technology_details } from "../n1-home/n1-technologies";
import { case_options, N1CaseStudyComponent } from "../n1-home/n1-case-study";
import { N1DiscriptionComponent, overview } from "../n1-home/n1-discription";
import { N1SystemComponent, system_details } from "../n1-digital/n1-system";
import { N1OverviewComponent, solution } from "../n1-digital/n1-overview";
import { management, N1WarehouseComponent } from "../n1-digital/n1-warehouse";
import { webinar_details, N1WebinarComponent } from "../n1-webinar/n1-webinar";
import { contact_us, N1ContactUsComponent } from "../n1-contact/n1-contact-us";
import { our_offices, N1OurOfficeComponent } from "../n1-contact/n1-our-office";
import { N1OfficeLocationComponent, offices_country } from "../n1-contact/n1-office-location";
import { connect, N1ConnectWithUsComponent } from "../n1-contact/n1-connect-with-us";
   

@Component({
  selector: 'new-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, N1TransformingComponent, N1AboutCompanyComponent, N1TechnologiesComponent, N1CaseStudyComponent, N1DiscriptionComponent,
    N1SystemComponent, N1OverviewComponent, N1WarehouseComponent, N1WebinarComponent, N1ContactUsComponent, N1OurOfficeComponent, N1OfficeLocationComponent, N1ConnectWithUsComponent],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss',
})
export class  NewPageComponent {

  
  future  :     digital_details [] = [
     {
       name:"Transforming your Digital Future",
       combine:"We combine technology with innovation, creativity, and strategy to solve complex business problems and help you go beyond regular transactions and create memorable experiences.",
       img :"https://www.kapiltech.com/static/media/IT_Servicesss.7fefb2556daa7dca5875.png",     
      
     },
   ]
 

   company  :    about_details [] = [
    {
      name:"Enterprise Technologies",
      Our:"Our intellectual property-based solutions help you accelerate innovation and drive operational excellence",
      img :"https://www.kapiltech.com/static/media/Solutionss.b78bde6087ec1570e3c3.gif",     
    },
    {
      name:"Services",
      Our:"We help you meet the ever-evolving digital expectations of your customers and citizens through our secure and flexible services.",
      img :"https://www.kapiltech.com/static/media/Services.389dba94c75f96e7349d.gif",     
    },
    {
      name:"Products",
      Our:"We provide a global antenna based on facts, not hype, to help improve IT and business services to our customers.",
      img :"https://www.kapiltech.com/static/media/Insightsss.6ab348d3349a1fa7b4b2.gif",     
    },
  ]
  
   techno  :    Technology_details [] = [
    {
      Digital:"Digital  ",
    },
  ]
    
   case  :     case_options [] = [
    {
      Case:"Case Studies",
      name:"Managed services in Infor enterprise solutions",
      An:"An industrial equipment manufacturer in GCC region has put full trust on Kapil Tech for Managed services in Infor enterprise solutions consecutive third year. Even complex Incidents are resolved in record 2 hours timeline.",
      img :"https://www.kapiltech.com/static/media/Incident_mangement.656ab47ea5a84e26c9a9.png",     
      Learn:"Learn More",
    },
    {
      Case:" ",
      name:"Process integration with Infor and third-party solutions",
      An:"An industrial equipment manufacturer in GCC region has put full trust on Kapil Tech for Managed services in Infor enterprise solutions consecutive third year. Even complex Incidents are resolved in record 2 hours timeline.",
      img :"https://www.kapiltech.com/static/media/ERP_tool.fc89f957ebbf4def6b79.png",     
      Learn:"Learn More",
    },
    {
      Case:" ",
      name:"Migration and retrofitting around 10 extended functionalities",
      An:"An industrial equipment manufacturer in GCC region has put full trust on Kapil Tech for Managed services in Infor enterprise solutions consecutive third year. Even complex Incidents are resolved in record 2 hours timeline.",
      img :"https://www.kapiltech.com/static/media/Data_migration.1b72d1207c2bd912103a.png",     
      Learn:"Learn More",
    },
    {
      Case:" ",
      name:"Warehouse management and Supplier collaboration",
      An:"An industrial equipment manufacturer in GCC region has put full trust on Kapil Tech for Managed services in Infor enterprise solutions consecutive third year. Even complex Incidents are resolved in record 2 hours timeline.",
      img :"https://www.kapiltech.com/static/media/WareHouse%20(2).82db9e63176a88ef80db.png",     
      Learn:"Learn More",
    },
  ]

  Powering  : overview [] = [
    {
      Powering:"Powering Your Business Transformation With Tomorrow’s Digital Solutions",
      In:"In the age of fast-paced evolution of technology, businesses need to be at the top of their game to stay ahead of the curve. As a specialized technology and consulting services provider, Kapil Technologies guides enterprises and IT service providers to achieve transformational business outcomes through exceptional-quality products and services for their customers. Our consulting services give enterprises the operational edge by empowering them with easy and effective decision-making abilities.",
       img :"https://www.kapiltech.com/static/media/Home_digitalTransformation%20(2).62b369844ba1755d911a.png",     
     },
     {
      Powering:"Reimagine the Possibilities and Conquer New Horizons with Kapil Technologies’ Contemporary Digital Tech Capabilities",
      In:"Helping your business thrive in this digital age is all about adapting to the constantly evolving technology landscape. With its next-generation tech capabilities, Kapil Technologies has the resourcefulness to help you reinvent your tech strategies and transform your business processes for a performance-driven growth. Trust our consulting services to provide you with custom tech solutions that help you realize tangible results.",
       img :"https://www.kapiltech.com/static/media/Contempary_Digital.9a73c6f0d6f61f2628a3.png",     
     },
  ]


  integration  :     system_details [] = [
    {
      name:"Transforming your Digital Future",
      Seamlessly :"Seamlessly connecting the end-to-end digital enterprise",
      combine:"We combine technology with innovation, creativity, and strategy to solve complex business problems and help you go beyond regular transactions and create memorable experiences.",
      img :"https://www.kapiltech.com/static/media/Google_cloud_services.d9486bfe57d03afae02c.png",     
     
    },
  ]


    powerded  :     solution [] = [
    {
      name:"Transforming your Digital Future",
      combine:"We combine technology with innovation, creativity, and strategy to solve complex business problems and help you go beyond regular transactions and create memorable experiences.",
      img :"https://www.kapiltech.com/static/media/IT_Servicesss.7fefb2556daa7dca5875.png",     
     
    },
  ]


    cloud  :     management [] = [
    {
      Case:" ",
      name:"Warehouse management and Supplier collaboration",
      An:"Edge Solutions of Warehouse management and Supplier collaboration.",
      img :"https://www.kapiltech.com/static/media/Data_migration.1b72d1207c2bd912103a.png",     
      Learn:"Learn More",
     
    },

    {
      Case:" ",
      name:"Warehouse management and Supplier collaboration",
      An:"Edge Solutions of Warehouse management and Supplier collaboration.",
      img :"https://www.kapiltech.com/static/media/Data_migration.1b72d1207c2bd912103a.png",     
      Learn:"Learn More",
     
    },
  ]

   about_webinar  :     webinar_details [] = [
    {
      Upcoming:"Upcoming Events",
      Webinar:"Upcoming Webinar",
      Past:"Past Events",
      Watch:"Watch now Webinars",
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMVeJjMZ37WQJYj4VVzuM4TJ6X_mwVjMWf99Pp5MHZkr7dnAk4F8xEZoRWc_UhmJYTKM&usqp=CAU  ",     
      Meet:"Meet Kapil Technologies @ 2024 Oracle CloudWorld",
      date:"Sep 09 - 12, 2024 | The Venetian, Las Vegas, NV",
      Transform:"Transform your business with Oracle Cloud applications, trust the experts. Kapil Technologies is delighted to return to Oracle CloudWorld.",
      
    },
  ]

  
  yourself :  contact_us[] = [
    {    
      img :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKwAtgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA5EAACAQMDAgUDAgQGAQUBAAABAgMABBEFEiExQQYTIlFhMnGBFCMVQpGhJDNiscHwUjRDcoLRB//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAAICAgMAAgMBAAAAAAAAAAABAhEDIRITMUFhBDJRIv/aAAwDAQACEQMRAD8A8QTk0Qq5FDp1omM4NNCNmPNctF6aLUbhmpDFuQiqoBQy4rnFGSrhttaS3zzSoLBcVNbRCSUL3qf9Piu4IxHKrHsaOI0xnHosjxhlGawaTOOGX+1X7wvFFdQrwDkd6tkHh2FwCVHPtWcofw1hOvTy/SNJJdcr3q1y6MTbZC84q8WfhqJGBC0yuNKiS2K7e2azWJ3bNpZo1SPnnUbNoLuRWGD1pXIm1iKufjC3VNZdVGBiq1cQ+qunjo5GLqypmhxzUeKlqgOe1axXVZUgcEVo1IRXOKAOa0a6PFaNAGsVlYaygASBdxzUjR45qCF9jZo5fUua0QjqI+ii7X1ZWhoxgGpLNsS4+aoCDUoGRgR0rLBwwCmnFxCJYyMZOKQOr20/TApeCGphHaufJwamtpPPjFS7KYFr8C3G1hH7EV7Dpi7kU14V4Zn/AE2ox/6jivbdAm3QqKTQ0Po0xUWpDbbMfg0VEPQKG1X/ANK32NJAeF+KvXrMp/FIpos0/wDEYzq833pTIlWhCqaPAoQpTS6Xig9lJoYG681wRijJV4oUjmsmMjNZXRFaIpAaIrg1Ia0RQBGayusVlACsDvRFtMEbBqO3I34PSp57XA3J0q0IOIVl3L0xQ0cmJsfNc21yQpQ0OzYuM1VgWq2cOgB9qG1KyWRCRUdlPlRTRGDrzVeksrllI0M2w9KdgBlyKF1CyEZ80H8DrXVjdbl242/OP+aBhUO+ORXQcg9c17F4OvRNbxMG6ivHGRmOVX+9XXwHfNE3kOMFTQwParVtyg5zQ2sHFq5+DXWmybolb3FAeIrkQ2jnODio+Rnjettv1ic/OKBkXip7lxLfzO3OW6jrXUcCS+YWnjjCIWG/PrI/l496tMSQnuk4qFY/TRE3qJIrAPTQMAmTB/FAMOTTC44Y0E/JrOQyLFaxXRFZUAcYrRFdkVzQBrFZWVlAC0IAwIOKZQAPHgnNYtijDIzz7VhtTEMrnHzWoiGazxlh057UDJgPgU8hkwh3jK4pJdMDM20YGaUgGNm+FFOLaZVwf5vnpSC0yqeZ2zgfJo+2lj3bmznqzU0wY/Mf6mM4/OegpRLAbWbfjj3PT8CnVg63RihtIpHmcgJFjJYnijrrw3qd20kaWbNKgH0spGTnAznBPB4HPFUITxyrJGDnP5x/amGhTfptQjIOATS+30rUo7hIxaTDzIvOTdhcoG278njrwfbvTQaNqcNwkbWjF/LM+1CrHYADuOCeMEH80Ae46DcJJYrg5bFIPG155ds4z+D0qbwfJPJpEEjIwSRQVJON39ar3js3EkskQjJZEMjAHO1R1NT8jKRCdzu3059+h+1ds2xcg84/pU1npV+1uZhbMICgk3EhQRg9Ce+AT+KGlA2kh9oPQnqfirQATnLk1vsa1j1fNMLXR7i90u8vYmjEVqAXVmwxz7VMmkhxjydIQXA5NBMKlMjNMRXRjJ5IzSlsS+wY1zU8sWFzjFQ4rIZya0amVfRntnnjNcyLhlzwT8dKQEVZUrLkke3xWqYEdlcbkw3UdOKbIquOOn2oy1hjTCogAHYU4tolx9NaokrrW0eDzgHrVY1JEju3WM5Felzx7YmYKAvuar9/bGN4nLQvvi3nY4YoM4w2Ohzjj7UpuikmymxHBGeOetMBsQD9xXTGTjuewpwNudzKv9KMXZtAKrnr0pIQB4e1Y6bqcN55Ql2FgyFtu5WUqRnscE884/3tWn6xpKQR2wtLx7aO4W5izcKH34AIbC42nC9sj35pUYJUXzWhdU6hihC0bZ/5qpIRHlgCzAjHyaq0FMY6r4ne9tbqOe0Rlns2hU5x5Ts5ZmBx0YEAj/SPyJpfilbS5aZbKNp3S0izMzbQkMaKRhSD6mQN1IAGCDRhjDSvGCrgEgMg4b5FTR6BdSWzXcMQaNX2npkHjt1xyOfmlKUV6VGLfg90TXbW6s4lhgeF0CxRjzBt2LwvbrjAPNL/ABFrca61czSQs0U8ckMsaPtYK4wcHkZHXp2ocxGzwF3j0gsHXBBoK7m86QADJA9qSkn4EotaYTb69amMxNaSyWscKwxQSSIyttBAZ8pw2STlcdh2pHc3DSIsbksqDAyOgzn/AJptaRtLhIkLSHooHJqW40y9CFv0UmFHPoyV++OlWSVzPGe/Qn57Vl/KpgOZNvHIzn/v2q06Npbap5yxFB5URdssB0IpXqXkrEQrHpzkd6Vpj4tbKREVacnOaN9PWmEbxiQ859qJRkZvSAR80WIRzsCnFDdatzRDZkKPwKBmgjmG2RB7Z9qzkMr/ACOmfxWZPcH7mtzJ5Urx8nYcZNaAyKkDCT2asrWKymBYYV5Bp1orKdRtIzj1TpkEZyNwpWOY8KM1HbXslleQylMiORX2k8HBzg/0rQRZ9T1C+/QLd27bVf60CLwfcDH0knHwePalf6i4FvdW98wmkltZJfUi4jAU8AgfWCOT1HTuanOr21wzTw2sscijA8u6xtXGMD09OtKBqFvaWt1bQWTDzUIBkuN+wngsBt64/Bxz0FJjFAKsQpbGTz8Vbbew0+21EnTL43yLEhVwuCrkMSB84Qj43Z7VUQKN0u+ewuTIoYqwAZQcdDkEfOR34PQ5qKbl6UpJRaovsrRMkpTyY22nlWLMvpz6s9RgHA/mHPI61W+jkOoXnlqWWFuctnaOmOfbp+KPufEcc8DLGJElIJQpF5exj3yHPzngZ5obRL+bT3uVjso7l7qPy9siZK57jPSm20hwSvfgbobebIoOTk165omnxtYwbcK2zpuPc56A15Dpdjc2kga4IQAj0g5P9ulejaRrUAEAMyKEQoyM+3nJIIPQ8H3rlzybZ044PhoG8c20cUUJLAurMGOST9KnHPbn+9ebPNIlwxgdhgYYr7Grh/8A0bVHURAZK5ZmkH0liF4B79Bz8157bzGabeTknvWn49kZ9Jf0uNsIU0fL3f6bzI5G3CMt5zqQBFkdBjn25+Kgig00XGnbNSNsHjJuZlhctbvzjHv2Ax96Et7uSCIxhUlifBaKUZU4/wBj85qQXFkfS9gUDDlo5mLA+43ZB+x6+4rqOUnvS3+EuSQstwhLkenfhiN2PcgD/fvSK8ljSVTKheNWBdA20sO4z2ptqksU+pzTwSNJG7AqWXaRwOMew6DrwBS6bVktdPvrQ2cMz3Awsrj1R/IqZWl4XFW9sbW+q21rZxul3DawuPQiyvCPnCQq0hH+uRhnnioNXv7Oa2DzeXcO4/adJN5+6y7Vfjukqk85BpN4Z11vDmqx362cN4fJaPy5W4Ge+cHB49ulKzJ5tzJKUVC7ltqDCrnnA+KSJHgkBjwMfcd6gYcmoIpMjFExLkGm0BWtQAF7Ln3/AOKgyMcUbqUe+9lBxgcmg5UVQGUkDPeoA1/3rWqxs54OaygB/bX8e0ftnI64NdS3McgOIWJ+4qv24lbknFNbSNicuxwPYVt6RYMdT/SyNmJwPgihG1qOWQ/tP6gRyR+Ka6npsU1uzRud+OARVVgtZZLsQKP3M8VEtFrekMP4zHgfstx8122rxgL+y3HGAf6VcfDnhTSxJvmAun6lJOg98VaE0fQgXK6XaKV+pjHn7Vj2I36JVtnm+kvPfgmK2cRDq7tgCrXat5WJrgvLIR9WegrJShmkjRQoBwAOldw28synYjttHJUZ2/NTObN8WJBBu1YZETf1oO81mGw2mUN5h5RA3J+a1c3R0u0jvvKDbHAUdnbrz8VUta1C68Qa5LetBFHNNgCOEYUYGP8AiohFylbWi8slBcYv/Q61/wAU3l7ZRWlwZJYozvRARxnnrU/hbSZLqRZLtzaK3KrnLGhLa2g06EM+GuD1Y9F+1Oo44ILC21Fb9JJZnKtAv1Jj3rSWSMf1Jh+O5K5hviTSm0WGK6jfzrWQ4LDgqfmq62qBV4RuO2adeKNaaXRYLM/XI+f/AIgVTs8lvb+/tXRjdqzjyx4zoffq5RGkgt2II45H1H/v9qruq6ttmKNbsGHHUUW9xKIY41lfYp3YPZqRanuaRpXYkgcZ/tTZmiR9Zj3EGBuOOo7V1FrERP8AkN/UUiPWp4DgZ/8AE5qUMstvqqEjEDf1FM49RMiYjiKk9yaqCTeoD3r0XwroKXcSO4zkUOSQ4wcnoQTRxiNmf/MJyO5pNKW3Hd1r1m+8JwMMqCMHtSDV/Bh8kvGzM3UZXis5TTNOmR5+ayp7qF7aVopFKsD3rVMyFkF5KGxuwKbWl2zd84+ar60/0HTJLyIzyy+XAp6jkn4quVbYKDk9DqwzM4UtjIyee1TypDbXX7Ea5I5J5NatFgiJSPt711dIXCt/49KxnNyOvFjUF9jPT7grOhVmG0g8dx7U11/VLTzmOnB1hK/+59RPeqdp126akIH+mQED703usuM87qz47NVK40A2Er+e4ZSFblW9vin1nqlzpxk/TybFkTy34HK1LHpJuNHeSyx+pQbl3jOfcVWbecPLh33knJGMjPf7VMtm2PRZNV0S61TQrZrYrsEhLBjgdKrX6UaW0il1ebplelOdR8TXU+bO2QxwxJjK+rNKoLZ3bMjbs9zT51Ggjijz7JATl5h6utF2UCW4M03CryPk+1d3P6awUySli/ZFGdxpYmpSXk2ZlCKvCq38v4qsUHJ78Iz51BUvSe7le4laWXgdh7D4qOznWG6SWWCO4RM/tSE4P3xXEsu4H0hufqbrUY4/PSuxKtHmN7snW4eOPChTknHehzNbS3duuoBv0gkHn+X1I71qWTYMD66EYEgn+tZ5N6HF7sC8QLYDVrj+ELKtiW/ZE31bfmlwJXpTaWFHBPehorXMwz0qVpFPciK2DrKGwSevSvYfBOvzrYrAVQKVxnbz0rzyS3jSJMdaunhZFis9564qJs6cMeJcxrRhu02kFlOPUOKeNqjeTlghyOwrzSzna51sgdEq33jiOFAe/FRbNJJFd1/w9DfyB1XHOcqK3T6eaOG3jB71lPmyXjTPnUVc7CQLpkKIcbkqmCrHok4ezETNgoSAK0n4c2F1I3LNNbSbl9XPQdac21wl5ZrIn/2+9LZ0zz71DpczWl60bf5Uv9jWSOlG9TVop1lT6lcMPxTq7vkEKtH/ADqGH55oO/jH1P8AT0oOydnk/SsOg/bNDZUfS9eCNf8A3TaT8CQcH5H/AH+9K/EegvpmpM0bf4aY+ZGT1PPINJIJntJ45YxtZT1969Dilt/E2im3f03KYaNv9QqLNU6eiixw7J2I9TMfUcVLqOsR6XAFJLzuMKgPH3NT6mkmnIYLeMtcnt2FV1tEvb2VpJkGWOTjPWqjFXbM82WlxicR/qdSguZI8yeTGZZcsBhB16/ehLDcsnHf4p/a+GWCjKj5yT/+0ytfDqo2cAfbiujsSOFwbECqwPJAB5rpwduEQ/Oe9WxNCjByRmiF0iFeq0nmQLEyhC2uHb0rx2qdNOuGHK1ev0MSjhahlSOMdMVDyNl9aRTv4TKByMVDJp7w+onFWW8mQKQtILtpJAQKFbE6Xgvac+akbNwTV0WeOz0rcr4O3IOe9UC4t5lcFetSTzXklv5TE4x0FVxLjkL/AOAt95LLcEZLHOatd85/VLGRjBqheANYNivkSKeR3p7da076luVeNtLijaM7Qdq9wSyovUGtVX57uaS6dgvaspcCuyKPMftUkMjxOGjbDCuDnvWVqcC+iyabeLdxsr+mVRz81xfLvG1CCev2pDFI8bboyQaZ2t8wYebFk+4NZSjXh0Y8q+RpG8l1AkcrHeo9We9EQwLE6NnLggjFL5b52jYW0Ls5/mI6VvT5dW3hPJWTP80g6Vm4N7Ne2KLDqMMc7/qIl2qQC+OgNdaJfSWd6giU7Rw2KYafG6QqJtpbuAOKLjiRDuWNRk9RWZfZ9Bly6XUolZTnGOa5WNB0GK0oPepAO461Rk3Zp2jiX1HFDfxG3XocmhdW/UPAyRoWz7VSZv4lbSMTCxUH2rSKXyZybXhfX1ePHFDSaux4WqSmuTIcSxkfeiotchbqMGtVGBm5SLI+oSt1oWaWaXocUBHqUD98UdZXFm0n+IfEdWlEh2BSWs7fzVwml3Tn0hmHwOKeNqthA2Lay8w9jiobnxNKqbYbX1f1xV0ibABoN2SGaNFX5ajP4NEI8SyKPsKUz6vqcuTJLsU/ygVwLl5F9Zc/c0qRSY809bCwckMCfk1lxfwtJmMAjPYUjDn+XGPitkM3qpUVyGcl76zxit0pLleTWqAsrwgRvq61PDZw7vVXC12rEdKxbY0kNLW0sgRkA/em9vHZjACrVajkb3oqKR89allotcS2nGFXNFRiEdAB9qrNvI2RzTe0YkcnvWbRaHCY7VKpoSPtRKdKkomU1IDUOa2DQBPwetaaOFxhkB+4qMVuiwB59JsJgQ8Kn8UquvCGnTZKJsPuOKeisNPk0LiimXHgkrk21032NLZvDerwZMe11Hsa9ENaNPsaJeNHmDrqtqcSwSffGa5XWJ0O2RT+RXpzKrcMoP3FD3GmWdwMS26H8VaykvGjz4a4qkHylY/I5qeLVrCRQ08DIc/ymrDqHhfS/L3LCyH/AEtVT1TTYLWQiIydO7VrHJZnxHK3Vk6Dy5/L39DiibexhLAi4Dr7lqo29kbhjxUwvZ8Y38Vdklp1yWGwEaxsGZuTisqrCV2GWPNZSGf/2Q==",     
      Contact:"Contact Us",
      Tell:"Tell us a Little About Yourself",
      company:'',
      Name:'',
      email:'',
       number : '',
       Industry:  '',
      tell:'',   
       
      
    },
  ]

    office :   our_offices[] = [
    {    
      img:"data:image/png;base64,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",  
      img1:"data:image/png;base64,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",     
      img2:"data:image/png;base64,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",      
      Our:"Our Offices",
      America:"America",
      Pacific:"Asia Pacific",
      Middle:"Middle East",
       
    },
    
  ]
 

    

}


  
 