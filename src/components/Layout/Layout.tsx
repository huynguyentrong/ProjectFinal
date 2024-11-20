"use client";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className=" p-5 md:p-10 container mx-auto min-h-screen mt-14">
        {children}
      </section>
    </>
  );
};

export default Layout;
