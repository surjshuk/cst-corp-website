"use client"


import WhoWeAre from "@/components/sections/main/WhoWeAre/WhoWeAre";
import WhatWeDo from "@/components/sections/main/WhatWeDo/WhatWeDo";
import OurPartners from "@/components/sections/main/OurPartners/OurPartners";




    
export default function Home() {
  return (
    <>
    <WhoWeAre/>
    <WhatWeDo/>
    <OurPartners/>
      <div data-id="our-team">
        {/* <Team /> */}
      </div>
    </>
  )
}

