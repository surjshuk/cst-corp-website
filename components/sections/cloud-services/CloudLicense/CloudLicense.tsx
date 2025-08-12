import React from 'react'
import Header from '../components/Header'
import { Subhero } from '../components/subhero'
import { awsLicenceData, awsLicenceDesc, awsLicenceFeature, msNewComerceData, msNewComerceDesc, msNewComerceFeature, whatawsLicenceDesc, whatNewComerceDesc } from './data'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'
import { cyberSecBG3 } from '@/app/assets/'

const CloudLicense = () => {
  return (
    <div data-id="cloud-license" id="cloud-license">
      <Header title={"Cloud License"}/> 
       <Subhero
      subtitle='Microsoft New Commerce Experience (NCE)'
      description={msNewComerceDesc}
      />
       <Subhero
      subtitle='What is the Microsoft New Commerce Experience (NCE)?'
      description={whatNewComerceDesc}   
      position='left'  />


        <CloudSpecial tabData={msNewComerceData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Benefits of the Microsoft NCE" features={msNewComerceFeature}/>
        
       <Subhero
      subtitle='Amazon AWS Marketplace for Flexible Cloud Licensing'
      description={awsLicenceDesc}
      />
       <Subhero
      subtitle='What is the AWS Marketplace for Flexible Cloud Licensing ?'
      description={whatawsLicenceDesc}   
      position='left'  />


        <CloudSpecial tabData={awsLicenceData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of AWS Marketplace for Flexible Cloud Licensing" features={awsLicenceFeature}/>
        


    </div>
  )
}

export default CloudLicense
