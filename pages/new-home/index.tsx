import Head from 'next/head'
import {
  Content,
  Footer,
  Header,
  Layout,
  Navbar,
  SubFooter,
} from '../../components'
import { Hero, TopSection } from '../../components/home'
import styles from './home.module.scss'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Igreja B. de Esgueira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header variant="transparent">
          <Navbar />
        </Header>
        <Content className={styles['home-content']}>
          <Hero />
          <div className={styles.content}>
            <TopSection />
            {/* <MeetUs />
          <SingleTestimonial />
          <MultipleTestimonial />
          <Feature /> */}
          </div>
        </Content>
        <Footer />
        <SubFooter />
      </Layout>
    </>
  )
}
