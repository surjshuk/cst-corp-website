import Section from '@/components/Section'
import React from 'react'
import { mainTabData } from './data'
import { MainSpecial } from './components/MainSpecial'

const WhoWeAre = () => {
  return (
    <div>
        <Section data-id="who-we-serve" id="who-we-serve">
       
        <MainSpecial tabData={mainTabData} />

      </Section>
    </div>
  )
}

export default WhoWeAre
