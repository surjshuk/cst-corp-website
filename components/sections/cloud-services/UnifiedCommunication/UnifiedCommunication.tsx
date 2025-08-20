import React from 'react'
import Header from '../components/Header'
import { Subhero } from '../components/subhero'
import { KeyFeaturesSection } from '../key-features'
import { ciscoBenefits, ciscoDesc, ciscoFeature, contactCenterBenefits, contactCenterDesc, contactCenterFeature, intermediaArchivingDesc, intermediaArchivingFeatures, intermediaBackupDesc, intermediaBackupFeatures, intermediaContactCenterDesc, intermediaContactCenterFeatures, intermediaSipTrunkingDesc, intermediaSipTrunkingFeatures, intermediaUniteDesc, intermediaUniteFeatures, manageBenefits, manageDesc, manageFeature, rcContactCenterDesc, rcContactCenterFeatures, rcMessagingDesc, rcMessagingFeatures, rcMobileAppDesc, rcMobileAppFeatures, rcPhoneDesc, rcPhoneFeatures, rcVideoDesc, rcVideoFeatures, ringcentralVoipDesc, ringcentralVoipFeatures, teamsChatMessagingDesc, teamsChatMessagingFeature, teamsCollaborationToolsDesc, teamsCollaborationToolsFeature, teamsRoomsDesc, teamsRoomsFeature, teamsVideoConferencingDesc, teamsVideoConferencingFeature, teamsVoiceCallingDesc, teamsVoiceCallingFeature, teamsWebinarHostingDesc, teamsWebinarHostingFeature, vonageAIDesc, vonageAIFeatures, vonageMessagingDesc, vonageMessagingFeatures, vonageProgVoiceDesc, vonageProgVoiceFeatures, vonageVideoDesc, vonageVideoFeatures, vonageVoipDesc, vonageVoipFeatures, webexAdvancedFeatures, webexCallingBenefits, webexCallingDesc, webexCallingFeature, webexDesc, webexDevicesBenefits, webexDevicesDesc, webexDevicesFeature, webexEventsBenefits, webexEventsDesc, webexEventsFeature, webexMeetingsBenefits, webexMeetingsDesc, webexMeetingsFeature, webexMessagingBenefits, webexMessagingDesc, webexMessagingFeature } from './data'
import { BenefitsUf } from '../components/benefitsUf'
import Section from '@/components/Section'

const UnifiedCommunication = () => {
  return (
    <Section data-id="unified-communication" id='unified-communication'>
      <Header title={"Unified Communications as a Service"}/> 
       <Subhero
      subtitle='Cisco UCaaS'
      intro='Cisco Unified Communications'
      description={ciscoDesc}
      />

        <KeyFeaturesSection title="Key Features" features={ciscoFeature}/>
        <BenefitsUf benefits={ciscoBenefits}/>

     <Subhero
      intro='Cisco Unified Communications Manager (CUCM)'
      description={manageDesc}
      />

        <KeyFeaturesSection title="Key Features" features={manageFeature}/>
        <BenefitsUf benefits={manageBenefits}/>


       <Subhero
  intro='Cisco Contact Center'
  description={contactCenterDesc}
/>

<KeyFeaturesSection title="Key Features" features={contactCenterFeature} />

<BenefitsUf benefits={contactCenterBenefits} />

<Subhero
  intro='Cisco Webex: A Unified Collaboration Platform'
  description={webexDesc}
/>

<Subhero
subtitle='Core Components of Cisco Webex'
  intro='Webex Calling'
  description={webexCallingDesc}
  position='left'
/>

<KeyFeaturesSection title="Key Features" features={webexCallingFeature} />

<BenefitsUf benefits={webexCallingBenefits} />


{/* Webex Meetings */}
<Subhero
  intro='Webex Meetings'
  description={webexMeetingsDesc}
/>
<KeyFeaturesSection title="Key Features" features={webexMeetingsFeature} />
<BenefitsUf benefits={webexMeetingsBenefits} />

{/* Webex Messaging */}
<Subhero
  intro='Webex Messaging'
  description={webexMessagingDesc}
/>
<KeyFeaturesSection title="Key Features" features={webexMessagingFeature} />
<BenefitsUf benefits={webexMessagingBenefits} />

{/* Webex Devices */}
<Subhero
  intro='Webex Devices'
  description={webexDevicesDesc}
/>
<KeyFeaturesSection title="Devices" features={webexDevicesFeature} />
<BenefitsUf benefits={webexDevicesBenefits} />

{/* Webex Events */}
<Subhero
  intro='Advanced Features and Capabilities'
  description={webexEventsDesc}
/>
<KeyFeaturesSection title="Key Features" features={webexEventsFeature} />
<BenefitsUf benefits={webexEventsBenefits} />


<KeyFeaturesSection title="Key Features" features={webexAdvancedFeatures} />


<Subhero
    subtitle='UCaaS and Tools in Microsoft Teams'
    intro='Voice Calling (Microsoft Teams Phone)'
    description={teamsVoiceCallingDesc}
/>

<KeyFeaturesSection title="Key Features" features={teamsVoiceCallingFeature} />

<Subhero
  intro='Video Conferencing'
  description={teamsVideoConferencingDesc}
/>

<KeyFeaturesSection title="Key Features" features={teamsVideoConferencingFeature} />

{/* Chat and Messaging */}
<Subhero
  intro='Chat and Messaging'
  description={teamsChatMessagingDesc}
/>
<KeyFeaturesSection title="Key Features" features={teamsChatMessagingFeature} />

{/* Collaboration Tools */}
<Subhero
  intro='Collaboration Tools'
  description={teamsCollaborationToolsDesc}
/>
<KeyFeaturesSection title="Key Features" features={teamsCollaborationToolsFeature} />

{/* Teams Rooms */}
<Subhero
  intro='Teams Rooms'
  description={teamsRoomsDesc}
/>
<KeyFeaturesSection title="Key Features" features={teamsRoomsFeature} />

{/* Webinar Hosting */}
<Subhero
  intro='Webinar Hosting'
  description={teamsWebinarHostingDesc}
/>
<KeyFeaturesSection title="Key Features" features={teamsWebinarHostingFeature} />


{/* Voice over Internet Protocol (VoIP) */}
<Subhero
subtitle='Ring Central Unified Communication as a Service (UCaaS)'
  intro="Voice over Internet Protocol (VoIP)"
  description={ringcentralVoipDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={ringcentralVoipFeatures}
/>

{/* Messaging */}
<Subhero
  intro='Messaging'
  description={rcMessagingDesc}
/>
<KeyFeaturesSection title="Key Features" features={rcMessagingFeatures} />

{/* Video Conferencing */}
<Subhero
  intro='Video Conferencing (RingCentral Video)'
  description={rcVideoDesc}
/>
<KeyFeaturesSection title="Key Features" features={rcVideoFeatures} />

{/* Unified Phone System */}
<Subhero
  intro='Unified Phone System'
  description={rcPhoneDesc}
/>
<KeyFeaturesSection title="Key Features" features={rcPhoneFeatures} />

{/* Contact Center Solutions */}
<Subhero
  intro='Contact Center Solutions'
  description={rcContactCenterDesc}
/>
<KeyFeaturesSection title="Key Features" features={rcContactCenterFeatures} />

{/* Mobile App */}
<Subhero
  intro='Mobile App'
  description={rcMobileAppDesc}
/>
<KeyFeaturesSection title="Key Features" features={rcMobileAppFeatures} />

<Subhero
subtitle='Vonage UCaaS'
  intro='Cloud-Based VoIP'
  description={vonageVoipDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={vonageVoipFeatures}
/>



<Subhero
  intro='Messaging'
  description={vonageMessagingDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={vonageMessagingFeatures}
/>

<Subhero
  intro="Video Conferencing"
  description={vonageVideoDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={vonageVideoFeatures}
/>


<Subhero
  intro="AI Acceleration Suite"
  description={vonageAIDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={vonageAIFeatures}
/>

<Subhero
  intro="Programmable Voice"
  description={vonageProgVoiceDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={vonageProgVoiceFeatures}
/>

<Subhero
  intro="Intermedia Unite"
  description={intermediaUniteDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={intermediaUniteFeatures}
/>

<Subhero
  intro="Intermedia Contact Center"
  description={intermediaContactCenterDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={intermediaContactCenterFeatures}
/>

<Subhero
  intro="Intermedia Archiving"
  description={intermediaArchivingDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={intermediaArchivingFeatures}
/>

<Subhero
  intro="Intermedia SIP Trunking"
  description={intermediaSipTrunkingDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={intermediaSipTrunkingFeatures}
/>

<Subhero
  intro="Backup and File Management"
  description={intermediaBackupDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={intermediaBackupFeatures}
/>

    </Section>
  )
}

export default UnifiedCommunication
