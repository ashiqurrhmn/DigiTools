import React, { use } from "react";
import ToolCard from "./ToolCard";

const Tool = ({ toolPromise, carts, setCarts}) => {
  const tools = use(toolPromise);

  return (
    <div className="w-9/12 mx-auto my-20">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10 gap-10">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Tool;
