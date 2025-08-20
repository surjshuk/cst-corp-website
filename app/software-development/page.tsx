import Section from "@/components/Section";
import { Appian, OutSystems, PowerBIAndPowerAutomate } from "@/components/sections";

export default function SoftwareDevelopmentPage() {
    return (
       <>   
        <Section id="appian" data-id="appian">
            <Appian />
        </Section>
        <Section id="outsystems" data-id="outsystems">
            <OutSystems />
        </Section>
        <Section id="power-bi-and-power-automate" data-id="power-bi-and-power-automate">
        <PowerBIAndPowerAutomate />
        </Section>
       </>
    );
}
