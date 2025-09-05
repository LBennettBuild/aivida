'use client';

import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // здесь подключаем API авторизации
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      {/* Email */}
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Электронная почта</label>
        <div className='relative'>
          <Mail className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
          <Input
            type='email'
            placeholder='you@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='pl-10'
            required
          />
        </div>
      </div>

      {/* Пароль */}
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Пароль</label>
        <div className='relative'>
          <Lock className='w-4 h-4 absolute left-3 top-3 text-gray-400' />
          <Input
            type='password'
            placeholder='••••••••'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='pl-10'
            required
          />
        </div>
      </div>

      {/* Кнопка */}
      <Button type='submit' className='w-full'>
        Войти
      </Button>
    </form>
  );
}
