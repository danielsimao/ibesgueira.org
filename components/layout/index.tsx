import classnames from 'classnames'
import styles from './layout.module.scss'

function Header({
  children,
  variant = 'transparent',
}: {
  children: React.ReactNode
  variant?: 'white' | 'transparent'
}): JSX.Element {
  return (
    <header
      className={classnames(
        styles.layout__header,
        styles[`layout__header--${variant}`],
      )}
    >
      <div className={styles.layout__header__inner}>{children}</div>
    </header>
  )
}

function Content({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return (
    <main className={classnames(styles.layout__content, className)}>
      {children}
    </main>
  )
}
function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className={styles.layout}>{children}</div>
}

export { Layout, Header, Content }
