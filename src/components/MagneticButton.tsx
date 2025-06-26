import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', href, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = Math.max(Math.min((e.clientX - (rect.left + rect.width / 2)) * 0.1, 20), -20);
const offsetY = Math.max(Math.min((e.clientY - (rect.top + rect.height / 2)) * 0.1, 20), -20);



    x.set(offsetX);
    y.set(offsetY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={reset}
  style={{
    x,
    y,
    rotateX,
    rotateY,
    perspective: 1000,
    transformStyle: 'preserve-3d',
    willChange: 'transform'
  }}
  className="inline-block"
>
  {href ? (
    <Link
      to={href}
      className={`${className} transform transition-transform duration-300 ease-out`}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${className} transform transition-transform duration-300 ease-out`}
      onClick={onClick}
    >
      {children}
    </button>
  )}
</motion.div>

  );
};

export default MagneticButton;
