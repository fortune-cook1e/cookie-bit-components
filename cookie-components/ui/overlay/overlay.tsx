import React, { useState, useMemo, CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './overlay.module.scss'

export type OverlayProps = {
  visible: boolean

  zIndex?: number

  style?: CSSProperties

  onClick?: () => void

  children?: React.ReactNode
}

export function Overlay({
  visible,
  zIndex = 1,
  style,
  onClick = () => {},
  children
}: OverlayProps) {
  const overlayStyle: CSSProperties = useMemo(() => {
    return {
      ...style,
      zIndex
    }
  }, [zIndex])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.overlay}
          style={overlayStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClick}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
