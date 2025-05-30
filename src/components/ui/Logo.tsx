import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary';
  const accentColor = 'text-secondary';

  return (
    <div className="flex items-center">
      <Leaf className={`${accentColor} mr-2`} size={24} />
      <span className={`text-xl font-bold ${textColor}`}>
        MY<span className={accentColor}>OREVA</span>
      </span>
    </div>
  );
};

export default Logo;