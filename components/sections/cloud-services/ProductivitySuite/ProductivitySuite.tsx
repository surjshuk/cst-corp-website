import React from 'react'
// import Header from '../components/Header'
import { SubHeader } from '../components/SubHeader'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'
import { googleDesc, googleFeature, googleTabData, msDesc, msFeature, msTabData, whyGoogle, whyMs } from './data'
import Section from '@/components/Section'
import Index from '../components/Index'

const ProductivitySuite = () => {
  return (
    <Section data-id="productivity-suite" id='productivity-suite'>
           <Index
        title="Productivity Suite"
        slug="cloud-services"
        data = {[
          {
          header:"Productivity Suite",
        
          subheader:[
          `Microsoft Office 365`,
          `Google Workspace`,
         
        ]},
       
        
      ]}
      />
      {/* <Header title={"Productivity Suite"}/>  */}
       <SubHeader
      title='Microsoft Office 365'
      description={msDesc}
      position='right'
            group='Productivity Suite'
            website='dsd'

      />
       <SubHeader
      title='What is Microsoft Office 365?'
      description={whyMs}   
      position='left'  />

      
        <CloudSpecial tabData={msTabData} />
        
        <KeyFeaturesSection title="Key Features of Microsoft Office 365" features={msFeature}/>
       
         <SubHeader
      title='Google Workspace '
      description={googleDesc}
       position='right'
            group='Productivity Suite'
            website='dsd'
      />
       <SubHeader
      title='What is Google Workspace?'
      description={whyGoogle}   
      position='left'  />

      
        <CloudSpecial tabData={googleTabData}/>
        
        <KeyFeaturesSection title="Key Features of Google Workspace" features={googleFeature}/>
       
    </Section>
  )
}

export default ProductivitySuite
