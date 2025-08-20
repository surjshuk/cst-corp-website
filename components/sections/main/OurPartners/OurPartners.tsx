import Section from '@/components/Section'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { dtlsData, logosData, productData } from './data'
import Link from 'next/link'
import Image from 'next/image'
import { KeyFeaturesSection } from './components/key-features'
import { BRAMERLOGO, DLTS } from '@/app/assets'




const OurPartners = () => {
    
  return (
     <Section id="our-partners" data-id="our-partners">
            <div className="border-t border-black pt-10 md:mx-12 mx-5 ">
          <div>


          <h2 className="md:text-6xl text-4xl text-blue-500 text-end ">Our Partners</h2>

          <div className="md:mt-28 mt-14">
            <Image src={BRAMERLOGO} alt='' className='w-[200px]'/>
            <p className="md:w-2/3 md:text-2xl text-2xl mt-8 w-[95%]">At Bramer, we are dedicated to engineering advanced autonomous systems that drive operational efficiency and deliver actionable intelligence across critical domains.</p>
          </div>

          <KeyFeaturesSection features={productData}/>
{/* video */}
          <div>

          </div>
          
          </div>

          <div className='mt-16'>
            <div className='flex items-center  mb-2 gap-2'>
              <Image src={DLTS} alt='' className='md:w-[50px] w-[34px]'/>
              <h2 className="md:text-6xl text-4xl font-medium">DTLS</h2>
            </div>
            <p className="md:w-2/3 md:text-2xl text-2xl mt-8 w-[95%]">DTLS is a specialized technology innovation lab delivering AI-powered industrial, healthcare, and enterprise automation systems. Backed by CST Corp (Houston, USA), DLTS builds sovereign, scalable, and mission-critical solutions for defense, energy, and public sector organizations. Its core expertise spans AI software engineering, cybersecurity, edge computing, and predictive analytics.</p>
            <KeyFeaturesSection features={dtlsData}/>

            <div className="border-t border-black mt-20">
             <h2 className="text-blue-500 md:text-6xl text-4xl mt-12 mb-5 text-end">Our Vendors</h2>
             
        <Carousel plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}>
            <CarouselContent>
        {logosData.map((logo, index) => (
          <CarouselItem
            key={index}
            className="2xl:basis-1/5 md:basis-1/3 basis-1/3  flex items-center justify-center"
          >
            <Link href={logo.link} target="_blank">
              <Image
                src={logo.image}
                alt={`Logo ${index + 1}`}
                className="object-contain md:w-48 w-28"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
          
          </Carousel>


           

      
           </div>

          </div>

        </div>
      </Section>
  )
}

export default OurPartners
