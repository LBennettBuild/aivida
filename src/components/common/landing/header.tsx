'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bubbles } from 'lucide-react';
export function Header() {
  return (
    <header className='w-full flex items-center justify-between py-4 px-8 border-b bg-white'>
      {/* Логотип */}
      <div className='text-2xl font-bold text-primary flex items-center'>
        <Bubbles className='mr-1' />
        AIVIDA
      </div>

      {/* Навигация */}
      <nav className='hidden md:flex gap-6 text-gray-700 font-medium'>
        <Link href='/features'>Возможности</Link>
        <Link href='/articles'>Статьи</Link>
        <Link href='/pricing'>Тарифы</Link>
        <Link href='/support'>Поддержка</Link>
      </nav>

      {/* CTA кнопка */}
      <Link href='/auth' passHref>
        <Button className='rounded-full px-6 py-2'>Начать работу</Button>
      </Link>
    </header>
  );
}
