import React from 'react'
import { cicoSwitchData, ciscoData, ciscoDesc, ciscoService, fortinetData, fortinetDesc, fortinetService, fortinetSwitchData, merakData, merakiDesc, merakService } from './data'
import { SubheroVm } from '../../cloud-services/components/subheroVM'
import SubHeader from '../components/SubHeader'
import Header from '../components/Header'

const Routing = () => {
  return (
    
    <div>
      <Header title='Routing and Switching'/>
        <SubHeader
      subtitle='Cisco Systems'
      description={ciscoDesc}
    />
    <SubheroVm
    intro='Routing Solutions'
    data={ciscoData}
    />
    <SubheroVm
    intro='Switching Solutions'
    data={cicoSwitchData}
    position='left'
    />
     <SubheroVm
    subtitle='Services'
    data={ciscoService}
    />

     <SubHeader
      subtitle='Meraki (A Cisco Company)'
      description={merakiDesc}
    />
    <SubheroVm
    intro='Routing Solutions'
    data={merakData}
    />

       <SubheroVm
    subtitle='Services'
    data={merakService}
    />


     <SubHeader
      subtitle='Fortinet'
      description={fortinetDesc}
    />
    <SubheroVm
    intro='Routing Solutions'
    data={fortinetData}
    />
    <SubheroVm
    intro='Switching Solutions'
    data={fortinetSwitchData}
    position='left'
    />
     <SubheroVm
    subtitle='Services'
    data={fortinetService}
    />

    </div>
  )
}

export default Routing
