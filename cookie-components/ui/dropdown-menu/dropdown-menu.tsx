import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

export type DropdownMenuProps = {
  /**
   * a text to be rendered in the component.
   */
  children?: React.ReactNode
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const menuRef = useRef(null)
  useEffect(() => {
    if (menuRef) {
      const menuDiv = menuRef.current.getBoundingClientRect()
      console.log({ menuDiv })
    }
  }, [menuRef])

  const renderDropdownItem = () => {}

  return (
    <div ref={menuRef} className={styles.dropdown_menu}>
      <div
        className={classnames(styles.dropdown_menu__bar, {
          [styles.dropdown_menu__bar_open]: true
        })}
      >
        {children}
      </div>
    </div>
  )
}
