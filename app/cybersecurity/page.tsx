import { CloudSecurity, DataSecurity, EmailSecurity } from "@/components/sections";
import Endpoint from "@/components/sections/cybersecurity/Endpoint/Endpoint";
import Idass from "@/components/sections/cybersecurity/Idass/Idass";
import Network from "@/components/sections/cybersecurity/Network/Network";
import Operational from "@/components/sections/cybersecurity/Operational/Operational";
import Threat from "@/components/sections/cybersecurity/Threat/Threat";



export default function CustomersPage() {  
    return (
        <>
            <CloudSecurity />
            <DataSecurity/>
            <EmailSecurity/>
            <Endpoint/>
            <Idass/>
            <Network/>
            <Operational/>
            <Threat/>
        </>
    );
}