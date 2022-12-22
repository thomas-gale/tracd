import { useMemo } from "react";

export interface CarouselProps {
  uniqueId: string;
  images: string[];
}

export const Carousel = ({ uniqueId, images }: CarouselProps) => {
  const len = useMemo(() => images.length, [images]);
  return (
    <div className="carousel w-full rounded-lg">
      {images.map((image, index) => (
        <div
          id={`slide-${uniqueId}-${index}`}
          key={image}
          className="carousel-item relative w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="carousel image" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide-${uniqueId}-${(len + index - 1) % len}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide-${uniqueId}-${(index + 1) % len}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
