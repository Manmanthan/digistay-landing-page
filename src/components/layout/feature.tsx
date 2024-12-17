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
  { icon: "", question: "", answer: "" },
  { icon: "", question: "", answer: "" },
  { icon: "", question: "", answer: "" },
  { icon: "", question: "", answer: "" },
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
      <div className="grid w-full grid-cols-1 gap-10 xl:grid-cols-2 ">
        <Image
          src={FeatureImage}
          alt={"feature-image"}
          width={600}
          height={400}
          className="aspect-video object-cover"
        />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Feature
