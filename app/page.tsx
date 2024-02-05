import Image from "next/image";
import Intro from "./_components/Intro";
import Social from "./_components/Social";

export default function Home() {
  return (
    <section className="lg:ml-32 2xl:ml-52 2xl:mt-10">
      <Intro />
      <Social />
    </section>
  );
}
