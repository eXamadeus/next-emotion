import { css } from '@emotion/core'
import React from 'react'

import { Title } from '../components/Title/Title.component'

export default (): React.ReactNode => (
  <div
    css={css`
       {
        display: flex;
        align-items: center;
      }
    `}>
    <Title content={'Next.js Template'} />
  </div>
)
