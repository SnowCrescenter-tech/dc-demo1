import type { Course, BusRoute, Venue, Event, Canteen } from '../types';

export const mockCourses: Course[] = [
  {
    id: '1',
    name: '高等数学A(1)',
    teacher: '张明教授',
    location: '理科楼A-101',
    weekday: 1,
    section: [1, 2],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: '2',
    name: '大学物理',
    teacher: '李浩教授',
    location: '理科楼B-203',
    weekday: 2,
    section: [3, 4],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: '3',
    name: '程序设计基础',
    teacher: '王工教授',
    location: '计算机楼204',
    weekday: 3,
    section: [1, 2, 3],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: '4',
    name: '大学英语(3)',
    teacher: '刘芳',
    location: '外语楼A-305',
    weekday: 4,
    section: [5, 6],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: '5',
    name: '电路原理',
    teacher: '陈力教授',
    location: '工科楼A-401',
    weekday: 1,
    section: [5, 6, 7],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: '6',
    name: '概率论',
    teacher: '周统教授',
    location: '理科楼A-202',
    weekday: 2,
    section: [7, 8],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: '7',
    name: '数据结构',
    teacher: '郭明教授',
    location: '计算机楼302',
    weekday: 3,
    section: [5, 6, 7],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: '8',
    name: '马克思主义基本原理',
    teacher: '赵哲教授',
    location: '人文楼103',
    weekday: 5,
    section: [3, 4],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: '9',
    name: '物理实验(1)',
    teacher: '钱物教授',
    location: '实验楼B-201',
    weekday: 4,
    section: [1, 2, 3, 4],
    weeks: [2, 4, 6, 8, 10, 12, 14, 16]
  },
  {
    id: '10',
    name: '体育(网球)',
    teacher: '孙教练',
    location: '网球场',
    weekday: 5,
    section: [5, 6],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  }
];

export const mockBusRoutes: BusRoute[] = [
  {
    id: '1',
    name: '校园环线',
    stations: [
      { name: '图书馆站', location: { lat: 30.12345, lng: 120.12345 } },
      { name: '学生宿舍站', location: { lat: 30.12355, lng: 120.12355 } },
      { name: '教学区站', location: { lat: 30.12365, lng: 120.12365 } },
      { name: '食堂站', location: { lat: 30.12375, lng: 120.12375 } },
      { name: '体育馆站', location: { lat: 30.12385, lng: 120.12385 } }
    ],
    currentLocation: { lat: 30.12345, lng: 120.12345 },
    estimatedTime: 5,
    capacity: { current: 20, total: 50 }
  },
  {
    id: '2',
    name: '校区快线',
    stations: [
      { name: '南校区', location: { lat: 30.13345, lng: 120.13345 } },
      { name: '中校区', location: { lat: 30.14345, lng: 120.14345 } },
      { name: '北校区', location: { lat: 30.15345, lng: 120.15345 } }
    ],
    currentLocation: { lat: 30.13345, lng: 120.13345 },
    estimatedTime: 15,
    capacity: { current: 35, total: 60 }
  },
  {
    id: '3',
    name: '高峰通勤线',
    stations: [
      { name: '地铁站', location: { lat: 30.16345, lng: 120.16345 } },
      { name: '南门', location: { lat: 30.16355, lng: 120.16355 } },
      { name: '教学区', location: { lat: 30.16365, lng: 120.16365 } }
    ],
    currentLocation: { lat: 30.16345, lng: 120.16345 },
    estimatedTime: 10,
    capacity: { current: 45, total: 55 }
  }
];

export const mockVenues: Venue[] = [
  {
    id: '1',
    name: '图书馆主馆',
    type: 'library',
    capacity: 2000,
    currentCount: 1200,
    status: 'busy',
    openTime: '08:00',
    closeTime: '22:00'
  },
  {
    id: '2',
    name: '篮球场A',
    type: 'basketball',
    capacity: 50,
    currentCount: 30,
    status: 'busy',
    openTime: '06:00',
    closeTime: '22:00'
  },
  {
    id: '3',
    name: '智慧教室101',
    type: 'classroom',
    capacity: 120,
    currentCount: 0,
    status: 'available',
    openTime: '08:00',
    closeTime: '22:00'
  },
  {
    id: '4',
    name: '报告厅',
    type: 'classroom',
    capacity: 300,
    currentCount: 280,
    status: 'busy',
    openTime: '08:00',
    closeTime: '22:00'
  },
  {
    id: '5',
    name: '足球场',
    type: 'basketball',
    capacity: 100,
    currentCount: 45,
    status: 'available',
    openTime: '06:00',
    closeTime: '22:00'
  },
  {
    id: '6',
    name: '自习室A',
    type: 'classroom',
    capacity: 80,
    currentCount: 75,
    status: 'full',
    openTime: '06:00',
    closeTime: '23:00'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: '校园文化节',
    description: '一年一度的校园文化节，包含歌唱比赛、舞蹈表演等多个精彩节目。',
    location: '大学生活动中心',
    startTime: '2024-04-01 19:00',
    endTime: '2024-04-01 21:30',
    organizer: '校团委学生会',
    tags: ['文化', '活动', '表演'],
    image: 'https://example.com/event1.jpg'
  },
  {
    id: '2',
    title: '人工智能前沿讲座',
    description: '邀请知名专家学者分享AI领域最新研究成果和发展趋势。',
    location: '综合楼报告厅',
    startTime: '2024-04-03 14:30',
    endTime: '2024-04-03 16:30',
    organizer: '计算机学院',
    tags: ['学术', '讲座', 'AI'],
    image: 'https://example.com/event2.jpg'
  },
  {
    id: '3',
    title: '春季运动会',
    description: '包含田径、球类等多个项目的综合性运动会。',
    location: '体育场',
    startTime: '2024-04-15 08:00',
    endTime: '2024-04-16 17:00',
    organizer: '体育部',
    tags: ['运动', '比赛', '全校活动'],
    image: 'https://example.com/event3.jpg'
  },
  {
    id: '4',
    title: '校园招聘会',
    description: '知名企业专场招聘会，提供实习和就业机会。',
    location: '就业指导中心',
    startTime: '2024-04-08 09:00',
    endTime: '2024-04-08 16:00',
    organizer: '就业指导中心',
    tags: ['招聘', '就业'],
    image: 'https://example.com/event4.jpg'
  },
  {
    id: '5',
    title: '社团嘉年华',
    description: '百团大战，展示各个社团特色活动。',
    location: '校园广场',
    startTime: '2024-04-20 10:00',
    endTime: '2024-04-20 17:00',
    organizer: '社团联合会',
    tags: ['社团', '展示', '活动'],
    image: 'https://example.com/event5.jpg'
  }
];

export const mockCanteens: Canteen[] = [
  {
    id: '1',
    name: '学生第一食堂',
    floors: [
      {
        id: 'f1',
        name: '一楼',
        windows: [
          {
            id: 'w1',
            name: '特色川菜窗口',
            waitingCount: 15,
            popularDishes: ['回锅肉', '宫保鸡丁', '麻婆豆腐'],
            status: 'open'
          },
          {
            id: 'w2',
            name: '面食窗口',
            waitingCount: 20,
            popularDishes: ['牛肉面', '阳春面', '炸酱面'],
            status: 'open'
          },
          {
            id: 'w3',
            name: '快餐窗口',
            waitingCount: 8,
            popularDishes: ['红烧排骨', '青椒肉丝'],
            status: 'open'
          }
        ]
      },
      {
        id: 'f2',
        name: '二楼',
        windows: [
          {
            id: 'w4',
            name: '粤式炖汤',
            waitingCount: 5,
            popularDishes: ['老火靓汤', '粥品'],
            status: 'open'
          },
          {
            id: 'w5',
            name: '铁板炒饭',
            waitingCount: 12,
            popularDishes: ['牛肉炒饭', '招牌炒饭'],
            status: 'open'
          }
        ]
      }
    ],
    crowdLevel: 85,
    peakHours: ['11:30', '17:30']
  },
  {
    id: '2',
    name: '教工食堂',
    floors: [
      {
        id: 'f1',
        name: '一层',
        windows: [
          {
            id: 'w1',
            name: '自助餐区',
            waitingCount: 5,
            popularDishes: ['营养套餐', '素食套餐'],
            status: 'open'
          },
          {
            id: 'w2',
            name: '点餐区',
            waitingCount: 3,
            popularDishes: ['红烧牛肉', '清蒸鱼'],
            status: 'open'
          }
        ]
      }
    ],
    crowdLevel: 45,
    peakHours: ['11:45', '17:45']
  },
  {
    id: '3',
    name: '清真食堂',
    floors: [
      {
        id: 'f1',
        name: '主食堂',
        windows: [
          {
            id: 'w1',
            name: '拉面窗口',
            waitingCount: 8,
            popularDishes: ['牛肉拉面', '羊肉泡馍'],
            status: 'open'
          },
          {
            id: 'w2',
            name: '烤肉窗口',
            waitingCount: 15,
            popularDishes: ['烤羊肉串', '烤牛肉'],
            status: 'open'
          }
        ]
      }
    ],
    crowdLevel: 60,
    peakHours: ['11:30', '17:30']
  }
];
