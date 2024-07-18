import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//get Post by ID to generate the Post Detail page
export function displayImage(images, idx) {
  const n = images.length;
  if (!idx < n) {
    return;
  }
  return images[idx];
}
