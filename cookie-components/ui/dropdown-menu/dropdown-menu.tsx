import React, {
  useEffect,
  useRef,
  useState,
  Children,
  cloneElement
} from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { OptionType } from '@fortune-cook1e/cookie-components.ui.dropdown-item'

export type DropdownMenuProps = {
  /**
   * children(DropdownItem)
   */
  children: any
}

// TODO: 目前下拉菜单只支持单个维度菜单选择，不支持多个

export function DropdownMenu({ children }: DropdownMenuProps) {
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

  const renderDropdownItem = () => {
    return Children.map(children, (child: any) => {
      const { props } = child

      const childProps = {
        ...props,
        offset,
        // TODO: 这里需要做区分多个item的visible
        visible,
        toggleVisible: (bool: boolean) => setVisible(bool)
      }
      return cloneElement(child, childProps)
    })
  }

  const renderTitle = () => {
    return Children.map(children, child => {
      const { options = [], value = '' } = child.props

      const matchedOption = options.find(
        (option: OptionType) => option.value === value
      )
      const title = matchedOption ? matchedOption.title : ''
      return (
        <div className={styles.dropdown_menu__title} onClick={handleTitleClick}>
          {title}
        </div>
      )
    })
  }

  const handleTitleClick = () => {
    setVisible(!visible)
  }

  return (
    <div ref={menuRef} className={styles.dropdown_menu}>
      <div
        className={classnames(styles.dropdown_menu__bar, {
          [styles.dropdown_menu__bar_open]: true
        })}
      >
        {renderTitle()}
        {renderDropdownItem()}
      </div>
    </div>
  )
}
