'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Building2, Mail, Phone, User, FileText, MapPin } from 'lucide-react';

interface RegisterClinicModalProps {
  open: boolean;
  onClose: () => void;
}

export function RegisterClinicModal({ open, onClose }: RegisterClinicModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clinicName: '',
    address: '',
    license: '',
    contactPerson: '',
    email: '',
    phone: '',
    code: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // TODO: API-запрос для отправки письма
      setStep(2);
    } else {
      // TODO: API-запрос для подтверждения кода
      alert('Регистрация клиники отправлена на проверку. Подтверждение в течение 72 часов.');
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle className='text-center text-xl font-semibold'>
            Регистрация клиники
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
            <div className='relative'>
              <Building2 className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
              <Input
                name='clinicName'
                value={formData.clinicName}
                onChange={handleChange}
                placeholder='Название клиники'
                className='pl-10'
                required
              />
            </div>

            <div className='relative'>
              <MapPin className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
              <Input
                name='address'
                value={formData.address}
                onChange={handleChange}
                placeholder='Адрес клиники'
                className='pl-10'
                required
              />
            </div>

            <div className='relative'>
              <FileText className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
              <Input
                name='license'
                value={formData.license}
                onChange={handleChange}
                placeholder='Лицензия / ИНН'
                className='pl-10'
                required
              />
            </div>

            <div className='relative'>
              <User className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
              <Input
                name='contactPerson'
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder='Контактное лицо'
                className='pl-10'
                required
              />
            </div>

            <div className='relative'>
              <Mail className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='clinic@example.com'
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

            <Button type='submit' className='w-full'>
              Далее
            </Button>
          </form>
        )}

        {/* Шаг 2: подтверждение */}
        {step === 2 && (
          <form onSubmit={handleNext} className='space-y-4'>
            <p className='text-sm text-gray-600 text-center'>
              Мы отправили код подтверждения на <b>{formData.email}</b>. После проверки и
              подтверждения данных ваш аккаунт клиники будет активирован в течение 72 часов.
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
