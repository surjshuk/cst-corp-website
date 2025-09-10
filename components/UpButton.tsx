import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function UpButton({ activeSection }: { activeSection: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200); // show after 200px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const scrollToPreviousSection = () => {
  const allSections = document.querySelectorAll("section[id]");
  const ids = Array.from(allSections).map(sec => sec.id);
  const currentIndex = ids.indexOf(activeSection);

  if (currentIndex > 0) {
    const prevId = ids[currentIndex - 1];
    const element = document.getElementById(prevId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // update URL without reloading
      history.pushState(null, "", `#${prevId}`);
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState(null, "", "#");
  }
};


  if (!show) return null;

  return (
    <button
      onClick={scrollToPreviousSection}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition"
    >
      <ArrowUp size={20} />
    </button>
  );
}
