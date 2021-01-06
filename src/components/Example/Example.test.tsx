import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import { Example } from './Example.component'

describe('Example Component', () => {
  it('renders', async () => {
    render(<Example />)
    expect(await screen.findByText('Example Component')).toBeInTheDocument()
  })
})
