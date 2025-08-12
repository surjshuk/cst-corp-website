"use client";

import { LOGO } from "@/app/assets/";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const cultureSections: Record<string, number> = {
    mission: 0,
    values: 1,
    location: 2
}

const aiSections: Record<string, number> = {
    "overview":  0,
    "ai-digital-twin": 1,
    "ai-consulting": 2,
    "ai-governance": 3,
    "industries-we-serve": 4
}

const homeSections: Record<string, number> = {
    "who-we-are": 0,
    "what-we-do": 1,
    "our-partners": 2,
    // "our-team": 3,
}

const softwareSections: Record<string, number> = {
  "appian": 0,
  "outsystems": 1,
  "power-bi-and-power-automate": 2,
};


const cloudSections: Record<string, number> = {
  "cloud-application": 0,
  "cloud-license": 1,
  "cloud-network": 2,
  "cloud-storage": 3,
};

const cybersecuritySections: Record<string, number> = {
  "cloud-security": 0,
  "data-security": 1,
//   "email-security": 2,
  "endpoint-security": 3,
  "identity-and-access-managemenet(IAM)": 4,
  "network-security": 5,
  "operational-technology-security": 6,
  "threat-detection-and-response(TDR)": 7,
};

const thresholdMap: Record<string, number> = {
  "/culture": 0.4,
  "/ai-innovation": 0.05,
  "/cybersecurity": 0.02,
  "/software-development": 0.1,
  "/": 0.1,  // default home
  // add others as needed
};

const SideNavbar = () => {
    const [activeRoute, setActiveRoute] = useState("/");
    const [activeSection, setActiveSection] = useState({id: "", index: 0});
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    
    const router = usePathname();

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, [activeRoute]);

    useEffect(() => {
        if (sidebarVisible && innerWidth < 820) {
          document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
          document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
      
        // Clean up the effect
        return () => {
          document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled when the component is unmounted
        };
      }, [sidebarVisible]);
      
    useEffect(() => {
        setActiveRoute(router);
        setActiveSection({id: "", index: 0})
    }, [router]);

    // Automatically hide or show sidebar on resize if window width is 820px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 820) {
                setSidebarVisible(false);
            } else if (window.innerWidth >= 820) {
                setSidebarVisible(true);
            }
        };

        window.addEventListener("resize", handleResize);

        // Check initial width
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const handleSubLinkClick = (id: string, index: number) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
        setActiveSection({id, index}); // Update the active section immediately
    };

      useEffect(() => {
       const thresholdValue = thresholdMap[activeRoute] ?? 0.2;


        // Create an observer that sets the active tab when a section is at least 60% visible
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // setActiveTab(entry.target.getAttribute("data-id"));
                const dataId = entry.target.getAttribute("data-id") || ""

                console.log("Active section:", dataId);
                if (activeRoute === "/culture") {
                setActiveSection({ id: dataId, index: cultureSections[dataId] });
                } else if (activeRoute === "/ai-innovation") {
                setActiveSection({ id: dataId, index: aiSections[dataId] });
                } else if (activeRoute === "/cybersecurity") {
                setActiveSection({ id: dataId, index: cybersecuritySections[dataId] });
                } else if (activeRoute === "/software-development") {
                setActiveSection({ id: dataId, index: softwareSections[dataId] ?? 0 });
                }else if (activeRoute === "/cloud-services") {
                setActiveSection({ id: dataId, index: cloudSections[dataId] ?? 0 });
                }
                else {
                setActiveSection({ id: dataId, index: homeSections[dataId] });
                }
              }
            });
          },
          { threshold: thresholdValue }
        );
    
        // Only observe elements with a data-id attribute
        const sections = document.querySelectorAll("[data-id]");
        sections.forEach((section) => observer.observe(section));
    
        return () => observer.disconnect();
      }, [activeRoute]);

    return (
        <>
            <button 
                onClick={() => setSidebarVisible((prev) => !prev)} 
                className="flex flex-col gap-1.5 fixed top-[25.5px] -translate-y-1/2 left-6 z-50 tablet:hidden"
            >
                <div 
                    className={`bg-primary h-[1.6px] w-5 transition-transform duration-300 ${
                        sidebarVisible && "-rotate-45 translate-y-[4.3px]"
                    }`}
                />
                <div 
                    className={`bg-primary h-[1.6px] w-5 transition-transform duration-300 ${
                        sidebarVisible && "rotate-45 -translate-y-[4.3px]"
                    }`}
                />

            </button>

            {sidebarVisible && <div className="fixed inset-0 bg-black z-30 opacity-20 tablet:hidden" onClick={() => setSidebarVisible((prev) => !prev)}/>}

            <aside
                className={`z-40 min-w-[146px] w-1/3 h-screen bg-white fixed transform transition-transform tablet:transition-none duration-300 pl-6 py-6 pt-10 tablet:pt-10 tablet:w-fit tablet:block
                    ${sidebarVisible ? "translate-x-0" : "-translate-x-full"}
                }`}
            >
                <figure className="items-center justify-start gap-4 mb-8 hidden tablet:flex">
                    <Image src={LOGO} alt="bramer-logo" className="w-fit h-[52px]" />
                </figure>
                
                <nav className="h-[93%] flex flex-col justify-between pt-16 tablet:pt-4 pb-0 laptop:pb-10">
                    <div className="flex flex-col gap-4">

                        <NavItem
                            href="/"
                            label="Main"
                            active={activeRoute === "/"}
                            subLinks={[
                                "who-we-are",
                                "what-we-do",
                                "our-partners",
                            
                            ]}
                            activeSection={activeSection}
                            handleSubLinkClick={handleSubLinkClick}
                        />
                        <NavItem 
                            href="/ai-innovation" 
                            label="AI" 
                            active={activeRoute === "/ai-innovation"} 
                            subLinks={[ "overview",
    "ai-digital-twin",
    "ai-consulting",
    "ai-governance",
    "industries-we-serve"]}
                            activeSection={activeSection}
                            handleSubLinkClick={handleSubLinkClick}

                        /> 
                        <NavItem 
                            href="/cybersecurity" 
                            label="Cybersecurity" 
                            active={activeRoute === "/cybersecurity"} 
                            subLinks={["cloud-security", "data-security", "endpoint-security", "identity-and-access-managemenet(IAM)", "network-security", "operational-technology-security", "threat-detection-and-response(TDR)"]}
                            activeSection={activeSection}
                            handleSubLinkClick={handleSubLinkClick}

                        /> 
                        <NavItem 
                            href="/cloud-services" 
                            label="Cloud Services" 
                            active={activeRoute === "/cloud-services"} 
                            subLinks={["cloud-application","cloud-license","cloud-network","cloud-storage"]}
                            activeSection={activeSection}
                            handleSubLinkClick={handleSubLinkClick}

                        /> 
                        <NavItem 
                            href="/software-development" 
                            label="Software Development" 
                            active={activeRoute === "/software-development"} 
                            subLinks={["appian", "outsystems", "power-bi-and-power-automate"]}
                            activeSection={activeSection}
                            handleSubLinkClick={handleSubLinkClick}

                        /> 
                        {/* <NavItem 
                            href="/enterprise-network" 
                            label="Enterprise Network" 
                            active={activeRoute === "/enterprise-network"} 
                            subLinks={["cloud-security", "data-security", "email-security", "endpoint-security", "identity-and-access-managemenet(IAM)", "network-security", "operational-technology-security(OT)", "threat-detection-and-response(TDR)"]}
                            activeSection={activeSection}
                            handleSubLinkClick={handleSubLinkClick}

                        />  */}
                        {/* <NavItem
                            href="/culture"
                            label="Culture"
                            active={activeRoute === "/culture"}
                            subLinks={["mission", "values", "location"]}
                            activeSection={activeSection}
                            handleSubLinkClick={handleSubLinkClick}
                        /> */}
                    <NavItem href="/contacts" label="Contacts" active={activeRoute === "/contacts"} />

                    </div>

                    {/* <NavItem href="/contacts" label="Contacts" active={activeRoute === "/contacts"} /> */}
                </nav>
            </aside>
        </>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavItem = ({ href, label, active, subLinks = [], activeSection, handleSubLinkClick, badge }: any) => (
    <div className="flex flex-col">
        <Link href={href} className={`${active && "text-primary"} text-sm font-medium`}>
            <div className="relative w-fit">
                {label} {badge && <span className="text-primary text-[10px] absolute -top-1 -right-2">{badge}</span>}
            </div>
        </Link>

        { subLinks.length > 0 && (
        <div
            className={`
                flex flex-col items-start relative
                transition-all duration-1000 ease-in-out overflow-clip w-40 text-left
                ${
                    active ? "max-h-[300px] opacity-100 translate-y-0 pt-3 pb-6" : "max-h-0 opacity-0 -translate-y-4"
                }
            `}
        >   
            {subLinks.map((id: string, index: number) => (
               <button
                    key={id}
                    onClick={() => handleSubLinkClick(id, index)}
                    className={`relative text-xs leading-1 tablet:text-[14px] tablet:leading-[16    px] tablet:pl-5 text-left py-1 tablet:py-2
                        ${(activeSection.id === id || activeSection.index === index )? "text-black " : "text-secondary "}
                `}
                >
                <span
                    className={`hidden tablet:block absolute left-0 top-0 h-full w-[1.5px] transition-transform duration-200 ease-in-out ${
                        activeSection.index >= index ? "bg-primary scale-y-100" : "bg-primary scale-y-0"
                    }`}
                    style={{
                        transformOrigin: "top",
                        transitionDelay: `${100 * (activeSection.index < index ?  subLinks.length - index : index)}ms`,
                    }}
                />
               {(id.charAt(0).toUpperCase() + id.slice(1)).split('-').join(" ")}
           </button>
            ))}
        </div>
        )}
    </div>
);

export default SideNavbar;




                       