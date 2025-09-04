'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope, User, Building2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Пациенты',
    description:
      'Зарегистрируйтесь, создайте профиль и получите доступ к цифровым медицинским услугам, анализам и консультациям.',
    icon: User,
  },
  {
    id: 2,
    title: 'Врачи',
    description:
      'Подключайтесь к системе, управляйте пациентами, назначайте обследования и консультируйте онлайн.',
    icon: Stethoscope,
  },
  {
    id: 3,
    title: 'Клиники',
    description:
      'Организуйте рабочие процессы, управляйте врачами и получайте аналитику для развития вашей медицинской организации.',
    icon: Building2,
  },
];

export function HowItWorks() {
  return (
    <section className='w-full py-20 bg-gray-50'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>Как это работает</h2>
        <p className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
          AIVIDA объединяет пациентов, врачей и клиники в единую цифровую экосистему
          здравоохранения.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className='h-full shadow-md hover:shadow-xl transition-shadow duration-300'>
                <CardContent className='flex flex-col items-center text-center p-8'>
                  <step.icon className='w-12 h-12 text-primary mb-4' />
                  <h3 className='text-xl font-semibold mb-2 text-gray-900'>{step.title}</h3>
                  <p className='text-gray-600'>{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
