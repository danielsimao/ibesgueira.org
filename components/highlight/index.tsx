import styles from './highlight.module.scss'

interface HightlightProps {
  children: React.ReactNode
}

function Highlight({ children }: HightlightProps): JSX.Element {
  return <span className={styles.highlight}>{children}</span>
}

export { Highlight }
