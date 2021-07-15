import React from 'react'
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
  onSelect?: (value: string) => void
}

export function DropdownItem({
  visible,
  options = [],
  offset,
  value,
  onSelect = () => {}
}: DropdownItemProps) {
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
              onSelect={() => onSelect(option.value)}
            />
          )
        })}
      </Popup>
    </div>
  )
}
