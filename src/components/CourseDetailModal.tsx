import { XMarkIcon, ChevronRightIcon, BookOpenIcon, StarIcon } from '@heroicons/react/24/outline';
import { AnimatedModal } from './AnimatedContainer';
import { CourseDetail } from '../types';

interface Props {
  course: CourseDetail;
  isOpen: boolean;
  onClose: () => void;
}

export const CourseDetailModal = ({ course, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black bg-opacity-25"
        onClick={onClose}
      />
      
      <AnimatedModal className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 mx-4 bg-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{course.name}</h2>
            <p className="mt-1 text-sm text-gray-500">{course.teacher}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* 课程信息 */}
        <div className="space-y-6">
          {/* 课程简介 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">课程简介</h3>
            <p className="text-sm text-gray-600">{course.description}</p>
          </div>

          {/* 考核方式 */}
          {course.assessment && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">考核方式</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-500 mb-1">平时成绩</div>
                  <div className="text-blue-600 font-medium">{course.assessment.assignments}%</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-500 mb-1">期中考试</div>
                  <div className="text-blue-600 font-medium">{course.assessment.midterm}%</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-500 mb-1">期末考试</div>
                  <div className="text-blue-600 font-medium">{course.assessment.final}%</div>
                </div>
              </div>
            </div>
          )}

          {/* 教材信息 */}
          {course.textbook && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">教材信息</h3>
              <div className="space-y-3">
                {course.textbook.map((book) => (
                  <div
                    key={book.isbn}
                    className="flex gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <BookOpenIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {book.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {book.author} • ISBN: {book.isbn}
                      </p>
                    </div>
                    {book.required && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        必修
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 课程评价 */}
          {course.reviews && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">历史评价</h3>
              <div className="space-y-3">
                {course.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{review.semester}</span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.comments}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 教学大纲 */}
          {course.syllabus && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">教学大纲</h3>
              <a
                href={course.syllabus}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
              >
                <span>查看详情</span>
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </AnimatedModal>
    </div>
  );
};
