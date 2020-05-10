import { css } from '@emotion/core'

export type Style = ReturnType<typeof css>

export const configurableCss = (style: Style) => (override?: Style) =>
  css`
    ${style};
    ${override};
  `

// export const configurableComponent = ()
