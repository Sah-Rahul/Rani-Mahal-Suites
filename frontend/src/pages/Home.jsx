import ExclusiveOffers from "../components/ExclusiveOffers ";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Featured />
        <ExclusiveOffers />
        <Testimonials />
      </Layout>
    </>
  );
};

export default Home;
