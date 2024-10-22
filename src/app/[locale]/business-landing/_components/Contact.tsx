"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const BusinessSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10),
});
const ConsumerSchema = z.object({
  fullName: z.string().min(2).max(50),
  phone: z.string(),
  email: z.string().email(),
  message: z.string().min(10),
});
const Contact = () => {
  const t = useTranslations("BusinessLandingPage");
  const [selectForm, setSelectForm] = useState<"business" | "consumer">(
    "business"
  );
  const Business = useForm<z.infer<typeof BusinessSchema>>({
    resolver: zodResolver(BusinessSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  const Consumer = useForm<z.infer<typeof ConsumerSchema>>({
    resolver: zodResolver(ConsumerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const userOnSubmit = (values: z.infer<typeof BusinessSchema>) => {
    console.log(values);
  };
  const clientOnSubmit = (values: z.infer<typeof BusinessSchema>) => {
    console.log(values);
  };
  return (
    <div className="lg:bg-skin-green  bg-transparent py-10 lg:py-20">
      <div className="md:container grid lg:grid-cols-2 lg:gap-x-14 xl:gap-x-20">
        <div className=" lg:min-h-[598px] md:rounded-2xl relative  flex-col bg-cover bg-center px-4 py-8 flex justify-between lg:px-12 lg:py-12">
          <div className="space-y-2">
            <h3 className="text-[1.5rem] lg:text-[2rem] font-bold text-white">
              {t("ContactFormTitle")}
            </h3>
            <p className="text-sm lg:text-lg text-skin-gray">
              {t("ContactFormDescription")}
            </p>
          </div>
          <div className="space-y-5">
            <div className="inline-flex items-start gap-2">
              <div className="w-14 h-14 bg-skin-red rounded-full grid place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={22}
                  viewBox="0 0 14 22"
                  fill="none"
                >
                  <path
                    d="M13 6.95304C13 8.30015 12.6952 9.62979 12.1085 10.8424L10.0027 15.1944C8.97314 17.3221 8.45839 18.3859 7.72706 18.6713C7.25952 18.8537 6.74048 18.8537 6.27294 18.6713C5.54161 18.3859 5.02686 17.3221 3.99734 15.1944L1.89153 10.8424C1.30479 9.6298 1 8.30015 1 6.95304V6.95304C1 3.66527 3.71223 1 7 1V1C10.2878 1 13 3.66527 13 6.95304V6.95304Z"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <path
                    d="M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-base flex-1 sm:text-xl text-white">
                {t("ContactFormLocation")}
              </p>
            </div>
            <Button
              variant={"outline"}
              size={"lg"}
              className="border-white rounded-full text-white bg-transparent"
            >
              {t("ContactFormBtnText")}
            </Button>
          </div>
        </div>
        <div className="bg-white  md:rounded-2xl lg:px-12 lg:py-12 px-4 py-8">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSelectForm("business")}
              className={cn(
                "inline-flex relative flex-1 items-center gap-2 sm:gap-4",

                selectForm === "business" &&
                  "after:absolute after:w-full after:left-0 after:right-0 after:h-[3px] after:bg-skin-red after:rounded-full after:-bottom-3 lg:after:-bottom-6"
              )}
            >
              <p className="text-sm sm:text-lg font-medium text-skin-black">
                {t("Tab.Business")}
              </p>
            </button>
            <button
              onClick={() => setSelectForm("consumer")}
              className={cn(
                "inline-flex relative flex-1 items-center gap-4",

                selectForm === "consumer" &&
                  "after:absolute after:w-full after:left-0 after:right-0 after:h-[3px] after:bg-skin-red after:rounded-full after:-bottom-3 lg:after:-bottom-6"
              )}
            >
              <p className="text-sm sm:text-lg font-medium text-skin-black">
                {t("Tab.Consumer")}
              </p>
            </button>
          </div>
          <div className=" pt-16">
            {selectForm === "business" ? (
              <Form {...Business}>
                <form
                  onSubmit={Business.handleSubmit(userOnSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={Business.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("BusinessForm.FullName")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={Business.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("BusinessForm.Email")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={Business.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder={t("BusinessForm.Message")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size={"lg"}
                    variant={"destructive"}
                    className="rounded-full font-bold gap-2"
                  >
                    {t("form_btn")} <MailIcon size={20} />
                  </Button>
                </form>
              </Form>
            ) : (
              <Form {...Consumer}>
                <form
                  onSubmit={Consumer.handleSubmit(clientOnSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={Consumer.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={t("ConsumerForm.FullName")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={Consumer.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={t("ConsumerForm.Phone")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={Consumer.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("ConsumerForm.Email")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={Consumer.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder={t("ConsumerForm.Message")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size={"lg"}
                    variant={"destructive"}
                    className="rounded-full font-bold gap-2"
                  >
                    {t("form_btn")} <MailIcon size={20} />
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
