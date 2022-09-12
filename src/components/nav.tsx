import Link from 'next/link';
import * as React from 'react';

import { useTranslationState } from '@/hooks/store';

import { translations } from '@/utils/translations';

export default function Navbar() {
  const store = useTranslationState();

  const changeLanguage = (lang: 'english' | 'spanish') => {
    store.changeLanguage(lang);
  };
  return (
    <nav className='bg-primary-medium bg-opacity-20 px-2 py-2.5 sm:px-4 '>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <ul className='flex flex-row '>
          <li>
            <Link href='/'>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 text-primary-light-25 hover:text-primary-light'
                aria-current='page'
                suppressHydrationWarning
              >
                {store.isEnglish
                  ? translations.navbar.english.home
                  : translations.navbar.spanish.home}
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a
                suppressHydrationWarning
                href='#'
                className='block py-2 pr-4 pl-3 text-primary-light-25 hover:text-primary-light'
                aria-current='page'
              >
                {store.isEnglish
                  ? translations.navbar.english.about
                  : translations.navbar.spanish.about}
              </a>
            </Link>
          </li>
        </ul>
        <div className='text-primary-light-25'>
          <span
            onClick={() => {
              changeLanguage('english');
            }}
            className='cursor-pointer hover:text-primary-light-50'
          >
            🇺🇸 English{' '}
          </span>
          <span> / </span>
          <span
            onClick={() => {
              changeLanguage('spanish');
            }}
            className='cursor-pointer hover:text-primary-light-50'
          >
            🇪🇸 Español
          </span>
        </div>
      </div>
    </nav>
  );
}