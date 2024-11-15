import Card from "@/components/app/Card";
import Carousel from "@/components/app/Home/Carousel";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Card />
    </Layout>
  );
}
