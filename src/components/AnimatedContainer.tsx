import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { pageVariants } from '../animations/config';

interface Props {
  children: ReactNode;
  className?: string;
}

export const AnimatedContainer = ({ children, className = '' }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className={`relative ${className}`}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {/* 渐变背景效果 */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.03), transparent 80%)`,
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
      />
      
      {/* 内容容器 */}
      <motion.div
        className="relative z-10 h-full"
        animate={{
          scale: isHovering ? 1.001 : 1,
          transition: { duration: 0.3 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// 包装后的列表项组件
interface AnimatedListItemProps extends Props {
  index: number;
}

export const AnimatedListItem = ({ children, className = '', index }: AnimatedListItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.4, 0, 0.2, 1],
        }
      }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ 
        y: -4,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 包装后的卡片组件
export const AnimatedCard = ({ children, className = '' }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ 
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        }
      }}
      whileTap={{ scale: 0.98 }}
      className={`shadow-hover ${className}`}
    >
      {children}
    </motion.div>
  );
};

// 模态框动画容器
export const AnimatedModal = ({ children, className = '' }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 25,
        }
      }}
      exit={{ 
        opacity: 0, 
        scale: 0.95, 
        y: 20,
        transition: {
          duration: 0.2,
          ease: [0.4, 0, 1, 1],
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
