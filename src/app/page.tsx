import About from "@/app/about/page";
import Carousel from "@/components/app/Home/Carousel";
import ProductList from "@/components/app/Product/ProductList";
import Layout from "@/components/Layout/Layout";
import OverviewProduct from "@/components/Overview/OverviewProduct";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <About />
      <OverviewProduct />
      <ProductList />
    </Layout>
  );
}
