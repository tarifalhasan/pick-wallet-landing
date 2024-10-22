import Header from "@/components/Header";
import { Space_Grotesk as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";
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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="android-chrome"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="android-chrome"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="android-chrome"
          sizes="180x180"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
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
          <MobileHeader />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
