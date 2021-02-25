import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import { Title } from './Title.component'

describe('Title Component', () => {
  it('renders', async () => {
    render(<Title content={'Example Component'} />)
    expect(await screen.findByText('Example Component')).toBeInTheDocument()
  })
})
