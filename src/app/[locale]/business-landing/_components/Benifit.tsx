import Image from "next/image";
import { ReactNode } from "react";

interface FeatureType {
  icon: string | ReactNode;
  title: string;
  des: string;
  id: number;
}

const FeaturesData: FeatureType[] = [
  {
    icon: "/images/Secure.svg",
    title: "Feature 1",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt dolore magna aliqua.",
    id: 20,
  },
  {
    icon: "/images/Secure.svg",
    title: "Feature 1",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt dolore magna aliqua.",
    id: 21,
  },
  {
    icon: "/images/Secure.svg",
    title: "Feature 1",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt dolore magna aliqua.",
    id: 22,
  },
];

const Benifit = () => {
  return (
    <section className="sm:container py-10 lg:py-16">
      <div className="bg-skin-black   sm:rounded-2xl py-12 lg:py-20">
        <div className="space-y-4 px-4">
          <h2 className="text-2xl text-white relative text-left lg:text-center font-bold ">
            Beneficii
          </h2>
          <p className="text-xl xl:text-2xl text-center text-skin-gray font-medium">
            Descrierea beneficiilor care ne scot in fata
          </p>
        </div>
        <div className="pt-10 px-4 sm:px-14 lg:pt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FeaturesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl px-4 sm:px-7 py-10 flex flex-col items-center gap-8"
            >
              <div className="w-[83px] h-[82px] rounded-[20px] grid place-items-center bg-skin-light-pink">
                {typeof item.icon === "string" ? (
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    className="w-[45px] h-[45px]"
                    alt={item.title}
                  />
                ) : (
                  item.icon
                )}
              </div>
              <div className="space-y-6">
                <h2 className="text-center  text-[#2D2D2D] font-bold text-base sm:text-2xl">
                  {item.title}
                </h2>
                <p className="text-center text-[#2D2D2D] font-normal text-sm sm:text-base">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifit;
