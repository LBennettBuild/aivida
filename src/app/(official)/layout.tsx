import { Footer } from '../../components/common/landing/footer';
import { Header } from '../../components/common/landing/header';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='font-sans antialiased text-slate-900 bg-white'>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
