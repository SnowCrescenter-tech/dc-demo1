import { useMemo, useState } from 'react';
import { motion as m } from 'framer-motion';
import { Course } from '../types';
import { useResponsive } from '../hooks/useResponsive';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getCourseTimes, getSectionTime } from '../utils/timeUtils';

interface Props {
  courses: Course[];
  onCourseClick?: (course: Course) => void;
}

const SECTIONS = Array.from({ length: 12 }, (_, i) => i + 1);

export const FullView = ({ courses, onCourseClick }: Props) => {
  const { isPhone, isTablet } = useResponsive();
  const [currentPage, setCurrentPage] = useState(0);
  const weeksPerPage = isPhone ? 1 : isTablet ? 4 : 8;
  const totalPages = Math.ceil(16 / weeksPerPage);

  // 响应式调整单元格高度
  const getCellHeight = () => {
    if (isPhone) return 56; // 3.5rem
    if (isTablet) return 64; // 4rem
    return 80; // 5rem
  };

  // 响应式调整字体大小
  const getFontSize = (size: "xs" | "sm" | "base") => {
    if (isPhone) {
      switch (size) {
        case "xs": return "text-[10px]";
        case "sm": return "text-xs";
        case "base": return "text-sm";
      }
    }
    return `text-${size}`;
  };

  const cellHeight = getCellHeight();
  
  const visibleWeeks = useMemo(() => {
    const start = currentPage * weeksPerPage;
    return Array.from({ length: weeksPerPage }, (_, i) => start + i + 1).filter(w => w <= 16);
  }, [currentPage, weeksPerPage]);

  const weekCourses = useMemo(() => {
    return visibleWeeks.map(week => ({
      week,
      courses: courses.filter(course => course.weeks.includes(week))
    }));
  }, [courses, visibleWeeks]);

  return (
    <div className="space-y-4">
      {/* 页码控制 */}
      <div className="flex items-center justify-between">
        <m.h2 
          className={`font-medium text-gray-900 ${getFontSize('base')}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          第 {visibleWeeks[0]}-{visibleWeeks[visibleWeeks.length - 1]} 周
        </m.h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 0))}
            disabled={currentPage === 0}
            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 课程表 */}
      <div className="overflow-x-auto">
        <div className={`grid grid-cols-[60px_repeat(${weeksPerPage},1fr)] gap-2 min-w-0`}>
          {/* 节次和时间列 */}
          <div className={`${getFontSize('sm')} text-gray-500 space-y-2`}>
            {SECTIONS.map(section => {
              const time = getSectionTime(section);
              return (
                <div 
                  key={section}
                  style={{ height: `${cellHeight}px` }}
                  className="flex flex-col items-center justify-center bg-gray-50/50 rounded-lg"
                >
                  <span>{section}</span>
                  <span className={`${getFontSize('xs')} text-gray-400`}>
                    {time.start}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 每周的课程 */}
          {weekCourses.map(({ week, courses: weekCourses }) => (
            <div key={week} className="relative">
              <div className={`${getFontSize('sm')} font-medium text-center mb-2 text-gray-700`}>
                第{week}周
              </div>
              <div className="space-y-2">
                {SECTIONS.map(section => (
                  <div 
                    key={section}
                    style={{ height: `${cellHeight}px` }}
                    className="relative bg-gray-50/50 rounded-lg"
                  >
                    {weekCourses
                      .filter(course => course.section.includes(section))
                      .map(course => (
                        <m.button
                          key={course.id}
                          className="absolute inset-0 m-0.5 rounded-md bg-blue-50 p-1.5 text-left hover:bg-blue-100 transition-colors"
                          onClick={() => onCourseClick?.(course)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="h-full flex flex-col">
                            <span className={`font-medium ${getFontSize('sm')} text-blue-700 line-clamp-2`}>
                              {course.name}
                            </span>
                            <div className={`${getFontSize('xs')} text-blue-600 mt-auto`}>
                              <div>📍 {course.location}</div>
                              <div>⏰ {getCourseTimes(course.section)}</div>
                            </div>
                          </div>
                        </m.button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
