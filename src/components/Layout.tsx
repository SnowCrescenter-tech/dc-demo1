import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  CalendarIcon,
  TruckIcon,
  BuildingLibraryIcon,
  MapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface Props {
  children: ReactNode;
}

const navItems = [
  { to: '/', icon: AcademicCapIcon, label: '课程表' },
  { to: '/events', icon: CalendarIcon, label: '活动' },
  { to: '/bus', icon: TruckIcon, label: '校车' },
  { to: '/venues', icon: BuildingLibraryIcon, label: '场地' },
  { to: '/map', icon: MapIcon, label: '地图' },
  { to: '/canteen', icon: UserGroupIcon, label: '食堂' },
];

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50/30">
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-56 lg:flex-col">
        <div className="flex flex-col flex-grow border-r border-gray-100 bg-white/95 backdrop-blur-sm pt-6 pb-4 shadow-sm">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">智慧校园</h1>
          </div>
          <nav className="mt-8 flex-1 space-y-1.5 px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm z-50 lg:hidden">
        <div className="flex justify-between items-center h-16 px-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">智慧校园</h1>
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `group flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50/80' 
                      : 'text-gray-600 hover:bg-gray-50/80'
                  }`
                }
              >
                <item.icon className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" />
                <span className="text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="lg:pl-56 min-h-screen pt-16 lg:pt-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};
