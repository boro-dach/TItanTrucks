import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import "./globals.css";
import Navigation from "@/components/Navigation";
import { notFound } from "next/navigation";

// Define fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TitanTrucks - Надёжные грузовые машины",
  description: "Широкий выбор грузовой техники для любых задач",
};

// Update the type definition to match Next.js expectations
type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
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