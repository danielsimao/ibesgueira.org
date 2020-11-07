import Head from 'next/head'
import { Layout } from '../../components'

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>Igreja B. de Esgueira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>About</Layout>
    </>
  )
}
