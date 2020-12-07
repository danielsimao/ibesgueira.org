import styles from './hero.module.scss'
import { Button, Block } from '../..'

function Hero(): JSX.Element {
  return (
    <Block className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__content__text}>
          Igreja Baptista de Esgueira
        </h1>
        <p className={styles['hero__content__sub-text']}>
          Uma igreja unida no Salvador, ligada como família e unânime em
          serviço.
        </p>
        <Button
          className={styles['hero__content__know-more-btn']}
          shape="round"
          size="large"
          type="primary"
        >
          Saber Mais
        </Button>
      </div>
    </Block>
  )
}

export { Hero }
