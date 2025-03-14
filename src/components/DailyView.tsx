import { useMemo } from 'react';
import { motion as m } from 'framer-motion';
import { Course } from '../types';
import { useResponsive } from '../hooks/useResponsive';
import { getCourseTimes } from '../utils/timeUtils';

interface Props {
  courses: Course[];
  onCourseClick?: (course: Course) => void;
}

export const DailyView = ({ courses, onCourseClick }: Props) => {
  const { isPhone } = useResponsive();
  
  // 获取今天是周几（0-6，0代表周日）
  const today = useMemo(() => {
    const date = new Date();
    let day = date.getDay();
    // 将周日的0转换为7，以匹配我们的数据格式
    return day === 0 ? 7 : day;
  }, []);

  // 过滤出今天的课程并按照节次排序
  const todayCourses = useMemo(() => {
    return courses
      .filter(course => course.weekday === today)
      .sort((a, b) => Math.min(...a.section) - Math.min(...b.section));
  }, [courses, today]);

  if (todayCourses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-500 text-lg"
        >
          今天没有课程安排
        </m.div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <m.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-500 text-sm"
      >
        今天共有 {todayCourses.length} 节课
      </m.div>
      
      <div className="space-y-3">
        {todayCourses.map((course, index) => (
          <m.div
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { delay: index * 0.1 }
            }}
            className={`
              bg-white rounded-lg shadow-sm border border-gray-100
              ${isPhone ? 'p-4' : 'p-5'}
              hover:shadow-md transition-shadow cursor-pointer
            `}
            onClick={() => onCourseClick?.(course)}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-medium text-gray-900 ${isPhone ? 'text-base' : 'text-lg'}`}>
                    {course.name}
                  </h3>
                  <p className={`text-gray-500 mt-1 ${isPhone ? 'text-xs' : 'text-sm'}`}>
                    {course.teacher}
                  </p>
                </div>
                <m.span 
                  className={`
                    px-2 py-1 rounded bg-blue-50 text-blue-600 font-medium
                    ${isPhone ? 'text-xs' : 'text-sm'}
                  `}
                >
                  {`第${course.section.join('-')}节`}
                </m.span>
              </div>

              <div className={`flex items-center gap-4 text-gray-500 ${isPhone ? 'text-xs' : 'text-sm'}`}>
                <span>⏰ {getCourseTimes(course.section)}</span>
                <span>📍 {course.location}</span>
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
};
