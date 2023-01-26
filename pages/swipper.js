// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper";

import { client } from "../lib/client";
import { urlFor } from "../lib/client";

import Image from "next/image";
import Header from "../components/Header";
import Swipper from "../components/Swipper";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import PromoSection from "../components/PromoSection";
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";

const swipper = ({ products }) => {
  console.log(products)
  return (
    <div className="">
      <Announcement />

      <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal space-y-9">
        <Header />

        {/* <Image 
        src={urlFor(products.images[0])} 
        alt="product" /> */}
        <Swipper />

        <ProductList products={products} />
        <PromoSection />
        <Categories />
        {/* <ProductPage /> */}
        <Footer />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // const bannerQuery = '*[_type == "banner"]';
  // const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products },
  };
};

export default swipper;
