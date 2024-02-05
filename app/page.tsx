import Image from "next/image";
import Intro from "@/app/_components/Intro";
import About from "@/app/_components/About";
import Projects from "@/app/_components/Projects";
import Contact from "@/app/_components/Contact";
import OtherProjects from "@/app/_components/OtherProjects";

export default function Home() {
  return (
    <section className="lg:ml-28 2xl:ml-52 2xl:mt-10">
      <Intro />
      <About />
      <Projects />
      <OtherProjects />
      <Contact />
    </section>
  );
}
