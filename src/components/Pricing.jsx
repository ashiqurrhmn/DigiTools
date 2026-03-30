import React from "react";

const Pricing = () => {
  return (
    <div className="w-7/12 md:w-9/12 mx-auto mt-20">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-extrabold">Simple, Transparent Pricing</h3>
        <p className="text-[#627382] mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10 gap-10 ">
        <div className="card h-112 shadow-sm bg-[#F9FAFC] rounded-2xl">
          <div className="card-body">
            <div className="">
              <h2 className="text-2xl font-bold mb-2">Starter</h2>
              <span className="text-[#627382]">
                Perfect for getting started
              </span>

              <h2 className="text-3xl font-extrabold py-5">
                $0
                <span className="text-[16px] font-normal text-[#627382]">
                  /Month
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
                  Access to 10 free tools
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
                  Basic templates
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
                  Community support
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
                  1 project per month
                </span>
              </li>
            </ul>
            <div className="mt-22">
              <button className="btn text-white btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        <div className="card h-112 shadow-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl">
          <div className="card-body relative">
             <span className="badge text-[#BB4D00] border-none bg-[#FEF3C6] badge-s  absolute -top-3 left-1/2 -translate-x-1/2 rounded-full">Most Popular</span>
            <div className="">
              <h2 className="text-2xl font-bold mb-2">Pro</h2>
              <span className="">
                Best for professionals
              </span>

              <h2 className="text-3xl font-extrabold py-5">
                $29
                <span className="text-[16px] font-normal ">
                  /Month
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
                <span className="text-[14px] ">
                  Access to all premium tools
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
                <span className="text-[14px] ">
                  Unlimited templates
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
                <span className="text-[14px] ">
                  Priority support
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
                <span className="text-[14px] ">
                  Unlimited projects
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
                <span className="text-[14px] ">
                 Cloud sync
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
                <span className="text-[14px] ">
                  Advanced analytics
                </span>
              </li>
            </ul>
            <div className="mt-7">
              <button className="btn btn-block bg-white rounded-full">
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Start Pro Trial</span>
                
              </button>
            </div>
          </div>
        </div>
        <div className="card h-112 shadow-sm rounded-2xl bg-[#F9FAFC] ">
          <div className="card-body">
            <div className="">
              <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
              <span className="text-[#627382]">
                For teams and businesses
              </span>

              <h2 className="text-3xl font-extrabold py-5">
                $99
                <span className="text-[16px] font-normal text-[#627382]">
                  /Month
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
                  Everything in Pro
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
                  Team collaboration
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
                  Custom integrations
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
                  Dedicated support
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
                  SLA guarantee
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
                  Custom branding
                </span>
              </li>
            </ul>
            <div className="mt-7">
              <button className="btn text-white btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
