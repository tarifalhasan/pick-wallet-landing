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
import { MailIcon, PhoneIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userFormSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10),
});
const clientFormSchema = z.object({
  fullName: z.string().min(2).max(50),
  phone: z.string(),
  email: z.string().email(),
  message: z.string().min(10),
});
const Contact = () => {
  const t = useTranslations("CustomerLandingpage.Contact");
  const [selectForm, setSelectForm] = useState<"user" | "client">("user");
  const userForm = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  const clientForm = useForm<z.infer<typeof clientFormSchema>>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const userOnSubmit = (values: z.infer<typeof userFormSchema>) => {
    console.log(values);
  };
  const clientOnSubmit = (values: z.infer<typeof userFormSchema>) => {
    console.log(values);
  };
  return (
    <div className="lg:bg-skin-green  bg-transparent py-10 lg:py-20">
      <div className="md:container grid lg:grid-cols-2 lg:gap-x-14 xl:gap-x-20">
        <div className="bg-contact lg:min-h-[598px] md:rounded-2xl relative overflow-hidden after:absolute after:w-full after:h-full after:bg-black/60 after:z-10 after:inset-0 flex-col bg-cover bg-center px-4 py-8 flex justify-end lg:px-12 lg:py-12">
          <h2 className="text-[2rem] relative z-20 lg:text-[4.5rem] font-bold text-white">
            {t("title")}
          </h2>
          <p className="text-base xl:text-lg relative z-20 font-medium text-white">
            {t("subTitle")}
          </p>
        </div>
        <div className="bg-white  md:rounded-2xl lg:px-12 lg:py-12 px-4 py-8">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSelectForm("user")}
              className={cn(
                "inline-flex relative flex-1 items-center gap-2 sm:gap-4",

                selectForm === "user" &&
                  "after:absolute after:w-full after:left-0 after:right-0 after:h-[3px] after:bg-skin-red after:rounded-full after:-bottom-3 lg:after:-bottom-6"
              )}
            >
              <span
                className={cn(
                  "grid place-items-center  text-white md:w-14 w-10 h-10 md:h-14 rounded-md md:rounded-2xl ",
                  selectForm === "user" ? "bg-skin-red" : "bg-[#9C969C]"
                )}
              >
                <PhoneIcon className=" w-5 md:w-7" />
              </span>
              <p className="text-sm sm:text-lg font-medium text-skin-black">
                {t("Tab.User")}
              </p>
            </button>
            <button
              onClick={() => setSelectForm("client")}
              className={cn(
                "inline-flex relative flex-1 items-center gap-4",

                selectForm === "client" &&
                  "after:absolute after:w-full after:left-0 after:right-0 after:h-[3px] after:bg-skin-red after:rounded-full after:-bottom-3 lg:after:-bottom-6"
              )}
            >
              <span
                className={cn(
                  "grid place-items-center  text-white md:w-14 w-10 h-10 md:h-14 rounded-md md:rounded-2xl ",
                  selectForm === "client" ? "bg-skin-red" : "bg-[#9C969C]"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="w-4 md:w-8"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.5 9.90909V19M17.5 9L17.5 15C17.5 16.8856 17.5 17.8284 16.9142 18.4142C16.3284 19 15.3856 19 13.5 19H11C9.11438 19 8.17157 19 7.58579 18.4142C7 17.8284 7 16.8856 7 15L7 9H17.5Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.3839 1H5.61606C4.34674 1 3.71208 1 3.21333 1.32619C2.71458 1.65238 2.4602 2.23383 1.95143 3.39672L1.23773 5.02804C1.168 5.18742 1.13314 5.26711 1.10551 5.34876C1.05414 5.50058 1.0212 5.65803 1.00742 5.81772C1 5.90359 1 5.99058 1 6.16455C1 6.94222 1 7.33106 1.10668 7.64446C1.30665 8.23196 1.76804 8.69335 2.35554 8.89332C2.66894 9 3.05778 9 3.83546 9H16.1645C16.9422 9 17.3311 9 17.6445 8.89332C18.232 8.69335 18.6933 8.23196 18.8933 7.64446C19 7.33106 19 6.94222 19 6.16455C19 5.99058 19 5.90359 18.9926 5.81772C18.9788 5.65803 18.9459 5.50058 18.8945 5.34876C18.8669 5.26711 18.832 5.18742 18.7623 5.02804L18.0486 3.39673C17.5398 2.23383 17.2854 1.65238 16.7867 1.32619C16.2879 1 15.6533 1 14.3839 1Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9V6M5 9V6M15 9V6"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-sm sm:text-lg font-medium text-skin-black">
                {t("Tab.Client")}
              </p>
            </button>
          </div>
          <div className=" pt-16">
            {selectForm === "user" ? (
              <Form {...userForm}>
                <form
                  onSubmit={userForm.handleSubmit(userOnSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={userForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("UserForm.FullName")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={userForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder={t("UserForm.Email")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={userForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder={t("UserForm.Message")}
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
              <Form {...clientForm}>
                <form
                  onSubmit={clientForm.handleSubmit(clientOnSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={clientForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={t("CleintForm.FullName")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={clientForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={t("CleintForm.Phone")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={clientForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("CleintForm.Email")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={clientForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder={t("CleintForm.Message")}
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
