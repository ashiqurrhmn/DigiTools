import React from "react";

const ToolsHeadingTabs = ({ activeTab, setActiveTab, carts }) => {

  return (
    <div className="w-7/12 md:w-9/12 mx-auto my-20">
      <div className="text-center">
        <h3 className="text-4xl font-extrabold">Premium Digital Tools</h3>
        <p className="text-[#627382] mt-2">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
      </div>
      
      <div className="tabs tabs-box bg-transparent mt-6 border-none shadow-none justify-center items-center ">
        <input
          onClick={() => setActiveTab("Products")}
          type="radio"
          name="my_tabs_1"
          className={`${activeTab === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : " text-black"} tab rounded-full w-25`}
          aria-label="Products"
          defaultChecked
        />
        <input
          onClick={() => setActiveTab("Carts")}
          type="radio"
          name="my_tabs_1"
          className={`${activeTab === "Carts" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : " text-black"} tab rounded-full w-25`}
          aria-label={`Cart (${carts.length})`}
        />
      </div>
    </div>
  );
};

export default ToolsHeadingTabs;
