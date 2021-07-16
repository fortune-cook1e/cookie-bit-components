import React, { useState } from 'react'
import styles from './index.module.scss'
import { Popup } from '@fortune-cook1e/cookie-components.ui.popup'
import { Option } from './option'

export type OptionType = {
  value: string
  title: string
}

export type DropdownItemProps = {
  visible?: boolean
  options: OptionType[]
  offset?: number
  value: string
  onChange?: (value: string) => void
  toggleVisible?: (bool: boolean) => void
}

export function DropdownItem({
  visible = false,
  options = [],
  offset,
  value,
  onChange = () => {},
  toggleVisible
}: DropdownItemProps) {
  const handleChange = (value: string) => {
    onChange(value)
    toggleVisible(false)
  }

  return (
    <div className={styles.dropdown_item} style={{ top: `${offset}px` }}>
      <Popup
        position='top'
        round={false}
        wrapperClass={styles.dropdown_item__content}
        visible={visible}
        overlayStyle={{ position: 'absolute' }}
        overlayZIndex={9}
      >
        {options.map((option: OptionType) => {
          return (
            <Option
              key={option.value}
              value={option.value}
              title={option.title}
              active={option.value === value}
              onSelect={handleChange}
            />
          )
        })}
      </Popup>
    </div>
  )
}
