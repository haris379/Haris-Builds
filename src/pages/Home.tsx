import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import TechStack from "../components/sections/TechStack";
import Process from "../components/sections/Process";
import Projects from "../components/sections/Projects";
import Capabilities from "../components/sections/Capabilities";
import AiEra from "../components/sections/AiEra";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Process />
      <Capabilities />
      <AiEra />
      <Contact />
    </main>
  );
}
