import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDaysIcon,
  TableCellsIcon,
  ViewColumnsIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { ViewMode } from '../types';

interface Props {
  isOpen: boolean;
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onClose: () => void;
}

const viewOptions = [
  {
    id: 'daily',
    name: '今日课程',
    description: '查看今天的课程安排',
    icon: CalendarDaysIcon
  },
  {
    id: 'weekly',
    name: '周课程表',
    description: '查看本周的完整课程安排',
    icon: ViewColumnsIcon
  },
  {
    id: 'full',
    name: '总课程表',
    description: '查看所有周次的课程安排',
    icon: TableCellsIcon
  }
] as const;

export const ViewSelector = ({
  isOpen,
  currentView,
  onViewChange,
  onClose
}: Props) => {
  // 处理ESC键关闭
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  // 当模态框打开时禁止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/25 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-gray-900">
              选择视图
            </h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="space-y-3">
            {viewOptions.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => {
                  onViewChange(option.id);
                  onClose();
                }}
                className={`relative w-full rounded-lg p-3 text-left transition-colors ${
                  currentView === option.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-3">
                  <option.icon
                    className={`h-6 w-6 flex-shrink-0 ${
                      currentView === option.id
                        ? 'text-blue-600'
                        : 'text-gray-400'
                    }`}
                  />
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        currentView === option.id
                          ? 'text-blue-600'
                          : 'text-gray-900'
                      }`}
                    >
                      {option.name}
                    </p>
                    <p
                      className={`mt-1 text-xs ${
                        currentView === option.id
                          ? 'text-blue-500'
                          : 'text-gray-500'
                      }`}
                    >
                      {option.description}
                    </p>
                  </div>
                  {currentView === option.id && (
                    <CheckIcon className="h-5 w-5 text-blue-600" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
          <div className="mt-5">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              onClick={onClose}
            >
              完成
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
