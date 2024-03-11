"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Products } from "../../../../utils/Products";
import { Button, Rating } from "@mui/material";
import Container from "@mui/material/Container";

import { useAppDispatch } from "../../../../utils/reduxstore/hooks";
import { addToCart } from "../../../../utils/reduxstore/cartSlice";
import Image from "next/image";
interface IProduct {
  id: string;
  name: string;
  price: number;
  reviews: any;
  description: string;
  inStock: boolean;
  category: string;
  images?: { image: string }[];


  // Define other properties as needed
}
const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};
const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams<{ productId?: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (productId) {
      const selectedProduct = Products.find(
        (item) => item.id.toString() === productId
      );
      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [productId]);

  return (
    <Container>
      <div
        style={{
          height: "100vh",
          paddingTop: "10rem",
          paddingBottom: "10rem",
          marginBottom: "10rem",
        }}
      >
        {product ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-medium text-slate-700">
                  {product.name}
                </h2>
                <div className="flex items-center text-slate-700">
                  <Rating value={4} readOnly />
                  <h1 className="text-3xl font-medium text-slate-700">
                    {product.reviews.length}
                  </h1>
                </div>
                <Horizontal />
                <div className="text justify">{product.description}</div>
                <Horizontal />
                <div>
                  <span className="font-semi-bold">CATEGORY:</span>
                  {product.category}
                </div>
                <div
                  className={
                    product.inStock ? "text-teal-400" : "text-rose-400"
                  }
                >
                  {product.inStock ? "in stock" : "out of stock"}
                </div>
                <div>
                  <Button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </Button>
                  {count}
                  <Button
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </Button>
                </div>

                <Button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        productCount: count,
                      })
                    );
                  
                  }}
                >
                  {" "}
                  Add to Cart
                </Button>
              </div>
              <div>IMAGES<div> 
              {product.images && (
    <Image
      src={product.images[0].image}
      alt={product.description}
      width={679}
      height={679}
      className="w-full h-full object-contain"
    />
  )}</div></div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
};

export default ProductDetails;
