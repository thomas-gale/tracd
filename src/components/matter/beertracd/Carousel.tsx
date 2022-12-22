import { useMemo } from "react";

export interface CarouselProps {
  uniqueId: string;
  images: string[];
}

export const Carousel = ({ uniqueId, images }: CarouselProps) => {
  const len = useMemo(() => images.length, [images]);
  return (
    <>
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
            id={`slide-${uniqueId}-${index}`}
            key={image}
            className="carousel-item relative w-full"
          >
            <div className="flex justify-center w-full items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="carousel image"
                className="max-h-48 object-contain justify-center"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {images.map((_, i) => (
          <a key={i} href={`#slide-${uniqueId}-${i}`} className="btn btn-xs">
            {i + 1}
          </a>
        ))}
      </div>
    </>
  );
};
