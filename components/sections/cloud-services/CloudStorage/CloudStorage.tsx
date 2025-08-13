import React from 'react'
import Header from '../components/Header'
import { Subhero } from '../components/subhero'
import { azureesc, azureFeature, azurTabs,dropDesc,dropFeature,dropTabs,googleDesc,googleFeature,googleTabs,s3esc,s3Feature,s3Tabs,veemDesc,veemFeature,veemTabs,whyAzure, whyDrop, whyGoogle, whyS3, whyVeem } from './data'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'
import { cyberSecBG3 } from '@/app/assets/'
import { SubheroVm } from '../components/subheroVM'

const CloudStorage = () => {
  return (
    <div id="cloud-storage" data-id="cloud-storage">
      <Header title={"Cloud Storage"}/> 
      <Subhero
            subtitle='Microsoft Azure'
          
            description={azureesc}
            />
             <SubheroVm
            intro='What is Microsoft Azure?'
            data={whyAzure}   
            border= {false}
            position='left'  />

              
        <CloudSpecial tabData={azurTabs} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of Microsoft Azure" features={azureFeature}/>
       
       <Subhero
  subtitle='Amazon S3'
  intro='Scalable, Secure, and Reliable Object Storage for Modern Businesses'
  description={s3esc}
/>

 <SubheroVm
            intro='What is Amazon S3?'
            data={whyS3}   
            border= {false}
            position='left'  />

<CloudSpecial
  tabData={s3Tabs}
  className="h-[400vh]"
  imageSrc={cyberSecBG3} // replace with your actual image import
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Core Features of Amazon S3"
  features={s3Feature}
/>



       <Subhero
  subtitle='Google Drive'
  intro='The Ultimate Cloud Storage and Collaboration Solution for Modern Businesses'
  description={googleDesc}
/>


 <SubheroVm
            intro='What is Google Drive?'
            data={whyGoogle}   
            border= {false}
            position='left'  />

<CloudSpecial
  tabData={googleTabs}
  className="h-[400vh]"
  imageSrc={cyberSecBG3} // replace with your actual image import
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Core Features of Google Drive"
  features={googleFeature}
/>




       <Subhero
  subtitle='Dropbox File Storage'
  intro='Simplify, Secure, and Empower Your Team’s Workflow'
  description={dropDesc}
/>



 <SubheroVm
            intro='What is Dropbox File Storage?'
            data={whyDrop}   
            border= {false}
            position='left'  />

<CloudSpecial
  tabData={dropTabs}
  className="h-[400vh]"
  imageSrc={cyberSecBG3} // replace with your actual image import
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Core Features of Dropbox File Storage"
  features={dropFeature}
/>


<Subhero
  subtitle='Veeam Backup as a Service (BaaS)'
  intro='Simplified, Reliable, and Scalable Data Protection'
  description={veemDesc}
/>


 <SubheroVm
            intro='What is Veeam Backup as a Service (BaaS)?'
            data={whyVeem}   
            border= {false}
            position='left'  />

<CloudSpecial
  tabData={veemTabs}
  className="h-[400vh]"
  imageSrc={cyberSecBG3} // replace with your actual image import
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Core Features of Veeam Backup as a Service"
  features={veemFeature}
/>





    </div>
  )
}

export default CloudStorage
