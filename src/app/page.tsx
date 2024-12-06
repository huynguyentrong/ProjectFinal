import About from "@/app/about/page";
import Carousel from "@/components/app/Home/Carousel";
import Layout from "@/components/Layout/Layout";
import OverviewProduct from "@/components/Overview/OverviewProduct";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <About />
      <OverviewProduct />
    </Layout>
  );
}
