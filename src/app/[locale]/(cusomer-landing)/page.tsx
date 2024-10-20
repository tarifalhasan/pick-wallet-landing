import { useMessages } from "next-intl";
import Benefits from "./_components/Benefits";
import Contact from "./_components/Contact";
import CustomerHero from "./_components/Hero";
import HowItWork from "./_components/HowItWork";
import Newslater from "./_components/Newslater";
import Stamp from "./_components/Stamp";

export default function HomePage() {
  const content = useMessages();
  return (
    <div>
      <CustomerHero />
      <Benefits />
      <Stamp />
      <HowItWork />
      <Newslater />
      <Contact />
    </div>
  );
}
