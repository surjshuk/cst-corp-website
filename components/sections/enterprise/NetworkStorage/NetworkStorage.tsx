import React from 'react'
import { cephBenefits, cephDesc, cloudObjectBenefits, cloudObjectDesc, cloudVolumesBenefits, cloudVolumesDesc, dellEcsBenefits, dellEcsDesc, dellVxRailBenefits, dellVxRailDesc, emcIsilonBenefits, emcIsilonDesc, emcPowerMaxBenefits, emcPowerMaxDesc, emcUnityXTBenefits, emcUnityXTDesc, flashSystemBenefits, flashSystemDesc, glusterBenefits, glusterDesc, infoSightBenefits, infoSightDesc, linkStationBenefits, linkStationDesc, netappAFFBenefits, netappAFFDesc, netappFASBenefits, netappFASDesc, netappONTAPBenefits, netappONTAPDesc, netappStorageGRIDBenefits, netappStorageGRIDDesc, nimbleBenefits, nimbleDesc, openshiftBenefits, openshiftDesc, qnapCloudBenefits, qnapCloudDesc, qnapEnterpriseBenefits, qnapEnterpriseDesc, qnapNASBenefits, qnapNASDesc, spectrumBenefits, spectrumDesc, storwizeBenefits, storwizeDesc, teraStationBenefits, teraStationDesc, veeamBenefits, veeamCloudBenefits, veeamCloudDesc, veeamDesc } from './data'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Section from '@/components/Section'
import Index from '../components/Index'
import MainCarousel from '../components/Special'
import { bflink, bfter, dellemcpo, dellemcsa, delvcx, emcecs, emcisilon, hpecl, hpenim, hpenin, ibmcl, ibmflash, ibmspectrum, ibmstor, netaff, netfas, netontap, netstor, qnapcloud, qnapEnterprise, qnapnas, redgul, redhat, redhatopen, veeambackup, veeamreplica } from '@/app/assets'

const NetworkStorage = () => {
  return (
    <Section data-id="network-storage" id='network-storage'>
      <Index
        title="Network Storage"
        slug="enterprise-network"
        data = {[
          {
          header:"Dell EMC Network Storage Solutions",
        
          subheader:[
         `EMC Unity XT`,
         `EMC PowerMax`,
         `EMC Isilon`,
         `Dell ECS (Elastic Cloud Storage)`,
         `Dell VxRail`,
         
        
        ]},
        {
          header:"NetApp Storage Solutions",
          subheader:[
            `NetApp AFF (All Flash FAS)`,
            `NetApp FAS (Fabric-Attached Storage)`,
            `NetApp ONTAP`,
            `NetApp StorageGRID`,
            `HPE Nimble Storage`,
            `HPE Cloud Volumes`,
            `HPE Nimble Storage InfoSight`,
            ``
          ]
        },
        {
          header:"IBM Network Storage Solutions",
          subheader:[
            `IBM FlashSystem`,
            `IBM Storwize`,
            `IBM Cloud Object Storage`,
            `IBM Spectrum Storage Suite`,
          
          ]
        },
         {
          header:"Red Hat Network Storage Solutions",
          subheader:[
            `Red Hat Ceph Storage`,
            `Red Hat Gluster Storage`,
            `Red Hat OpenShift Container Storage`,
            
          
          ]
        },
        {
          header:"Veeam Network Storage Solutions",
          subheader:[
          `Veeam Backup & Replication`,
          `Veeam Cloud Connect`,
          
          
          ]
        },
         {
          header:"Buffalo Technology Network Storage Solutions",
          subheader:[
         `Buffalo TeraStation`,
         `Buffalo LinkStation`,
         
          ]
        },
          {
          header:"QNAP Network Storage Solutions",
          subheader:[
         `QNAP NAS Storage`,
         `QNAP Enterprise Storage`,
         `QNAP Cloud Storage`,

          ]
        },
                
      ]}
      />
{/* <Header title={"Network Storage"}/>  */}


<Header title={"Dell EMC Network Storage Solutions"}/> 

        <SubHeader
  title='EMC Unity XT'
  description={emcUnityXTDesc
  }
/>



<MainCarousel
  tabData={emcUnityXTBenefits}
  image={dellemcsa}
  
/>

<SubHeader
  title='EMC PowerMax'
  description={emcPowerMaxDesc}
/>

<MainCarousel
  tabData={emcPowerMaxBenefits}
image={dellemcpo}
/>

{/* EMC Isilon */}
<SubHeader
  title='EMC Isilon'
  description={emcIsilonDesc}
/>
<MainCarousel
  tabData={emcIsilonBenefits}
  image={emcisilon}
/>

{/* Dell ECS */}
<SubHeader
  title='Dell ECS (Elastic Cloud Storage)'
  description={dellEcsDesc}
/>
<MainCarousel
  tabData={dellEcsBenefits}
  image={emcecs}
/>

{/* Dell VxRail */}
<SubHeader
  title='Dell VxRail'
  description={dellVxRailDesc}
/>
<MainCarousel
  tabData={dellVxRailBenefits}
  image={delvcx}

/>

<Header title='NetApp Storage Solutions'/>

<SubHeader
  title='NetApp AFF (All Flash FAS)'
  description={netappAFFDesc}
/>


<MainCarousel
  tabData={netappAFFBenefits}
  image={netaff}
/>

<SubHeader
  title='NetApp FAS (Fabric-Attached Storage)'
  description={netappFASDesc}
/>



<MainCarousel
  tabData={netappFASBenefits}
  image={netfas}
/>


<SubHeader
  title='NetApp ONTAP'
  description={netappONTAPDesc}
/>


<MainCarousel
  tabData={netappONTAPBenefits}
  image={netontap}
/>

<SubHeader
  title='NetApp StorageGRID'
  description={netappStorageGRIDDesc}
/>


<MainCarousel
  tabData={netappStorageGRIDBenefits}
  image={netstor}
/>



<SubHeader
  title='HPE Nimble Storage'
  description={nimbleDesc}
/>
<MainCarousel
  tabData={nimbleBenefits}
  image={hpenim}

/>

<SubHeader
  title='HPE Cloud Volumes'
  description={cloudVolumesDesc}
/>
<MainCarousel
  tabData={cloudVolumesBenefits}
  image={hpecl}
/>

<SubHeader
  title='HPE Nimble Storage InfoSight'
  description={infoSightDesc}
/>


<MainCarousel
  tabData={infoSightBenefits}
  image={hpenin}
/>

<Header title='IBM Network Storage Solutions' />


<SubHeader
  title='IBM FlashSystem'
  description={flashSystemDesc}
/>


<MainCarousel
  tabData={flashSystemBenefits}
  image={ibmflash}
 
/>


<SubHeader
  title='IBM Storwize'
  description={storwizeDesc}
/>

<MainCarousel
  tabData={storwizeBenefits}
  image={ibmstor}
/>

<SubHeader
  title='IBM Cloud Object Storage'
  description={cloudObjectDesc}
/>

<MainCarousel
  tabData={cloudObjectBenefits}
  image={ibmcl}
/>


<SubHeader
  title='IBM Spectrum Storage Suite'
  description={spectrumDesc}
/>

<MainCarousel
  tabData={spectrumBenefits}
  image={ibmspectrum}
/>

<Header title='Red Hat Network Storage Solutions' />


<SubHeader
  title='Red Hat Ceph Storage'
  description={cephDesc}
/>


<MainCarousel
  tabData={cephBenefits}
  image={redhat}
/>


<SubHeader
  title='Red Hat Gluster Storage'
  description={glusterDesc}
/>

<MainCarousel
  tabData={glusterBenefits}
  image={redgul}
/>


<SubHeader
  title='Red Hat OpenShift Container Storage'
  description={openshiftDesc}
/>

<MainCarousel
  tabData={openshiftBenefits}
  image={redhatopen}
  
/>

<Header title='Veeam Network Storage Solutions' />

<SubHeader
  title='Veeam Backup & Replication'
  description={veeamDesc}
/>

<MainCarousel
  tabData={veeamBenefits}
  image={veeambackup}
  
/>


<SubHeader
  title='Veeam Cloud Connect'
  description={veeamCloudDesc}
/>

<MainCarousel
  tabData={veeamCloudBenefits}
  image={veeamreplica}

  
/>

<Header title='Buffalo Technology Network Storage Solutions'/>

<SubHeader
  title='Buffalo TeraStation'
  description={teraStationDesc}
/>


<MainCarousel
  tabData={teraStationBenefits}
  image={bfter}

/>

<SubHeader
  title='Buffalo LinkStation'
  description={linkStationDesc}
/>

<MainCarousel
  tabData={linkStationBenefits}
image={bflink}
/>

<Header title='QNAP Network Storage Solutions'/>

<SubHeader
  title='QNAP NAS Storage'
  description={qnapNASDesc}
/>

<MainCarousel
  tabData={qnapNASBenefits}
  image={qnapnas}
/>

<SubHeader
  title='QNAP Enterprise Storage'
  description={qnapEnterpriseDesc}

/>

<MainCarousel
  tabData={qnapEnterpriseBenefits}
  image={qnapEnterprise}
/>

<SubHeader
  title='QNAP Cloud Storage'
  description={qnapCloudDesc}
/>

<MainCarousel
  tabData={qnapCloudBenefits}
  image={qnapcloud}
/>


    </Section>
  )
}

export default NetworkStorage
