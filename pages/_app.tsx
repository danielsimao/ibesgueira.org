import '../styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../utils/gtag'

function MyApp({
  Component,
  pageProps,
}: {
  Component: () => JSX.Element
  pageProps
}): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Manrope"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
