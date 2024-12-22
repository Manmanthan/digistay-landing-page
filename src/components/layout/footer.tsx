import React from "react"
import Link from "next/link"

import { LogoIcon, LogoIconWithText } from "../logo"

const Footer = () => {
  const navigationItems = [
    {
      title: "Company",
      description: "Revolutionizing Hospitality with DigiStay",
      items: [
        {
          title: "Feature",
          href: "#feature",
        },
        {
          title: "Team",
          href: "#team",
        },
        {
          title: "Contact",
          href: "#contact",
        },
        {
          title: "Pricing",
          href: "#pricing",
        },
      ],
    },
  ]
  return (
    <div className="w-full bg-secondary py-20 text-background lg:py-40">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 xl:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <LogoIconWithText />
              <p className="max-w-lg text-left text-base leading-relaxed text-background/75">
                Openquest tech pvt ltd
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <div className="flex max-w-lg flex-col text-left text-sm text-background/75">
                <p>Dehradun,</p>
                <p>Uttarakhand</p>
              </div>
              <div className="flex max-w-lg flex-col text-left text-sm text-background/75">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid items-start gap-10 xl:justify-end xl:px-10">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-4 text-base"
              >
                <span>Company</span>
                <div className="flex flex-col gap-2">
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex items-center justify-between"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
