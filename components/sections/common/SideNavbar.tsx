"use client";

import { LOGO } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Section maps for indexing active states
const cultureSections: Record<string, number> = {
  mission: 0,
  team: 1,
  values: 2,
  jobs: 3,
  location: 4,
};

const homeSections: Record<string, number> = {
  "who-we-are": 0,
  "what-we-do": 1,
  achievements: 2,
};

const technologySections: Record<string, number> = {
  "AI Innovation": 0,
  "Software Development": 1,
  "Cloud Services": 2,
  "Cybersecurity Solutions": 3,
  "Enterprise Network Solutions": 4,
};

const SideNavbar = () => {
  const [activeRoute, setActiveRoute] = useState("/"); // Tracks current route
  const [activeSection, setActiveSection] = useState({ id: "", index: 0 }); // Tracks active sub-section for progress bar
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false); // Controls sidebar visibility on mobile
  const [jobsCount, setJobsCount] = useState<number | string>(""); // Stores job count badge

  const router = usePathname(); // Gets current pathname from Next.js

  useEffect(() => {
    // Handles body overflow for mobile sidebar (prevents scrolling behind sidebar)
    if (sidebarVisible && window.innerWidth < 820) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarVisible]);

  useEffect(() => {
    // Syncs active route and section on path changes; handles Technology route-based progress
    setActiveRoute(router);
    setActiveSection({ id: "", index: 0 });

    if (router.startsWith("/technology/")) {
      const routeSlug = router.split("/technology/")[1]; // Extracts slug (e.g., 'ai-innovation')
      const sectionName = Object.keys(technologySections).find(
        (key) => key.toLowerCase().replace(/\s+/g, "-") === routeSlug
      );
      if (sectionName) {
        const index = technologySections[sectionName];
        setActiveSection({ id: sectionName, index }); // Updates progress for Technology routes
      }
    }
  }, [router]);

  useEffect(() => {
    // Handles sidebar visibility on window resize
    const handleResize = () => {
      if (window.innerWidth < 820) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Fetches total jobs count for badge
    const getTotalJobsCount = async () => {
      try {
        const response = await fetch("/api/jobs/total");
        const data: { total_jobs: number } = await response.json();
        setJobsCount(data.total_jobs || "");
      } catch (error) {
        console.error("Failed to fetch total job count:", error);
      }
    };
    getTotalJobsCount();
  }, []);

  useEffect(() => {
    // IntersectionObserver for scroll-based section highlighting (skips Technology for route-only logic)
    if (activeRoute.startsWith("/technology/")) return; // Skip for Technology routes

    const thresholdValue = activeRoute === "/culture" ? 0.4 : 0.2;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dataId = entry.target.getAttribute("data-id") || "";
            let index;
            if (activeRoute === "/culture") {
              index = cultureSections[dataId];
            } else {
              index = homeSections[dataId];
            }
            if (index !== undefined) {
              setActiveSection({ id: dataId, index }); // Updates active section on scroll
            }
          }
        });
      },
      { threshold: thresholdValue }
    );

    const sections = document.querySelectorAll("[data-id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect(); // Cleans up observer
  }, [activeRoute]);

  // Handler for smooth scrolling to sub-sections
  const handleSubLinkClick = (id: string, index: number) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection({ id, index });
  };

  return (
    <>
      {/* Mobile toggle button (hamburger to X animation) */}
      <button
        onClick={() => setSidebarVisible((prev) => !prev)}
        className="flex flex-col gap-1.5 fixed top-[25.5px] -translate-y-1/2 left-6 z-50 tablet:hidden"
      >
        <div className={`bg-primary h-[1.6px] w-5 transition-transform duration-300 ${sidebarVisible && "-rotate-45 translate-y-[4.3px]"}`} />
        <div className={`bg-primary h-[1.6px] w-5 transition-transform duration-300 ${sidebarVisible && "rotate-45 -translate-y-[4.3px]"}`} />
      </button>

      {/* Overlay for mobile sidebar */}
      {sidebarVisible && <div className="fixed inset-0 bg-black z-30 opacity-20 tablet:hidden" onClick={() => setSidebarVisible(false)} />}

      {/* Sidebar container */}
      <aside
        className={`z-40 min-w-[146px] w-1/3 h-screen bg-white fixed transform transition-transform tablet:transition-none duration-300 pl-6 py-6 pt-10 tablet:pt-10 tablet:w-fit tablet:block
          ${sidebarVisible ? "translate-x-0" : "-translate-x-full"}`}
      >
        <figure className="items-center justify-start gap-4 mb-8 hidden tablet:flex">
          <Image src={LOGO} alt="cst-logo" className="w-fit h-[52px]" />
        </figure>
        <nav className="h-[93%] flex flex-col justify-between pt-16 tablet:pt-4">
          <div className="flex flex-col gap-4">
            <NavItem
              href="/"
              label="Main"
              active={activeRoute === "/"}
              subLinks={["who-we-are", "what-we-do", "achievements"]}
              activeSection={activeSection}
              handleSubLinkClick={handleSubLinkClick}
              activeRoute={activeRoute}
            />
            <NavItem
              href="/technology"
              label="Technology"
              active={activeRoute === "/technology" || activeRoute.startsWith("/technology/")}
              subLinks={["AI Innovation", "Software Development", "Cloud Services", "Cybersecurity Solutions", "Enterprise Network Solutions"]}
              activeSection={activeSection}
              handleSubLinkClick={handleSubLinkClick}
              activeRoute={activeRoute}
            />
            <NavItem
              href="/culture"
              label="Culture & Jobs"
              active={activeRoute === "/culture"}
              subLinks={["mission", "team", "values", "jobs", "location"]}
              activeSection={activeSection}
              handleSubLinkClick={handleSubLinkClick}
              badge={jobsCount}
              activeRoute={activeRoute}
            />
          </div>
          <NavItem href="/contacts" label="Contacts" active={activeRoute === "/contacts"} activeRoute={activeRoute} />
        </nav>
      </aside>
    </>
  );
};

// NavItem component for rendering links with sublinks and progress bars
const NavItem = ({ href, label, active, subLinks = [], activeSection, handleSubLinkClick, badge, activeRoute }: any) => (
  <div className="flex flex-col">
    <Link href={href} className={`${active && "text-primary"} text-sm font-medium`}>
      <div className="relative w-fit">
        {label} {badge && <span className="text-primary text-[10px] absolute -top-1 -right-2">{badge}</span>}
      </div>
    </Link>
    {subLinks.length > 0 && (
      <div
        className={`
          flex flex-col items-start relative
          transition-all duration-1000 ease-in-out overflow-hidden
          ${active ? "max-h-[300px] opacity-100 translate-y-0 pt-3 pb-6" : "max-h-0 opacity-0 -translate-y-4"}
        `}
      >
        {subLinks.map((id: string, index: number) =>
          label === "Technology" ? (
            <Link
              key={id}
              href={`/technology/${id.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative text-xs leading-7 tablet:text-[14px] tablet:leading-[30px] tablet:pl-5 
                ${activeRoute === `/technology/${id.toLowerCase().replace(/\s+/g, "-")}` ? "text-black" : "text-secondary"}
              `}
            >
              <span
                className={`hidden tablet:block absolute left-0 top-0 h-full w-[1.5px] transition-transform duration-200 ease-in-out ${
                  activeSection.index >= index ? "bg-primary scale-y-100" : "bg-primary scale-y-0"
                }`}
                style={{
                  transformOrigin: "top",
                  transitionDelay: `${100 * (activeSection.index < index ? subLinks.length - index : index)}ms`,
                }}
              />
              {id}
            </Link>
          ) : (
            <button
              key={id}
              onClick={() => handleSubLinkClick(id, index)}
              className={`relative text-xs leading-7 tablet:text-[14px] tablet:leading-[30px] tablet:pl-5 
                ${(activeSection.id === id || activeSection.index === index) ? "text-black" : "text-secondary"}
              `}
            >
              <span
                className={`hidden tablet:block absolute left-0 top-0 h-full w-[1.5px] transition-transform duration-200 ease-in-out ${
                  activeSection.index >= index ? "bg-primary scale-y-100" : "bg-primary scale-y-0"
                }`}
                style={{
                  transformOrigin: "top",
                  transitionDelay: `${100 * (activeSection.index < index ? subLinks.length - index : index)}ms`,
                }}
              />
              {(id.charAt(0).toUpperCase() + id.slice(1)).split("-").join(" ")}
            </button>
          )
        )}
      </div>
    )}
  </div>
);

export default SideNavbar;
