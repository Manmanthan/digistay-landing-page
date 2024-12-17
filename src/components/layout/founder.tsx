import React from "react"
import Image from "next/image"
import AbhinavImage from "@/../public/abhinav.png"
import ManthanImage from "@/../public/manthan.png"

const FOUNDERS_DATA = [
  {
    image: AbhinavImage,
    name: "Abhinav Gupta",
    position: "Cofounder & CEO",
  },
  {
    image: ManthanImage,
    name: "Man Manthan Bhardwaj",
    position: "Cofounder & CPO",
  },
]

const Founder = () => {
  return (
    <div
      id="founder"
      className="flex w-full flex-col gap-12 bg-muted px-4 py-20 xl:px-0"
    >
      <div className="flex flex-col items-center gap-4">
        <h4 className="text-2xl font-bold text-secondary xl:text-3xl">
          Meet the Founders
        </h4>
        <p className="text-center text-sm text-secondary xl:text-base">
          With over 10+ years of combined experience, we&apos;ve got a
          well-seasoned team at Digistay.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
        {FOUNDERS_DATA.map((data) => (
          <div key={data.name} className="flex flex-col gap-6">
            <Image
              src={data.image}
              alt={"Founders-Image"}
              width={300}
              height={300}
              className="aspect-square bg-gradient-to-t from-primary"
            />
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold text-secondary">
                {data.name}
              </span>
              <span className="text-xs text-secondary">{data.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Founder
