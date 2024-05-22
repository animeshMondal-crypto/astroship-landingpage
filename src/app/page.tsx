import Cta from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="md:px-10 px-5">
      <Hero />
      <Features />
      <Cta />
    </div>
  );
}
