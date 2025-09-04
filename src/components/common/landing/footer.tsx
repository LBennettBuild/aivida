'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-white text-black border-t border-gray-200 py-12 mt-20'>
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10'>
        {/* Логотип и описание */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>AIVIDA</h2>
          <p className='text-sm text-gray-600 leading-relaxed'>
            Цифровая экосистема для пациентов, врачей и клиник. Будущее медицины — доступное,
            удобное и безопасное.
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Навигация</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link href='/features' className='hover:underline'>
                Функции
              </Link>
            </li>
            <li>
              <Link href='/pricing' className='hover:underline'>
                Тарифы
              </Link>
            </li>
            <li>
              <Link href='/docs' className='hover:underline'>
                Документация
              </Link>
            </li>
            <li>
              <Link href='/support' className='hover:underline'>
                Поддержка
              </Link>
            </li>
          </ul>
        </div>

        {/* Для кого */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Для кого</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link href='/patients' className='hover:underline'>
                Пациенты
              </Link>
            </li>
            <li>
              <Link href='/doctors' className='hover:underline'>
                Врачи
              </Link>
            </li>
            <li>
              <Link href='/clinics' className='hover:underline'>
                Клиники
              </Link>
            </li>
          </ul>
        </div>

        {/* Контакты и соцсети */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Контакты</h3>
          <p className='text-sm text-gray-600 mb-4'>info@aivida.health</p>
          <div className='flex gap-4'>
            <Link href='#' className='hover:text-gray-800 transition'>
              <Facebook size={20} />
            </Link>
            <Link href='#' className='hover:text-gray-800 transition'>
              <Twitter size={20} />
            </Link>
            <Link href='#' className='hover:text-gray-800 transition'>
              <Instagram size={20} />
            </Link>
            <Link href='#' className='hover:text-gray-800 transition'>
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className='border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} ZEPHYR Ecosystem. Все права защищены.
      </div>
    </footer>
  );
}
