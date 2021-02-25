import { css } from '@emotion/core'
import React from 'react'

import { Title } from '../components/Title/Title.component'

const flexFill = css`
  flex: 1 0 100%;
`

const IndexPage: React.FC = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
    `}>
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        width: 23rem;
      `}>
      <Title styles={[flexFill]} content={'Next.js Template'} />
      <h4 css={flexFill}>
        Designed by{' '}
        <a href='https://github.com/examadeus' target='_blank' rel='noreferrer'>
          @eXamadeus
        </a>
      </h4>
    </div>
  </div>
)

export default IndexPage
