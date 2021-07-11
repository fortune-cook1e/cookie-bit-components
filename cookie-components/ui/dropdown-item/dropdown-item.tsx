import React, { CSSProperties, useState } from 'react'
import styles from './index.module.scss'
import { Popup } from '@fortune-cook1e/cookie-components.ui.popup'

export type DropdownItemProps = {
  /**
   * a text to be rendered in the component.
   */
  text?: string
  visible: boolean
}

const divStyle: CSSProperties = {
  width: '100px',
  height: '100px',
  background: 'lightblue'
}

export function DropdownItem({ visible }: DropdownItemProps) {
  // const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className={styles.dropdown_item}>
      <Popup
        position='top'
        round={false}
        wrapperClass={styles.dropdown_item__content}
        visible={visible}
        overlayStyle={{ position: 'absolute' }}
        overlayZIndex={9}
      >
        <div style={divStyle}>haha</div>
        <div style={divStyle}>haha</div>
        <div style={divStyle}>haha</div>
      </Popup>
    </div>
  )
}
