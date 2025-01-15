import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import "./globals.css";
import Navigation from "@/components/Navigation";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "TitanTrucks - Etibarlı yük maşınları",
description: "Hər cür tapşırıq üçün geniş yük texnikası seçimi"
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // Wait for the locale parameter
  const { locale } = await params;

  // Проверка на допустимость локали
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Загрузка сообщений для выбранной локали
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}