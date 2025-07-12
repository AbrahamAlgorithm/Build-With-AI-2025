import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{/* Your main content here */}</main>
      <Footer />
    </div>
  );
}