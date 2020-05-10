import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next.js Application</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
