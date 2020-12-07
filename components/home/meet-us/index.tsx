import { ArrowRightOutlined } from '@ant-design/icons'
import styles from './meet-us.module.scss'
import { Block, Button, Highlight } from '../..'

function MeetUs(): JSX.Element {
  return (
    <Block centered>
      <div className={styles['meet-us']}>
        <div className={styles['meet-us__gallery']}>
          <div className={styles['meet-us__gallery__picture-frame']}>
            <img
              alt=""
              className={styles['meet-us__gallery__picture-frame__picture']}
              src="../assets/pic1.jpg"
            />
          </div>
          <div
            style={{ height: '40%', alignSelf: 'flex-end' }}
            className={styles['meet-us__gallery__picture-frame']}
          >
            <img
              alt=""
              className={styles['meet-us__gallery__picture-frame__picture']}
              src="../assets/pic2.jpg"
            />
          </div>
          <div
            style={{ width: '30%', height: '40%', alignSelf: 'flex-start' }}
            className={styles['meet-us__gallery__picture-frame']}
          >
            <img
              alt=""
              className={styles['meet-us__gallery__picture-frame__picture']}
              src="../assets/pic4.jpg"
            />
          </div>
          <div
            style={{ width: '70%' }}
            className={styles['meet-us__gallery__picture-frame']}
          >
            <img
              alt=""
              className={styles['meet-us__gallery__picture-frame__picture']}
              src="../assets/pic8.jpg"
            />
          </div>
        </div>
        <div className={styles['meet-us__content']}>
          <h3 className={styles['meet-us__content__headline']}>
            ✉️ Um convite <Highlight>para si</Highlight>
          </h3>
          <p className={styles['meet-us__content__description']}>
            Cerca de 50 milhões de crentes baptistas, dispersos pelo mundo,
            estão empenhados em ser “Sal da Terra e Luz do mundo” (Mateus
            5:13-14).
          </p>
          <p className={styles['meet-us__content__description']}>
            Convidamos-o a vir ouvir a mensagem bíblica e avaliar a sua
            realidade e eficácia. A entrada (e saída) nos locais de culto das
            Igrejas Baptistas é livre! <em>Vinde e Vêde</em>.
          </p>
          <div>
            <Button
              type="primary"
              size="large"
              className={styles['meet-us__content__btn']}
            >
              Visite-nos <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </Block>
  )
}

export { MeetUs }
