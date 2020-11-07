import '../styles/globals.css'
import Head from 'next/head'

function MyApp({
  Component,
  pageProps,
}: {
  Component: () => JSX.Element
  pageProps
}): JSX.Element {
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
