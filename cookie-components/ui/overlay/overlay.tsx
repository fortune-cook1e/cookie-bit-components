import React, { useState, useMemo, CSSProperties, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './overlay.module.scss'

export type OverlayProps = {
  visible: boolean

  zIndex?: number

  style?: CSSProperties

  onClose?: () => void

  lockScroll?: boolean

  children?: React.ReactNode
}

export function Overlay({
  visible,
  zIndex = 1,
  style,
  lockScroll = true,
  onClose = () => {},
  children
}: OverlayProps) {
  const overlayStyle: CSSProperties = useMemo(() => {
    return {
      ...style,
      zIndex
    }
  }, [zIndex])

  const handleTouch = (e: Event): void => {
    e.preventDefault()
  }

  useEffect(() => {
    // FIXBUG: 解决滚动穿透
    if (lockScroll && visible) {
      document.body.addEventListener('touchmove', handleTouch, {
        passive: false
      })
    }
    return () => {
      document.body.removeEventListener('touchmove', handleTouch)
    }
  }, [visible, lockScroll])

  const handleClose = (e: React.MouseEvent): void => {
    e.preventDefault()
    onClose()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.overlay}
          style={overlayStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
