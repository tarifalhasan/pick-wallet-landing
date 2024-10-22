"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { useLocale, useMessages } from "next-intl";

// import { usePathname } from "next/navigation";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const MobileHeader = ({ className }: { className?: string }) => {
  const [openSheet, setOpenSheet] = useState(false);
  const messages = useMessages();
  const headerData = messages.header as unknown as any[];
  const [header, setHeader] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState("en");
  const pathName = usePathname();
  const local = useLocale();
  const [currentHash, setCurrentHash] = useState("#home");
  const router = useRouter();

  const handhleLanguageSwitch = (lan: string) => {
    setSelectLanguage(lan);

    router.replace(pathName, { locale: lan as any });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        " lg:hidden flex py-5 z-50 h-[88px] items-center    sticky left-0 right-0 top-0",
        header ? "backdrop-blur-sm bg-white/[0.8] " : ""
      )}
    >
      <div
        className={cn(
          "flex py-5 h-[88px] items-center container justify-between"
        )}
      >
        <div className="flex items-center lg:gap-x-20">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={140}
              height={42}
              viewBox="0 0 140 42"
              fill="none"
            >
              <path
                d="M55.3086 42V10.0175H60.9875V12.7746H61.8118C62.3309 11.8862 63.14 11.105 64.2391 10.4311C65.3382 9.72648 66.9106 9.37418 68.9562 9.37418C70.7881 9.37418 72.4827 9.8337 74.0398 10.7527C75.5969 11.6411 76.8487 12.9584 77.7952 14.7046C78.7416 16.4508 79.2149 18.5645 79.2149 21.0459V21.7812C79.2149 24.2626 78.7416 26.3764 77.7952 28.1225C76.8487 29.8687 75.5969 31.2013 74.0398 32.1203C72.4827 33.0088 70.7881 33.453 68.9562 33.453C67.5823 33.453 66.4221 33.2845 65.4756 32.9475C64.5597 32.6411 63.8117 32.2429 63.2316 31.7527C62.682 31.2319 62.2393 30.7112 61.9034 30.1904H61.0791V42H55.3086ZM67.2159 28.3982C69.0173 28.3982 70.4981 27.8315 71.6583 26.698C72.849 25.5339 73.4444 23.849 73.4444 21.6433V21.1838C73.4444 18.9781 72.849 17.3085 71.6583 16.1751C70.4676 15.0109 68.9868 14.4289 67.2159 14.4289C65.4451 14.4289 63.9643 15.0109 62.7736 16.1751C61.5829 17.3085 60.9875 18.9781 60.9875 21.1838V21.6433C60.9875 23.849 61.5829 25.5339 62.7736 26.698C63.9643 27.8315 65.4451 28.3982 67.2159 28.3982Z"
                fill="black"
              />
              <path
                d="M118.017 32.8096V0.643323H123.788V18.4267H124.612L132.123 10.0175H139.634L129.146 21.0459L140 32.8096H132.581L124.612 23.7571H123.788V32.8096H118.017Z"
                fill="black"
              />
              <path
                d="M103.685 33.453C101.487 33.453 99.4873 32.9934 97.6859 32.0744C95.9151 31.1554 94.5107 29.8228 93.4726 28.0766C92.4345 26.3304 91.9155 24.2166 91.9155 21.7352V21.0919C91.9155 18.6105 92.4345 16.4967 93.4726 14.7505C94.5107 13.0044 95.9151 11.6718 97.6859 10.7527C99.4873 9.8337 101.487 9.37418 103.685 9.37418C105.853 9.37418 107.716 9.75711 109.273 10.523C110.83 11.2888 112.082 12.3457 113.028 13.6937C114.005 15.0109 114.646 16.512 114.952 18.1969L109.364 19.3917C109.242 18.4726 108.967 17.6455 108.54 16.9103C108.113 16.1751 107.502 15.593 106.708 15.1641C105.945 14.7352 104.983 14.5208 103.823 14.5208C102.663 14.5208 101.609 14.7812 100.663 15.302C99.7468 15.7921 99.0141 16.5427 98.4645 17.5536C97.9455 18.5339 97.6859 19.744 97.6859 21.1838V21.6433C97.6859 23.0831 97.9455 24.3085 98.4645 25.3195C99.0141 26.2998 99.7468 27.0503 100.663 27.5711C101.609 28.0613 102.663 28.3063 103.823 28.3063C105.563 28.3063 106.876 27.8621 107.761 26.9737C108.677 26.0547 109.257 24.86 109.502 23.3895L115.089 24.7221C114.692 26.3457 114.005 27.8315 113.028 29.1794C112.082 30.4967 110.83 31.5383 109.273 32.3042C107.716 33.07 105.853 33.453 103.685 33.453Z"
                fill="black"
              />
              <path
                d="M82.6815 32.8096V10.0175H88.452V32.8096H82.6815ZM85.5668 7.3523C84.5287 7.3523 83.6433 7.01532 82.9105 6.34136C82.2083 5.6674 81.8572 4.77899 81.8572 3.67615C81.8572 2.57331 82.2083 1.6849 82.9105 1.01094C83.6433 0.33698 84.5287 0 85.5668 0C86.6354 0 87.5208 0.33698 88.223 1.01094C88.9253 1.6849 89.2764 2.57331 89.2764 3.67615C89.2764 4.77899 88.9253 5.6674 88.223 6.34136C87.5208 7.01532 86.6354 7.3523 85.5668 7.3523Z"
                fill="black"
              />
              <path
                d="M24.1975 21C24.1975 22.933 22.6499 24.5 20.7407 24.5C18.8316 24.5 17.284 22.933 17.284 21C17.284 19.067 18.8316 17.5 20.7407 17.5C22.6499 17.5 24.1975 19.067 24.1975 21Z"
                fill="#F15152"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.1975 21C24.1975 22.933 22.6499 24.5 20.7407 24.5C18.8316 24.5 17.284 22.933 17.284 21C17.284 19.067 18.8316 17.5 20.7407 17.5C22.6499 17.5 24.1975 19.067 24.1975 21Z"
                fill="#F15152"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3704 14V42H6.91358C3.09532 42 0 38.866 0 35V25.375C2.38642 25.375 4.32099 23.4162 4.32099 21C4.32099 18.5838 2.38642 16.625 0 16.625V7C0 3.13401 3.09532 0 6.91358 0H34.5679C38.3862 0 41.4815 3.13401 41.4815 7V16.625C39.0951 16.625 37.1605 18.5838 37.1605 21C37.1605 23.4162 39.0951 25.375 41.4815 25.375V35C41.4815 38.866 38.3862 42 34.5679 42H17.284V31.5H27.6543C29.5635 31.5 31.1111 29.933 31.1111 28V14C31.1111 12.067 29.5635 10.5 27.6543 10.5H13.8272C11.918 10.5 10.3704 12.067 10.3704 14Z"
                fill="#F15152"
              />
            </svg>
          </Link>
        </div>
        <Sheet onOpenChange={setOpenSheet} open={openSheet}>
          <SheetTrigger asChild>
            <button>
              <MenuIcon size={24} />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-y-6 items-center">
              <ul className="flex flex-col  items-center gap-8">
                {headerData?.map((data, index) => (
                  <li onClick={() => setOpenSheet(false)} key={index}>
                    <Link
                      href={data.href as string}
                      onClick={() => setCurrentHash(data.href)}
                      className={cn(
                        "text-skin-light-black transition-all duration-500 text-sm lg:text-lg font-normal relative",
                        pathName === data.href || currentHash === data.href
                          ? "after:absolute after:w-full after:h-[2px] af after:bg-skin-red after:-bottom-2 after:left-0 after:right-0"
                          : "border-none"
                      )}
                    >
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-6">
                <Select
                  onValueChange={handhleLanguageSwitch}
                  defaultValue={selectLanguage}
                >
                  <SelectTrigger className="w-[65px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="ro">RO</SelectItem>
                  </SelectContent>
                </Select>

                <Link
                  onClick={() => setOpenSheet(false)}
                  passHref
                  legacyBehavior
                  href={"/en/order"}
                >
                  <Button
                    variant={"destructive"}
                    size={"lg"}
                    className="px-6 rounded-full"
                  >
                    {local === "en"
                      ? "Install the application"
                      : "Instaleaza aplicatia"}
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_410_8711)">
                        <path
                          d="M18 17V7C18 5.11438 18 4.17157 17.4142 3.58579C16.8284 3 15.8856 3 14 3H10C8.11438 3 7.17157 3 6.58579 3.58579C6 4.17157 6 5.11438 6 7V17C6 18.8856 6 19.8284 6.58579 20.4142C7.17157 21 8.11438 21 10 21H14C15.8856 21 16.8284 21 17.4142 20.4142C18 19.8284 18 18.8856 18 17Z"
                          stroke="white"
                          strokeWidth={2}
                        />
                        <path
                          d="M10 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3L10 3C9.44771 3 9 3.44772 9 4C9 4.55228 9.44772 5 10 5Z"
                          fill="white"
                        />
                        <path
                          d="M9 18L15 18"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_410_8711">
                          <rect width={24} height={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileHeader;
