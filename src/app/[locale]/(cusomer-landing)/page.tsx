import Benefits from "./_components/Benefits";
import Contact from "./_components/Contact";
import CustomerHero from "./_components/Hero";
import HowItWork from "./_components/HowItWork";
import Newslater from "./_components/Newslater";
import Stamp from "./_components/Stamp";

export default function HomePage() {
  return (
    <div className=" relative overflow-hidden">
      <div className="container relative">
        <div className="w-[338px] h-[338px] absolute top-[500px] lg:top-[300px] right-0 rounded-full bg-skin-peach-fuzz blur-[152px] -z-10"></div>
      </div>
      <CustomerHero />
      <Benefits />
      <Stamp />
      <HowItWork />
      <Newslater />
      <Contact />
    </div>
  );
}
