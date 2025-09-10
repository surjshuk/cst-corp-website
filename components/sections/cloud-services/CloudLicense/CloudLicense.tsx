import React from 'react'
// import Header from '../components/Header'
import { SubHeader } from '../components/SubHeader'
import { awsLicenceData, awsLicenceDesc, awsLicenceFeature, msNewComerceData, msNewComerceDesc, msNewComerceFeature, whatawsLicenceDesc, whatNewComerceDesc } from './data'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'
import Section from '@/components/Section'
import Index from '../components/Index'

const CloudLicense = () => {
  return (
    <Section data-id="cloud-license" id="cloud-license">
       <Index
        title="Cloud License"
        slug="cloud-services"
        data = {[
          {
          header:"Cloud License",
        
          subheader:[
          `Microsoft New Commerce Experience (NCE)`,
          `Amazon AWS Marketplace for Flexible Cloud Licensing`,

        ]},
       
        
      ]}
      />
      {/* <Header title={"Cloud License"}/>  */}
       <SubHeader
      title='Microsoft New Commerce Experience (NCE)'
      description={msNewComerceDesc}
      group='Cloud License'
      website='ssds'
      position='right'
      />
       <SubHeader
      title='What is the Microsoft New Commerce Experience (NCE)?'
      description={whatNewComerceDesc}   
      position='left'  />


        <CloudSpecial tabData={msNewComerceData} />
        
        <KeyFeaturesSection title="Key Benefits of the Microsoft NCE" features={msNewComerceFeature}/>
        
       <SubHeader
      title='Amazon AWS Marketplace for Flexible Cloud Licensing'
      description={awsLicenceDesc}
      group='Cloud License'
      website='ssds'
      position='right'
      />
       <SubHeader
      title='What is the AWS Marketplace for Flexible Cloud Licensing ?'
      description={whatawsLicenceDesc}   
      position='left'  />


        <CloudSpecial tabData={awsLicenceData} />
        
        <KeyFeaturesSection title="Key Features of AWS Marketplace for Flexible Cloud Licensing" features={awsLicenceFeature}/>
        


    </Section>
  )
}

export default CloudLicense
