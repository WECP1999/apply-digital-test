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
    </main>
  );
};

export default Template;
