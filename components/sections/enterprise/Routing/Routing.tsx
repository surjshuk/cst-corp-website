import React from 'react'
import Header from '../../cloud-services/components/Header'
import { Subhero } from '../../cloud-services/components/subhero'
import { cicoSwitchData, ciscoData, ciscoDesc, ciscoService } from './data'
import { SubheroVm } from '../../cloud-services/components/subheroVM'

const Routing = () => {
  return (
    
    <div>
      <Header title='Routing and Switching'/>
        <Subhero
      subtitle='Cisco Systems'
      description={ciscoDesc}
    />
    <SubheroVm
    intro='Routing Solutions'
    data={ciscoData}
    />
    <SubheroVm
    intro='Services'
    data={cicoSwitchData}
    position='left'
    />
     <SubheroVm
    subtitle='Services'
    data={ciscoService}
    />
    </div>
  )
}

export default Routing
