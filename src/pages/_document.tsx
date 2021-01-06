import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

import { GlobalStyles } from '../styles/global'

class MyDocument extends Document {
  public render(): React.ReactElement {
    return (
      <Html lang={'en'}>
        <Head>
          <GlobalStyles />
          <meta name='Description' content={'Next.js template'} />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
