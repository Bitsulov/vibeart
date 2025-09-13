import type Swiper from "swiper";
import type React from "react";

export function slideLeft(e: React.MouseEvent, swiperRef: React.RefObject<Swiper | null>) {
    if (swiperRef.current !== null) {
        swiperRef.current.slidePrev();
    }
}

export function slideRight(e: React.MouseEvent, swiperRef: React.RefObject<Swiper | null>) {
    if (swiperRef.current !== null) {
        swiperRef.current.slideNext();
    }
}
