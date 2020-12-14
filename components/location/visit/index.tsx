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
        <h3 className={styles.visit__headline}>Vem nos conhecer</h3>
        {/* <p className={styles.visit__description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p> */}
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
