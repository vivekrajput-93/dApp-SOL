
import React from "react";

const Footer = () => {
  return (
    <section className="max-w-7xl h-5 mx-auto border-t px-4">
      <div className="flex justify-between py-8  ">
        <p className="text-primary tracking-tight">
          Designed and Developed by{" "}
          <a href={"https://vivek-portfolio-sigma-mauve.vercel.app/"} className="font-bold">
            Vivek Singh
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;