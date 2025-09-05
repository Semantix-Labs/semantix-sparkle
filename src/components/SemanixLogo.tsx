import React from 'react';
import semantixLogoDark from '../assets/semantix-logo-dark.png';

interface SemanixLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  alt?: string;
}

const SemanixLogo: React.FC<SemanixLogoProps> = ({ 
  className = "", 
  theme = 'dark',
  alt = "Semantix Labs Logo"
}) => {
  return (
    <img
      src={semantixLogoDark}
      alt={alt}
      className={className}
    />
  );
};

export default SemanixLogo;