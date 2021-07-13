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
  const [value, setValue] = useState<string>('haha')

  const optionOne = [
    {
      value: 'haha',
      title: '选择一'
    },
    {
      value: 'hahss',
      title: '选择二'
    },
    {
      value: 'ha哈哈',
      title: '选择三'
    }
  ]

  const handleClick = (val: string) => {
    setValue(val)
  }

  return (
    <div>
      <div style={style}></div>
      <div style={style}>state:{visible}</div>
      <div style={style}></div>
      <DropdownMenu value={value} onChange={handleClick}>
        <DropdownItem options={optionOne} />
      </DropdownMenu>
    </div>
  )
}
