import { Block } from '../..'
import styles from './location-hero.module.scss'

function Hero(): JSX.Element {
  return (
    <Block className={styles['location-hero']} centered>
      <div className={styles['location-hero__content']}>
        <div className={styles['location-hero__content__headline']}>
          Bem-vindo À Casa do Senhor
        </div>
        <div className={styles['location-hero__content__description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
          scelerisque at quam congue posuere libero in sit quam. Consequat,
          scelerisque non tincidunt sit lectus senectus.
        </div>
      </div>
      <div className={styles['location-hero__image']} />
    </Block>
  )
}

export { Hero }
