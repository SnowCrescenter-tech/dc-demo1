import { mockCourses } from '../mock/data';
import { motion } from 'framer-motion';
import { MapPinIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

export const Home = () => {
  const today = new Date().getDay() || 7; // 将周日的0转换为7
  const todayCourses = mockCourses.filter(course => course.weekday === today);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="page-title">今日课程</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {todayCourses.length > 0 ? (
          todayCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: index * 0.1
              }}
              className="card group hover:-translate-y-1"
            >
              <h3 className="section-title group-hover:text-blue-600 transition-colors duration-300">
                {course.name}
              </h3>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100/80">
                  <UserIcon className="h-4 w-4 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {course.teacher}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100/80">
                  <MapPinIcon className="h-4 w-4 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {course.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100/80">
                  <ClockIcon className="h-4 w-4 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    第 {course.section.join('-')} 节
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div 
            className="col-span-full text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <div className="w-16 h-16 mx-auto mb-4 text-gray-300 transition-colors duration-300 hover:text-gray-400">
              <ClockIcon className="w-full h-full" />
            </div>
            <p className="text-gray-500 transition-colors duration-300">今天没有课程安排</p>
            <p className="text-sm text-gray-400 mt-1 transition-colors duration-300">享受轻松的一天吧</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
