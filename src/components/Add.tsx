"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import React, { useState } from "react";

const Add = ({
  prdoctId,
  vriantid,
  stockNumber,
}: {
  prdoctId: string;
  vriantid: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1); // Set initial quantity to 1

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      // Ensure quantity does not go below 1
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const { addItem } = useCartStore();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-24">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {stockNumber < 10 && (
            <div className="text-xs">
              {stockNumber - quantity > 0 ? `Only ` : ""}
              <span className="text-orange-500">
                {stockNumber - quantity > 0
                  ? `${stockNumber - quantity} items`
                  : "No items left!"}
              </span>{" "}
              {stockNumber - quantity > 0 ? "left!" : ""}
              <br />
              {stockNumber - quantity > 0 ? ` ${"Don't"} miss it` : ""}
            </div>
          )}
        </div>
        <button
          className="w-36 text-sm rounded-3xl ring-1 text-lama ring-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring"
          onClick={() => addItem(wixClient, prdoctId, vriantid, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
