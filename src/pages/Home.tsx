import { useEffect, useState } from 'react';
import { CalendarDaysIcon, ViewColumnsIcon, TableCellsIcon } from '@heroicons/react/24/outline';
import { WeeklyView } from '../components/WeeklyView';
import { DailyView } from '../components/DailyView';
import { FullView } from '../components/FullView';
import { ViewSelector } from '../components/ViewSelector';
import { ViewMode, Course, CourseDetail } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { mockCourses, mockCourseDetails } from '../mock/data';
import { CourseDetailModal } from '../components/CourseDetailModal';
import { useResponsive } from '../hooks/useResponsive';

export const Home = () => {
  const { isPhone, getBaseFontSize } = useResponsive();
  const [viewMode, setViewMode] = useState<ViewMode>('weekly');
  const [isViewSelectorOpen, setIsViewSelectorOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);

  // 自动调整基础字体大小
  useEffect(() => {
    const html = document.documentElement;
    const fontSize = getBaseFontSize();
    html.style.fontSize = `${fontSize}px`;
    return () => {
      html.style.fontSize = '16px';
    };
  }, [isPhone, getBaseFontSize]);

  const handleCourseClick = (course: Course) => {
    const courseDetails = mockCourseDetails[course.id];
    if (courseDetails) {
      setSelectedCourse({
        ...course,
        ...courseDetails,
        description: courseDetails.description || "暂无课程描述",
        assessment: courseDetails.assessment || {
          assignments: 30,
          midterm: 30,
          final: 40
        },
        textbook: courseDetails.textbook || [],
        reviews: courseDetails.reviews || [],
        syllabus: courseDetails.syllabus
      });
    }
  };

  const renderView = () => {
    switch (viewMode) {
      case 'daily':
        return <DailyView courses={mockCourses} onCourseClick={handleCourseClick} />;
      case 'weekly':
        return <WeeklyView courses={mockCourses} onCourseClick={handleCourseClick} />;
      case 'full':
        return <FullView courses={mockCourses} onCourseClick={handleCourseClick} />;
      default:
        return null;
    }
  };

  const getViewIcon = () => {
    switch (viewMode) {
      case 'daily':
        return <CalendarDaysIcon className="w-5 h-5" />;
      case 'weekly':
        return <ViewColumnsIcon className="w-5 h-5" />;
      case 'full':
        return <TableCellsIcon className="w-5 h-5" />;
      default:
        return <ViewColumnsIcon className="w-5 h-5" />;
    }
  };

  const getViewText = () => {
    switch (viewMode) {
      case 'daily':
        return '今日课程';
      case 'weekly':
        return '周课程表';
      case 'full':
        return '完整课表';
      default:
        return '周课程表';
    }
  };

  return (
    <div>
      {/* 头部控制栏 */}
      <div className="flex justify-between items-center mb-6">
        <motion.h1 
          className="text-2xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          课程表
        </motion.h1>
        <motion.button
          onClick={() => setIsViewSelectorOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {getViewIcon()}
          <span>{getViewText()}</span>
        </motion.button>
      </div>

      {/* 主要内容区 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>

      {/* 视图选择器 */}
      <AnimatePresence>
        {isViewSelectorOpen && (
          <ViewSelector
            isOpen={isViewSelectorOpen}
            currentView={viewMode}
            onViewChange={setViewMode}
            onClose={() => setIsViewSelectorOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* 课程详情模态框 */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
};
