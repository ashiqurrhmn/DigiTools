import React from "react";

const ToolsHeadingTabs = ({ setActiveTab }) => {

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
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-transparent mt-6 border-none shadow-none justify-center items-center ">
        <input
          onClick={() => setActiveTab("Products")}
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-25"
          aria-label="Products"
          defaultChecked
        />
        <input
          onClick={() => setActiveTab("Carts")}
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-25"
          aria-label="Cart (0)"
        />
      </div>
    </div>
  );
};

export default ToolsHeadingTabs;
