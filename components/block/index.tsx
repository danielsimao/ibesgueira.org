import classnames from 'classnames'
import styles from './block.module.scss'

interface Block {
  className?: string
  centered?: boolean
  paddless?: boolean
  children: React.ReactNode
}

function Block({
  centered = false,
  paddless,
  children,
  className,
}: Block): JSX.Element {
  return (
    <section
      className={classnames({
        [styles.block]: true,
        [styles['block--paddless']]: paddless,
        [className]: className,
      })}
    >
      <div
        className={classnames({
          [styles.block__inner]: true,
          [styles['block__inner--centered']]: centered,
        })}
      >
        {children}
      </div>
    </section>
  )
}

export { Block }
