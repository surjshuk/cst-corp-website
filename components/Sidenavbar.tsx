"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/context/ActiveSectionContext";
import ProgressLine from "./ProgressLine";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LOGO } from "@/app/assets";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"
import { useState } from "react";

const navItems = [
  {
    label: "Main",
    href: "/",
    sub: [
      { id: "who-we-are", label: "Who We Are" },
      { id: "what-we-serve", label: "What We Serve" },
      { id: "our-partners", label: "Our Partners" },
      { id: "our-vendors", label: "Our Vendors" },

    ],
  },
  {
    label: "Software Development",
    href: "/software-development",
    sub: [
      { id: "overview", label: "Overview" },
      { id: "ai-digital-twin", label: "AI Digital Twin" },
      { id: "ai-consulting", label: "AI Consulting" },
      { id: "ai-governance", label: "AI Governance" },
      { id: "appian", label: "Appian" },
      { id: "outsystems", label: "Outsystems" },
      { id: "power-bi-and-power-automate", label: "Power Bi and Power Automate" },
      { id: "industries-we-serve", label: "Industries We Serve" },
    ],
  },
  {
    label: "Cybersecurity",
    href: "/cybersecurity",
    sub: [
      { id: "cloud-security", label: "Cloud Security" },
      { id: "data-security", label: "Data Security" },
      { id: "email-security", label: "Email Security" },
      { id: "endpoint-security", label: "Endpoint Security" },
      { id: "identity-and-access-managemenet(IAM)", label: "Identity and Access Managemenet(IAM)" },
      { id: "network-security", label: "Network Security" },
      { id: "operational-technology-security", label: "Operational Technology Security" },
      { id: "threat-detection-and-response", label: "Threat Detection and Response(TDR)" },
    ],
  },
  {
    label: "Cloud Services",
    href: "/cloud-services",
    sub: [
      { id: "cloud-application", label: "Cloud Application" },
      { id: "cloud-license", label: "Cloud License" },
      { id: "cloud-network", label: "Cloud Network" },
      { id: "cloud-storage", label: "Cloud Storage" },
      { id: "productivity-suite", label: "Productivity Suite" },
      { id: "saas", label: "SAAS" },
      { id: "unified-communication", label: "Unified Communication" },
    ],
  },
  // {
  //   label: "Software Development",
  //   href: "/software-development",
  //   sub: [
  //     { id: "appian", label: "Appian" },
  //     { id: "outsystems", label: "Outsystems" },
  //     { id: "power-bi-and-power-automate", label: "Power Bi and Power Automate" },
  //   ],
  // },
    {
    label: "Enterprise Network",
    href: "/enterprise-network",
    sub: [
      { id: "data-center", label: "Data Center" },
      { id: "firewall", label: "firewall" },
      { id: "network-monitoring", label: "Network Monitoring" },
      { id: "network-storage", label: "Network Storage" },
    ],
  },
  {
    label: "Contacts",
    href: "/contacts"
  },
  
];

function SideNavItems() {
  const pathname = usePathname();
  const { activeSection } = useActiveSection();

  return (
    <div className="relative h-full mt-8">
      <nav className="relative space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium ${
                  isActive ? "text-primary" : "text-black"
                }`}
              >
                {item.label}
              </Link>

              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={item.href}
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : -10,
                  }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden relative"
                >
                  <div className="my-4 relative">
                    <ProgressLine />
                    <ul className="space-y-4 ps-4">
                      {item.sub?.map((sub) => (
                        <li key={sub.id}>
                          <a
                            href={`#${sub.id}`}
                            className={`transition-colors text-sm ${
                              activeSection === sub.id
                                ? "text-black font-medium"
                                : "text-neutral-500"
                            }`}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </div>
  );
}


export default function Sidebar() {

const [sideBar, setSideBar] = useState(false);

  return (
    <>
    <aside className="sticky left-0 top-0 h-screen  bg-white px-6 py-10    z-40  xl:max-w-xs lg:max-w-72 lg:block hidden  w-full">
      <figure className="items-center justify-start gap-4 hidden tablet:flex">
                    <Image src={LOGO} alt="bramer-logo" className="w-fit h-[52px]" />
                </figure>
   <SideNavItems/>
    </aside>
    <div className="lg:hidden flex items-center justify-between relative top-0 left-0 w-full bg-white z-10 px-3 py-2">

      <Menu onClick={()=>setSideBar(true)} />  
      <div className="flex-1 flex justify-center">
        <Image src={LOGO} alt="bramer-logo" className="-ms-8 w-12" />
      </div>

    <Sheet open={sideBar} onOpenChange={setSideBar} >
    <SheetContent  side="left"  className="w-full max-w-56">
        <SideNavItems/>
    </SheetContent>
    </Sheet>
    </div>


    </>
  );
}
