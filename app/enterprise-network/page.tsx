
import DataCenter from "@/components/sections/enterprise/DataCenter/DataCenter";
import Firewall from "@/components/sections/enterprise/Firewall/Firewall";
import NetworkMonitoring from "@/components/sections/enterprise/NetworkMonitoring/NetworkMonitoring";
import NetworkStorage from "@/components/sections/enterprise/NetworkStorage/NetworkStorage";
import Routing from "@/components/sections/enterprise/Routing/Routing";

export default function EnterpriseNetworkSolutionsPage() {
    return (
        <>
        <DataCenter/>
        <Firewall/>
        <NetworkMonitoring/>
        <NetworkStorage/>
        <Routing/>
        </>
    );
}
