import { motion } from 'framer-motion';
import { mockCanteens } from '../mock/data';

export const Canteen = () => {
  const getCrowdLevelColor = (level: number) => {
    if (level >= 80) return 'text-red-500';
    if (level >= 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getCrowdLevelText = (level: number) => {
    if (level >= 80) return '拥挤';
    if (level >= 50) return '较忙';
    return '空闲';
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">食堂信息</h1>
      {mockCanteens.map((canteen) => (
        <motion.div
          key={canteen.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{canteen.name}</h2>
            <div className="flex items-center gap-2 bg-gray-50/80 px-3 py-1.5 rounded-lg">
              <span className="text-sm text-gray-600">拥挤度:</span>
              <span className={`font-medium ${getCrowdLevelColor(canteen.crowdLevel)}`}>
                {getCrowdLevelText(canteen.crowdLevel)}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm font-medium text-gray-600 mb-2">实时人流量</div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  canteen.crowdLevel >= 80
                    ? 'bg-red-500'
                    : canteen.crowdLevel >= 50
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}
                style={{ width: `${canteen.crowdLevel}%` }}
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm font-medium text-gray-600 mb-2">高峰时段</div>
            <div className="flex flex-wrap gap-2">
              {canteen.peakHours.map((hour) => (
                <span
                  key={hour}
                  className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700"
                >
                  {hour}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {canteen.floors.map((floor) => (
              <div key={floor.id}>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {floor.name}
                </h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {floor.windows.map((window) => (
                    <motion.div
                      key={window.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                        <span className="font-medium text-gray-900">
                          {window.name}
                        </span>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            window.status === 'open'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {window.status === 'open' ? '营业中' : '已关闭'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm bg-white/60 rounded-md px-3 py-1.5">
                          <span className="text-gray-600">等待人数</span>
                          <span className="font-medium text-gray-900">
                            {window.waitingCount}人
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 bg-white/60 rounded-md px-3 py-1.5">
                          <div className="font-medium mb-1">热门菜品</div>
                          <div className="flex flex-wrap gap-1">
                            {window.popularDishes.map((dish, idx) => (
                              <span key={dish} className="text-gray-700">
                                {dish}
                                {idx < window.popularDishes.length - 1 && "、"}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
