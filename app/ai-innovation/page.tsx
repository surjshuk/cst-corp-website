"use client";

import Overview from "@/components/sections/AI/Overview/Overview";
import AiDigitalTwin from "@/components/sections/AI/AiDigitalTwin/AiDigitalTwin";
import AiConsulting from "@/components/sections/AI/AiConsulting/AiConsulting";
import AiGovernance from "@/components/sections/AI/AiGovernance/AiGovernance";
import Industries from "@/components/sections/AI/Industries/Industries";
import Section from "@/components/Section";
import { Appian, OutSystems, PowerBIAndPowerAutomate } from "@/components/sections";

export default function Home() {
  
  return (
    <>
  
 <Overview/>
<AiDigitalTwin/>
<AiConsulting/>
<AiGovernance/>
 <Section id="appian" data-id="appian">
            <Appian />
        </Section>
        <Section id="outsystems" data-id="outsystems">
            <OutSystems />
        </Section>
        <Section id="power-bi-and-power-automate" data-id="power-bi-and-power-automate">
        <PowerBIAndPowerAutomate />
        </Section>
<Industries/>

 </>
  );
}

