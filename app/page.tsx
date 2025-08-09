import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import FeaturedDestinations from "@/components/Camp";
import HowItWorks from "@/components/Guide";
import TourPackages from "@/components/Features";
import Testimonials from "@/components/GetApp";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <FeaturedDestinations />
      <HowItWorks />
      <TourPackages />
      <Testimonials />
      <Blog />
    </>
  )
}
