'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Features() {
  return (
    <section className='w-full py-16 px-6 md:px-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8'>Возможности AIVIDA</h2>

        {/* Навигация табов */}
        <Tabs defaultValue='all' className='w-full'>
          <TabsList className='flex justify-center mb-8'>
            <TabsTrigger value='all'>Все возможности</TabsTrigger>
            <TabsTrigger value='patient'>Пациент</TabsTrigger>
            <TabsTrigger value='doctor'>Врач</TabsTrigger>
            <TabsTrigger value='hospital'>Больница</TabsTrigger>
          </TabsList>

          {/* All Features */}
          <TabsContent value='all' className='grid md:grid-cols-3 gap-6'>
            <Card>
              <CardHeader>
                <CardTitle>ИИ-диагностика</CardTitle>
              </CardHeader>
              <CardContent>
                Анализ симптомов на базе искусственного интеллекта для ускоренной и точной
                постановки предварительных диагнозов.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Телемедицина</CardTitle>
              </CardHeader>
              <CardContent>
                Видеоконсультации и чаты с врачами напрямую через платформу.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Единая медкарта</CardTitle>
              </CardHeader>
              <CardContent>
                Полный доступ к истории болезни, анализам и назначениям, зашифрованное хранение
                данных.
              </CardContent>
            </Card>
          </TabsContent>

          {/* Пациент */}
          <TabsContent value='patient' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Личный кабинет пациента</CardTitle>
              </CardHeader>
              <CardContent>
                Регистрация, профиль, история болезней, загрузка анализов, напоминания и
                уведомления.
              </CardContent>
            </Card>
          </TabsContent>

          {/* Врач */}
          <TabsContent value='doctor' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Кабинет врача</CardTitle>
              </CardHeader>
              <CardContent>
                Доступ к истории пациентов, проведение видеоконсультаций, рекомендации и отметки о
                завершении приёма.
              </CardContent>
            </Card>
          </TabsContent>

          {/* Больница */}
          <TabsContent value='hospital' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Панель управления клиникой</CardTitle>
              </CardHeader>
              <CardContent>
                Регистрация врачей, доступ к медицинским картам, отчёты по приёмам и нагрузке,
                аналитика эффективности.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
