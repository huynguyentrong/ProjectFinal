"use client";
import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={roboto.className}>
      <section className=" flex flex-1 flex-col items-center min-h-screen gap-x-10">
        {children}
      </section>
    </div>
  );
};

export default Layout;
