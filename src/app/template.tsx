import Footer from '@/components/shared/Footer';
import TopBar from '@/components/shared/TopBar';
import React from 'react';

type TemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  return (
    <main className="relative flex h-full min-h-screen w-full flex-col justify-center bg-white">
      <TopBar />
      {children}
      <Footer />
    </main>
  );
};

export default Template;
