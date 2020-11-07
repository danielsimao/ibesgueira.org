import { Block, Highlight } from '../..'
import styles from './feature.module.scss'

function Feature(): JSX.Element {
  return (
    <Block centered>
      <div className={styles.feature}>
        <div className={styles.feature__headline}>
          <h2 className={styles.feature__headline__title}>
            O Plano da Salvação
          </h2>
          <p className={styles.feature__headline__description}>
            Há{' '}
            <Highlight>
              <em>cinco pontos</em>
            </Highlight>{' '}
            muito importantes que precisas de saber para teres o céu como teu
            destino garantido.
          </p>
        </div>
        <ul className={styles.feature__list}>
          <li className={styles.feature__list__details}>
            <span className={styles.feature__list__details__step}>1</span>
            <div className={styles.feature__list__details__headline}>
              🖤 Você é um pecador
            </div>
            <div className={styles.feature__list__details__description}>
              <p>
                “Porque todos pecaram e destituídos da glória de Deus”
                <em>Romanos 3:23</em>
              </p>
              <p>
                “Como está escrito: Não há um justo, nem um sequer”
                <em>Romanos 3:10</em>
              </p>
            </div>
          </li>
          <li className={styles.feature__list__details}>
            <span className={styles.feature__list__details__step}>2</span>

            <div className={styles.feature__list__details__headline}>
              ⚰️ O salário do pecado é a morte
            </div>
            <div className={styles.feature__list__details__description}>
              <p>
                “Porque o salário do pecado é a morte, mas o dom gratuito de
                Deus é a vida eterna, por Cristo Jesus nosso Senhor”
                <em>Romanos 6:23</em>
              </p>
            </div>
          </li>
          <li className={styles.feature__list__details}>
            <span className={styles.feature__list__details__step}>3</span>
            <div className={styles.feature__list__details__headline}>
              ✞ Jesus morreu pelos seus pecados
            </div>
            <div className={styles.feature__list__details__description}>
              <p>
                “Mas Deus prova o seu amor para conosco, em que Cristo morreu
                por nós, sendo nós ainda pecadores”
                <em>Romanos 5:8</em>
              </p>
            </div>
          </li>
          <li className={styles.feature__list__details}>
            <span className={styles.feature__list__details__step}>4</span>
            <div className={styles.feature__list__details__headline}>
              🙏 Arrependa-se dos seus pecados
            </div>
            <div className={styles.feature__list__details__description}>
              <p>
                “Não, vos digo; antes, se não vos arrependerdes, todos de igual
                modo perecereis”
                <em>Lucas 13:3</em>
              </p>
              <p>
                “Testificando, tanto a judeus como a gregos, o arrependimento
                para com Deus, e a fé em nosso Senhor Jesus Cristo”
                <em>Atos 20:21</em>
              </p>
            </div>
          </li>
          <li className={styles.feature__list__details}>
            <span className={styles.feature__list__details__step}>5</span>
            <div className={styles.feature__list__details__headline}>
              ❤️ Receba o dom da vida eterna
            </div>
            <div className={styles.feature__list__details__description}>
              <p>
                “Mas, a todos quantos o receberam, deu-lhes o poder de serem
                filhos de Deus, aos que creem no seu nome; Os quais não nasceram
                do sangue, nem da vontade da carne, nem da vontade do homem, mas
                de Deus”
                <em>João 1:12-13</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Block>
  )
}

export { Feature }
