import { useMessages } from "next-intl";
import Benefits from "./_components/Benefits";
import CustomerHero from "./_components/Hero";
import HowItWork from "./_components/HowItWork";
import Stamp from "./_components/Stamp";

export default function HomePage() {
  const content = useMessages();
  return (
    <div>
      <CustomerHero />
      <Benefits />
      <Stamp />
      <HowItWork />
    </div>
  );
}
