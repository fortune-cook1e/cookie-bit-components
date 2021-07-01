import React, { CSSProperties } from 'react'
import styles from './popup.module.scss'
import classnames from 'classnames'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { popupMotionVariants } from './popup.variants'
import { Overlay } from '@fortune-cook1e/cookie-components.ui.overlay'

export type Position = 'center' | 'top' | 'left' | 'bottom' | 'right'

export type PopupProps = {
  /**
   * 控制显示
   */
  visible: boolean
  /**
   * 是否展示遮罩层
   */
  overlay?: boolean
  /**
   * 弹出层方向
   */
  position?: Position
  /**
   * 是否需要圆角
   */
  round?: boolean // 是否需要圆角
  /**
   * style
   */
  wrapperStyle?: CSSProperties
  /**
   * 遮罩层层级
   */
  overlayZIndex?: number
  /**
   * 是否阻止滚动穿透
   */
  lockScroll?: boolean // 禁止滚动穿透
  /**
   * 点击overlay事件
   */
  onClickOverlay?: () => void
  children: React.ReactNode
}

export function Popup({
  visible = false,
  overlay = true,
  position = 'center',
  round = true,
  wrapperStyle = {},
  overlayZIndex = 1,
  lockScroll = true,
  onClickOverlay = () => {},
  children
}: PopupProps) {
  const renderOverlay = () => {
    if (overlay) {
      return (
        <Overlay
          visible={visible}
          zIndex={overlayZIndex}
          lockScroll={lockScroll}
          onClose={onClickOverlay}
        />
      )
    }
  }

  const renderPopup = () => {
    const positionClass = `popup__${position}`
    const roundClass = `popup__${position}-round`

    const popupZindex = +overlayZIndex + 1

    return (
      <AnimatePresence initial={false}>
        {visible && (
          <motion.div
            style={{ ...wrapperStyle, zIndex: popupZindex }}
            className={classnames({
              [styles.popup]: true,
              [styles[positionClass]]: true,
              [styles[roundClass]]: round
            })}
            variants={popupMotionVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            custom={position}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <>
      {renderOverlay()}
      {renderPopup()}
    </>
  )
}
