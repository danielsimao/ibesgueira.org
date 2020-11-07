import styles from './location-time.module.scss'
import { Block } from '../..'

function Time(): JSX.Element {
  return (
    <Block className={styles['location-time']}>
      <div className={styles['location-time__container']}>
        <div className={styles['location-time__container__time']}>
          <h3 className={styles['location-time__container__time__headline']}>
            Horário
          </h3>
          <h5 className={styles['location-time__container__time__day']}>
            DOMINGO
          </h5>
          <p className={styles['location-time__container__time__schedule']}>
            10.00h - Escola Dominical
          </p>
          <p className={styles['location-time__container__time__schedule']}>
            11.00h - Culto de Pregação
          </p>
          <h5 className={styles['location-time__container__time__day']}>
            Quinta
          </h5>
          <p className={styles['location-time__container__time__schedule']}>
            19.00h - Estudo Bíblico e Oração
          </p>
        </div>
        <div className={styles['location-time__container__location']} />
      </div>
    </Block>
  )
}

export { Time }
