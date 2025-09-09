import React from 'react'
import Header from '../components/Header'
import { azureesc, azureFeature, azurTabs,dropDesc,dropFeature,dropTabs,googleDesc,googleFeature,googleTabs,s3esc,s3Feature,s3Tabs,veemDesc,veemFeature,veemTabs,whyAzure, whyDrop, whyGoogle, whyS3, whyVeem } from './data'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'
import { SubheroVm } from '../components/subheroVM'
import SubHeader from '../components/SubHeader'
import Section from '@/components/Section'
import Index from '../components/Index'

const CloudStorage = () => {
  return (
    <Section id="cloud-storage" data-id="cloud-storage">
            <Index
        title="Cloud License"
        slug="cloud-services"
        data = {[
          {
          header:"Cloud Storage",
        
          subheader:[
          `Microsoft Azure`,
          `Amazon S3`,
          `Google Drive`,
          `Dropbox File Storage`,
          `Veeam Backup as a Service (BaaS)`
        ]},
       
        
      ]}
      />
      <Header title={"Cloud Storage"}/> 
      <SubHeader
            title='Microsoft Azure'
            position='right'
            group='Cloud Storage'
            website='dsd'
            description={azureesc}
            />
             <SubheroVm
            intro='What is Microsoft Azure?'
            data={whyAzure}   
            border= {false}
            position='left'  />

              
        <CloudSpecial tabData={azurTabs} />
        
        <KeyFeaturesSection title="Key Features of Microsoft Azure" features={azureFeature}/>
       
       <SubHeader
  title='Amazon S3'
  subtitle='Scalable, Secure, and Reliable Object Storage for Modern Businesses'
  description={s3esc}
  position='right'
  group='Cloud Storage'
  website='sds'
/>

 <SubheroVm
            intro='What is Amazon S3?'
            data={whyS3}   
            border= {false}
            position='left'  />

<CloudSpecial
  tabData={s3Tabs}

/>

<KeyFeaturesSection
  title="Core Features of Amazon S3"
  features={s3Feature}
/>



       <SubHeader
  title='Google Drive'
  subtitle='The Ultimate Cloud Storage and Collaboration Solution for Modern Businesses'
  description={googleDesc}
  position='right'
  group='Cloud Storage'
  website='sds'
/>


 <SubheroVm
            intro='What is Google Drive?'
            data={whyGoogle}   
            border= {false}
            position='left'  />

<CloudSpecial
  tabData={googleTabs}
  
/>

<KeyFeaturesSection
  title="Core Features of Google Drive"
  features={googleFeature}
/>




       <SubHeader
  title='Dropbox File Storage'
  subtitle='Simplify, Secure, and Empower Your Team’s Workflow'
  description={dropDesc}
  position='right'
  group='Cloud Storage'
  website='sds'
/>



 <SubheroVm
            intro='What is Dropbox File Storage?'
            data={whyDrop}   
            border= {false}
            position='left'  />

<CloudSpecial
  tabData={dropTabs}
/>

<KeyFeaturesSection
  title="Core Features of Dropbox File Storage"
  features={dropFeature}
/>


<SubHeader
  title='Veeam Backup as a Service (BaaS)'
  subtitle='Simplified, Reliable, and Scalable Data Protection'
  description={veemDesc}
  position='right'
  group='Cloud Storage'
  website='sds'
/>


 <SubheroVm
            intro='What is Veeam Backup as a Service (BaaS)?'
            data={whyVeem}   
            border= {false}
            position='left'  />

<CloudSpecial
  tabData={veemTabs}

/>

<KeyFeaturesSection
  title="Core Features of Veeam Backup as a Service"
  features={veemFeature}
/>





    </Section>
  )
}

export default CloudStorage
