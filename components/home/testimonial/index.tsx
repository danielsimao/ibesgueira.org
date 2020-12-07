import styles from './testimonial.module.scss'
import { Block } from '../..'

function SingleTestimonial(): JSX.Element {
  return (
    <Block paddless centered className={styles['s-testimonial']}>
      <div className={styles['s-testimonial__content']}>
        <p className={styles['s-testimonial__content__feedback']}>
          <svg
            className={styles['s-testimonial__content__feedback__quote']}
            width="71"
            height="60"
            viewBox="0 0 71 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.6886 9.37093C60.1011 14.577 54.8074 20.6941 54.8074 27.7223C59.3201 28.243 63.0517 30.0868 66.0024 33.2538C68.953 36.4208 70.4283 40.0867 70.4283 44.2516C70.4283 48.6768 68.9964 52.4078 66.1325 55.4447C63.2687 58.4816 59.6672 60 55.3281 60C50.4682 60 46.2593 58.0261 42.7011 54.0781C39.143 50.1301 37.364 45.3363 37.364 39.6963C37.364 22.7765 46.8232 9.54452 65.742 0L70.6886 9.37093ZM33.3246 9.37093C22.6503 14.577 17.3132 20.6941 17.3132 27.7223C21.9127 28.243 25.6877 30.0868 28.6384 33.2538C31.589 36.4208 33.0643 40.0867 33.0643 44.2516C33.0643 48.6768 31.6107 52.4078 28.7034 55.4447C25.7962 58.4816 22.1731 60 17.8339 60C12.974 60 8.78679 58.0261 5.27206 54.0781C1.75734 50.1301 0 45.3363 0 39.6963C0 22.7765 9.41585 9.54452 28.2478 0L33.3246 9.37093Z"
              fill="currentColor"
            />
          </svg>
          Está à procura de um lugar para adorar? Somos uma igreja na zona de
          Aveiro com o objetivo principal de glorificar a Deus em tudo que
          fazemos além de ser uma luz resplandente na nossa comunidade. Os
          nossos cultos são tradicionais em natureza com hinos conservadores e
          pregação bíblica sã. Eu gostaria de lhe dar um convite caloroso para
          nos visitar. Creio que encontrará a igreja com uma atmosfera calorosa
          e amigável.
        </p>
        <div className={styles['s-testimonial__content__person-details']}>
          <p className={styles['s-testimonial__content__person-details__name']}>
            David Loop
          </p>
          <p
            className={
              styles['s-testimonial__content__person-details__designation']
            }
          >
            Pastor da Igreja Bapt. Esgueira
          </p>
        </div>
      </div>
    </Block>
  )
}

export { SingleTestimonial }
