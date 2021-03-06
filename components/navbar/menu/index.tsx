import { Menu as AntMenu } from 'antd'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import styles from './menu.module.scss'
import { MenuItem } from '../menu-item'

interface MenuProps {
  className?: string
  variant?: 'white' | 'black'
  mode: 'horizontal' | 'vertical'
  selectedKeys?: boolean
}

function Menu({
  className,
  variant,
  mode,
  selectedKeys = true,
}: MenuProps): JSX.Element {
  const router = useRouter()

  function handleClick(e) {
    router.push(e.key)
  }
  return (
    <AntMenu
      className={classnames(
        styles.menu,
        styles[`menu--${variant}`],
        styles[`menu--${mode}`],
        className,
      )}
      selectedKeys={selectedKeys ? [router.pathname] : undefined}
      onClick={handleClick}
      mode={mode}
    >
      <MenuItem label="Local & Horas" key="/location" />
      {/* <MenuItem label="Sobre Nós" key="/about" /> */}
    </AntMenu>
  )
}

export { Menu }
