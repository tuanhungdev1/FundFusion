import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo/LogoFundFusion.png";
import Background from "../../public/background/Ellipse 65.png";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponents } from "../components/common";

interface Props {
  children: React.ReactNode;
  heading?: string;
}

const LayoutWithBoundary: React.FC<Props> = ({ children, heading = "" }) => {
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite isolate">
      <img
        src={Background}
        alt="background"
        className="absolute pointer-events-none bottom-0 left-0 right-0 z-[-1]  w-screen"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img srcSet={`${Logo}`} alt="Logo FundFusion" />
      </Link>

      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

const LayoutAuthentication = withErrorBoundary(LayoutWithBoundary, {
  FallbackComponent: ErrorComponents,
});

export default LayoutAuthentication;
