import { Box, Button } from "@mui/material";
import { useAppSelector } from "../../utils/reduxstore/hooks";
import Image from "next/image";
interface CartProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  images?: { image: string }[]; // Define the images property as optional
  // Add other properties as needed
}



export default function Cart() {
  const { cart } = useAppSelector(state => state.cart);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        position: "absolute",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 20,
          minHeight: "20vh",
          maxHeight: "80vh", // Limiting the height of the cart
          width: "50vh",
          backgroundColor: "white",
          padding: "10px",
          border: 'solid',
          overflowY: "scroll", // Adding scroll when the content overflows vertically
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div>Cart</div>
          <div>({cart.length})</div>
          <div>Remove All</div>
        </div>
        {cart.map((product: CartProduct) => (
          <div key={product.id}>
            
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <div>{product.name}</div>
              <div>${product.price}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <div>Total</div>
              <div>${product.price}</div>
             
            </div>
          </div>
        ))}
        <Button
          color="success"
          variant="contained"
          sx={{ color: 'black', fontStyle: 'bold', width: "100%" }}
        >
          CHECK OUT
        </Button>
      </Box>
    </div>
  );
}
