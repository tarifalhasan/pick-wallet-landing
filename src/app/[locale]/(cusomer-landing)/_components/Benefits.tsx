import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
type BenefitsMessages = {
  icon: string;
  title: string;
  subTitle: string;
};
const Benefits = () => {
  const t = useTranslations("CustomerLandingpage.Benefits");

  const message = useMessages() as any;

  const items = message.CustomerLandingpage.Benefits
    .items as BenefitsMessages[];

  return (
    <div className="container py-16 xl:py-20 flex flex-col gap-y-12">
      <div className="flex flex-col gap-y-5 max-w-[655px] mx-auto">
        <h2 className="text-2xl text-left lg:text-center font-bold text-skin-black">
          {t("title")}
        </h2>
        <p className="text-lg text-left lg:text-center lg:text-2xl text-skin-light-black">
          {t("subTitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            className="px-4 bg-skin-light-pink py-8 sm:px-12 sm:py-12 rounded-[16px] flex flex-col items-center gap-y-6"
            key={item.title}
            style={{
              boxShadow:
                "34.854px 29.626px 48.34px 0px rgba(51, 102, 255, 0.05)",
            }}
          >
            <div className=" w-[72px] h-[72px] rounded-[20px] bg-skin-green grid place-items-center">
              <Image src={item.icon} alt={item.title} width={35} height={35} />
            </div>
            <h3 className="text-xl font-medium text-skin-black lg:text-2xl lg:font-bold">
              {item.title}
            </h3>
            <p className="text-center text-lg font-normal text-skin-black">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
