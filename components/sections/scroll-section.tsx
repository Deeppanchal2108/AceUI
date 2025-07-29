import React from 'react'
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const images = [
  {
    image: "/s1.jpg",
    alt: "Testimonial 1",
  },
  {
    image: "/s3.jpg",
    alt: "Testimonial 2",
  },
  {
    image: "/s2.jpg",
    alt: "Testimonial 3",
  },
  {
    image: "/s4.jpg",
    alt: "Testimonial 4",
  },
  {
    image: "/s5.jpg",
    alt: "Testimonial 5",
  },
]

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[24rem] pb-6 rounded-md flex flex-col antialiased items-center justify-center relative z mb-10 w-full">
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="fast"
      />
    </div>
  );
}


import { TextReveal } from "@/components/magicui/text-reveal";
function ScrollSection() {
  return (
    <div className='w-full flex justify-center items-center text-center flex-col'>
      <TextReveal className="
  font-pop 
  text-white 
  text-xl sm:text-2xl md:text-4xl 
  font-semibold 
  leading-snug sm:leading-tight md:leading-tighter 
  text-center 
  tracking-tight 
  max-w-[90%] sm:max-w-[520px] md:max-w-[560px] 
  mx-auto
">
        Power the UI
        behind exceptional products.
        In just a few lines of code.
      </TextReveal>

      <InfiniteMovingCardsDemo />

    </div>
  )
}

export default ScrollSection
