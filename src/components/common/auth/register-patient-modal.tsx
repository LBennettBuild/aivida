'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Mail, Lock, User, Phone, MapPin } from 'lucide-react';

interface RegisterPatientModalProps {
  open: boolean;
  onClose: () => void;
}

export function RegisterPatientModal({ open, onClose }: RegisterPatientModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    password: '',
    code: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // TODO: запрос на API для отправки письма
      setStep(2);
    } else {
      // TODO: запрос на API для проверки кода
      alert('Успешная регистрация!');
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle className='text-center text-xl font-semibold'>
            Регистрация пациента
          </DialogTitle>
        </DialogHeader>

        {/* Прогресс */}
        <div className='mb-6'>
          <div className='flex justify-between text-sm text-gray-500 mb-1'>
            <span>Шаг {step} из 2</span>
          </div>
          <Progress value={(step / 2) * 100} />
        </div>

        {/* Шаг 1: форма */}
        {step === 1 && (
          <form onSubmit={handleNext} className='space-y-4'>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='relative'>
                <User className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
                <Input
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='Имя'
                  className='pl-10'
                  required
                />
              </div>
              <div className='relative'>
                <User className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
                <Input
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Фамилия'
                  className='pl-10'
                  required
                />
              </div>
            </div>

            <div className='relative'>
              <Mail className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='you@example.com'
                className='pl-10'
                required
              />
            </div>

            <div className='relative'>
              <Phone className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
              <Input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+998 90 123 45 67'
                className='pl-10'
                required
              />
            </div>

            <div className='grid md:grid-cols-2 gap-4'>
              <div className='relative'>
                <MapPin className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
                <Input
                  name='city'
                  value={formData.city}
                  onChange={handleChange}
                  placeholder='Город'
                  className='pl-10'
                />
              </div>
              <div className='relative'>
                <MapPin className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
                <Input
                  name='state'
                  value={formData.state}
                  onChange={handleChange}
                  placeholder='Штат / Область'
                  className='pl-10'
                />
              </div>
            </div>

            <div className='relative'>
              <Lock className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
              <Input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Пароль'
                className='pl-10'
                required
              />
            </div>

            <Button type='submit' className='w-full'>
              Далее
            </Button>
          </form>
        )}

        {/* Шаг 2: подтверждение */}
        {step === 2 && (
          <form onSubmit={handleNext} className='space-y-4'>
            <p className='text-sm text-gray-600 text-center'>
              Мы отправили код подтверждения на <b>{formData.email}</b>. Введите его ниже.
            </p>
            <Input
              name='code'
              value={formData.code}
              onChange={handleChange}
              placeholder='Код подтверждения'
              required
            />
            <Button type='submit' className='w-full'>
              Подтвердить
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
