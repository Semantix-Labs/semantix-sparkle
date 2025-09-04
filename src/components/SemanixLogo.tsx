import React from 'react';

interface SemanixLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
}

const SemanixLogo: React.FC<SemanixLogoProps> = ({ className = "", theme = 'dark' }) => {
  const textColor = theme === 'dark' ? '#FFFFFF' : '#1A1A1A';
  
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="semantix-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#5856D6' }} />
          <stop offset="100%" style={{ stopColor: '#00C9A7' }} />
        </linearGradient>
      </defs>
      
      {/* Main text */}
      <text
        x="10"
        y="35"
        fontSize="24"
        fontWeight="500"
        fontFamily="Inter, system-ui, sans-serif"
        fill={textColor}
      >
        semantix
      </text>
      
      {/* Labs text */}
      <text
        x="140"
        y="50"
        fontSize="12"
        fontWeight="300"
        fontFamily="Inter, system-ui, sans-serif"
        fill={textColor}
        opacity="0.8"
      >
        labs
      </text>
      
      {/* Accent dot */}
      <circle
        cx="130"
        cy="30"
        r="3"
        fill="url(#semantix-gradient)"
      />
    </svg>
  );
};

export default SemanixLogo;