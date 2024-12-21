import React from "react"
import Image from "next/image"
import FeatureImage from "@/../public/feature.png"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FEATURE_DATA = [
  {
    icon: "",
    question: "Smart Check-In/Check-Out",
    answer:
      "Allow guests to manage their stay effortlessly with mobile-enabled check-in and check-out processes.",
  },
  {
    icon: "",
    question: "Integrated Booking System",
    answer:
      "Streamline operations with a unified dashboard for direct bookings, OTA management, and analytics.",
  },
  {
    icon: "",
    question: "Personalized Guest Experience",
    answer:
      "Leverage AI-driven recommendations to offer tailored services that enhance guest satisfaction.",
  },
  {
    icon: "",
    question: "Sustainability-Focused Operations",
    answer:
      "Optimize energy use and reduce waste with smart room technologies.",
  },
  {
    icon: "",
    question: "Billing and Invoicing",
    answer:
      "Automate accurate billing with seamless integration for room charges, in-house services, and customized invoices.",
  },
  {
    icon: "",
    question: "Upselling Opportunities",
    answer:
      "Maximize revenue by suggesting room upgrades, special packages, and exclusive deals at the right moment through AI-driven insights.",
  },
  {
    icon: "",
    question: "Loyalty and Rewards Program",
    answer:
      "Drive repeat business with a flexible loyalty platform. Reward your guests with points, discounts, and personalized offers they’ll love.",
  },
  {
    icon: "",
    question: "Payments and Rewards Integration",
    answer:
      "Support multiple payment gateways, enabling secure transactions worldwide. Let guests redeem rewards seamlessly during booking or at checkout.",
  },
]

const Feature = () => {
  return (
    <div
      id="feature"
      className="flex w-full max-w-screen-xl flex-col gap-20 px-4 pb-32 xl:px-0"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-lg text-primary xl:text-2xl">Features</span>
        <h3 className="text-center text-2xl font-bold text-secondary xl:text-3xl">
          Why DigiStay is the Future of Hospitality
        </h3>
      </div>
      <div className="grid w-full grid-cols-1 items-center gap-10 xl:grid-cols-2 ">
        <Image
          src={FeatureImage}
          alt={"feature-image"}
          width={600}
          height={400}
          className="aspect-square rounded-xl object-cover"
        />
        <Accordion type="multiple" className="space-y-4">
          {FEATURE_DATA.map((data, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{data.question}</AccordionTrigger>
              <AccordionContent>{data.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default Feature
