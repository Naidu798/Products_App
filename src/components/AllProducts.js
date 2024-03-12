import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProductItem from "./ProductItem";
import Loading from "./Loading";

const AllProducts = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const res = await fetch(url);
        const data = await res.json();
        setProductsList(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);

  return (
    <div className="h-screen w-screen">
      <div>
        <Header />
        {productsList.length > 0 ? (
          <div className="pt-4 px-3 h-[90vh] overflow-y-auto pb-8 custom-scrollbar">
            <h2 className="text-2xl font-semibold pl-[3vw] mb-3">
              All Products
            </h2>
            <ul className="flex items-center justify-center flex-wrap gap-6 px-4">
              {productsList.map((product) => {
                return <ProductItem item={product} key={product.id} />;
              })}
            </ul>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
