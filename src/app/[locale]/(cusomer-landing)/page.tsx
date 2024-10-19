import { useMessages } from "next-intl";
import Benefits from "./_components/Benefits";
import CustomerHero from "./_components/Hero";

export default function HomePage() {
  const content = useMessages();
  return (
    <div>
      <CustomerHero />
      <Benefits />
    </div>
  );
}
