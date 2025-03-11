import { mockCourses } from '../mock/data';
import { motion } from 'framer-motion';
import { MapPinIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

export const Home = () => {
  const today = new Date().getDay() || 7; // 将周日的0转换为7
  const todayCourses = mockCourses.filter(course => course.weekday === today);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">今日课程</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {todayCourses.length > 0 ? (
          todayCourses.map(course => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{course.name}</h3>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg">
                  <UserIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">{course.teacher}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg">
                  <MapPinIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">{course.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg">
                  <ClockIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">第 {course.section.join('-')} 节</span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
              <ClockIcon className="w-full h-full" />
            </div>
            <p className="text-gray-500">今天没有课程安排</p>
            <p className="text-sm text-gray-400 mt-1">享受轻松的一天吧</p>
          </div>
        )}
      </div>
    </div>
  );
};
