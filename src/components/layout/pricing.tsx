import React from "react"
import Image from "next/image"
import Link from "next/link"
import TickIcon from "@/../public/tick.svg"

import { Button } from "../ui/button"

const PRICING_DATA = [
  {
    type: "Basic",
    price: "Free",
    btnText: "Start Free Today",
    href: "/",
    features: [
      { point: "Smart Check-In/Check-Out" },
      { point: "Payment Gateway Integration" },
    ],
  },
  {
    type: "Pro",
    price: "₹100 / Room / Month",
    btnText: "Buy Now",
    href: "/",
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
    href: "/",
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
      <div className="flex size-full flex-col  items-center justify-between gap-6 xl:flex-row">
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
    <div className="flex h-full w-full max-w-xs flex-col justify-between rounded-xl border">
      <div className="flex-none rounded-t-xl bg-secondary px-8 py-12">
        <span className="text-3xl font-bold text-background">{type}</span>
      </div>
      <div className="flex grow flex-col gap-6 px-8 py-12">
        {features.map((data) => (
          <div key={data.point} className="flex items-center gap-2">
            <Image
              src={TickIcon}
              alt={"icon"}
              width={40}
              height={40}
              className="aspect-square object-cover"
            />
            <span className="text-base text-secondary">{data.point}</span>
          </div>
        ))}
      </div>
      <div className="flex h-fit flex-col items-center gap-4 px-8 py-12">
        <span className="text-2xl text-secondary">{price}</span>
        <Button variant={"outline"} asChild>
          <Link href={href}>{btnText}</Link>
        </Button>
      </div>
    </div>
  )
}