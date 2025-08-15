import React from 'react'
import { Subhero } from '../../cloud-services/components/subhero'
import CloudSpecial from '../../cloud-services/components/Special'
import { cephBenefits, cephDesc, cloudObjectBenefits, cloudObjectDesc, cloudVolumesBenefits, cloudVolumesDesc, dellEcsBenefits, dellEcsDesc, dellVxRailBenefits, dellVxRailDesc, emcIsilonBenefits, emcIsilonDesc, emcPowerMaxBenefits, emcPowerMaxDesc, emcUnityXTBenefits, emcUnityXTDesc, flashSystemBenefits, flashSystemDesc, glusterBenefits, glusterDesc, infoSightBenefits, infoSightDesc, linkStationBenefits, linkStationDesc, netappAFFBenefits, netappAFFDesc, netappFASBenefits, netappFASDesc, netappONTAPBenefits, netappONTAPDesc, netappStorageGRIDBenefits, netappStorageGRIDDesc, nimbleBenefits, nimbleDesc, openshiftBenefits, openshiftDesc, qnapCloudBenefits, qnapCloudDesc, qnapEnterpriseBenefits, qnapEnterpriseDesc, qnapNASBenefits, qnapNASDesc, spectrumBenefits, spectrumDesc, storwizeBenefits, storwizeDesc, teraStationBenefits, teraStationDesc, veeamBenefits, veeamCloudBenefits, veeamCloudDesc, veeamDesc } from './data'
import { cyberSecBG3 } from '@/app/assets'
import Header from '../../cloud-services/components/Header'

const NetworkStorage = () => {
  return (
    <div data-id="network-storage" id='network-storage'>
<Header title={"Network Storage"}/> 

<Header title={"Dell EMC Network Storage Solutions"}/> 

        <Subhero
  subtitle='EMC Unity XT'
  description={emcUnityXTDesc
  }
/>



<CloudSpecial
  tabData={emcUnityXTBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='EMC PowerMax'
  description={emcPowerMaxDesc}
/>

<CloudSpecial
  tabData={emcPowerMaxBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

{/* EMC Isilon */}
<Subhero
  subtitle='EMC Isilon'
  description={emcIsilonDesc}
/>
<CloudSpecial
  tabData={emcIsilonBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

{/* Dell ECS */}
<Subhero
  subtitle='Dell ECS (Elastic Cloud Storage)'
  description={dellEcsDesc}
/>
<CloudSpecial
  tabData={dellEcsBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

{/* Dell VxRail */}
<Subhero
  subtitle='Dell VxRail'
  description={dellVxRailDesc}
/>
<CloudSpecial
  tabData={dellVxRailBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Header title='NetApp Storage Solutions'/>

<Subhero
  subtitle='NetApp AFF (All Flash FAS)'
  description={netappAFFDesc}
/>


<CloudSpecial
  tabData={netappAFFBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='NetApp FAS (Fabric-Attached Storage)'
  description={netappFASDesc}
/>



<CloudSpecial
  tabData={netappFASBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


<Subhero
  subtitle='NetApp ONTAP'
  description={netappONTAPDesc}
/>


<CloudSpecial
  tabData={netappONTAPBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='NetApp StorageGRID'
  description={netappStorageGRIDDesc}
/>


<CloudSpecial
  tabData={netappStorageGRIDBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>



<Subhero
  subtitle='HPE Nimble Storage'
  description={nimbleDesc}
/>
<CloudSpecial
  tabData={nimbleBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='HPE Cloud Volumes'
  description={cloudVolumesDesc}
/>
<CloudSpecial
  tabData={cloudVolumesBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='HPE Nimble Storage InfoSight'
  description={infoSightDesc}
/>


<CloudSpecial
  tabData={infoSightBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Header title='IBM Network Storage Solutions' />


<Subhero
  subtitle='IBM FlashSystem'
  description={flashSystemDesc}
/>


<CloudSpecial
  tabData={flashSystemBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


<Subhero
  subtitle='IBM Storwize'
  description={storwizeDesc}
/>

<CloudSpecial
  tabData={storwizeBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='IBM Cloud Object Storage'
  description={cloudObjectDesc}
/>

<CloudSpecial
  tabData={cloudObjectBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


<Subhero
  subtitle='IBM Spectrum Storage Suite'
  description={spectrumDesc}
/>

<CloudSpecial
  tabData={spectrumBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Header title='Red Hat Network Storage Solutions' />


<Subhero
  subtitle='Red Hat Ceph Storage'
  description={cephDesc}
/>


<CloudSpecial
  tabData={cephBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


<Subhero
  subtitle='Red Hat Gluster Storage'
  description={glusterDesc}
/>

<CloudSpecial
  tabData={glusterBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


<Subhero
  subtitle='Red Hat OpenShift Container Storage'
  description={openshiftDesc}
/>

<CloudSpecial
  tabData={openshiftBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Header title='Veeam Network Storage Solutions' />

<Subhero
  subtitle='Veeam Backup & Replication'
  description={veeamDesc}
/>

<CloudSpecial
  tabData={veeamBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


<Subhero
  subtitle='Veeam Cloud Connect'
  description={veeamCloudDesc}
/>

<CloudSpecial
  tabData={veeamCloudBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Header title='Buffalo Technology Network Storage Solutions'/>

<Subhero
  subtitle='Buffalo TeraStation'
  description={teraStationDesc}
/>


<CloudSpecial
  tabData={teraStationBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='Buffalo LinkStation'
  description={linkStationDesc}
/>

<CloudSpecial
  tabData={linkStationBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Header title='QNAP Network Storage Solutions'/>

<Subhero
  subtitle='QNAP NAS Storage'
  description={qnapNASDesc}
/>

<CloudSpecial
  tabData={qnapNASBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='QNAP Enterprise Storage'
  description={qnapEnterpriseDesc}
/>

<CloudSpecial
  tabData={qnapEnterpriseBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='QNAP Cloud Storage'
  description={qnapCloudDesc}
/>

<CloudSpecial
  tabData={qnapCloudBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


    </div>
  )
}

export default NetworkStorage
