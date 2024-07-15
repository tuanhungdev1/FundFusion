import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo/LogoFundFusion.png";
import Background from "../../public/background/Ellipse 65.png";

interface Props {
  children: React.ReactNode;
  heading: string;
}

const LayoutAuthentication = ({ children, heading = "" }: Props) => {
  return (
    <div className="w-full min-h-screen bg-lite p-10 relative isolate">
      <img
        src={Background}
        alt="background"
        className="absolute pointer-events-none bottom-0 left-0 rignt-0 z-[-1]"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img srcSet={`${Logo}`} alt="Logo FundFusion" />
      </Link>

      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
      </div>
      {children}
    </div>
  );
};

export default LayoutAuthentication;
