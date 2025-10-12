// app/layout.js
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Suntop International - Diabetes Care Specialists',
  description: 'Leading manufacturer of high-quality diabetes medications and healthcare solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}