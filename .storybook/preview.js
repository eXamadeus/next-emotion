import { addDecorator } from '@storybook/react'
import React from 'react'
import { GlobalStyles } from '../src/styles/global'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
