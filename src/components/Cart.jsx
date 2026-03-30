import React from "react";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = Number(
    carts.reduce((sum, item) => sum + item.price, 0).toFixed(2),
  );

  const handlePayment = () => {
    setCarts([]);
  };

  const handleRemove = (id) =>{
    const updateCart = carts.filter((item) => item.id !== id);
    setCarts(updateCart);
  }

  return (
    <div className="w-9/12 mx-auto shadow-sm border border-gray-100 p-10 rounded-lg mb-20">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {carts.length === 0 ? (
        <div className="mt-5 text-center">
        <p className="text-xl font-medium">Cart is empty!!</p>
        <p className="text-[14px] text-[#627382]">Go to Products and add items...</p>
        </div>
      ) : (
        <>
          <div>
            {carts.map((item) => (
              <div
                key={item.id}
                className="my-7 p-5 bg-gray-50 rounded-lg flex flex-col md:flex-row justify-between gap-10"
              >
                <div className="flex flex-col md:flex-row gap-3 items-center text-center md:text-left">
                  <div className="w-14 h-14 flex items-center justify-center border border-gray-200 rounded-full bg-white">
                    <img className="w-8 " src={item.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="md:text-[20px] font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-[#627382] font-medium">${item.price}</p>
                  </div>
                </div>
                <button onClick={() => handleRemove(item.id)} className="text-red-500 font-semibold">Remove</button>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p className="text-[#627382]">Total:</p>
            <h2 className="text-2xl font-bold">${totalPrice}</h2>
          </div>
          <button
            onClick={handlePayment}
            className="btn text-white btn-block rounded-full font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-5 py-6"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
