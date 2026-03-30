import React from "react";
import cardImg1 from "../assets/user.png";
import cardImg2 from "../assets/package.png";
import cardImg3 from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-[#F9FAFC] py-30">
      <div className="w-9/12 mx-auto ">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold">Get Started in 3 Steps</h3>
          <p className="text-[#627382] mt-2">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10 gap-10">
        <div className="space-y-2 shadow-sm p-5 rounded-2xl bg-white text-center">
            <div className="flex justify-end">

                <h2 className="w-7 h-7 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-1.5 text-white rounded-full text-[14px]">01</h2>
            </div>
            <div className="bg-linear-to-r from-[#4f39f61c] to-[#9614fa33] w-22 h-22 rounded-full flex items-center justify-center mx-auto">
            <img src={cardImg1} alt="Step 1" />
            </div>
            <h3 className="text-2xl font-bold">Create Account</h3>
            <p className="text-[#627382] mb-20">Sign up for free in seconds. No credit card required to get started. </p>
            
        </div>
        <div className="space-y-2 shadow-sm p-5 rounded-2xl bg-white text-center">
            <div className="flex justify-end">
                <h2 className="w-7 h-7 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-1.5 text-white rounded-full text-[14px]">02</h2>
            </div>
            <div className="bg-linear-to-r from-[#4f39f61c] to-[#9614fa33] w-22 h-22 rounded-full flex items-center justify-center mx-auto">
            <img src={cardImg2} alt="Step 2" />
            </div>
            <h3 className="text-2xl font-bold">Choose Products</h3>
            <p className="text-[#627382] mb-20">Browse our catalog and select the tools that fit your needs. </p>
            
        </div>
        <div className="space-y-2 shadow-sm p-5 rounded-2xl bg-white text-center">
            <div className="flex justify-end">
                <h2 className="w-7 h-7 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-1.5 text-white rounded-full text-[14px]">03</h2>
            </div>
            <div className="bg-linear-to-r from-[#4f39f61c] to-[#9614fa33] w-22 h-22 rounded-full flex items-center justify-center mx-auto">
            <img src={cardImg3} alt="Step 3" />
            </div>
            <h3 className="text-2xl font-bold">Start Creating</h3>
            <p className="text-[#627382] mb-20">Download and start using your premium tools immediately. </p>
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
