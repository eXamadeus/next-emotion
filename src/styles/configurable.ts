import { css } from '@emotion/react'

export type Style = ReturnType<typeof css>

export const configurableCss = (style: Style) => (override?: Style) =>
  css`
    ${style};
    ${override};
  `

// export const configurableComponent = ()
