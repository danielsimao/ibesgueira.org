import { Menu } from 'antd'
import styles from './menu-item.module.scss'

interface MenuItemProps {
  label: string
  key: string
}

function MenuItem({ label, key, ...rest }: MenuItemProps): JSX.Element {
  return (
    <Menu.Item {...rest} className={styles['menu-item']} key={key}>
      {label}
    </Menu.Item>
  )
}

export { MenuItem }
