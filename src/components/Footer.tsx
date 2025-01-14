'use client'
import { Unbounded } from 'next/font/google'
import {useTranslations} from "next-intl";

const unbounded = Unbounded({
  weight: '400',
  subsets: [ 'latin' ],
  variable: '--font-unbounded',
})

export default function Footer() {
  const t = useTranslations("MainPage");
  const phoneNumber = "+9940518999521"; // Replace with your actual WhatsApp number

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
      <footer
          className={`bg-[#2A2C2B] text-white py-8 sm:py-10 lg:py-12 ${unbounded.variable} font-sans`}
          style={unbounded.style}
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-start pb-6 sm:pb-8 border-b border-gray-700">
            <div className="mb-4 sm:mb-0">
              <div className="text-xl sm:text-2xl font-bold text-orange-400">
                TitanTrucks
              </div>
            </div>

            <a
                href={`https://wa.me/${phoneNumber}`}
                onClick={handleClick}
                className="bg-white/10 hover:bg-[#FCA311] transition-colors rounded-full py-2 px-4 flex items-center gap-2 text-white self-end sm:self-auto"
            >
              <span className="text-sm sm:text-base">{t("add")}</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className="text-center sm:text-left text-sm text-gray-400 mb-2 sm:mb-0">
              &copy; {new Date().getFullYear()} TitanTrucks. {t("copyright")}
            </div>
            <div className="text-center sm:text-right text-sm text-gray-400">
              {t("phone")}: +994 051 899 95 21
            </div>
          </div>
        </div>
      </footer>
  );
}

