import React from 'react'
import styles from './index.module.scss'
import clsx from 'classnames'

export type OptionProps = {
  title: string
  value: string
  active: boolean
  onSelect: (val: string) => void
}

export function Option({
  title,
  value,
  active,
  onSelect = () => {}
}: OptionProps) {
  return (
    <div
      className={clsx(styles.option, {
        [styles.option_active]: active
      })}
      onClick={() => onSelect(value)}
    >
      <div className={styles.option__title}>{title}</div>
      <div className={styles.option__icon}></div>
    </div>
  )
}
