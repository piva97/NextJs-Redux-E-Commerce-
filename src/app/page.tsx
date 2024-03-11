import { Products } from "../../utils/Products";
import ProductsCard from "../../components/Products/ProductCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
        style={{
          height: "100vh",
          padding: "2rem",
          paddingTop: "10rem",
          paddingBottom: "10rem",
          marginBottom: "10rem",
        }}
      >
        {Products.map((product: any, id: number) => (
          <ProductsCard data={product} key={id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
