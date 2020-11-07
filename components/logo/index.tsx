import Link from 'next/link'
import styles from './logo.module.scss'

interface LogoProps {
  variant: 'white' | 'black' | 'blue'
}

const variants: Record<LogoProps['variant'], string> = {
  black: '../assets/logo-black.png',
  blue: '../assets/logo-blue.png',
  white: '../assets/logo-white.png',
}

function Logo({ variant }: LogoProps): JSX.Element {
  return (
    <Link href="/">
      <img alt="logo" src={variants[variant]} className={styles.logo} />
    </Link>
  )
}

export { Logo }
