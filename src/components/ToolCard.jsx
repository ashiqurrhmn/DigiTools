import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToolCard = ({tool, carts, setCarts}) => {
    const [isBuyNow, setIsBuyNow] = useState(false);
    const handleBuyNow = () =>{
        setIsBuyNow(true);
        setCarts([...carts, tool]);
        toast.success("Item added to cart!");
    }
    return (
        <div>
            <div className="card pb-3 shadow-sm rounded-2xl">
              <div className="card-body relative">
                <span
                  className={`badge border-none badge-s rounded-full absolute top-3 right-3 
                 ${
                   tool.tag === "Best Seller"
                     ? "bg-[#FEF3C6] text-[#BB4D00]"
                     : tool.tag === "New"
                       ? "bg-[#8ee4a67a] text-[#1b8f47]"
                       : tool.tag === "Popular"
                         ? "bg-[#b1c0ec7c] "
                         : "bg-gray-200 text-gray-700"
                 }`}
                >
                  {tool.tag === "Popular" ? (
                    <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                      {tool.tag}
                    </span>
                  ) : (
                    tool.tag
                  )}
                </span>
                <div className="w-14 h-14 flex items-center justify-center border border-gray-200 rounded-full">
                  <img className="w-8 " src={tool.icon} alt="" />
                </div>
                <div className="">
                  <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
                  <span className="text-[#627382]">{tool.description}</span>

                  <h2 className="text-3xl font-extrabold py-5">
                    ${tool.price}
                    <span className="text-[16px] font-normal text-[#627382]">
                      /{tool.period}
                    </span>
                  </h2>
                </div>

                <ul className="flex flex-col gap-2 text-xs">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[14px] text-[#627382]">
                      {tool.features[0]}
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[14px] text-[#627382]">
                      {tool.features[1]}
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[14px] text-[#627382]">
                      {tool.features[2]}
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[14px] text-[#627382]">
                      {tool.features[3]}
                    </span>
                  </li>
                </ul>
                <div className="mt-3">
                  <button
                    onClick={handleBuyNow}
                    className={`btn btn-block rounded-full text-white transition-all duration-300 ${
                      isBuyNow
                        ? "bg-green-500"
                        : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                    }`}
                  >
                    {isBuyNow ? (
                      <>
                        <i className="fa-solid fa-check mr-2"></i>
                        Added to Cart!
                      </>
                    ) : (
                      "Buy Now"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default ToolCard;