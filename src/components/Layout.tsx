import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';
import { TopNavigation, BottomNavigation } from './Navigation';

export const Layout = () => {
  const { isPhone } = useResponsive();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
        <TopNavigation />
      </header>

      {/* 主要内容区 */}
      <motion.main 
        className={`min-h-screen ${
          isPhone ? 'pt-4 pb-20 px-4' : 'pt-20 pb-6 px-6'
        } max-w-7xl mx-auto`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>

      {/* 底部导航栏 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-sm z-40">
        <BottomNavigation />
      </footer>

      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5" />
      </div>
    </div>
  );
};
