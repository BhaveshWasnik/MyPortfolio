export function slideInFromLeft(delay) {
  return {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
}
export function slideInFromRight(delay) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromTop(delay = 0.2) {
  return {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
} export const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};