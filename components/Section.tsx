"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) setActiveSection(id);
  }, [inView, id, setActiveSection]);

  return (
    <section id={id} ref={ref} >
      {children}
    </section>
  );
}
