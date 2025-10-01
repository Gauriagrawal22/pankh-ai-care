import React from 'react';
import { useTheme } from './ThemeProvider';
import pankhaiLogoLight from '@/assets/pankhai-logo-whitebg.png';
import pankhaiLogoDark from '@/assets/pankhai-logo-main.png';

interface LogoProps {
  className?: string;
  alt?: string;
}

export function AdaptiveLogo({ className = "w-8 h-8", alt = "PankhAI Logo" }: LogoProps) {
  const { theme } = useTheme();
  
  // Use different logos based on theme
  const logoSrc = theme === 'dark' ? pankhaiLogoDark : pankhaiLogoLight;
  
  return (
    <img 
      src={logoSrc} 
      alt={alt} 
      className={`${className} object-contain transition-opacity duration-300`} 
    />
  );
}