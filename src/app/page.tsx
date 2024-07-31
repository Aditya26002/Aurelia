// "use client";

import Slider from "./../components/Slider";
import ProductList from "./../components/ProductList";
import Categories from "./../components/Categories";
import { Suspense, useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "../hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };
  //   getProducts();
  // }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-7 lg:px-14 xl:px-28 2xl:px-60">
        <h1 className="text-2xl">Featured products</h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-7 lg:px-14 xl:px-28 2xl:px-60 mb-12">
          Categories
        </h1>
        <Suspense fallback={"loading"}>
          <Categories />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
