"use client";
import React, { useState } from "react";
import { Roboto } from "next/font/google";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={roboto.className}>
      <section className=" flex flex-1 flex-col items-center min-h-screen gap-x-10">
        {children}
      </section>
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-8 w-12 h-12 text-2xl bg-white hover:bg-white rounded-full shadow-lg transition-all duration-300 ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </Button>
    </div>
  );
};

export default Layout;
