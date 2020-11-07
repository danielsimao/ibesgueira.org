import Head from 'next/head'
import {
  Content,
  Footer,
  Header,
  Layout,
  Navbar,
  SubFooter,
} from '../../components'
import { Hero, Time } from '../../components/location'

export default function Location(): JSX.Element {
  return (
    <>
      <Head>
        <title>Igreja B. de Esgueira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header variant="white">
          <Navbar variant="white" />
        </Header>
        <Content>
          <Hero />
          <Time />
        </Content>
        <Footer />
        <SubFooter />
      </Layout>
    </>
  )
}
