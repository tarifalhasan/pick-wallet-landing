import Header from "@/components/Header";
import { Space_Grotesk as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Pick wallet",
    template: `%s | Pick wallet`,
  },
  description: "PICK Your Rewards: Loyalty Made Simple",
  verification: {
    google:
      "google-site-verification=gfhLH8SIZqE4f0eVC8AX_IrSG2uL4UNK6YroEVIQ5rk",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      className="scroll-smooth focus:scroll-auto"
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen  bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <NextTopLoader
            initialPosition={0.08}
            crawlSpeed={200}
            height={4}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={50}
            zIndex={1600}
            showAtBottom={false}
            color="hsl(25, 100%, 50%)"
          />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
