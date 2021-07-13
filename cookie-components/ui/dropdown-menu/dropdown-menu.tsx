import React, {
  useEffect,
  useRef,
  useState,
  Children,
  cloneElement
} from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { OptionProps } from '../dropdown-item/option'

export type DropdownMenuProps = {
  /**
   * a text to be rendered in the component.
   */
  children: React.ReactNode

  value: string

  onChange?: (val: string) => void
}

export function DropdownMenu({
  children,
  value,
  onChange = () => {}
}: DropdownMenuProps) {
  const [visible, setVisible] = useState<boolean>(false)
  const [offset, setOffset] = useState<number>(2000)
  const menuRef = useRef(null)
  useEffect(() => {
    if (menuRef) {
      // 动态算出当前父元素的top,left,height 等数值 用于子元素定位
      const menuDiv = menuRef.current.getBoundingClientRect()
      const { height, top } = menuDiv
      setOffset(height + top)
    }
  }, [menuRef])

  const renderDropdownItem = () => {}

  const handleChange = (value: string) => {
    onChange(value)
  }

  return (
    <div ref={menuRef} className={styles.dropdown_menu}>
      <div
        className={classnames(styles.dropdown_menu__bar, {
          [styles.dropdown_menu__bar_open]: true
        })}
      >
        {Children.map(children, (child: any) => {
          const { props } = child

          const childProps = {
            ...props,
            offset,
            activeValue: value,
            visible:
              visible &&
              !!props.options.find(
                (option: OptionProps) => option.value === value
              ),

            // TODO: 需要处理visible显示与隐藏问题
            onSelect: handleChange
          }

          console.log({ childProps })

          return cloneElement(child, childProps)
        })}
      </div>
    </div>
  )
}
