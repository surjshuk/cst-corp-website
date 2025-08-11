import CloudApplication from "@/components/sections/cloud-services/CloudApplication/cloud-application";
import CloudLicense from "@/components/sections/cloud-services/CloudLicense/CloudLicense";
import CloudNetwork from "@/components/sections/cloud-services/CloudNetwork/CloudNetwork";

export default function CloudServicesPage() {
    return (
        <div>
            <CloudApplication/>
            <CloudLicense/>
            <CloudNetwork/>
        </div>
    );
}
