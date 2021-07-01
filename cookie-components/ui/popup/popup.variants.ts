import { Variants } from 'framer-motion'
import { Position } from './popup'

export const popupMotionVariants: Variants = {
  initial: (position: Position) => {
    let initialCss = {}
    if (position === 'center') {
      initialCss = {
        opacity: 0
      }
    } else {
      const dir = ['top', 'bottom'].includes(position) ? 'y' : 'x'
      const displacement = ['right', 'bottom'].includes(position) ? '100%' : '-100%'

      initialCss = {
        [dir]: displacement
      }
    }

    return initialCss
  },
  animate: (position: Position) => {
    if (position === 'center') {
      return {
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    }

    const dir = ['top', 'bottom'].includes(position) ? 'y' : 'x'

    return {
      [dir]: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1]
      }
    }
  },
  exit: (position: Position) => {
    if (position === 'center') {
      return {
        opacity: 0
      }
    }
    const dir = ['top', 'bottom'].includes(position) ? 'y' : 'x'
    const displacement = ['right', 'bottom'].includes(position) ? '100%' : '-100%'
    return {
      [dir]: displacement,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1]
      }
    }
  }
}
