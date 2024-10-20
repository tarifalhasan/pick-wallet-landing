import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BusinessHero = () => {
  const content = useTranslations("BusinessLandingPage");
  return (
    <section className=" py-16 xl:py-20 container ">
      <div className="flex-col flex lg:flex-row lg:items-center gap-8">
        <div className="basis-full flex flex-col gap-y-12 lg:basis-[60%]">
          <div className="max-w-[635px]">
            <h1 className="text-[2.5rem] lg:text-[4.5rem] leading-[120%] lg:leading-[133%]">
              {content("Hero.title")}
            </h1>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:max-w-[304px]">
            <button className="w-full">
              <Image
                src={"/images/appstore.svg"}
                alt="appstore"
                width={400}
                className="h-[55px] w-full"
                height={65}
              />
            </button>
            <button className="w-full">
              <Image
                src={"/images/googleplay.svg"}
                alt="googleplay"
                width={400}
                className="h-[55px] w-full"
                height={65}
              />
            </button>
          </div>
        </div>
        <div className="basis-full lg:basis-[40%]">
          <Image
            src={"/images/business-hero-phone.webp"}
            alt="business-hero-phone"
            className=" object-contain block ml-auto"
            width={401}
            height={600}
          />
        </div>
      </div>
      <div className="flex pt-10 justify-center  items-center flex-col md:flex-row  gap-6 md:gap-14">
        <div className=" inline-flex items-center gap-5">
          <div className="inline-flex items-center -space-x-4">
            <Avatar className="w-14 h-14 border-2 border-white">
              <AvatarImage sizes="" src="/images/avatar1.png" />
            </Avatar>
            <Avatar className="w-14 h-14 border-2 border-white">
              <AvatarImage sizes="" src="/images/avatar2.png" />
            </Avatar>
            <Avatar className="w-14 h-14 border-2 border-white">
              <AvatarImage sizes="" src="/images/avatar3.png" />
            </Avatar>
          </div>
          <div className="">
            <h4 className="text-[1.5rem] lg:text-[2rem] text-black font-bold">
              100+
            </h4>
            <p className="text-sm font-normal">
              {content("Hero.client.title")}
            </p>
          </div>
        </div>
        <hr className="w-[2px] hidden md:block h-[39px] bg-[#9C969C]" />
        <div className="inline-flex gap-8">
          <div className="inline-flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
            >
              <path
                d="M31.9163 11.7131C31.7056 11.0581 31.1309 10.5944 30.4536 10.5324L21.2162 9.68465L17.5655 1.04448C17.2959 0.409697 16.6826 0 16 0C15.3174 0 14.7039 0.409697 14.436 1.04448L10.7853 9.68465L1.54643 10.5324C0.869173 10.5956 0.295678 11.0594 0.0837609 11.7131C-0.126936 12.3682 0.0676473 13.0866 0.579862 13.5407L7.56263 19.7304L5.50377 28.8972C5.35313 29.5712 5.61192 30.2682 6.16515 30.6725C6.46252 30.8909 6.81189 31 7.16248 31C7.46376 31 7.76527 30.919 8.03457 30.7562L16 25.9415L23.964 30.7562C24.5482 31.1091 25.2829 31.0768 25.8349 30.6725C26.3881 30.2682 26.6469 29.5712 26.4963 28.8972L24.4374 19.7304L31.4202 13.5407C31.9321 13.0866 32.127 12.3696 31.9163 11.7131Z"
                fill="#F15152"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
            >
              <path
                d="M31.9163 11.7131C31.7056 11.0581 31.1309 10.5944 30.4536 10.5324L21.2162 9.68465L17.5655 1.04448C17.2959 0.409697 16.6826 0 16 0C15.3174 0 14.7039 0.409697 14.436 1.04448L10.7853 9.68465L1.54643 10.5324C0.869173 10.5956 0.295678 11.0594 0.0837609 11.7131C-0.126936 12.3682 0.0676473 13.0866 0.579862 13.5407L7.56263 19.7304L5.50377 28.8972C5.35313 29.5712 5.61192 30.2682 6.16515 30.6725C6.46252 30.8909 6.81189 31 7.16248 31C7.46376 31 7.76527 30.919 8.03457 30.7562L16 25.9415L23.964 30.7562C24.5482 31.1091 25.2829 31.0768 25.8349 30.6725C26.3881 30.2682 26.6469 29.5712 26.4963 28.8972L24.4374 19.7304L31.4202 13.5407C31.9321 13.0866 32.127 12.3696 31.9163 11.7131Z"
                fill="#F15152"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
            >
              <path
                d="M31.9163 11.7131C31.7056 11.0581 31.1309 10.5944 30.4536 10.5324L21.2162 9.68465L17.5655 1.04448C17.2959 0.409697 16.6826 0 16 0C15.3174 0 14.7039 0.409697 14.436 1.04448L10.7853 9.68465L1.54643 10.5324C0.869173 10.5956 0.295678 11.0594 0.0837609 11.7131C-0.126936 12.3682 0.0676473 13.0866 0.579862 13.5407L7.56263 19.7304L5.50377 28.8972C5.35313 29.5712 5.61192 30.2682 6.16515 30.6725C6.46252 30.8909 6.81189 31 7.16248 31C7.46376 31 7.76527 30.919 8.03457 30.7562L16 25.9415L23.964 30.7562C24.5482 31.1091 25.2829 31.0768 25.8349 30.6725C26.3881 30.2682 26.6469 29.5712 26.4963 28.8972L24.4374 19.7304L31.4202 13.5407C31.9321 13.0866 32.127 12.3696 31.9163 11.7131Z"
                fill="#F15152"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
            >
              <path
                d="M31.9163 11.7131C31.7056 11.0581 31.1309 10.5944 30.4536 10.5324L21.2162 9.68465L17.5655 1.04448C17.2959 0.409697 16.6826 0 16 0C15.3174 0 14.7039 0.409697 14.436 1.04448L10.7853 9.68465L1.54643 10.5324C0.869173 10.5956 0.295678 11.0594 0.0837609 11.7131C-0.126936 12.3682 0.0676473 13.0866 0.579862 13.5407L7.56263 19.7304L5.50377 28.8972C5.35313 29.5712 5.61192 30.2682 6.16515 30.6725C6.46252 30.8909 6.81189 31 7.16248 31C7.46376 31 7.76527 30.919 8.03457 30.7562L16 25.9415L23.964 30.7562C24.5482 31.1091 25.2829 31.0768 25.8349 30.6725C26.3881 30.2682 26.6469 29.5712 26.4963 28.8972L24.4374 19.7304L31.4202 13.5407C31.9321 13.0866 32.127 12.3696 31.9163 11.7131Z"
                fill="#F15152"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
            >
              <path
                d="M31.9163 11.7131C31.7056 11.0581 31.1309 10.5944 30.4536 10.5324L21.2162 9.68465L17.5655 1.04448C17.2959 0.409697 16.6826 0 16 0C15.3174 0 14.7039 0.409697 14.436 1.04448L10.7853 9.68465L1.54643 10.5324C0.869173 10.5956 0.295678 11.0594 0.0837609 11.7131C-0.126936 12.3682 0.0676473 13.0866 0.579862 13.5407L7.56263 19.7304L5.50377 28.8972C5.35313 29.5712 5.61192 30.2682 6.16515 30.6725C6.46252 30.8909 6.81189 31 7.16248 31C7.46376 31 7.76527 30.919 8.03457 30.7562L16 25.9415L23.964 30.7562C24.5482 31.1091 25.2829 31.0768 25.8349 30.6725C26.3881 30.2682 26.6469 29.5712 26.4963 28.8972L24.4374 19.7304L31.4202 13.5407C31.9321 13.0866 32.127 12.3696 31.9163 11.7131Z"
                fill="#EBEAEB"
              />
            </svg>
          </div>
          <div className="1">
            <h4 className="text-[1.5rem] lg:text-[2rem] text-black font-bold">
              4.8/5
            </h4>
            <p className="text-sm font-normal">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHero;
