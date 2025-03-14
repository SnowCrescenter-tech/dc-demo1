import { Variants } from 'framer-motion';

// 弹性过渡配置
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

// 流畅过渡配置
export const smoothTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.5,
};

// 页面切换动画
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// 卡片悬浮动画
export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: smoothTransition,
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: springTransition,
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

// 列表项动画（带交错效果）
export const listItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      ...smoothTransition,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// 模态框动画
export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// 流体背景动画
export const fluidBackgroundVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(0px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(8px)",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// 展开/收起动画
export const expandVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
      opacity: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
      opacity: {
        duration: 0.3,
        delay: 0.1,
        ease: [0, 0, 0.2, 1],
      },
    },
  },
};
