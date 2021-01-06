import * as React from 'react'

import { Style } from '../../styles/configurable'
import { exampleCss } from './Example.styles'

export type ExampleProps = {
  /**
   * Example to display
   */
  value?: string
  css?: Style
}

export const Example: React.FunctionComponent<ExampleProps> = ({ value = 'Example Component', css }) => (
  <div css={exampleCss(css)} aria-label={value}>
    {value}
  </div>
)

Example.displayName = 'Example'
