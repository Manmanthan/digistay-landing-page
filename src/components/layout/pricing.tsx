import React from "react"
import Image from "next/image"
import Link from "next/link"
import TickIcon from "@/../public/tick.svg"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const PRICING_DATA = [
  {
    type: "Basic",
    price: "Free",
    btnText: "Start Free Today",
    href: siteConfig.links.support,
    features: [
      { point: "Smart Check-In/Check-Out" },
      { point: "Payment Gateway Integration" },
    ],
  },
  {
    type: "Pro",
    price: "₹100 / Room / Month",
    btnText: "Buy Now",
    href: siteConfig.links.support,
    features: [
      { point: "Everything in Basic" },
      { point: "Up to 5 Years Data Storage" },
      { point: "Loyalty Program" },
      { point: "Upselling" },
      { point: "Personalized Guest Experience" },
    ],
  },
  {
    type: "Enterprise",
    price: "₹300 / Room / Month",
    btnText: "Contact Sales",
    href: siteConfig.links.support,
    features: [
      { point: "All Pro Features" },
      { point: "Custom Integrations" },
      { point: "Dedicated Account Manager" },
      { point: "Advanced Analytics" },
    ],
  },
]

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex min-h-screen w-full max-w-screen-xl flex-col gap-20 px-4 pb-32 xl:px-0"
    >
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold text-secondary xl:text-3xl">
          Flexible Plans for Every Hospitality Need
        </span>
        <span className="text-sm text-secondary xl:text-base">
          Choose the plan that fits your property and scale your business
          effortlessly.
        </span>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3">
        {PRICING_DATA.map((data) => (
          <PriceCard key={data.type} {...data} />
        ))}
      </div>
    </div>
  )
}

export default Pricing

const PriceCard = ({
  type,
  price,
  href,
  btnText,
  features,
}: {
  type: string
  price: string
  href: string
  btnText: string
  features: { point: string }[]
}) => {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl border">
      {/* Header */}
      <div className="flex-none rounded-t-xl bg-secondary px-8 py-12">
        <span className="text-3xl font-bold text-background">{type}</span>
      </div>
      {/* Features */}
      <div className="flex grow flex-col gap-6 px-8 py-12">
        {features.map((data) => (
          <div key={data.point} className="flex items-center gap-2">
            <Image
              src={TickIcon}
              alt="Feature Icon"
              width={40}
              height={40}
              className="aspect-square object-cover"
            />
            <span className="text-base text-secondary">{data.point}</span>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="flex flex-col items-center gap-4 px-8 py-12">
        <span className="text-2xl text-secondary">{price}</span>
        <Button variant={"outline"} asChild>
          <Link href={href}>{btnText}</Link>
        </Button>
      </div>
    </div>
  )
}
