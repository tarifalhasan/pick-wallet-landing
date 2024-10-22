import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const ApplyForAFreeSubscription = () => {
  const t = useTranslations("BusinessLandingPage");
  return (
    <div className="container  pb-12 lg:pb-16  xl:gap-y-16 xl:pb-20 max-w-[860px] flex flex-col gap-y-5">
      <div>
        <h2 className="text-2xl  text-center font-bold text-skin-black">
          {t("ApplyForAFreeSubscriptionSubscribeHeading")}
        </h2>
      </div>
      <div className="px-4 border rounded-2xl border-skin-red sm:px-8 py-8 flex items-center justify-between gap-4">
        <p className="text-sm flex-1 lg:text-xl font-medium text-skin-black">
          {t("ApplyForAFreeSubscriptionSubscribeSlogan")}
        </p>
        <Button variant={"outline"} className="">
          {t("ApplyForAFreeSubscriptionSubscribeBtnText")}
        </Button>
      </div>
    </div>
  );
};

export default ApplyForAFreeSubscription;
