"use client";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="pt-4">{children}</section>
    </>
  );
};

export default Layout;
