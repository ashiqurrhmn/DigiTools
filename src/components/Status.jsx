import React from "react";

const Status = () => {
  return (
    <>
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex-wrap items-center justify-between px-80 py-15 mt-20  hidden lg:flex">
      <div>
        <h1 className="text-[60px] text-white font-extrabold">50K+</h1>
        <p className="text-2xl font-medium text-white">Active Users</p>
      </div>
      <div className="w-0.5 h-20 bg-gray-400"></div>
      <div>
        <h1 className="text-[60px] text-white font-extrabold">200+</h1>
        <p className="text-2xl font-medium text-white">Premium Tools</p>
      </div>
      <div className="w-0.5 h-20 bg-gray-400"></div>
      <div>
        <h1 className="text-[60px] text-white font-extrabold">4.9</h1>
        <p className="text-2xl font-medium text-white">Rating</p>
      </div>
    </div>
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col items-center text-center py-10 mt-20 gap-5 lg:hidden">
      <div>
        <h1 className="text-[40px] text-white font-extrabold">50K+</h1>
        <p className="text-xl font-medium text-white">Active Users</p>
      </div>
      <div className="w-60 h-0.5 bg-gray-400"></div>
      <div>
        <h1 className="text-[40px] text-white font-extrabold">200+</h1>
        <p className="text-xl font-medium text-white">Premium Tools</p>
      </div>
      <div className="w-60 h-0.5 bg-gray-400"></div>
      <div>
        <h1 className="text-[40px] text-white font-extrabold">4.9</h1>
        <p className="text-xl font-medium text-white">Rating</p>
      </div>
    </div>
  </>
  );
};

export default Status;
