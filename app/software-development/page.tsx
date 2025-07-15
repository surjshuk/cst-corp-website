import { Appian, OutSystems, PowerBIAndPowerAutomate } from "@/components/sections";

export default function SoftwareDevelopmentPage() {
    return (
       <>   
        <div id="appian" data-id="appian">
            <Appian />
        </div>
        <div id="outsystems" data-id="outsystems">
            <OutSystems />
        </div>
        <div id="power-bi-and-power-automate" data-id="power-bi-and-power-automate">
        <PowerBIAndPowerAutomate />
        </div>
       </>
    );
}
