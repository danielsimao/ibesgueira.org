import { Button as AntButton } from 'antd'
import { ButtonProps as AntButtonProps } from 'antd/lib/button'
import classnames from 'classnames'
import styles from './button.module.scss'

type ButtonProps = {
  variant?: 'transparent'
} & AntButtonProps

function Button({
  className,
  icon,
  variant,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <AntButton
      {...props}
      icon={icon}
      className={classnames(styles.btn, styles[`btn--${variant}`], className)}
    />
  )
}

export { Button }
