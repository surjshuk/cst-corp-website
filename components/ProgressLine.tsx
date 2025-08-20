"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressLine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      setProgress(totalHeight > 0 ? scrollY / totalHeight : 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ✅ initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="absolute left-0 top-0 w-0.5 rounded-full h-full bg-primary origin-top"
      style={{ scaleY: progress }}
    />
  );
}
