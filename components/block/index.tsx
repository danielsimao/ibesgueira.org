import classnames from 'classnames'
import styles from './block.module.scss'

interface Block {
  className?: string
  centered?: boolean
  children: React.ReactNode
}

function Block({ centered = true, children, className }: Block) {
  return (
    <div
      className={classnames(
        {
          [styles['block']]: true,
          [styles['block--centered']]: centered,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

export { Block }
