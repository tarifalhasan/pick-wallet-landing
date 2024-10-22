"use client"; // Add this at the top

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

// Testimonial data type
type Testimonial = {
  say: string;
  customerName: string;
  id: number;
};

// Sample testimonials
const TestimonialData: Testimonial[] = [
  {
    say: "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt dolore magna aliqua.",
    customerName: "Rahul, Mumbai",
    id: 1,
  },
  {
    say: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    customerName: "Sneha, Pune",
    id: 2,
  },
  {
    say: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    customerName: "Raj, Delhi",
    id: 3,
  },
  {
    say: "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt dolore magna aliqua.",
    customerName: "Rahul, Mumbai",
    id: 4,
  },
  {
    say: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    customerName: "Sneha, Pune",
    id: 5,
  },
  {
    say: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    customerName: "Raj, Delhi",
    id: 6,
  },
  // Add more testimonials as needed...
];

const CustomerTestimonial: React.FC = () => {
  return (
    <section className="pb-16 container xl:pb-20">
      <div className="">
        <h2 className="text-2xl after:left-1/2 after:-translate-x-1/2 relative after:absolute after:-bottom-4 after:h-[3px] after:bg-skin-red after:w-[140px] text-center font-bold text-skin-black">
          Ce spun clientii nostri?
        </h2>
      </div>
      <Carousel
        opts={{
          align: "center",
        }}
        className="pt-12 xl:pt-16"
      >
        <CarouselContent>
          {TestimonialData.map((item) => (
            <CarouselItem
              key={item.id}
              className="lg:basis-1/3  md:basis-1/2  xl:basis-1/4"
            >
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
                    {item.say}
                  </p>
                  <p className="text-skin-black text-base font-bold lg:text-lg">
                    {item.customerName}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="pt-6 gap-4 flex justify-center">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default CustomerTestimonial;
