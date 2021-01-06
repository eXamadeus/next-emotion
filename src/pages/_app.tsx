import { AppComponent } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import * as React from 'react'

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
