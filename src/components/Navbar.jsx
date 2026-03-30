import React from "react";

const Navbar = ({ carts }) => {
  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-9/12 mx-auto justify-between">
        <a className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </a>

        <div className="gap-4 hidden lg:flex">
          <p className="font-medium">Products</p>
          <p className="font-medium">Features</p>
          <p className="font-medium">Pricing</p>
          <p className="font-medium">Testimonials</p>
          <p className="font-medium">FAQ</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />{" "}
            </svg>
            {carts.length > 0 && (
              <span className="badge text-white bg-red-500 rounded-full badge-sm indicator-item">
                {carts.length}
              </span>
            )}
          </div>
          <button className="font-medium hidden md:flex">Login</button>
          <button className="btn text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hidden md:flex">
            Get Started
          </button>
          <div className="lg:hidden">
            <button
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <ul
              className="dropdown menu w-30 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <li>
                <p className="font-medium">Products</p>
              </li>
              <li>
                <p className="font-medium">Features</p>
              </li>
              <li>
                <p className="font-medium">Pricing</p>
              </li>
              <li>
                <p className="font-medium">Testimonials</p>
              </li>
              <li>
                <p className="font-medium">FAQ</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
