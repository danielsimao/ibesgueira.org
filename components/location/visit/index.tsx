import { Block } from '../..'
import styles from './visit.module.scss'

function Visit(): JSX.Element {
  return (
    <Block centered>
      <div className={styles.visit}>
        <div className={styles.visit__content}>
          <h3 className={styles.visit__content__headline}>
            Vamos louvar ao Senhor
          </h3>
          <div className={styles.visit__content__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            scelerisque at quam congue posuere libero in sit quam. Consequat,
            scelerisque non tincidunt sit lectus senectus.
          </div>
        </div>
        <div className={styles.visit__image} />
      </div>
    </Block>
  )
}

export { Visit }
