import React from 'react'
import styles from './button.module.scss'

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string

  type: 'primary' | 'secondary'
}

export function Button({ text }: ButtonProps) {
  return <div className={styles.button}>{text}</div>
}
