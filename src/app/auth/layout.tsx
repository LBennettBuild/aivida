import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIVIDA — Умная медицинская платформа',
  description: 'AI-Authored Healthcare Platform',
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
