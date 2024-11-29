import About from "@/app/about/page";
import Contact from "@/components/app/Contact/Contact";
import Carousel from "@/components/app/Home/Carousel";
import Layout from "@/components/Layout/Layout";
import OverviewProduct from "@/components/Overview/OverviewProduct";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <About />
      <OverviewProduct />
      <Contact />
    </Layout>
  );
}
