import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from '../ui/WhatsAppWidget';

const Layout: React.FC = () => {
  const location = useLocation();

  // Paths where Footer, Header, and WhatsAppWidget should be hidden
  const hideLayoutPaths = ['/wart-remover', '/camp-gas'];

  // Match base paths even if there are subpaths or query params
  const shouldHideLayout = hideLayoutPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
      {!shouldHideLayout && <WhatsAppWidget />}
    </div>
  );
};

export default Layout;
