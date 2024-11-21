/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "A",
  description: "A",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}