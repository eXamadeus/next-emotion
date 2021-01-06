import { css } from '@emotion/core'

export type Style = ReturnType<typeof css>
export type ConfigurableStyle = (style: Style) => (override?: Style) => Style

export const configurableCss: ConfigurableStyle = (style) => (override) =>
  css`
    ${style};
    ${override};
  `
