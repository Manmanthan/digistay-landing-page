import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Digistay",
  author: "digistay",
  description:
    "Seamless guest experiences, enhanced operational efficiency, and scalable solutions for the modern hospitality industry",
  keywords: ["Digistay"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    github: "https://github.com",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
