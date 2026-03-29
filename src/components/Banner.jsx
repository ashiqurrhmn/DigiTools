import React from "react";
import bannerImg from "../assets/banner.png";
import buttonImg from "../assets/Play.png";

const Banner = () => {
  return (
    <div className="mt-20 w-9/12 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="lg:w-159 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 rounded-full bg-[#E1E7FF]">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-30"></div>
              <div className="absolute w-2 h-2 bg-purple-700 rounded-full opacity-50"></div>
              <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
            </div>

            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent py-2 text-[16px]">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h1 className="text-4xl md:text-[72px] font-extrabold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-[#627382] text-[18px]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <p className="text-[#627382] text-[18px]">Explore Products</p>
          <div className="flex gap-2 items-center justify-center md:justify-start">
            <button className="btn text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-5.5">
              Explore Products
            </button>
            <button className="flex gap-2 btn btn-outline bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-full border-2 border-[#955eee] py-5">
              <img src={buttonImg} alt="Play" />
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
