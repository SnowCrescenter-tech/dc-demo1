import { motion as m } from 'framer-motion';
import { mockCanteens } from '../mock/data';
import { AnimatedContainer, AnimatedCard } from '../components/AnimatedContainer';

export const Canteen = () => {
  const getCrowdLevelColor = (level: number) => {
    if (level >= 80) return 'text-red-500';
    if (level >= 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getCrowdProgressColor = (level: number) => {
    if (level >= 80) return 'bg-red-500';
    if (level >= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getCrowdLevelText = (level: number) => {
    if (level >= 80) return '拥挤';
    if (level >= 50) return '较忙';
    return '空闲';
  };

  return (
    <AnimatedContainer>
      <m.h1 
        className="text-2xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        食堂信息
      </m.h1>
      {mockCanteens.map((canteen, index) => (
        <AnimatedCard key={canteen.id}>
          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-4">
              <m.h2 
                className="text-xl font-semibold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {canteen.name}
              </m.h2>
              <m.div 
                className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <span className="text-sm text-gray-600">拥挤度:</span>
                <span className={`font-medium ${getCrowdLevelColor(canteen.crowdLevel)}`}>
                  {getCrowdLevelText(canteen.crowdLevel)}
                </span>
              </m.div>
            </div>

            <m.div className="mb-6">
              <div className="text-sm font-medium text-gray-600 mb-2">实时人流量</div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <m.div
                  className={`h-full rounded-full ${getCrowdProgressColor(canteen.crowdLevel)}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${canteen.crowdLevel}%` }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                />
              </div>
            </m.div>

            <div className="mb-6">
              <div className="text-sm font-medium text-gray-600 mb-2">高峰时段</div>
              <div className="flex flex-wrap gap-2">
                {canteen.peakHours.map((hour, hourIndex) => (
                  <m.span
                    key={hour}
                    className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + hourIndex * 0.1 + 0.4,
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  >
                    {hour}
                  </m.span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {canteen.floors.map((floor, floorIndex) => (
                <m.div 
                  key={floor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1 + floorIndex * 0.1 + 0.5,
                    duration: 0.5
                  }}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {floor.name}
                  </h3>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {floor.windows.map((window, windowIndex) => (
                      <m.div
                        key={window.id}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.1 + floorIndex * 0.1 + windowIndex * 0.1 + 0.6,
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                          <span className="font-medium text-gray-900">
                            {window.name}
                          </span>
                          <m.span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                              window.status === 'open'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                            animate={{
                              scale: window.status === 'open' ? [1, 1.1, 1] : 1
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                          >
                            {window.status === 'open' ? '营业中' : '已关闭'}
                          </m.span>
                        </div>
                        <div className="space-y-2">
                          <m.div 
                            className="flex items-center justify-between text-sm bg-white rounded-md px-3 py-1.5"
                            whileHover={{ scale: 1.02, y: -1 }}
                          >
                            <span className="text-gray-600">等待人数</span>
                            <span className="font-medium text-gray-900">
                              {window.waitingCount}人
                            </span>
                          </m.div>
                          <m.div 
                            className="text-sm text-gray-600 bg-white rounded-md px-3 py-1.5"
                            whileHover={{ scale: 1.02, y: -1 }}
                          >
                            <div className="font-medium mb-1">热门菜品</div>
                            <div className="flex flex-wrap gap-1">
                              {window.popularDishes.map((dish, idx) => (
                                <span key={dish} className="text-gray-700">
                                  {dish}
                                  {idx < window.popularDishes.length - 1 && "、"}
                                </span>
                              ))}
                            </div>
                          </m.div>
                        </div>
                      </m.div>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </AnimatedCard>
      ))}
    </AnimatedContainer>
  );
};
