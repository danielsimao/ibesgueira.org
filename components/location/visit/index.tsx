import { CSSProperties } from 'react'
import { Block } from '../..'
import styles from './visit.module.scss'

// desktop
const pic1: CSSProperties = { height: '100%', padding: '50px 30px 60px 0' }
const pic2: CSSProperties = { height: '70%', padding: '0 30px 30px 0' }
const pic3: CSSProperties = { height: '30%', padding: '0 0 0 40px' }
const pic4: CSSProperties = { height: '50%', padding: '30px 30px 30px 0' }
const pic5: CSSProperties = { height: '50%', padding: '0px 50px 40px 30px' }
const pic6: CSSProperties = { height: '30%', padding: '10px 30px 0 30px' }
const pic7: CSSProperties = { height: '70%', padding: '30px 0 30px 0' }
const pic8: CSSProperties = { height: '60%', padding: '0 30px 30px 30px' }
// tablet
const pic9: CSSProperties = { height: '40%', padding: '0 30px 0 30px' }

function Visit(): JSX.Element {
  return (
    <Block centered>
      <div className={styles.visit}>
        <div className={styles.visit__content}>
          <h3 className={styles.visit__content__headline}>
            Venha nos conhecer
          </h3>
          <div className={styles.visit__content__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            scelerisque at quam congue posuere libero in sit quam. Consequat,
            scelerisque non tincidunt sit lectus senectus.
          </div>
        </div>
        <div className={styles.visit__gallery}>
          <div className={styles.visit__gallery__col}>
            <div
              style={pic1}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
          </div>
          <div className={styles.visit__gallery__col}>
            <div
              style={pic2}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
            <div
              style={pic3}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
          </div>
          <div className={styles.visit__gallery__col}>
            <div
              style={pic4}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
            <div
              style={pic5}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
          </div>
          <div className={styles.visit__gallery__col}>
            <div
              style={pic6}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
            <div
              style={pic7}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
          </div>
          <div className={styles.visit__gallery__col}>
            <div
              style={pic8}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
            <div
              style={pic9}
              className={styles['visit__gallery__col__picture-frame']}
            >
              <img alt="" src="../assets/pic1.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Block>
  )
}

export { Visit }
