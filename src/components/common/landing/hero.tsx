import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className='flex flex-col items-center text-center px-8 py-20 bg-white relative'>
      {/* Верхний баннер */}
      <Link
        href='/docs'
        className='mb-6 inline-block px-4 py-2 text-sm font-medium text-white bg-primary rounded-full shadow hover:bg-primary/90 transition'
      >
        Теперь доступно: AIVIDA V1.0 и функции →
      </Link>

      {/* Заголовок */}
      <h1 className='text-4xl md:text-5xl text-gray-900 leading-tight max-w-7xl font-[var(--font-lumos)]'>
        AIVIDA — умная медицинская платформа на базе ИИ
      </h1>

      {/* Подзаголовок */}
      <p className='mt-6 text-lg text-gray-700 max-w-3xl font-[var(--font-alphasano)]'>
        AIVIDA помогает врачам, пациентам и клиникам работать быстрее и удобнее. Единая медицинская
        карта, телемедицина, интеллектуальная диагностика и надёжное хранение данных — всё в одном
        месте.
      </p>

      {/* CTA кнопки */}
      <div className='mt-8 flex gap-4 flex-col sm:flex-row'>
        <Button className='px-8 py-3 text-lg rounded-full'>Начать работу</Button>
        <Button variant='outline' className='px-8 py-3 text-lg rounded-full'>
          Посмотреть возможности
        </Button>
      </div>
    </section>
  );
}
