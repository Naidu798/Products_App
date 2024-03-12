import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineGridView } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;

  const activeClass = path === "/" ? "text-blue-500" : "";
  return (
    <header className="h-[10vh] px-5 py-3 flex items-center justify-between custom-shadow">
      <h1 className="text-3xl text-orange-400 font-bold">
        Shop<span className="text-yellow-400">up</span>
      </h1>
      <div className="sm:visible hide">
        <ul className="flex items-center gap-4 text-xl font-semibold">
          <li>Home</li>
          <NavLink to="/" className={`${activeClass}`}>
            <li>Products</li>
          </NavLink>
          <li>Cart</li>
          <li>
            <button
              type="button"
              className="bg-blue-500 py-0.5 px-4 rounded-lg text-md pb-1 text-white"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4 text-lg visible sm:hidden">
        <ul className="flex items-center gap-4 text-xl font-semibold">
          <li>
            <MdOutlineHome />
          </li>
          <li className={`${activeClass}`}>
            <NavLink to={"/"}>
              <MdOutlineGridView />
            </NavLink>
          </li>
          <li>
            <TiShoppingCart />
          </li>
        </ul>
        <button
          type="button"
          className="bg-blue-500 py-0.5 px-4 rounded-lg text-md pb-1 text-white"
        >
          <FiLogOut />
        </button>
      </div>
    </header>
  );
};

export default Header;
