import { motion as m } from 'framer-motion';
import { mockVenues } from '../mock/data';
import { ClockIcon, UsersIcon } from '@heroicons/react/24/outline';
import { AnimatedContainer, AnimatedCard } from '../components/AnimatedContainer';

export const Venues = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800';
      case 'full':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return '空闲';
      case 'busy':
        return '繁忙';
      case 'full':
        return '已满';
      default:
        return '未知';
    }
  };

  const getOccupancyColor = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <AnimatedContainer>
      <m.h1 
        className="text-2xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        场地信息
      </m.h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {mockVenues.map((venue, index) => (
          <AnimatedCard key={venue.id}>
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <m.h3 
                    className="text-lg font-semibold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {venue.name}
                  </m.h3>
                  <m.span 
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(venue.status)}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  >
                    {getStatusText(venue.status)}
                  </m.span>
                </div>
                
                <div className="space-y-3 flex-1">
                  <m.div 
                    className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <ClockIcon className="h-4 w-4" />
                    <span>
                      {venue.openTime} - {venue.closeTime}
                    </span>
                  </m.div>

                  <m.div 
                    className="bg-gray-50 px-3 py-2 rounded-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="flex items-center justify-between text-sm mb-1">
                      <div className="flex items-center gap-2 text-gray-600">
                        <UsersIcon className="h-4 w-4" />
                        <span>使用情况</span>
                      </div>
                      <m.span 
                        className={`font-medium ${getOccupancyColor(venue.currentCount, venue.capacity)}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {venue.currentCount}/{venue.capacity}
                      </m.span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <m.div
                        className={`h-full rounded-full transition-all duration-500 ${
                          venue.status === 'full' ? 'bg-red-500' :
                          venue.status === 'busy' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: venue.currentCount / venue.capacity,
                          transition: {
                            delay: index * 0.1 + 0.4,
                            duration: 0.8,
                            ease: [0.4, 0, 0.2, 1]
                          }
                        }}
                        style={{
                          transformOrigin: 'left'
                        }}
                      />
                    </div>
                  </m.div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedContainer>
  );
};
