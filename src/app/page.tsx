import ContactUs from "@/components/layout/contact-us"
import Feature from "@/components/layout/feature"
import Founder from "@/components/layout/founder"
import Hero from "@/components/layout/hero"
import Offer from "@/components/layout/offer"
import Pricing from "@/components/layout/pricing"
import Statistics from "@/components/layout/statistics"

export default function Home() {
  return (
    <main className="flex size-full flex-col items-center justify-center">
      <Hero />
      <Feature />
      <Statistics />
      <Pricing />
      <Offer />
      <Founder />
      <ContactUs />
    </main>
  )
}
