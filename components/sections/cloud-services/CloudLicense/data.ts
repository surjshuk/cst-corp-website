import { awscons, awsgrowth, awssubscrib, bilaws, iceff, keyawscloud, licaws, msenhanced, msimprove, mskey, msscale, mssemless, mssimplified } from "@/app/assets";
import { Feature } from "../../AI/feature";
import { CloudSpecialType } from "../type";


export interface Tab {
  id: string;
  title: string;
  heading: string;
  description: string;
}

export const msNewComerceDesc:string[] = [
`Microsoft’s New Commerce Experience (NCE) represents a transformative shift in how businesses acquire, manage, and optimize their Microsoft licensing and subscription services. Designed to simplify purchasing processes, enhance flexibility, and align with modern customer needs, Microsoft NCE introduces new subscription models, pricing structures, and features that benefit organizations of all sizes.`
]
export const whatNewComerceDesc:string[] =[
`The Microsoft NCE is an updated licensing framework that streamlines how businesses purchase and manage Microsoft products, including Microsoft 365, Dynamics 365, Power Platform, and Windows 365. This modernized commerce platform is designed to improve operational efficiencies, reduce complexity, and provide more robust tools for managing licenses.`,
`Initially launched for Microsoft Azure in 2019, the NCE has expanded to include all seat-based subscriptions as of 2022, signaling a unified and customer-focused approach to licensing`
]



export const msNewComerceData:CloudSpecialType[] = [
{
   image:mskey,
    title:'Key Benefits of the Microsoft NCE',
    },
  {
   image:mssimplified,
    title:'Simplified Licensing Management',
    description:'The NCE centralizes licensing into a single, unified platform, making it easier for businesses to manage subscriptions and track their usage. This eliminates much of the confusion associated with legacy licensing models.'
  },
  {

    title:'Flexible Commitment Terms',
    description:'Provides flexibility with the ability to adjust licenses monthly. This option is ideal for businesses with fluctuating workforce sizes or seasonal demands. Offers cost savings for customers who can commit to a 12-month agreement. This is well-suited for organizations with stable, predictable needs. Enables businesses to lock in pricing for up to three years, providing long-term budget stability and predictable costs'
  },
  {
    image:msimprove,
    title:'Improved Cost Efficiency',
    description:'The NCE incentivizes annual and multi-year commitments by offering discounts compared to monthly plans. This structure rewards businesses that can commit to longer terms, ultimately lowering overall costs.'
  },
  {
    
    image:mssemless,
    title:'Seamless Integration Across Applications',
    description:'Google’s AI and ML APIs are built to seamlessly integrate with your existing applications, whether hosted in the cloud or on-premises. With powerful APIs like Vision, Translation, and Language, businesses can add intelligent features directly into their apps, websites, and mobile platforms. These APIs are highly scalable and can handle high volumes of requests, ensuring that your business can scale as demand grows without sacrificing performance or reliability.'
  },
    {
   image:msenhanced,
    title:'Enhanced Operational Consistency',
    description:'With the NCE, Microsoft partners and customers benefit from more predictable billing cycles and streamlined processes. Automated renewal options ensure there is no disruption in service continuity.'
  },
   {
    image:msscale,
    title:'Scalable Growth',
    description:'The NCE accommodates business growth by allowing for seamless license additions throughout the term. This scalability ensures organizations can adapt quickly as their needs evolve.'
  }
];

export const msNewComerceFeature: Feature[] = [
  {
    title: "Seat-Based Subscriptions",
    description: `Designed for user-based licenses, the NCE includes popular Microsoft offerings like Microsoft 365, Dynamics 365, and Power Platform. Businesses can now enjoy clearer pricing and terms for these essential services.`
  },
  {
    title: "Price Protection",
    description: `Annual and multi-year agreements come with fixed pricing, protecting customers from market fluctuations and providing financial predictability over the course of the term.`
  },
  {
    title: "Cancellation Policies",
    description: `The NCE allows cancellations within the first 72 hours of a subscription’s start date, including prorated refunds. Beyond this window, businesses are locked into their chosen term, encouraging careful planning and commitment.`
  },
  {
    title: "Upgrade and Co-Term Options",
    description: `Businesses can upgrade their licenses mid-term to accommodate changing needs, while co-terming allows for subscription alignment across different products for simplified renewal management.`
  },
  {
    title: "Promotions and Incentives",
    description: `Microsoft frequently offers exclusive NCE promotions, enabling businesses to save even more when adopting this modern commerce platform.`
  }
];

export const awsLicenceDesc:string[] = [
`Amazon Web Services (AWS) Marketplace for Flexible Cloud Licensing offers businesses an innovative way to manage, purchase, and optimize their cloud services. Designed with modern businesses in mind, AWS Marketplace provides greater flexibility, a wide range of offerings, and improved cost management for customers, helping them meet dynamic cloud infrastructure demands.`
]
export const whatawsLicenceDesc:string[] =[
`The AWS Marketplace for Flexible Cloud Licensing is a platform that simplifies the procurement, management, and cost optimization of cloud-based solutions offered through AWS. This platform provides an expansive range of services, including computing, storage, security, machine learning, and more. It is designed to offer businesses a streamlined approach to acquiring and managing AWS licenses and services.`,
`With this marketplace, businesses have access to flexible licensing options, helping them meet their unique requirements and scale with ease. Customers can deploy and manage cloud resources on their own terms while benefiting from a single marketplace experience that facilitates efficient cloud usage.`
]


export const awsLicenceData:CloudSpecialType[] = [
{
   image:keyawscloud,
    title:'Key Benefits of the AWS Marketplace for Flexible Cloud Licensing',
    },
  {
       image:licaws,
    title:'Streamlined Licensing Management',
    description:'AWS Marketplace simplifies how organizations purchase and manage their cloud resources. With easy-to-navigate purchasing options, businesses can efficiently manage subscription services without the complexity often associated with traditional licensing models.'
    },
  {
    image:awssubscrib,
    title:'Flexible Subscription and Licensing Models',
    description:'Organizations now have access to a variety of flexible licensing options that are adaptable to their business needs: • Pay-As-You-Go: Allows for on-demand purchasing of cloud services, ideal for businesses that experience fluctuating demand and need maximum flexibility. • Reserved Instances: Offers significant savings for customers willing to commit to a set amount of usage for a longer period, ensuring stable pricing for budget-conscious businesses. • Annual and Multi-Year Plans: Businesses can secure discounted rates by committing to longer-term plans, which offer budget predictability and cost savings.'
  },
  {
   image:iceff,
    title:'Improved Cost Efficiency',
    description:`AWS Marketplace provides businesses with pricing options that reflect their exact needs, allowing for optimized cost management. Long-term contracts and reserved instances deliver considerable savings when compared to pay-as-you-go models.`
  },
  {
    image:awsgrowth,
    title:'Scalable and Flexible Growth',
    description:`As businesses scale, AWS Marketplace offers the ability to expand licenses and services seamlessly. This flexibility ensures that organizations can rapidly adjust their infrastructure to meet growth demands, supporting agile business models.`
    },
    {
   image:awscons,
    title:'Enhanced Operational Consistency',
    description:'With the NCE, Microsoft partners and customers benefit from more predictable billing cycles and streamlined processes. Automated renewal options ensure there is no disruption in service continuity.'
  },
   {
    image:bilaws,
    title:'Simplified Billing and Management',
    description:`The AWS Marketplace enables consolidated billing for all cloud services, reducing administrative overhead and streamlining financial tracking. This simplifies the process for businesses by centralizing their cloud licensing and service management.`
  }
];


export const awsLicenceFeature: Feature[] = [
  {
    title: "Wide Range of Solutions",
    description: `From compute and storage to machine learning and security, the AWS Marketplace provides a broad selection of services that cater to diverse business requirements. Customers can easily browse and procure solutions based on their specific needs.`
  },
  {
    title: "Cost Optimization Tools",
    description: `AWS Marketplace offers businesses tools to help optimize costs, including detailed billing reports, cost allocation tags, and resource management tools. These features allow customers to track usage and make data-driven decisions to ensure cost efficiency.`
  },
  {
    title: "License Flexibility",
    description: `AWS Marketplace supports a wide variety of licensing models to accommodate different customer needs, from perpetual licenses to subscription-based models, offering maximum flexibility for businesses to choose what works best for them.`
  },
  {
    title: "Easy-to-Use Dashboard",
    description: `The AWS Marketplace features an intuitive interface that allows businesses to manage licenses and services with ease. Customers can track their purchases, view usage statistics, and access resources with minimal effort.`
  },
  {
    title: "Promotions and Discounts",
    description: `AWS frequently offers special promotions and discounts through the Marketplace, helping customers maximize their investment in AWS services. These promotions provide opportunities for businesses to save even more on cloud resources.`
  }
];
