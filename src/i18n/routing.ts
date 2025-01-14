import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['az', 'ru', 'en'] as const;
export type Locale = typeof locales[number];

// Определяем локализацию
export const routing = defineRouting({
  locales,
  defaultLocale: 'az',
});

// Создаем навигацию
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// Функция для получения пути, всегда на английском маршруте
export const getLocalizedPath = (locale: Locale, route: string) => {
  return `/${locale}${route}`; // Путь будет всегда вести на английский маршрут
};
