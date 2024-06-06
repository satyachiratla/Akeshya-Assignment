import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="mt-20">
      <Hero />
      <Clients />
      <About />
      <Services />
      <Process />
      <Features />
      <Contact />
    </main>
  );
}
