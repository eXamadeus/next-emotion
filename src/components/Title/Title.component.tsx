import * as React from 'react'

import { Style } from '../../styles/configurable'
import { exampleCss } from './Title.styles'

export type ExampleProps = {
  /**
   * Title content
   */
  content: string
  css?: Style
}

export const Title: React.FunctionComponent<ExampleProps> = ({ content, css }) => (
  <div css={exampleCss(css)} aria-label={content}>
    {content}
  </div>
)

Title.displayName = 'Title'
