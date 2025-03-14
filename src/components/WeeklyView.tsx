import { useState, useRef, useEffect } from "react";
import { motion as m } from "framer-motion";
import { Course } from "../types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useResponsive } from "../hooks/useResponsive";
import { getSectionTime, getCourseTimes } from "../utils/timeUtils";

interface Props {
  courses: Course[];
  currentWeek?: number;
  onCourseClick?: (course: Course) => void;
}

const WEEKDAYS = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const SECTIONS = Array.from({ length: 12 }, (_, i) => i + 1);
const MIN_WIDTHS = {
  phone: 640,
  tablet: 768,
  desktop: 800
};

export const WeeklyView = ({ courses, currentWeek = 1, onCourseClick }: Props) => {
  const { isPhone, isTablet } = useResponsive();
  const [week, setWeek] = useState(currentWeek);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && week < 16) {
        setWeek(w => w + 1);
      } else if (diff < 0 && week > 1) {
        setWeek(w => w - 1);
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" && week > 1) {
      setWeek(w => w - 1);
    } else if (e.key === "ArrowRight" && week < 16) {
      setWeek(w => w + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [week]);

  const filteredCourses = courses.filter(course => course.weeks.includes(week));

  // 响应式调整单元格高度
  const getCellHeight = () => {
    if (isPhone) return 56; // 3.5rem
    if (isTablet) return 64; // 4rem
    return 80; // 5rem
  };

  // 响应式调整字体大小
  const getFontSize = (size: "xs" | "sm" | "base") => {
    if (isPhone) {
      switch (size) {
        case "xs": return "text-[10px]";
        case "sm": return "text-xs";
        case "base": return "text-sm";
      }
    }
    return `text-${size}`;
  };

  const cellHeight = getCellHeight();
  const minWidth = isPhone ? MIN_WIDTHS.phone : isTablet ? MIN_WIDTHS.tablet : MIN_WIDTHS.desktop;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={`${getFontSize("base")} font-semibold text-gray-900`}>
          第 {week} 周
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => week > 1 && setWeek(w => w - 1)}
            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
            disabled={week === 1}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => week < 16 && setWeek(w => w + 1)}
            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
            disabled={week === 16}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="overflow-x-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div style={{ minWidth: `${minWidth}px` }} className="w-full">
          <div className="grid grid-cols-[60px_repeat(7,1fr)] border-b">
            <div className={`p-2 text-center ${getFontSize("sm")} text-gray-500`}>
              节次
            </div>
            {WEEKDAYS.map(day => (
              <div key={day} className={`p-2 text-center font-medium ${getFontSize("sm")}`}>
                {day}
              </div>
            ))}
          </div>

          <div className="relative grid grid-cols-[60px_repeat(7,1fr)]">
            {/* 时间段 */}
            {SECTIONS.map(section => {
              const time = getSectionTime(section);
              return (
                <div
                  key={section}
                  style={{ height: `${cellHeight}px` }}
                  className={`border-b ${getFontSize("sm")} text-gray-500 flex flex-col items-center justify-center`}
                >
                  <span>{section}</span>
                  <span className={`${getFontSize("xs")} text-gray-400`}>
                    {time.start}
                  </span>
                </div>
              );
            })}

            {/* 课程网格背景 */}
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                style={{ gridColumn: i + 2 }}
                className="row-span-full border-l border-b"
              />
            ))}

            {/* 课程卡片 */}
            {filteredCourses.map(course => {
              const minSection = Math.min(...course.section);
              const sectionCount = course.section.length;

              return (
                <m.button
                  key={course.id}
                  className="absolute w-[calc(100%-8px)] mx-1 rounded-lg bg-blue-50 p-2 cursor-pointer hover:bg-blue-100 transition-colors"
                  style={{
                    gridColumn: course.weekday + 2,
                    height: `${sectionCount * cellHeight}px`,
                    top: `${(minSection - 1) * cellHeight}px`
                  }}
                  onClick={() => onCourseClick?.(course)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="h-full flex flex-col text-left">
                    <span className={`font-medium ${getFontSize("sm")} text-blue-700 line-clamp-2`}>
                      {course.name}
                    </span>
                    <span className={`${getFontSize("xs")} text-blue-600 mt-1`}>
                      {course.teacher}
                    </span>
                    <div className={`${getFontSize("xs")} text-blue-600 mt-auto flex flex-col`}>
                      <span>📍 {course.location}</span>
                      <span>⏰ {getCourseTimes(course.section)}</span>
                    </div>
                  </div>
                </m.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
