"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';

// Import required modules
import { Autoplay ,EffectFade,} from "swiper/modules";
import Image from "next/image";

const HeroSwiper = () => {
  return (
    <div className="overflow-hidden! p-0!">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        loop={true}
        // direction={'vertical'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade,Autoplay,]}
        className="mySwiper p-0!"
      >
        {[
          "https://framerusercontent.com/images/hSwT5bZsymf6RUhRvIEtNbSbEo.png?width=3000&height=1962",
          "https://framerusercontent.com/images/LuD6ZmkTnFD1B6thf3BADMXkfdE.png?width=3000&height=1962",
          "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
          "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
        ].map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center p-0!"
          >
            
            <Image width={100} height={100} src={item} className="w-full! h-full! object-cover! rounded-4xl" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
