import React, { useState, CSSProperties } from 'react'
import { DropdownMenu } from './dropdown-menu'
import { DropdownItem } from '@fortune-cook1e/cookie-components.ui.dropdown-item'

const style: CSSProperties = {
  width: '100px',
  height: '100px',
  border: '1px solid #000',
  margin: '0 auto 20px'
}

export const BasicDropdownMenu = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div>
      <div style={style} onClick={() => setVisible(!visible)}></div>
      <div style={style}>state:{visible}</div>
      <div style={style}></div>
      <DropdownMenu>
        <DropdownItem visible={visible} />
      </DropdownMenu>
    </div>
  )
}
