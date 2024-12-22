import React from "react"
import Image from "next/image"
import Link from "next/link"
import OfferImage from "@/../public/offer.svg"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const Offer = () => {
  return (
    <div
      id="offer"
      className="flex w-full flex-col items-center bg-gradient-to-t from-primary"
    >
      <div className="grid max-w-screen-xl grid-cols-1 items-center gap-10 px-4 py-10 xl:grid-cols-2 xl:px-8">
        {/* OFFER TEXT */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-lg text-primary xl:text-2xl">
              Exclusive Offer
            </span>
            <h3 className="text-2xl font-bold text-secondary xl:text-3xl">
              Limited-Time Offer: Early Access Benefits!
            </h3>
            <p className="text-sm xl:text-base">
              Get 1 Year Free Subscription When You Sign Up Today.
            </p>
          </div>
          <Button className="w-fit" asChild>
            <Link href={siteConfig.links.support}>
              Claim Your Free Subscription Now
            </Link>
          </Button>
        </div>
        {/* OFFER IMAGE */}
        <div className="flex w-full flex-col items-center">
          <Image
            src={OfferImage}
            alt={"offer-image"}
            width={400}
            height={400}
            className="aspect-square object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Offer
