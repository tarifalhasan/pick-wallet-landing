"use client";

import { Card, CardContent } from "@/components/ui/card";
import { EmblaOptionsType } from "embla-carousel";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import "./embla.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};

const TestimonialEmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide w-1/3 embla__class-names" key={index}>
              <Card className="bg-skin-light-pink border-0">
                <CardContent className="flex min-h-[380px] flex-col items-center justify-between gap-y-8 px-6 py-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={68}
                    height={47}
                    viewBox="0 0 68 47"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.8781 10.587C13.9616 10.3252 15.0691 10.1933 16.18 10.194C24.9775 10.194 32.1072 18.342 32.1072 28.389C32.1072 38.439 24.9775 46.587 16.18 46.587C7.3825 46.587 0.25 38.442 0.25 28.389C0.25 28.095 0.255625 27.798 0.269687 27.504H0.25C0.25 12.339 11.05 0 24.325 0V6.108C20.0191 6.108 16.0478 7.782 12.8781 10.587ZM48.5238 10.587C49.5869 10.329 50.6894 10.194 51.82 10.194C60.6175 10.194 67.75 18.342 67.75 28.389C67.75 38.439 60.6175 46.587 51.82 46.587C43.0225 46.587 35.8928 38.442 35.8928 28.389C35.8928 28.095 35.8984 27.798 35.9125 27.504H35.8928C35.8928 12.339 46.6928 0 59.9678 0V6.108C55.6591 6.108 51.6934 7.782 48.5238 10.587Z"
                      fill="#F15152"
                    />
                  </svg>
                  <p className="text-center text-skin-black font-normal text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing do
                    eiusmod tempor incididunt dolore magna aliqua.
                  </p>
                  <p className="text-skin-black text-base font-bold lg:text-lg">
                    Rahul, Mumbai
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialEmblaCarousel;
