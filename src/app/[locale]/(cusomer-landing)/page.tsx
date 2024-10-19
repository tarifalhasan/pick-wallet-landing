import { useMessages } from "next-intl";
import CustomerHero from "./_components/Hero";

export default function HomePage() {
  const content = useMessages();
  return (
    <div>
      <CustomerHero />
    </div>
  );
}
