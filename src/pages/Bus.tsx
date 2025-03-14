import { motion as m } from 'framer-motion';
import { mockBusRoutes } from '../mock/data';
import { ClockIcon, UserGroupIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { AnimatedContainer, AnimatedCard } from '../components/AnimatedContainer';

export const Bus = () => {
  return (
    <AnimatedContainer>
      <m.h1 
        className="text-2xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        校园公交
      </m.h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {mockBusRoutes.map((route, index) => (
          <AnimatedCard key={route.id}>
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200">
              <div className="flex justify-between items-start">
                <m.h3 
                  className="text-lg font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {route.name}
                </m.h3>
                <m.span 
                  className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  运行中
                </m.span>
              </div>
              
              <div className="mt-4 space-y-3">
                <m.div 
                  className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ClockIcon className="h-4 w-4" />
                  <span>预计到达时间: {route.estimatedTime}分钟</span>
                </m.div>
                
                <m.div 
                  className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <UserGroupIcon className="h-4 w-4" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>车内人数</span>
                      <span>{route.capacity.current}/{route.capacity.total}</span>
                    </div>
                    <m.div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <m.div
                        className="h-full bg-blue-500 rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: route.capacity.current / route.capacity.total,
                          transition: {
                            delay: index * 0.1 + 0.3,
                            duration: 0.8,
                            ease: [0.4, 0, 0.2, 1]
                          }
                        }}
                      />
                    </m.div>
                  </div>
                </m.div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4" />
                    <span>站点信息</span>
                  </div>
                  <div className="ml-6 space-y-2">
                    {route.stations.map((station, stationIndex) => (
                      <m.div
                        key={station.name}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1 + stationIndex * 0.1 + 0.4,
                          duration: 0.3
                        }}
                      >
                        <div className="relative">
                          <m.div 
                            className="h-2 w-2 rounded-full bg-blue-500"
                            animate={{
                              scale: [1, 1.2, 1],
                              transition: {
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 1
                              }
                            }}
                          />
                          {stationIndex !== route.stations.length - 1 && (
                            <m.div 
                              className="absolute top-2 left-1/2 w-px h-6 bg-gray-300 -translate-x-1/2"
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ delay: index * 0.1 + stationIndex * 0.1 + 0.5 }}
                            />
                          )}
                        </div>
                        <span className="text-sm text-gray-600">{station.name}</span>
                      </m.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedContainer>
  );
};
