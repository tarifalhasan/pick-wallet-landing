import ApplyForAFreeSubscription from "./_components/ApplyForAFreeSubscription";
import Benifit from "./_components/Benifit";
import Contact from "./_components/Contact";
import CustomerTestimonial from "./_components/CustomerTestimonial";
import BusinessHero from "./_components/Hero";
import PopularLocations from "./_components/PopularLocations";
import Pricing from "./_components/Pricing";

const Business = () => {
  return (
    <div>
      <BusinessHero />
      <PopularLocations />
      <Benifit />
      <CustomerTestimonial />
      <Pricing />
      <ApplyForAFreeSubscription />
      <Contact />
    </div>
  );
};

export default Business;
