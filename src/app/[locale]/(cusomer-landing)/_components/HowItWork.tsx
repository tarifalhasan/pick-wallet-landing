import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

type ItemProps = {
  title: string;
  id: number;
  subTitle: string;
  icon: string;
};

const HowItWork = () => {
  const t = useTranslations("CustomerLandingpage.HowItWork");

  const message = useMessages() as any;

  const items = message.CustomerLandingpage.HowItWork.items as ItemProps[];

  return (
    <div id="how_it_work" className="container pb-16 xl:pb-20">
      <div className="py-12 px-4 bg-skin-black lg:rounded-[16px] sm:px-6 xl:px-12 space-y-12">
        <div className="space-y-5">
          <h2 className="text-2xl xl:text-3xl text-center font-bold text-white">
            {t("title")}
          </h2>
          <p className="text-base xl:text-xl text-center font-medium text-skin-gray">
            {t("subTitle")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-x-8">
          {items.map((item) => (
            <div key={item.id} className="space-y-6 lg:space-y-8">
              <div className="w-[72px] bg-skin-light-pink h-[72px] grid place-items-center rounded-[20px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium lg:font-bold text-white text-wrap lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg font-normal text-white">
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
