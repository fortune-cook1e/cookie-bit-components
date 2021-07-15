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
  const [value2, setValue2] = useState<string>('four')

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

  const optionTwo = [
    {
      value: 'four',
      title: '选择四'
    },
    {
      value: 'five',
      title: '选择五'
    },
    {
      value: 'six',
      title: '选择六'
    }
  ]

  return (
    <div>
      <div style={style}></div>
      <div style={style}>state:{visible}</div>
      <div style={style}></div>
      <DropdownMenu>
        <DropdownItem value={value} options={optionOne} />
        <DropdownItem value={value2} options={optionTwo} />
      </DropdownMenu>
    </div>
  )
}
