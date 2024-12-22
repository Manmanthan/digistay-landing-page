export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  links: {
    support: string
  }
  ogImage: string
}
