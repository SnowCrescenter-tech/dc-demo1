import { motion } from 'framer-motion';
import { mockBusRoutes } from '../mock/data';
import { ClockIcon, UserGroupIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const Bus = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">校园公交</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {mockBusRoutes.map((route) => (
          <motion.div
            key={route.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">{route.name}</h3>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                运行中
              </span>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg">
                <ClockIcon className="h-4 w-4" />
                <span>预计到达时间: {route.estimatedTime}分钟</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg">
                <UserGroupIcon className="h-4 w-4" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>车内人数</span>
                    <span>{route.capacity.current}/{route.capacity.total}</span>
                  </div>
                  <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{
                        width: `${(route.capacity.current / route.capacity.total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4" />
                  <span>站点信息</span>
                </div>
                <div className="ml-6 space-y-2">
                  {route.stations.map((station, index) => (
                    <div
                      key={station.name}
                      className="flex items-center gap-2"
                    >
                      <div className="relative">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        {index !== route.stations.length - 1 && (
                          <div className="absolute top-2 left-1/2 w-px h-6 bg-gray-300 -translate-x-1/2" />
                        )}
                      </div>
                      <span className="text-sm text-gray-600">{station.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
