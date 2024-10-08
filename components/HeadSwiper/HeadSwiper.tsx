"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MdKeyboardArrowDown } from "react-icons/md";
import { SwiperNavButtons } from "./SwiperNavButton";
import { getHeadSwiperLib } from "@/lib/HeadSwiperLib";
import { useLocale } from "next-intl";

export default function HeadSwiper() {
  const localeActive = useLocale();

  const pagination = {
    clickable: true,
  };

  const headSwiperLib = getHeadSwiperLib(localeActive);

  return (
    <section className="block h-screen max-w-screen relative">
      <div className="block relative max-w-full head_swiper ">
        <Swiper
          loop={true}
          spaceBetween={0}
          modules={[FreeMode, Autoplay, Pagination]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          pagination={pagination}
          grabCursor={true}
          speed={900}
        >
          {headSwiperLib.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex relative items-center justify-center h-full w-full">
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  placeholder="blur"
                  priority
                  className="object-cover block h-screen w-full"
                /> */}
                <picture className="block h-screen w-full">
                  <source
                    className="object-cover"
                    media="(min-width: 768px)"
                    srcSet={image.src}
                  />
                  <source
                    className="object-cover"
                    media="(max-width: 767px)"
                    srcSet={image.srcMobile}
                  />
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1920}
                    height={1080}
                    className="object-cover  block h-screen w-full"
                  />
                </picture>
                <div className="left-1/20 right-1/20 md:left-auto md:right-auto md:mx-0 md:max-w-2xl z-20 absolute bottom-8 flex items-center justify-center flex-col bg-black bg-opacity-60 rounded-md p-8 gap-3">
                  <h1 className="text-white font-arbutus text-center text-3xl font-bold">
                    {image.title}
                  </h1>
                  <p className="text-white text-center">{image.des}</p>
                  <a href="#about">
                    <button className="btn">
                      {image.button}{" "}
                      <MdKeyboardArrowDown className="text-2xl" />
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </section>
  );
}
