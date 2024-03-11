"use client"
import React from "react";
import { Rating } from "@mui/material";
import Image from "next/image";
import formatPrice from "../../utils/Formatprice";
import { useAppSelector } from "../../utils/reduxstore/hooks";
import { selectCart } from "../../utils/reduxstore/cartSlice";
import { Provider } from "react-redux";
import store from "../../utils/reduxstore/store";

import { useRouter } from "next/navigation"; // Import from next/router

const Truncate = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + "...";
};

interface DataProps {
  data: any;
}

const ProductsCard: React.FC<DataProps> = ({ data }) => {
  const cart = useAppSelector(selectCart); // Correct usage of useAppSelector with selectCart
  console.log(cart);
  const router = useRouter(); // Get the router object

  const handleProductClick = () => {
    router.push(`/products/${data.id}`); // Navigate to the product page
  };

  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 p-2 transition hover:scale-120 text-center text-sm m-5">
      <div className="aspect-square overflow-hidden relative w-full">
        <Image
          src={data.images[0].image}
          alt={data.description}
          width={679}
          height={679}
          className="w-full h-full object-contain"
        />
      </div>
      <div>{Truncate(data.name, 25)}</div>
      <div>{data.reviews.length} Reviews </div>
      <div>{formatPrice(data.price)}</div>
      <div>
        <Rating value={4} readOnly />
      </div>
      <button onClick={handleProductClick}>Select Product</button>
    </div>
  );
};

const ProductsCardWithRedux: React.FC<DataProps> = (props) => (
  <Provider store={store}>
    <ProductsCard {...props} />
  </Provider>
);

export default ProductsCardWithRedux;
