// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative } from "swiper";

import { Swiper, SwiperSlide,  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";



import model from "../public/basket.jpg";
import Image from "next/image";

const swipper = () => {
  return (
    <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectCreative ]}
            spaceBetween={1}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={() =>{}}
            onSlideChange={() => console.log("slide change")}
            speed= {1500}
            // className="h-[680px]"
          >

            <SwiperSlide>
              <Image src={model} width="" height="" className="mb-3 " />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={model} width="" height="" className="mb-3 " />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={model} width="" height="" className="mb-3 " />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={model} width="" height="" className="mb-3 " />
            </SwiperSlide>
          </Swiper>
      </div>
  );
};

export default swipper;
