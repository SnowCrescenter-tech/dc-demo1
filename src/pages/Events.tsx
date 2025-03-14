import { motion as m } from 'framer-motion';
import { mockEvents } from '../mock/data';
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { AnimatedContainer, AnimatedListItem } from '../components/AnimatedContainer';

export const Events = () => {
  return (
    <AnimatedContainer>
      <m.h1 
        className="text-2xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        校园活动
      </m.h1>
      <div className="space-y-4">
        {mockEvents.map((event, index) => (
          <AnimatedListItem
            key={event.id}
            index={index}
            className="bg-white shadow-sm rounded-xl p-5 hover:shadow-md border border-gray-100 transition-all duration-200"
          >
            <div className="flex flex-col gap-4">
              {event.image && (
                <m.div
                  className="relative overflow-hidden rounded-lg aspect-[2/1]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <m.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </m.div>
              )}
              <div>
                <m.h3 
                  className="text-lg font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {event.title}
                </m.h3>
                <m.p 
                  className="mt-1 text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {event.description}
                </m.p>
                <div className="mt-3 flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm text-gray-600">
                  <m.div 
                    className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{new Date(event.startTime).toLocaleString('zh-CN')}</span>
                  </m.div>
                  <m.div 
                    className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <MapPinIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{event.location}</span>
                  </m.div>
                  <m.div 
                    className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <UserGroupIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{event.organizer}</span>
                  </m.div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {event.tags.map((tag, tagIndex) => (
                    <m.span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-100"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.3 + tagIndex * 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tag}
                    </m.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedListItem>
        ))}
      </div>
    </AnimatedContainer>
  );
};
