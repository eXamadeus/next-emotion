import { css, Global } from '@emotion/core'
import React from 'react'

export const GlobalStyles: React.FunctionComponent = () => (
  <>
    <Global
      styles={css`
        /**
          * @license
          * MyFonts Webfont Build ID 3897521, 2020-04-30T23:34:06-0400
          *
          * The fonts listed in this notice are subject to the End User License
          * Agreement(s) entered into by the website owner. All other parties are
          * explicitly restricted from using the Licensed Webfonts(s).
          *
          * You may obtain a valid license at the URLs below.
          *
          * Webfont: Gilroy-Light by Radomir Tinkov
          * URL: https://www.myfonts.com/fonts/radomir-tinkov/gilroy/light/
          *
          * Webfont: Gilroy-ExtraBold by Radomir Tinkov
          * URL: https://www.myfonts.com/fonts/radomir-tinkov/gilroy/extra-bold/
          *
          *
          * Webfonts copyright: Copyright &amp;#x00A9; 2016 by Radomir Tinkov. All rights reserved.
          *
          * © 2020 MyFonts Inc
          */

        @font-face {
          font-family: 'Gilroy-Light';
          src: url('/fonts/Gilroy-Light/font.woff2') format('woff2'),
            url('/fonts/Gilroy-Light/font.woff') format('woff');
          font-display: swap;
        }
        @font-face {
          font-family: 'Gilroy-ExtraBold';
          src: url('/fonts/Gilroy-ExtraBold/font.woff2') format('woff2'),
            url('/fonts/Gilroy-ExtraBold/font.woff') format('woff');
          font-display: swap;
        }

        html * {
          font-family: Gilroy-Light, Arial, sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 0;
        }
      `}
    />
    <link rel='preload' href='/fonts/Gilroy-Light/font.woff2' as='font' type='font/woff2' crossOrigin={''} />
    <link rel='preload' href='/fonts/Gilroy-ExtraBold/font.woff2' as='font' type='font/woff2' crossOrigin={''} />
  </>
)
