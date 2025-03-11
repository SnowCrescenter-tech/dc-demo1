import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface Place {
  id: string;
  name: string;
  description: string;
}

const places: Place[] = [
  {
    id: '1',
    name: '图书馆',
    description: '主图书馆，24小时自习室',
  },
  {
    id: '2',
    name: '主教学楼',
    description: '教室、实验室、办公室',
  },
  {
    id: '3',
    name: '体育馆',
    description: '室内运动场馆、健身中心',
  },
  {
    id: '4',
    name: '食堂',
    description: '学生食堂、教工食堂',
  },
  {
    id: '5',
    name: '学生活动中心',
    description: '社团活动、文艺表演',
  },
];

export const Map = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">校园地图</h1>
      
      {/* 地图容器 */}
      <div className="relative bg-gray-100 rounded-xl h-96 mb-8 overflow-hidden shadow-inner">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          地图加载中...
        </div>
      </div>

      {/* 地点列表 */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {places.map((place) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 cursor-pointer hover:border-blue-500/50 transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                <MapPinIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{place.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{place.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
