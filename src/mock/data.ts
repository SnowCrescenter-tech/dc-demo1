import type { Course, BusRoute, Venue, Event, Canteen, CourseDetail } from "../types";

export const mockCourseDetails: Record<string, Partial<CourseDetail>> = {
  "1": {
    description: "本课程主要讲授高等数学的基本概念、基本理论和基本方法，培养学生的抽象思维和逻辑推理能力。",
    assessment: {
      assignments: 30,
      midterm: 20,
      final: 50
    },
    textbook: [
      {
        name: "高等数学（第七版）",
        author: "同济大学数学系",
        isbn: "9787040396638",
        required: true
      },
      {
        name: "高等数学习题集",
        author: "同济大学数学系",
        isbn: "9787040396645",
        required: false
      }
    ],
    reviews: [
      {
        semester: "2023-2024学年第一学期",
        rating: 4,
        comments: "老师讲课非常认真，习题难度适中，课堂氛围很好。"
      },
      {
        semester: "2022-2023学年第二学期",
        rating: 5,
        comments: "张教授很负责任，讲解深入浅出，对学生很耐心。"
      }
    ],
    syllabus: "/files/syllabus/math101.pdf"
  },
  "2": {
    description: "本课程介绍物理学的基本原理和实验方法，包括力学、热学、电磁学等内容。",
    assessment: {
      assignments: 20,
      midterm: 30,
      final: 50
    },
    textbook: [
      {
        name: "大学物理（上册）",
        author: "赵凯华",
        isbn: "9787040213565",
        required: true
      }
    ],
    reviews: [
      {
        semester: "2023-2024学年第一学期",
        rating: 4,
        comments: "实验课很有趣，理论讲解清晰。"
      }
    ]
  },
  "3": {
    description: "本课程介绍计算机程序设计的基本概念和方法，培养学生的编程思维和问题解决能力。",
    assessment: {
      assignments: 40,
      midterm: 20,
      final: 40
    },
    textbook: [
      {
        name: "C程序设计语言（第2版）",
        author: "Brian W. Kernighan",
        isbn: "9787111128069",
        required: true
      },
      {
        name: "程序设计实践",
        author: "Brian W. Kernighan",
        isbn: "9787111123836",
        required: false
      }
    ],
    reviews: [
      {
        semester: "2023-2024学年第一学期",
        rating: 5,
        comments: "王教授的课程很实用，实践环节安排合理，助教辅导到位。"
      }
    ]
  },
  "4": {
    description: "本课程旨在提高学生的英语综合应用能力，特别是听说读写译的实践能力。",
    assessment: {
      assignments: 30,
      midterm: 30,
      final: 40
    },
    textbook: [
      {
        name: "新视野大学英语（第三版）",
        author: "郑树棠",
        isbn: "9787513556859",
        required: true
      }
    ],
    reviews: [
      {
        semester: "2023-2024学年第一学期",
        rating: 4,
        comments: "课堂活动丰富，口语训练机会多。"
      }
    ]
  },
  "5": {
    description: "本课程讲授电路分析的基本理论和方法，包括电路模型、基本定律和定理等内容。",
    assessment: {
      assignments: 25,
      midterm: 25,
      final: 50
    },
    textbook: [
      {
        name: "电路原理（第7版）",
        author: "邱关源",
        isbn: "9787121291029",
        required: true
      },
      {
        name: "电路原理习题解答",
        author: "邱关源",
        isbn: "9787121291036",
        required: false
      }
    ],
    reviews: [
      {
        semester: "2023-2024学年第一学期",
        rating: 4,
        comments: "理论讲解深入，但习题难度较大，需要多加练习。"
      }
    ],
    syllabus: "/files/syllabus/circuit101.pdf"
  }
};

export const mockCourses: Course[] = [
  {
    id: "1",
    name: "高等数学A(1)",
    teacher: "张明教授",
    location: "理科楼A-101",
    weekday: 1,
    section: [1, 2],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "2",
    name: "大学物理",
    teacher: "李浩教授",
    location: "理科楼B-203",
    weekday: 2,
    section: [3, 4],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "3",
    name: "程序设计基础",
    teacher: "王工教授",
    location: "计算机楼204",
    weekday: 3,
    section: [1, 2, 3],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "4",
    name: "大学英语(3)",
    teacher: "刘芳",
    location: "外语楼A-305",
    weekday: 4,
    section: [5, 6],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "5",
    name: "电路原理",
    teacher: "陈力教授",
    location: "工科楼A-401",
    weekday: 1,
    section: [5, 6, 7],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  }
];

export const mockBusRoutes: BusRoute[] = [
  {
    id: "1",
    name: "校园环线",
    stations: [
      { name: "图书馆站", location: { lat: 30.12345, lng: 120.12345 } },
      { name: "学生宿舍站", location: { lat: 30.12355, lng: 120.12355 } },
      { name: "教学区站", location: { lat: 30.12365, lng: 120.12365 } },
      { name: "食堂站", location: { lat: 30.12375, lng: 120.12375 } },
      { name: "体育馆站", location: { lat: 30.12385, lng: 120.12385 } }
    ],
    currentLocation: { lat: 30.12345, lng: 120.12345 },
    estimatedTime: 5,
    capacity: { current: 20, total: 50 }
  },
  {
    id: "2",
    name: "校区快线",
    stations: [
      { name: "南校区", location: { lat: 30.13345, lng: 120.13345 } },
      { name: "中校区", location: { lat: 30.14345, lng: 120.14345 } },
      { name: "北校区", location: { lat: 30.15345, lng: 120.15345 } }
    ],
    currentLocation: { lat: 30.13345, lng: 120.13345 },
    estimatedTime: 15,
    capacity: { current: 35, total: 60 }
  },
  {
    id: "3",
    name: "高峰通勤线",
    stations: [
      { name: "地铁站", location: { lat: 30.16345, lng: 120.16345 } },
      { name: "南门", location: { lat: 30.16355, lng: 120.16355 } },
      { name: "教学区", location: { lat: 30.16365, lng: 120.16365 } }
    ],
    currentLocation: { lat: 30.16345, lng: 120.16345 },
    estimatedTime: 10,
    capacity: { current: 45, total: 55 }
  }
];

export const mockVenues: Venue[] = [
  {
    id: "1",
    name: "图书馆主馆",
    type: "library",
    capacity: 2000,
    currentCount: 1200,
    status: "busy",
    openTime: "08:00",
    closeTime: "22:00"
  },
  {
    id: "2",
    name: "篮球场A",
    type: "basketball",
    capacity: 50,
    currentCount: 30,
    status: "busy",
    openTime: "06:00",
    closeTime: "22:00"
  },
  {
    id: "3",
    name: "智慧教室101",
    type: "classroom",
    capacity: 120,
    currentCount: 0,
    status: "available",
    openTime: "08:00",
    closeTime: "22:00"
  },
  {
    id: "4",
    name: "报告厅",
    type: "classroom",
    capacity: 300,
    currentCount: 280,
    status: "busy",
    openTime: "08:00",
    closeTime: "22:00"
  },
  {
    id: "5",
    name: "足球场",
    type: "basketball",
    capacity: 100,
    currentCount: 45,
    status: "available",
    openTime: "06:00",
    closeTime: "22:00"
  },
  {
    id: "6",
    name: "自习室A",
    type: "classroom",
    capacity: 80,
    currentCount: 75,
    status: "full",
    openTime: "06:00",
    closeTime: "23:00"
  }
];

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "校园文化节",
    description: "一年一度的校园文化节，包含歌唱比赛、舞蹈表演等多个精彩节目。",
    location: "大学生活动中心",
    startTime: "2024-04-01 19:00",
    endTime: "2024-04-01 21:30",
    organizer: "校团委学生会",
    tags: ["文化", "活动", "表演"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "2",
    title: "人工智能前沿讲座",
    description: "邀请知名专家学者分享AI领域最新研究成果和发展趋势。",
    location: "综合楼报告厅",
    startTime: "2024-04-03 14:30",
    endTime: "2024-04-03 16:30",
    organizer: "计算机学院",
    tags: ["学术", "讲座", "AI"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "3",
    title: "春季运动会",
    description: "包含田径、球类等多个项目的综合性运动会，展现青春活力。",
    location: "体育场",
    startTime: "2024-04-15 08:00",
    endTime: "2024-04-16 17:00",
    organizer: "体育部",
    tags: ["运动", "比赛", "全校活动"],
    image: "https://images.unsplash.com/photo-1700667879534-754ea67770d8?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "4",
    title: "创新创业论坛",
    description: "聚焦科技创新与创业实践，分享成功经验与未来展望。",
    location: "创新中心报告厅",
    startTime: "2024-04-20 14:00",
    endTime: "2024-04-20 17:00",
    organizer: "创新创业学院",
    tags: ["创新", "创业", "论坛"],
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "5",
    title: "社团嘉年华",
    description: "百团大战，展示各个社团特色活动。",
    location: "校园广场",
    startTime: "2024-04-20 10:00",
    endTime: "2024-04-20 17:00",
    organizer: "社团联合会",
    tags: ["社团", "展示", "活动"],
    image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?w=800&auto=format&fit=crop&q=60"
  }
];

export const mockCanteens: Canteen[] = [
  {
    id: "1",
    name: "学生第一食堂",
    floors: [
      {
        id: "f1",
        name: "一楼",
        windows: [
          {
            id: "w1",
            name: "特色川菜窗口",
            waitingCount: 15,
            popularDishes: ["回锅肉", "宫保鸡丁", "麻婆豆腐"],
            status: "open"
          },
          {
            id: "w2",
            name: "面食窗口",
            waitingCount: 20,
            popularDishes: ["牛肉面", "阳春面", "炸酱面"],
            status: "open"
          },
          {
            id: "w3",
            name: "快餐窗口",
            waitingCount: 8,
            popularDishes: ["红烧排骨", "青椒肉丝"],
            status: "open"
          }
        ]
      },
      {
        id: "f2",
        name: "二楼",
        windows: [
          {
            id: "w4",
            name: "粤式炖汤",
            waitingCount: 5,
            popularDishes: ["老火靓汤", "粥品"],
            status: "open"
          },
          {
            id: "w5",
            name: "铁板炒饭",
            waitingCount: 12,
            popularDishes: ["牛肉炒饭", "招牌炒饭"],
            status: "open"
          }
        ]
      }
    ],
    crowdLevel: 85,
    peakHours: ["11:30", "17:30"]
  },
  {
    id: "2",
    name: "教工食堂",
    floors: [
      {
        id: "f1",
        name: "一层",
        windows: [
          {
            id: "w1",
            name: "自助餐区",
            waitingCount: 5,
            popularDishes: ["营养套餐", "素食套餐"],
            status: "open"
          },
          {
            id: "w2",
            name: "点餐区",
            waitingCount: 3,
            popularDishes: ["红烧牛肉", "清蒸鱼"],
            status: "open"
          }
        ]
      }
    ],
    crowdLevel: 45,
    peakHours: ["11:45", "17:45"]
  },
  {
    id: "3",
    name: "清真食堂",
    floors: [
      {
        id: "f1",
        name: "主食堂",
        windows: [
          {
            id: "w1",
            name: "拉面窗口",
            waitingCount: 8,
            popularDishes: ["牛肉拉面", "羊肉泡馍"],
            status: "open"
          },
          {
            id: "w2",
            name: "烤肉窗口",
            waitingCount: 15,
            popularDishes: ["烤羊肉串", "烤牛肉"],
            status: "open"
          }
        ]
      }
    ],
    crowdLevel: 60,
    peakHours: ["11:30", "17:30"]
  }
];
