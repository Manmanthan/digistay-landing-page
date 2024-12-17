import React from "react"
import Image from "next/image"
import HeroImage from "@/../public/hero.svg"

import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex size-full h-screen flex-col items-center justify-center bg-secondary px-4 pb-10 xl:px-0"
    >
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 xl:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-background xl:text-6xl">
              Revolutionizing Hospitality with{" "}
              <span className="text-primary">DigiStay</span>
            </h1>
            <p className="text-sm text-background xl:text-base">
              Seamless guest experiences, enhanced operational efficiency, and
              scalable solutions for the modern hospitality industry.
            </p>
          </div>
          <Button className="w-fit">Get in Touch with Us</Button>
        </div>
        <Image
          src={HeroImage}
          alt={"hero-image"}
          width={500}
          height={500}
          className="aspect-square object-cover"
        />
      </div>
      <div className="absolute bottom-0 h-0 w-full border-b-[100px] border-l-[50vw] border-r-[50vw] border-b-background border-l-transparent border-r-transparent"></div>
    </div>
  )
}

export default Hero
