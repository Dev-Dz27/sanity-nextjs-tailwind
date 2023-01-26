// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative } from "swiper";




import Image from "next/image";
import Header from "../components/Header";
import Swipper from "../components/Swipper";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import PromoSection from "../components/PromoSection";
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";

const swipper = () => {
  return (
    <div className="">
      <Announcement/>

      <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal space-y-9">
        <Header />
        
        
          <Swipper />

          <ProductList  />
          <PromoSection />
          <Categories />
          {/* <ProductPage /> */}
          <Footer />
      </div>
    </div>
  );
};

export default swipper;
