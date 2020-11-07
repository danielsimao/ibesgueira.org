import styles from './sub-footer.module.scss'

function SubFooter() {
  return (
    <footer className={styles['sub-footer']}>
      <div className={styles['sub-footer__inner']}>
        @ 2020 IB Esgueira. All rights reserved
      </div>
    </footer>
  )
}

export { SubFooter }
