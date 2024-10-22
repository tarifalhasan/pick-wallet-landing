"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMessages, useTranslations } from "next-intl";
import { useState } from "react";
interface PricingPlanType {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
}

const Pricing = () => {
  const message = useMessages() as any;
  const plans = message.BusinessLandingPage.Plans as PricingPlanType[];
  const t = useTranslations("BusinessLandingPage");
  const [planType, setPlanType] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="container pb-12 lg:pb-16 flex flex-col gap-y-12 xl:gap-y-16 xl:pb-20">
      <div>
        <h2 className="text-2xl after:left-1/2 after:-translate-x-1/2 relative after:absolute after:-bottom-4 after:h-[3px] after:bg-skin-red after:w-[140px] text-center font-bold text-skin-black">
          {t("PlanSectionTitle")}
        </h2>
      </div>
      <div className="flex lg:pt-6 flex-col gap-y-10">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-8 bg-skin-light-pink rounded-full">
            <button
              onClick={() => setPlanType("monthly")}
              className={cn(
                "px-6 py-3 text-base text-skin-red sm:w-[207px] font-bold lg:text-lg rounded-full bg-transparent inline-flex justify-center items-center gap-2",
                planType === "monthly" && "bg-skin-red text-white"
              )}
            >
              <span>{t("monthlyTab")}</span>
            </button>
            <button
              onClick={() => setPlanType("yearly")}
              className={cn(
                "px-6 py-3 text-base font-bold text-skin-red lg:text-lg rounded-full bg-transparent inline-flex justify-center items-center gap-2",
                planType === "yearly" && "bg-skin-red text-white"
              )}
            >
              <span>{t("yearlyTab")}</span>
              <span className="rounded-full px-2 py-1 bg-white text-sm font-normal text-skin-red">
                20% Reducere
              </span>
            </button>
          </div>
        </div>
        <div className="grid pt-4 lg:pt-20 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans?.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "px-4 flex-1 flex scale-100 flex-col gap-y-6 py-10 sm:px-10 border-[2.72px] border-skin-red rounded-xl",
                plan.name === "STANDARD" &&
                  "bg-skin-black lg:scale-110 border-skin-black"
              )}
            >
              <div className="inline-flex flex-col gap-y-4">
                <div>
                  <span
                    className={cn(
                      "text-sm font-normal inline-flex w-auto border rounded-[5px] border-skin-red text-skin-red px-4 py-[6px]",
                      plan.name === "STANDARD" &&
                        "bg-skin-light-pink  border-skin-light-pink"
                    )}
                  >
                    {plan.name}
                  </span>
                </div>
                <div>
                  {plan.name === "STANDARD" && (
                    <span className="text-skin-light-pink text-sm border border-skin-light-pink rounded-lg px-4 py-2">
                      ENTERPRISE
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p
                  className={cn(
                    "text-base sm:text-lg font-normal text-skin-black",
                    plan.name === "STANDARD" && "text-white"
                  )}
                >
                  {plan.description}
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#9C969C]/40"></div>
              <div>
                <h2
                  className={cn(
                    "text-4xl lg:text-5xl font-normal text-skin-black",
                    plan.name === "STANDARD" && "text-white"
                  )}
                >
                  {planType === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                </h2>
                <p
                  className={cn(
                    "text-base lg:text-lg text-skin-light-black/80",
                    plan.name === "STANDARD" && "text-white"
                  )}
                >
                  {planType === "monthly" ? "Pe luna" : "Pe an"}
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#9C969C]/40"></div>
              <ul className="flex flex-col gap-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="inline-flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <circle
                        cx={10}
                        cy="10.0781"
                        r={9}
                        className={cn(
                          "stroke-[#3A2E39]",
                          plan.name === "STANDARD" && "stroke-white"
                        )}
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.5 12.0781L7.61877 13.4766C8.02015 13.9783 8.22083 14.2292 8.47884 14.2142C8.73685 14.1992 8.90711 13.9267 9.24764 13.3819L13.5 6.57812"
                        className={cn(
                          "stroke-[#3A2E39]",
                          plan.name === "STANDARD" && "stroke-white"
                        )}
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      className={cn(
                        "text-base lg:text-lg text-skin-black",
                        plan.name === "STANDARD" && "text-white"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-y-4 items-center">
                <Button
                  size={"lg"}
                  variant={"destructive"}
                  className="rounded-full w-full"
                >
                  Start free 14-day Trial
                </Button>
                <p
                  className={cn(
                    "text-skin-light-black font-normal text-sm text-center",
                    plan.name === "STANDARD" && "text-white"
                  )}
                >
                  No credit card required
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
