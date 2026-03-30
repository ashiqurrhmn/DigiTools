import React from 'react';

const Footer = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] space-y-6 py-20 mt-20 text-center flex flex-col items-center justify-center'>
            <h2 className='text-[40px] text-white font-extrabold'>Ready to Transform Your Workflow?</h2>
            <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br/> Start your free trial today.</p>
            <div className='flex gap-3'>
                <button className="btn bg-white rounded-full">
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Explore Products</span>
                
              </button>
              <button className='btn btn-outline text-white border-white hover:bg-[#814ff700]  rounded-full px-9'>View Pricing</button>
            </div>
            <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Footer;