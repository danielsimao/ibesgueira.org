import Icon from '@ant-design/icons'
import { Menu } from '../navbar/menu'
import styles from './footer.module.scss'
import { SocialLinks } from '../social-links'

const MessageSvg = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9395 0C16.2805 0 17.5705 0.53 18.5195 1.481C19.4695 2.43 20.0005 3.71 20.0005 5.05V12.95C20.0005 15.74 17.7305 18 14.9395 18H5.06049C2.26949 18 0.000488281 15.74 0.000488281 12.95V5.05C0.000488281 2.26 2.25949 0 5.06049 0H14.9395ZM16.5305 6.54L16.6105 6.46C16.8495 6.17 16.8495 5.75 16.5995 5.46C16.4605 5.311 16.2695 5.22 16.0705 5.2C15.8605 5.189 15.6605 5.26 15.5095 5.4L11.0005 9C10.4205 9.481 9.58949 9.481 9.00049 9L4.50049 5.4C4.18949 5.17 3.75949 5.2 3.50049 5.47C3.23049 5.74 3.20049 6.17 3.42949 6.47L3.56049 6.6L8.11049 10.15C8.67049 10.59 9.34949 10.83 10.0605 10.83C10.7695 10.83 11.4605 10.59 12.0195 10.15L16.5305 6.54Z"
      fill="currentColor"
    />
  </svg>
)

const LocationSvg = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.03 1.99535e-05C11.29 0.01002 13.45 0.91002 15.03 2.49002C16.62 4.08002 17.51 6.23002 17.5 8.46002V8.51002C17.44 11.54 15.74 14.33 13.62 16.51C12.42 17.74 11.09 18.83 9.64 19.75C9.25 20.08 8.68 20.08 8.29 19.75C6.14 18.35 4.24 16.59 2.7 14.54C1.35 12.76 0.58 10.62 0.5 8.39002C0.52 3.74002 4.34 -0.00998005 9.03 1.99535e-05ZM9.03 11.26C9.74 11.26 10.42 10.99 10.92 10.5C11.44 9.99002 11.731 9.31102 11.731 8.60002C11.731 7.12002 10.52 5.93002 9.03 5.93002C7.54 5.93002 6.34 7.12002 6.34 8.60002C6.34 10.061 7.52 11.24 9 11.26H9.03Z"
      fill="currentColor"
    />
  </svg>
)

const MobileSvg = () => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.00845931 8.69455C0.00845931 8.07591 0.015909 7.45726 0.0233933 6.83575L0.0233934 6.83574C0.0271878 6.52065 0.030991 6.20482 0.0338368 5.88788C0.0338368 2.48258 2.16556 -0.000244141 5.10936 -0.000244141H8.89063C11.8344 -0.000244141 13.9662 2.48258 13.9662 5.88788C13.9915 7.25196 14 8.61605 14 9.98994C14 11.3638 13.9915 12.7475 13.9662 14.1116C13.9662 17.5169 11.8344 19.9998 8.89063 19.9998H5.10936C2.16556 19.9998 0.0338368 17.5169 0.0338368 14.1018C0.0169184 12.8162 0 11.5012 0 10.1666L0.00845931 8.69455ZM8.28 17.64V17.8C8.28 18.4736 7.7168 19 7 19C6.30027 19 5.72 18.4736 5.72 17.8V17.64C5.72 16.984 6.30027 16.44 7 16.44C7.7168 16.44 8.28 16.984 8.28 17.64ZM2.01671 6.4434C2.01136 6.84738 2.00604 7.2495 2.00604 7.65162L2 8.60844C2 9.47596 2.01208 10.3307 2.02417 11.1663C2.02417 13.3862 3.54683 15 5.64955 15H8.35045C10.4532 15 11.9758 13.3862 11.9758 11.1727C11.994 10.2861 12 9.38665 12 8.49362C12 7.60059 11.994 6.71393 11.9758 5.82728C11.9758 3.61384 10.4532 2 8.35045 2H5.64955C3.54683 2 2.02417 3.61384 2.02417 5.82728C2.02214 6.0333 2.01942 6.23859 2.01671 6.4434Z"
      fill="currentColor"
    />
  </svg>
)

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__inner__section}>
          <h3 className={styles.footer__inner__section__headline}>
            Igreja Batista de Esgueira
          </h3>
          <p>
            Uma igreja unida no Salvador, ligada como família e unânime em
            serviço
          </p>
          <SocialLinks
            className={styles['footer__inner__section__social-links']}
          />
        </div>
        <div className={styles.footer__inner__section}>
          <h3 className={styles.footer__inner__section__headline}>
            Quick Links
          </h3>
          <Menu
            className={styles.footer__inner__section__items}
            mode="vertical"
          />
        </div>
        <div className={styles.footer__inner__section}>
          <h3 className={styles.footer__inner__section__headline}>Reach us</h3>
          <ul className={styles.footer__inner__section__items}>
            <li>
              <Icon
                className={styles.footer__inner__section__icon}
                component={MessageSvg}
              />
              <span>hello@ibesgueira.org</span>
            </li>
            <li>
              <Icon
                className={styles.footer__inner__section__icon}
                component={MobileSvg}
              />
              <span>+351 912 123 123</span>
            </li>
            <li>
              <Icon
                className={styles.footer__inner__section__icon}
                component={LocationSvg}
              />
              <span>R. Bento Moura 23, 3800-144 Aveiro</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
