import { Swiper, SwiperSlide } from "swiper/react";
interface ImageSliderProps {
  urls: string[];
}
function ImageSlider({ urls }: ImageSliderProps) {
  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 abosolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";

  const inactiveStyles = "hidden text-gray-400";
  return (
    <div className="group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl">
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button></button>
        <button></button>
        <Swiper className="h-full w-full"></Swiper>
      </div>
    </div>
  );
}

export default ImageSlider;