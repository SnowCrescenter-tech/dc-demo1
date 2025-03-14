import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  CalendarIcon,
  TruckIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  MapIcon
} from '@heroicons/react/24/outline';
import { useResponsive } from '../hooks/useResponsive';

const navItems = [
  { to: '/', icon: HomeIcon, label: '课程表' },
  { to: '/events', icon: CalendarIcon, label: '活动' },
  { to: '/bus', icon: TruckIcon, label: '校车' },
  { to: '/venues', icon: BuildingOffice2Icon, label: '场地' },
  { to: '/canteen', icon: ShoppingBagIcon, label: '食堂' },
  { to: '/map', icon: MapIcon, label: '地图' }
] as const;

export const TopNavigation = () => {
  const { isPhone } = useResponsive();
  
  if (isPhone) return null;

  return (
    <div className="h-16 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-900">
        校园助手
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `
              relative flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg
              transition-colors duration-200
              ${isActive
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }
            `}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User actions */}
      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-600 hover:text-gray-900">
          帮助
        </button>
      </div>
    </div>
  );
};

export const BottomNavigation = () => {
  const { isPhone } = useResponsive();
  
  if (!isPhone) return null;

  return (
    <nav className="h-16 px-4 flex items-center justify-around">
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `
            flex flex-col items-center gap-1
            transition-colors duration-200
            ${isActive
              ? 'text-blue-600'
              : 'text-gray-400 hover:text-gray-600'
            }
          `}
        >
          <Icon className="w-6 h-6" />
          <span className="text-xs">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

// Page title component
export const PageTitle = ({ title }: { title: string }) => (
  <motion.h1
    className="text-2xl font-bold text-gray-900 mb-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {title}
  </motion.h1>
);
