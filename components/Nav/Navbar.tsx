"use client";

import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Cart from "../cart/Cart";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header style={{ backgroundColor: "grey", position: "fixed", width: "100%", zIndex: 2 }}>
      <nav
        style={{
          height: "100px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3vh",
          fontSize: "2rem",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        <div>E-COMERCE</div>
        <div>  <Link href="/">
            Home
          </Link></div>
        <div>
          <MdOutlineShoppingCart
            onClick={() => {
              setShowCart(!showCart);
            }}
          />
        </div>
      </nav>
      <div> {showCart ? <Cart /> : null}</div>
    </header>
  );
};




export default Navbar;
