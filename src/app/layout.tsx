// app/layout.tsx
import './globals.css';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
