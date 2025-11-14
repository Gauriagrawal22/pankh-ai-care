import React from 'react';
import { AdaptiveLogo } from './AdaptiveLogo';
import BackButton from './BackButton';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  showBackButton?: boolean;
}

const PageHeader = ({ title, subtitle, icon, showBackButton = true }: PageHeaderProps) => {
  return (
    <header className="pankhai-card mx-4 md:mx-6 mt-4 md:mt-6 mb-6 md:mb-8">
      <div className="flex items-center gap-4 p-4 md:p-6">
        {showBackButton && <BackButton />}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center overflow-hidden shadow-soft">
          <AdaptiveLogo className="w-10 h-10 md:w-12 md:h-12" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            पंखAI
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground">{title}</p>
        </div>
        {icon && (
          <div className="ml-auto">
            {icon}
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
