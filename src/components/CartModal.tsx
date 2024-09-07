"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import React, { useEffect } from "react";
import { useCartStore } from "./../hooks/useCartStore";
import { media as wixMedia } from "@wix/sdk";

const CartModal = () => {
  // const cartItems = true;

  const { cart, isLoading } = useCartStore();

  return (
    <div className="p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex flex-col gap-6 z-20">
      {isLoading ? (
        "Loading..."
      ) : !cart.lineItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}

                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    {/*TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 bg-gray-50 rounded-sm">
                        ₹{item.price?.amount}
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-gray-500">
                      {item.availability?.status}
                    </div>
                  </div>
                  {/*BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => {}}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$98</span>
            </div>
            <p className=" text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
