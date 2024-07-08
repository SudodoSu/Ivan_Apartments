"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { SwiperNavButtonsAcommodation } from "./SwiperNavButtonsAcommodation";
import { DataObject } from "@/lib/Ludwig_gallery";

type PropertyCardProps = {
  props: {
    card_title?: string;
    card_des?: string;
    card_des2?: string;
    card_des3?: string;
    money?: string;
    PropertyGallery: DataObject;
  };
};

function PropertyCard({ props }: PropertyCardProps) {
  return (
    <div className=" shadow-md hover:shadow-xl custom_border rounded-md z-10 w-full overflow-hidden">
      <Swiper
        loop={true}
        spaceBetween={0}
        effect={"fade"}
        modules={[EffectFade]}
      >
        {props.PropertyGallery.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex relative items-center justify-center h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={559}
                height={240}
                placeholder="blur"
                className="object-cover block rounded-t-md h-60 w-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtonsAcommodation />
      </Swiper>
      <div className="p-3">
        <h2 className="font-black text-xl font-arbutus">{props.card_title}</h2>
        <p className="text-sm">{props.card_des}</p>
        <p className="text-sm">
          {props.card_des2}{" "}
          <span className="font-bold text-yellow text-xl">{props.money}</span>{" "}
          {props.card_des3}
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
