import React from 'react';

const PankhAILogo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      className={`${className} drop-shadow-lg`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heart-shaped background with stronger colors */}
      <path
        d="M50 85C50 85 20 65 20 40C20 30 30 20 40 20C45 20 50 25 50 25C50 25 55 20 60 20C70 20 80 30 80 40C80 65 50 85 50 85Z"
        fill="url(#gradient1)"
        stroke="white"
        strokeWidth="1"
      />
      
      {/* Wing design with enhanced colors */}
      <path
        d="M35 30C35 30 25 25 15 35C10 40 15 50 25 45C30 42 35 35 35 30Z"
        fill="url(#gradient2)"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M65 30C65 30 75 25 85 35C90 40 85 50 75 45C70 42 65 35 65 30Z"
        fill="url(#gradient3)"
        stroke="white"
        strokeWidth="0.5"
      />
      
      {/* Female silhouette with better visibility */}
      <path
        d="M50 30C55 30 55 40 50 45C45 40 45 30 50 30Z"
        fill="white"
        fillOpacity="0.9"
        stroke="#EC4899"
        strokeWidth="0.5"
      />
      
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="50%" stopColor="#BE185D" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PankhAILogo;