import Head from 'next/head'
import {
  Content,
  Footer,
  Header,
  Layout,
  Navbar,
  SubFooter,
} from '../../components'
import { Feature, Hero, MeetUs, SingleTestimonial } from '../../components/home'
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
          <MeetUs />
          <SingleTestimonial />
          <Feature />
        </Content>
        <Footer />
        <SubFooter />
      </Layout>
    </>
  )
}
