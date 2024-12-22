import React from "react"
import Image from "next/image"
import Link from "next/link"
import ContactImage from "@/../public/contact.png"
import EmailIcon from "@/../public/email.svg"
import LocationIcon from "@/../public/location.svg"
import PhoneIcon from "@/../public/phone.svg"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const CONTACT_US_DATA = [
  { icon: EmailIcon, label: "Email", info: "Digistay.inbox@gmail.com" },
  { icon: LocationIcon, label: "Phone", info: "74548-04801" },
  { icon: PhoneIcon, label: "Location", info: "Dehradun, Uttarakhand" },
]

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="flex w-full max-w-screen-xl flex-col gap-14 px-4 py-28 xl:px-0"
    >
      <div className="flex flex-col gap-4">
        <span className="text-lg text-primary xl:text-2xl">Contact Us</span>
        <h3 className="text-2xl font-bold xl:text-3xl">
          Let’s Build the Future Together
        </h3>
      </div>
      <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-2">
        <Image
          src={ContactImage}
          alt={"contact-us"}
          width={500}
          height={300}
          className="aspect-video rounded-xl object-cover"
        />
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col gap-6">
            {CONTACT_US_DATA.map((data) => (
              <div key={data.label} className="flex items-center gap-4">
                <Image
                  src={data.icon}
                  alt={"icon"}
                  width={40}
                  height={40}
                  className="aspect-square object-cover"
                />
                <span className="text-lg">
                  {data.label} {":"} {data.info}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Button asChild>
              <Link href={siteConfig.links.support}>Schedule a Demo</Link>
            </Button>
            <Button variant={"outline"} asChild>
              <Link href={siteConfig.links.support}>Speak with Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
