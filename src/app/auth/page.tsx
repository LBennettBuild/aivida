'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Hospital, User } from 'lucide-react';
import LoginForm from '../../components/common/auth/login-form';
import { RegisterPatientModal } from '../../components/common/auth/register-patient-modal';
import { RegisterClinicModal } from '../../components/common/auth/register-clinic-modal';

export default function AuthPage() {
  const [selectedRegister, setSelectedRegister] = useState<'none' | 'patient' | 'hospital'>('none');
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  const [clinicModalOpen, setClinicModalOpen] = useState(false);
  return (
    <main className='min-h-screen flex items-center justify-center bg-white text-black px-6'>
      <div className='w-full max-w-3xl border border-gray-200 rounded-2xl shadow-sm p-8'>
        {/* Лого */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold tracking-tight'>AIVIDA</h1>
          <p className='text-gray-600 mt-2'>Единая цифровая система здравоохранения</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue='login' className='w-full'>
          <TabsList className='grid w-full grid-cols-2 bg-gray-100 rounded-xl mb-6'>
            <TabsTrigger value='login'>Вход</TabsTrigger>
            <TabsTrigger value='register'>Регистрация</TabsTrigger>
          </TabsList>

          {/* Форма входа */}
          <TabsContent value='login'>
            <div className='border border-black/30 rounded-xl px-6 py-4'>
              <LoginForm />
            </div>
          </TabsContent>

          {/* Регистрация */}
          <TabsContent value='register'>
            {selectedRegister === 'none' && (
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Карточка пациента */}
                <div
                  className='border border-gray-200 rounded-xl p-6 hover:shadow-md cursor-pointer transition'
                  onClick={() => setPatientModalOpen(true)}
                >
                  <User className='w-8 h-8 mb-3' />
                  <h3 className='font-semibold text-lg'>Я пациент</h3>
                  <p className='text-sm text-gray-500 mt-1'>
                    Регистрация для физических лиц: профиль, анализы, консультации.
                  </p>
                </div>

                {/* Карточка клиники */}
                <div
                  className='border border-gray-200 rounded-xl p-6 hover:shadow-md cursor-pointer transition'
                  onClick={() => setClinicModalOpen(true)}
                >
                  <Hospital className='w-8 h-8 mb-3' />
                  <h3 className='font-semibold text-lg'>Я клиника</h3>
                  <p className='text-sm text-gray-500 mt-1'>
                    Регистрация для медицинских организаций: управление врачами и пациентами.
                  </p>
                </div>
              </div>
            )}
            <RegisterPatientModal
              open={patientModalOpen}
              onClose={() => setPatientModalOpen(false)}
            />

            <RegisterClinicModal open={clinicModalOpen} onClose={() => setClinicModalOpen(false)} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
