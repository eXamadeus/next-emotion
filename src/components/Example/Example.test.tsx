import { render } from '@testing-library/react'
import * as React from 'react'

import { Example } from './Example.component'

describe('Example Component', () => {
  it('renders', async () => {
    const { findByText } = render(<Example />)
    expect(await findByText('Example Component')).toBeDefined()
  })
})
