import CloudApplication from "@/components/sections/cloud-services/CloudApplication/cloud-application";
import CloudLicense from "@/components/sections/cloud-services/CloudLicense/CloudLicense";
import CloudNetwork from "@/components/sections/cloud-services/CloudNetwork/CloudNetwork";
import CloudStorage from "@/components/sections/cloud-services/CloudStorage/CloudStorage";
import ProductivitySuite from "@/components/sections/cloud-services/ProductivitySuite/ProductivitySuite";
import Saas from "@/components/sections/cloud-services/Saas/Saas";
import UnifiedCommunication from "@/components/sections/cloud-services/UnifiedCommunication/UnifiedCommunication";

export default function CloudServicesPage() {
    return (
        <div>
            <CloudApplication/>
            <CloudLicense/>
            <CloudNetwork/>
            <CloudStorage/>
            <ProductivitySuite/>
            <Saas/>
            <UnifiedCommunication/>
        </div>
    );
}
