import React, { useEffect, useState } from "react";
import Header from "./Header";
import { NavLink, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { LuPlusSquare } from "react-icons/lu";
import { LuMinusSquare } from "react-icons/lu";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loading from "./Loading";

const ProductItemDetails = () => {
  const [itemDetails, setItemDetails] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const url = `https://fakestoreapi.com/products/${productId}`;
        const res = await fetch(url);
        const data = await res.json();
        setItemDetails(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductDetails();
  }, []);

  return (
    <div>
      <Header />
      <div className="my-5 sm:pl-10 pl-5">
        <NavLink to={"/"}>
          <FaArrowLeftLong className="text-3xl" />
        </NavLink>
      </div>
      {itemDetails ? (
        <div
          className={`mt-5 flex sm:flex-row flex-col items-start justify-center gap-14 w-full px-5 sm:px-10 py-4`}
        >
          <img
            src={itemDetails?.image}
            alt="product"
            className="sm:h-[58vh] h-[38vh] sm:w-[30vw] w-[90vw] rounded-lg"
          />
          <div className="sm:max-w-[50vw] w-[90vw]">
            <div className="flex flex-col gap-6">
              <span className="text-gray-900 text-2xl font-semibold">
                {itemDetails?.title}
              </span>

              <span className="text-black text-2xl font-bold">
                {itemDetails?.price} $
              </span>
            </div>
            <div className="flex items-center gap-4 mb-3 mt-6">
              <div className="flex items-center gap-2 bg-blue-500 rounded-md px-3 py-[2px] text-white">
                <span>{itemDetails?.rating?.rate}</span>
                <FaRegStar />
              </div>
              <span className="text-gray-800 font-semibold">
                {itemDetails?.rating?.count} Reviews
              </span>
            </div>
            <p className="text-gray-600 my-4">{itemDetails?.description}</p>
            <p className="text-black font-semibold text-lg">
              Availble : <span className="text-gray-500">In Stock</span>
            </p>
            <hr className="my-3" />
            <div className="flex items-center gap-6 my-5">
              <LuMinusSquare className="text-2xl text-gray-600" />
              <span className="text-2xl text-black">0</span>
              <LuPlusSquare className="text-2xl text-gray-600" />
            </div>
            <button className="bg-blue-500 text-white text-xl rounded-lg px-5 py-1 mt-4">
              Add To Cart
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductItemDetails;
