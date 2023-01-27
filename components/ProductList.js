import React from "react";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

import Image from "next/image";
import ProductSwape from "./ProductSwape";

const ProductList = ({products}) => {
 
  
  return (
    <>
    <div className="flex items-center justify-center space-x-4 mb-4">
      <div className="prev">
        <button
          className="hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>


      <div className="next">
        <button
          className="swiper-next-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      </div>

      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCreative,
        ]}
        slidesPerView={4}
        spaceBetween={20}
        // BreakPoints
        // breakpoints={{
        //   320: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   480: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   640: {
        //     slidesPerView: 5,
        //     spaceBetween: 10,
        //   },
          
        // }}
        // BreakPoints

        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        autoplay={false}
        speed={1000}
        className="relative"
      >
        <div className="bg-white">
          <div className="">
              <div className="">
                {products.map((product) => (
                    <div key={product.id} className="  ">

                        <SwiperSlide className="">
                      <ProductSwape product={product} />
                      </SwiperSlide>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default ProductList;
