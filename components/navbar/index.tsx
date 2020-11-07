import { MenuOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import { useState } from 'react'
import { Button } from '../button'
import { Logo } from '../logo'
import { SocialLinks } from '../social-links'
import { Menu } from './menu'
import styles from './navbar.module.scss'

function NavbarCenter({ children }: { children: JSX.Element }) {
  return <div className={styles.navbar__center}>{children}</div>
}

function NavbarLeft({ children }: { children: JSX.Element }) {
  return <div className={styles.navbar__left}>{children}</div>
}

function NavbarRight({ children }: { children: JSX.Element[] }) {
  return <div className={styles.navbar__right}>{children}</div>
}

function Navbar({
  variant = 'transparent',
}: {
  variant?: 'transparent' | 'white'
}): JSX.Element {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <nav className={styles.navbar}>
      <NavbarLeft>
        <Logo variant={variant === 'transparent' ? 'white' : 'blue'} />
      </NavbarLeft>
      <NavbarCenter>
        <Menu
          variant={variant === 'transparent' ? 'white' : 'black'}
          mode="horizontal"
          className={styles['navbar-menu']}
        />
      </NavbarCenter>
      <NavbarRight>
        <SocialLinks
          variant={variant === 'transparent' ? 'white' : 'black'}
          className={styles['navbar__social-links']}
        />
        <Button
          variant="transparent"
          className={styles['navbar-drawer-btn']}
          onClick={showDrawer}
          size="large"
          icon={
            <MenuOutlined
              style={{
                color: variant === 'transparent' ? '#ffffff' : '#18191f',
              }}
            />
          }
        />
      </NavbarRight>
      <Drawer
        title="Igreja B. de Esgueira"
        placement="right"
        onClose={onClose}
        visible={visible}
        className={styles['navbar-drawer-menu']}
        bodyStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Menu mode="vertical" variant="black" />
        <div className={styles['navbar-drawer-menu__follow-us']}>
          Siga-nos:
          <SocialLinks
            variant="black"
            className={styles['navbar-drawer-menu__follow-us__social-links']}
          />
        </div>
      </Drawer>
    </nav>
  )
}

export { Navbar }
