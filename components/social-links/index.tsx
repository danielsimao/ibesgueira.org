import Icon from '@ant-design/icons'
import classnames from 'classnames'
import getConfig from 'next/config'
import { CSSProperties } from 'react'
import styles from './social-links.module.scss'

const FacebookSvg = () => (
  <svg viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.2281 14.625L13.9375 10H9.5V7C9.5 5.73438 10.1188 4.5 12.1063 4.5H14.125V0.5625C14.125 0.5625 12.2938 0.25 10.5438 0.25C6.8875 0.25 4.5 2.46563 4.5 6.475V10H0.4375V14.625H4.5V25.8062C5.31563 25.9344 6.15 26 7 26C7.85 26 8.68437 25.9344 9.5 25.8062V14.625H13.2281Z"
      fill="currentColor"
    />
  </svg>
)

const YoutubeSvg = () => (
  <svg viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6677 0.499581C16.4021 0.701091 16.9804 1.29484 17.1767 2.04884C17.5333 3.41539 17.5333 6.2667 17.5333 6.2667C17.5333 6.2667 17.5333 9.1179 17.1767 10.4845C16.9804 11.2386 16.4021 11.8323 15.6677 12.0339C14.3369 12.4 9.00001 12.4 9.00001 12.4C9.00001 12.4 3.66309 12.4 2.33218 12.0339C1.59783 11.8323 1.0195 11.2386 0.823232 10.4845C0.466675 9.1179 0.466675 6.2667 0.466675 6.2667C0.466675 6.2667 0.466675 3.41539 0.823232 2.04884C1.0195 1.29484 1.59783 0.701091 2.33218 0.499581C3.66309 0.133362 9.00001 0.133362 9.00001 0.133362C9.00001 0.133362 14.3369 0.133362 15.6677 0.499581ZM7.40002 3.86664V9.19997L11.6667 6.53341L7.40002 3.86664Z"
      fill="currentColor"
    />
  </svg>
)

function SocialIcon({
  style,
  children,
  href,
  variant,
}: {
  variant: 'white' | 'black'
  href: string
  style?: CSSProperties
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={style}
        className={classnames(styles['social-links__icon'], {
          [styles[`social-links__icon--${variant}`]]: variant,
        })}
      >
        <Icon component={children} />
      </a>
    </li>
  )
}

function SocialLinks({
  className,
  variant = 'white',
}: {
  className?: string
  variant?: 'black' | 'white'
}): JSX.Element {
  const { publicRuntimeConfig } = getConfig()

  return (
    <ul className={classnames(styles['social-links'], className)}>
      <SocialIcon variant={variant} href={publicRuntimeConfig.facebookUrl}>
        {FacebookSvg}
      </SocialIcon>
      <SocialIcon variant={variant} href={publicRuntimeConfig.youtubeUrl}>
        {YoutubeSvg}
      </SocialIcon>
    </ul>
  )
}

export { SocialLinks }
