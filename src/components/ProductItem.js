import React from "react";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductItem = ({ item }) => {
  return (
    <li className="custom-shadow border-radius w-64 min-h-[40vh] px-4 py-4 rounded-lg">
      <NavLink to={`${item.id}`}>
        <img
          src={item.image}
          alt="product"
          className="w-[150px] h-48 m-auto flex-auto mb-5"
        />
        <span className="text-gray-800 text-md font-semibold">
          {item.title}
        </span>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold">{item.price}$</span>
          <div className="flex items-center gap-2 bg-blue-500 rounded-md px-3 py-[2px] text-white">
            <span>{item.rating.rate}</span>
            <FaRegStar />
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default ProductItem;
