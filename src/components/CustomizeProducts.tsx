"use client";

import React, { useState } from "react";
import { products } from "@wix/stores";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVAriantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) && variant.stock?.inStock
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          {option.choices?.map((choice) => (

            const disabled = !isVAriantInStock({...selectedOptions, [option.name!]: choice.description!});
            const selected = selectedOptions[option.name!] === choice.description!;
            <div
              className=""
              key={choice.value}
              onClick={() =>
                handleOptionSelect(option.name!, choice.description!)
              }
            >
              {choice.description}
            </div>
          ))}
        </div>
      ))}

      {/* 
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-600">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-600"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-600">
              <div className="absolute w-10 h-[2px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rotate-45"></div>
            </li>
          </ul> */}

      {/* <h4 className="font-medium">Choose a Size</h4>
      <ul className="flex items-center gap-3">
        <li className=" ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className=" ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;
