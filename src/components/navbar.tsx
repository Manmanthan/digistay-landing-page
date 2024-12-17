import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { LogoIconWithText } from "./logo"

const Navbar = () => {
  return (
    <section className="w-full bg-secondary py-4">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <LogoIconWithText />
            </div>
            <div className="flex items-center">
              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  })
                )}
                href="#feature"
              >
                Feature
              </a>

              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  })
                )}
                href="#investor"
              >
                Investor
              </a>
              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  })
                )}
                href="#contact"
              >
                Contact
              </a>
              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  })
                )}
                href="#pricing"
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant={"ghost"} className="text-background">
              Sign in
            </Button>
            <Button variant={"outline"}>Sign up</Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <LogoIconWithText />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <LogoIconWithText />
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-4">
                  <a href="#feature" className="font-semibold">
                    Feature
                  </a>
                  <a href="#investor" className="font-semibold">
                    Investor
                  </a>
                  <a href="#contact" className="font-semibold">
                    Contact
                  </a>
                  <a href="#pricing" className="font-semibold">
                    Pricing
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
