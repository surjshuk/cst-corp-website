import React from 'react'
import CloudSpecial from '../../cloud-services/components/Special'
import { cephBenefits, cephDesc, cloudObjectBenefits, cloudObjectDesc, cloudVolumesBenefits, cloudVolumesDesc, dellEcsBenefits, dellEcsDesc, dellVxRailBenefits, dellVxRailDesc, emcIsilonBenefits, emcIsilonDesc, emcPowerMaxBenefits, emcPowerMaxDesc, emcUnityXTBenefits, emcUnityXTDesc, flashSystemBenefits, flashSystemDesc, glusterBenefits, glusterDesc, infoSightBenefits, infoSightDesc, linkStationBenefits, linkStationDesc, netappAFFBenefits, netappAFFDesc, netappFASBenefits, netappFASDesc, netappONTAPBenefits, netappONTAPDesc, netappStorageGRIDBenefits, netappStorageGRIDDesc, nimbleBenefits, nimbleDesc, openshiftBenefits, openshiftDesc, qnapCloudBenefits, qnapCloudDesc, qnapEnterpriseBenefits, qnapEnterpriseDesc, qnapNASBenefits, qnapNASDesc, spectrumBenefits, spectrumDesc, storwizeBenefits, storwizeDesc, teraStationBenefits, teraStationDesc, veeamBenefits, veeamCloudBenefits, veeamCloudDesc, veeamDesc } from './data'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Section from '@/components/Section'

const NetworkStorage = () => {
  return (
    <Section data-id="network-storage" id='network-storage'>
<Header title={"Network Storage"}/> 

<Header title={"Dell EMC Network Storage Solutions"}/> 

        <SubHeader
  title='EMC Unity XT'
  description={emcUnityXTDesc
  }
/>



<CloudSpecial
  tabData={emcUnityXTBenefits}
 
/>

<SubHeader
  title='EMC PowerMax'
  description={emcPowerMaxDesc}
/>

<CloudSpecial
  tabData={emcPowerMaxBenefits}

/>

{/* EMC Isilon */}
<SubHeader
  title='EMC Isilon'
  description={emcIsilonDesc}
/>
<CloudSpecial
  tabData={emcIsilonBenefits}

/>

{/* Dell ECS */}
<SubHeader
  title='Dell ECS (Elastic Cloud Storage)'
  description={dellEcsDesc}
/>
<CloudSpecial
  tabData={dellEcsBenefits}

/>

{/* Dell VxRail */}
<SubHeader
  title='Dell VxRail'
  description={dellVxRailDesc}
/>
<CloudSpecial
  tabData={dellVxRailBenefits}

/>

<Header title='NetApp Storage Solutions'/>

<SubHeader
  title='NetApp AFF (All Flash FAS)'
  description={netappAFFDesc}
/>


<CloudSpecial
  tabData={netappAFFBenefits}
  
/>

<SubHeader
  title='NetApp FAS (Fabric-Attached Storage)'
  description={netappFASDesc}
/>



<CloudSpecial
  tabData={netappFASBenefits}

/>


<SubHeader
  title='NetApp ONTAP'
  description={netappONTAPDesc}
/>


<CloudSpecial
  tabData={netappONTAPBenefits}

/>

<SubHeader
  title='NetApp StorageGRID'
  description={netappStorageGRIDDesc}
/>


<CloudSpecial
  tabData={netappStorageGRIDBenefits}

/>



<SubHeader
  title='HPE Nimble Storage'
  description={nimbleDesc}
/>
<CloudSpecial
  tabData={nimbleBenefits}

/>

<SubHeader
  title='HPE Cloud Volumes'
  description={cloudVolumesDesc}
/>
<CloudSpecial
  tabData={cloudVolumesBenefits}
  
/>

<SubHeader
  title='HPE Nimble Storage InfoSight'
  description={infoSightDesc}
/>


<CloudSpecial
  tabData={infoSightBenefits}
  
/>

<Header title='IBM Network Storage Solutions' />


<SubHeader
  title='IBM FlashSystem'
  description={flashSystemDesc}
/>


<CloudSpecial
  tabData={flashSystemBenefits}
 
/>


<SubHeader
  title='IBM Storwize'
  description={storwizeDesc}
/>

<CloudSpecial
  tabData={storwizeBenefits}

/>

<SubHeader
  title='IBM Cloud Object Storage'
  description={cloudObjectDesc}
/>

<CloudSpecial
  tabData={cloudObjectBenefits}

/>


<SubHeader
  title='IBM Spectrum Storage Suite'
  description={spectrumDesc}
/>

<CloudSpecial
  tabData={spectrumBenefits}

/>

<Header title='Red Hat Network Storage Solutions' />


<SubHeader
  title='Red Hat Ceph Storage'
  description={cephDesc}
/>


<CloudSpecial
  tabData={cephBenefits}

/>


<SubHeader
  title='Red Hat Gluster Storage'
  description={glusterDesc}
/>

<CloudSpecial
  tabData={glusterBenefits}

/>


<SubHeader
  title='Red Hat OpenShift Container Storage'
  description={openshiftDesc}
/>

<CloudSpecial
  tabData={openshiftBenefits}
  
/>

<Header title='Veeam Network Storage Solutions' />

<SubHeader
  title='Veeam Backup & Replication'
  description={veeamDesc}
/>

<CloudSpecial
  tabData={veeamBenefits}
  
/>


<SubHeader
  title='Veeam Cloud Connect'
  description={veeamCloudDesc}
/>

<CloudSpecial
  tabData={veeamCloudBenefits}
  
/>

<Header title='Buffalo Technology Network Storage Solutions'/>

<SubHeader
  title='Buffalo TeraStation'
  description={teraStationDesc}
/>


<CloudSpecial
  tabData={teraStationBenefits}

/>

<SubHeader
  title='Buffalo LinkStation'
  description={linkStationDesc}
/>

<CloudSpecial
  tabData={linkStationBenefits}

/>

<Header title='QNAP Network Storage Solutions'/>

<SubHeader
  title='QNAP NAS Storage'
  description={qnapNASDesc}
/>

<CloudSpecial
  tabData={qnapNASBenefits}
  
/>

<SubHeader
  title='QNAP Enterprise Storage'
  description={qnapEnterpriseDesc}
/>

<CloudSpecial
  tabData={qnapEnterpriseBenefits}
  
/>

<SubHeader
  title='QNAP Cloud Storage'
  description={qnapCloudDesc}
/>

<CloudSpecial
  tabData={qnapCloudBenefits}
  
/>


    </Section>
  )
}

export default NetworkStorage
