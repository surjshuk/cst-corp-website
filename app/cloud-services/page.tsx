import CloudApplication from "@/components/sections/cloud-services/CloudApplication/cloud-application";
import CloudLicense from "@/components/sections/cloud-services/CloudLicense/CloudLicense";
import CloudNetwork from "@/components/sections/cloud-services/CloudNetwork/CloudNetwork";
import CloudStorage from "@/components/sections/cloud-services/CloudStorage/CloudStorage";

export default function CloudServicesPage() {
    return (
        <div>
            <CloudApplication/>
            <CloudLicense/>
            <CloudNetwork/>
            <CloudStorage/>
        </div>
    );
}
