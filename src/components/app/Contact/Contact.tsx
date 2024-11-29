import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="subscribe">
      <div className="max-w-[1170px] mx-auto px-5 pb-5">
        <div className="bg-white rounded-lg py-14 px-16 flex justify-between items-center shadow-xl">
          <div className="max-w-[370px]">
            <h2 className="heading">Subscribe Now for Get Special Features!</h2>
            <p className="text">let subscribe with us and find the fun.</p>
          </div>
          <Button>
            <Link href={"/contact"}>Subscribe Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
