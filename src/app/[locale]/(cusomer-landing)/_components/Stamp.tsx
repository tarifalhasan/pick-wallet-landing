import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Stamp = () => {
  const t = useTranslations("CustomerLandingpage.Stamp");
  return (
    <div className="container pb-16 xl:pb-20 flex flex-col lg:flex-row items-center gap-8">
      <div className="">
        <Image
          src={"/images/stamp.webp"}
          alt="stamp"
          width={406}
          className="max-w-[406px]"
          height={336}
        />
      </div>
      <div className="flex-1 flex flex-col gap-y-10 lg:gap-y-12">
        <div className="space-y-4">
          <h2 className="text-[2rem] lg:text-[4.5rem] text-skin-black font-bold lg:font-medium">
            {t("title")}
          </h2>
          <p className="text-base lg:text-xl font-normal lg:font-medium text-skin-light-black">
            {t("subTitle")}
          </p>
        </div>
        <div>
          <Button className="rounded-full" variant={"destructive"}>
            {t("btnText")} <MailIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stamp;
