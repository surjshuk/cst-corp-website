import Section from '@/components/Section'
import React from 'react'
import { mainTabData } from './data'
import { MainSpecial } from './components/MainSpecial'

const WhoWeAre = () => {
  return (
    <div>
        <Section data-id="who-we-are" id="who-we-are">
       
        <MainSpecial tabData={mainTabData} />

      </Section>
    </div>
  )
}

export default WhoWeAre
