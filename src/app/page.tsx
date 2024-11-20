import CategoryList from "@/components/app/Category/CategoryList";
import Carousel from "@/components/app/Home/Carousel";
import ProductList from "@/components/app/Product/ProductList";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <CategoryList />
      <ProductList />
    </Layout>
  );
}
