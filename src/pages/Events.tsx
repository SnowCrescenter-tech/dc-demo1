import { motion } from 'framer-motion';
import { mockEvents } from '../mock/data';
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const Events = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">校园活动</h1>
      <div className="space-y-4">
        {mockEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200"
          >
            <div className="flex flex-col gap-4">
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{event.description}</p>
                <div className="mt-3 flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2 bg-gray-50/80 px-3 py-1.5 rounded-lg">
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{new Date(event.startTime).toLocaleString('zh-CN')}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50/80 px-3 py-1.5 rounded-lg">
                    <MapPinIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50/80 px-3 py-1.5 rounded-lg">
                    <UserGroupIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{event.organizer}</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-blue-50/80 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-100/50"
                    >
                      {tag}
                    </span>
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
