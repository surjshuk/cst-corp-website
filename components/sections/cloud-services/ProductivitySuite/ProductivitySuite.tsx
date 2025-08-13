import React from 'react'
import Header from '../components/Header'
import { Subhero } from '../components/subhero'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'
import { googleDesc, googleFeature, googleTabData, msDesc, msFeature, msTabData, whyGoogle, whyMs } from './data'
import { cyberSecBG3 } from '@/app/assets'

const ProductivitySuite = () => {
  return (
    <div data-id="productivity-suite" id='productivity-suite'>
      <Header title={"Productivity Suite"}/> 
       <Subhero
      subtitle='Microsoft Office 365'
      description={msDesc}
      />
       <Subhero
      subtitle='What is Microsoft Office 365?'
      description={whyMs}   
      position='left'  />

      
        <CloudSpecial tabData={msTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of Microsoft Office 365" features={msFeature}/>
       
         <Subhero
      subtitle='Google Workspace '
      description={googleDesc}
      />
       <Subhero
      subtitle='What is Google Workspace?'
      description={whyGoogle}   
      position='left'  />

      
        <CloudSpecial tabData={googleTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of Google Workspace" features={googleFeature}/>
       
    </div>
  )
}

export default ProductivitySuite
