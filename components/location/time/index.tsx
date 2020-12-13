import { Button } from 'antd'
import getConfig from 'next/config'
import { Block } from '../..'
import styles from './time.module.scss'

function Time(): JSX.Element {
  const { publicRuntimeConfig } = getConfig()

  return (
    <Block
      className={styles['time-container']}
      innerClassName={styles.time}
      centered
    >
      <img
        alt=""
        src="../assets/inside-church.jpg"
        className={styles.time__picture}
      />
      <div className={styles.time__unit}>
        <h3 className={styles.time__unit__headline}>Horário</h3>
        <h5 className={styles.time__unit__day}>DOMINGO</h5>
        <p className={styles.time__unit__schedule}>10.00h - Escola Dominical</p>
        <p className={styles.time__unit__schedule}>
          11.00h - Culto de Pregação
        </p>
        <h5 className={styles.time__unit__day}>Quinta</h5>
        <p className={styles.time__unit__schedule}>
          19.00h - Estudo Bíblico e Oração
        </p>
        <Button
          onClick={() => {
            window.open(publicRuntimeConfig.googleMapUrl, '_blank', 'noopener')
          }}
          type="ghost"
          size="large"
        >
          Obter direções
        </Button>
      </div>
    </Block>
  )
}

export { Time }
