// 课程时间安排
const COURSE_TIMES = [
  { start: "08:00", end: "08:45" }, // 第1节
  { start: "08:55", end: "09:40" }, // 第2节
  { start: "10:00", end: "10:45" }, // 第3节
  { start: "10:55", end: "11:40" }, // 第4节
  { start: "13:30", end: "14:15" }, // 第5节
  { start: "14:25", end: "15:10" }, // 第6节
  { start: "15:30", end: "16:15" }, // 第7节
  { start: "16:25", end: "17:10" }, // 第8节
  { start: "18:30", end: "19:15" }, // 第9节
  { start: "19:25", end: "20:10" }, // 第10节
  { start: "20:20", end: "21:05" }, // 第11节
  { start: "21:15", end: "22:00" }, // 第12节
];

export const getCourseTimes = (sections: number[]) => {
  if (!sections.length) return "";
  const minSection = Math.min(...sections);
  const maxSection = Math.max(...sections);
  return `${COURSE_TIMES[minSection - 1].start}-${COURSE_TIMES[maxSection - 1].end}`;
};

export const getSectionTime = (section: number) => {
  return COURSE_TIMES[section - 1];
};

export const formatTime = (time: string) => {
  return time.replace(":", ":");
};
